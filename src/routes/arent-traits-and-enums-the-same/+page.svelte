<script>
	import Highlight from 'svelte-highlight';
	import rust from 'highlight.js/lib/languages/rust';
	import github from 'svelte-highlight/styles/github';

	const sealed_rust = {
		name: 'rust',
		register: (/** @type {import("highlight.js").HLJSApi} */ x) => {
			let highlighting = rust(x);
			if (
				typeof highlighting?.keywords === 'object' &&
				!Array.isArray(highlighting?.keywords) &&
				Array.isArray(highlighting?.keywords.keyword)
			) {
				// monkey-patch `sealed` and `with` into the list of
				// valid keywords for syntax highlighting
				highlighting?.keywords?.keyword.push('sealed');
				highlighting?.keywords?.keyword.push('with');
			}
			return highlighting;
		}
	};
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section>
	<content>
		<h1>Aren't Traits and Enums the Same?</h1>

		<note>
			This article is about the <a href="https://www.rust-lang.org/">Rust programming language</a>,
			traits, and enums.
		</note>

		<p>Consider the following code:</p>
		<Highlight
			language={sealed_rust}
			code={`mod trait_polymorphism {
    pub trait Abstract {
        fn get_num(&self) -> i32;
    }
    
    pub struct ConcreteA;
    
    impl Abstract for ConcreteA {
        fn get_num(&self) -> i32 {
            0
        }
    }
    
    pub struct ConcreteB(pub i32);
    
    impl Abstract for ConcreteB {
        fn get_num(&self) -> i32 {
            self.0
        }
    }
    
    pub struct ConcreteC {
        pub items: Vec<i32>
    }
    
    impl Abstract for ConcreteC {
        fn get_num(&self) -> i32 {
            self.items.iter().sum()
        }
    }

    pub fn generic_fn<T>(x: T) -> i32 
    where 
        T: Abstract 
    {
        let n = x.get_num();
        (n + 5) * 13
    }
}

mod enum_polymorphism {
    pub use self::Abstract::*;

    pub enum Abstract {
        ConcreteA,
        ConcreteB(i32),
        ConcreteC {
            items: Vec<i32>
        }
    }
    
    impl Abstract {
        pub fn get_num(&self) -> i32 {
            match self {
                ConcreteA => 0,
                ConcreteB(x) => *x,
                ConcreteC { items } => items.iter().sum()
            }
        }
    }
    
    pub fn generic_fn(x: Abstract) -> i32 {
        let n = x.get_num();
        (n + 5) * 13
    }
}

use trait_polymorphism as tp;
use enum_polymorphism as ep;

fn main() {
    assert_eq!(tp::generic_fn(tp::ConcreteA), 65);
    assert_eq!(tp::generic_fn(tp::ConcreteB(30)), 455);
    assert_eq!(tp::generic_fn(tp::ConcreteC { items: vec![9, 2, 15, 36] }), 871);
    
    assert_eq!(ep::generic_fn(ep::ConcreteA), 65);
    assert_eq!(ep::generic_fn(ep::ConcreteB(30)), 455);
    assert_eq!(ep::generic_fn(ep::ConcreteC { items: vec![9, 2, 15, 36] }), 871);
}`}
		/>

		<p>This code demonstrates the practical similarity between enums and traits.</p>
		<p>
			Despite being very syntactically different, both traits and enums allow the implementation of
			the same underlying abstraction: polymorphism.
		</p>
		<p>
			As such, their feature set largely overlaps, and they end up being differentiated by only a
			few things:
		</p>
		<p>traits:</p>
		<ul>
			<li><p>Are implementable by external users, and are thus extendable</p></li>
			<li><p>Do not have a known compile-time size, and are not always object-safe</p></li>
			<li>
				<p>
					Provide no information about their underlying concrete type, and thus cannot be pattern
					matched on, such as with a <code>`match`</code> block
				</p>
			</li>
		</ul>
		<p>enums:</p>
		<ul>
			<li><p>Are not extendable, and have a fixed set of variants</p></li>
			<li><p>Always have a known size at compile-time</p></li>
			<li>
				<p>Have a definitively known underlying concrete type, and can be pattern matched on</p>
			</li>
		</ul>
		<p>Otherwise, however, they're actually functionally pretty similar.</p>
		<p>Are traits and enums really all that different?</p>
		<hr />
		<p>
			Lets do a little thought experiment: what if we were to try and consolidate the features of
			both structures into a single one? How could we do so?
		</p>
		<p>
			We could try to invent a new language structure to replace both of them, but I think it makes
			more sense to start with one, and try to incorporate the features from the other.
		</p>
		<p>We could take two approaches:</p>
		<ul>
			<li>
				<p>Attempt to incorporate the features of traits into enums, which would consist of:</p>
				<ul>
					<li><p>Allowing enums to be extended</p></li>
				</ul>
			</li>
			<li>
				<p>Attempt to incorporate the features of enums into traits, which would consist of:</p>
				<ul>
					<li>
						<p>Allowing trait objects to always have a known size, and always be object-safe</p>
					</li>
					<li><p>Allowing trait implementors to be pattern matched on</p></li>
				</ul>
			</li>
		</ul>
		<p>
			Because doing the first is, in my arbitrary opinion, more complicated, I'm going to explore
			the latter: attempting to incorporate the features of enums into traits.
		</p>
		<hr />
		<p>
			The two feature sets of enums and traits that we want to combine into a single structure are
			mutually exclusive to one another, so we will want to introduce a keyword that allows us to
			select between "enum-like" behavior and "trait-like" behavior in our constructed abstraction.
		</p>
		<p>For this, I propose the keyword <code>`sealed`</code>.</p>
		<p>A sealed trait is defined like this:</p>

		<Highlight
			id="sealed_intro"
			language={sealed_rust}
			code={`sealed trait Abstract {
  fn generic_fn(&self) -> i32;
}

struct ConcreteA;

impl Abstract for ConcreteA {
  fn generic_fn(&self) -> i32 {
    0
  }
}

struct ConcreteB(i32);

impl Abstract for ConcreteB {
  fn generic_fn(&self) -> i32 {
    self.0
  }
}`}
		/>

		<p>
			Simple enough, right? Other than the keyword, you define it the same way as you would any
			other trait.
		</p>
		<p>
			Sealed traits, however, would have one additional rule to follow: they can only be implemented
			by types defined in the current crate.
		</p>
		<p>In exchange for this restriction, we can make additional assumptions about sealed traits:</p>
		<ul>
			<li><p>They are always object safe (because we know what all their implementers are)</p></li>
			<li>
				<p>
					They can be pattern matched on, since we have access to a definitive, exhaustive list of
					every concrete type that implements them
				</p>
			</li>
		</ul>
		<p>
			All of a sudden, our sealed trait seems to have all the features of an enum that we'd want!
		</p>
		<p>
			In fact, if we're allowed to pattern-match on sealed trait values, we could rewrite the code
			up above like so:
		</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait Abstract;

struct ConcreteA;
impl Abstract for ConcreteA {}

struct ConcreteB;
impl Abstract for ConcreteB {}

impl<T> T where T: Abstract {
  fn generic_fn(&self) -> i32 {
    match self {
      ConcreteA => 0,
      ConcreteB(x) => *x,
    }
  }
}`}
		/>

		<p>This is looking more like an enum already!</p>

		<p>
			Note: <code>`impl&ltT&gt for T`</code>, although disallowed normally, is fine here, because
			<code>`T`</code> is constrained by a sealed trait. This means that all values of
			<code>`T`</code>
			can only be concrete types defined in this crate, so all types this impl covers are locally defined.
			Thus, it doesn't break rust's rules regarding implicit impl blocks for foreign types.
		</p>

		<hr />

		<p>Lets take it a step further.</p>

		<p>
			Maybe not always, but sometimes or perhaps often, we'll define all implementers of our sealed
			trait in one place. If so, it's probably cumbersome to have to write individual
			<code>`impl`</code> blocks for every single new struct we want to include in our trait definition.
			This is especially true if the trait itself is empty, and we're just defining implementations to
			denote a relationship alone, without creating any concrete functionality, like in the code example
			above.
		</p>

		<p>Here, i'd like to propose some new syntax:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait Abstract for {
  ConcreteA,
  ConcreteB(i32),
}`}
		/>

		<p>This would desugar to the same code from above:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait Abstract {}
struct ConcreteA;
impl Abstract for ConcreteA {}
struct ConcreteB(i32);
impl Abstract for ConcreteB {}`}
		/>

		<p>But without all the extra boilerplate.</p>

		<p>Putting it all together, we end up with this:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait Abstract for {
  ConcreteA,
  ConcreteB(i32),
}

impl<T> T where T: Abstract {
  fn generic_fn(&self) -> i32 {
    match self {
      ConcreteA => 0,
      ConcreteB(x) => *x,
    }
  }
}`}
		/>

		<p>
			This is nearly identical to the equivalent enum-based code you would write in standard rust:
		</p>

		<Highlight
			language={sealed_rust}
			code={`enum Abstract {
  ConcreteA,
  ConcreteB(i32),
}

impl Abstract {
  fn generic_fn(&self) -> i32 {
    match self {
      ConcreteA => 0,
      ConcreteB(x) => *x,
    }
  }
}`}
		/>

		<p>So it seems we've officially come full-circle. I would consider this a moderate success.</p>

		<hr />

		<p>But, we're not done yet!</p>

		<p>
			What if you wanted to define trait functions for the sealed trait as well like up <a
				href="#sealed_intro">here</a
			>, in addition to pattern-matching function implementations?
		</p>

		<p>Well, we can extend the syntax to support that too. Have a look at this:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait Abstract {
  fn other_fn(&self) -> i32;
} for {
  ConcreteA with {
    fn other_fn(&self) -> i32 {
      -5
    }
  },
  ConcreteB(i32) with {
    fn other_fn(&self) -> i32 {
      self.0 - 5
    }
  },
}

impl<T> T where T: Abstract {
  fn generic_fn(&self) -> i32 {
    match self {
      ConcreteA => 0,
      ConcreteB(x) => *x,
    }
  }
}`}
		/>

		<p>This code desugars how you would expect:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait Abstract {
  fn other_fn(&self) -> i32;
}

struct ConcreteA;
impl Abstract for ConcreteA {
  fn other_fn(&self) -> i32 {
    -5
  }
}

struct ConcreteB;
impl Abstract for ConcreteB {
  fn other_fn(&self) -> i32 {
    self.0 - 5
  }
}

impl<T> T where T: Abstract {
  fn generic_fn(&self) -> i32 {
    match self {
      ConcreteA => 0,
      ConcreteB(x) => *x,
    }
  }
}`}
		/>

		<p>
			This gives us the freedom to use either enum definition syntax, trait definition syntax, or a
			mix of the two in order to define our implementations.
		</p>

		<hr />

		<p>Here's another interesting potential use. Observe the following code:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait AbstractA;
sealed trait AbstractB;

struct ConcreteA;
struct ConcreteB;
struct ConcreteC;
struct ConcreteD;

impl AbstractA for ConcreteA {}
impl AbstractA for ConcreteB {}
impl AbstractA for ConcreteC {}
impl AbstractB for ConcreteB {}
impl AbstractB for ConcreteC {}
impl AbstractB for ConcreteD {}

impl<T> T where T: AbstractA + AbstractB {
  fn generic_fn(&self) -> i32 {
    match self {
      ConcreteB => 5,
      ConcreteC => 10,
      // match is exhaustive because only ConcreteB and 
      // ConcreteC both impl AbstractA and AbstractB
    }
  }
}`}
		/>

		<p>
			Because we again know every concrete type that both traits can implement, when binding to
			multiple traits at once, we can simply take the union of their valid concrete types as the
			list of possible match arms.
		</p>

		<p>Under even more specific circumstances, we can take this one step further:</p>

		<Highlight
			language={sealed_rust}
			code={`sealed trait AbstractA;
sealed trait AbstractB;

struct ConcreteA;
struct ConcreteB(i32);
struct ConcreteC;

impl AbstractA for ConcreteA {}
impl AbstractA for ConcreteB {}
impl AbstractB for ConcreteB {}
impl AbstractB for ConcreteC {}

impl<T> T where T: AbstractA + AbstractB {
  fn generic_fn(&self) -> i32 {
    // allowed because ConcreteB is the only possible concrete 
    // implementation that satisfies the given trait bounds
    let ConcreteB(x) = self; 
    *x
  }
}`}
		/>

		<p>
			In this instance, we're restricting the trait bounds so far that the union of the two only
			contains one concrete type. As a result, we can match on that type in a <code>`let`</code>
			statement without an accompanying <code>`else`</code> block.
		</p>

		<hr />

		<p>
			In theory, one could imagine replacing enums entirely with sealed traits in this way. I'm not
			sure if that's actually a good idea, or even practical, but it's a fun thought experiment.
		</p>

		<div class="space" />
	</content>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	content {
		width: min(50em, 80vw);
		/* display: flex;
        flex-flow: column; */
	}

	hr {
		margin: 5em 0;
	}

	.space {
		height: 10em;
	}

	note {
		font-style: italic;
		color: gray;
	}

	p {
		font-size: 1.2em;
	}

	li p {
		margin: 0;
	}
</style>
