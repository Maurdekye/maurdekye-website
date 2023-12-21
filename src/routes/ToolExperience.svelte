<section>
	<h1 class="heading">Languages</h1>
    <div class="language-list-container list-container">
        <div class="list-column">
            <p class="section-header">Fluent:</p>
            <ul class="languages-sublist item-list">
                <li>Python</li>
                <li>Javascript</li>
                <li>C#</li>
                <li>Rust</li>
                <li>Java</li>
                <li>GLSL</li>
            </ul>
        </div>
        <div class="list-column">
            <p class="section-header">Some Experience:</p>
            <ul class="languages-sublist item-list">
                <li>C++</li>
                <li>C</li>
                <li>Haskell</li>
                <li>Julia</li>
                <li>Lua</li>
                <li>SQL</li>
                <li>F#</li>
            </ul>
        </div>
    </div>
    <h1 class="heading">Tools</h1>
    <div class="tools-list-container list-container">
        <div class="list-column">
            <p class="section-header">AWS:</p>
            <ul class="tools-list item-list">
                <li>Lambda</li>
                <li>DynamoDB</li>
                <li>S3</li>
                <li>SQS</li>
                <li>SNS</li>
                <li>Route53</li>
                <li>API Gateway</li>
                <li>ECS</li>
                <li>CloudWatch Metrics</li>
                <li>CloudWatch Logs</li>
            </ul>
        </div>
        <div class="list-column">
            <p class="section-header">Other Technologies:</p>
            <ul class="tools-list item-list">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>SST</li>
                <li>Sendgrid</li>
                <li>BackBlaze</li>
                <li>Stripe</li>
                <li>Chargebee</li>
                <li>NextJs</li>
                <li>React</li>
                <li>Authjs</li>
                <li>Stable Diffusion</li>
                <li>Huggingface LLMs</li>
                <li>ChatGPT API</li>
                <li>GPT-3.5 & 4</li>
                <li>PyTorch</li>
            </ul>
        </div>
    </div>
</section>

<style>

	.section-header {
		font-size: min(2em, 8vw);
		margin: 0;
	}

    .list-container {
        display: flex;
        flex-flow: row;
        padding: min(2em, 10vw);
        padding-bottom: 0;
    }

    .list-column {
        flex: 1;
    }

    .item-list {
        padding-left: min(2em, 2vw);
    }

	.item-list li {
		font-size: min(1.5em, 6vw);
	}

	section {
		flex: 1;
	}

	@media only screen and (max-width: 600px) {
        .list-container {
            flex-flow: column;
        }
    }
</style>
