<script>
	import { Accordion, AccordionItem } from 'svelte-collapsible';
</script>

<section>
	<h1 class="heading">Work Experience</h1>

	<Accordion>
        <div class="job-entry">
            <AccordionItem key="a">
                <h2 slot="header" class="job-title">
                    Lead Architectural Engineer & Full-stack Developer @ Unstable Diffusion
                </h2>
                <div slot="body" class="job-body">
                    <p class="tenure">January 2023 - October 2023</p>
                    <a href="https://unstability.ai" class="unstability-link">unstability.ai</a>
                    <ul class="job-responsibilities">
                        <li>
                            Fully designed, architected, and implemented web backend for an AI Art generation service,
                            serving 600k+ accounts, 125k requests / day, and generating ~$40k / month in revenue
                        </li>
                        <li>
                            Worked closely with a tight-knit team of developers in a high-intensity startup
                            environment
                        </li>
                        <li>
                            Fully integrated Stripe payment processing to offer subscription based purchases to users,
                            and re-integrated Chargebee based payment processing at a later date
                        </li>
                        <li>
                            Utilized state of the art technology to provide scalability, robust testing and
                            deployment, and high availability, such as AWS, Kubernetes, Docker, Nextjs, and SST
                        </li>
                        <li>
                            Worked with and evaluated adjacent services for auxiliary tasks, such as Mixpanel &
                            Sendgrid
                        </li>
                        <li>
                            Consulted with generative AI experts, including close work with a machine learning
                            researcher
                        </li>
                    </ul>
                </div>
            </AccordionItem>
        </div>
        <div class="job-entry">
            <AccordionItem key="b">
                <h2 slot='header' class="job-title">Software Developer @ Vanguard</h2>
                <div slot="body" class="job-body">
                    <p class="tenure">January 2022 - December 2022</p>
                    <ul class="job-responsibilities">
                        <li>
                            Responsible for development of survey data transformation apps written in Python and Scala
                            using Glue ETL in Amazon AWS
                        </li>
                        <li>Developed and managed parallel glue job executions</li>
                        <li>Monitored and updated SQL code with recommendations from Data Analytics professionals</li>
                        <li>Monitored and resolved production errors in glue jobs and glue crawlers</li>
                    </ul>
                </div>
            </AccordionItem>
        </div>
        <div class="job-entry">
            <AccordionItem key="c">
                <h2 slot='header' class="job-title">Innovation Labs Developer @ Vertex Inc.</h2>
                <div slot="body" class="job-body">
                    <p class="tenure">March 2019 - September 2019</p>
                    <ul class="job-responsibilities">
                        <li>
                            Worked with staff to invent and explore unique solutions as part of Drexel's co-operative
                            work study program
                        </li>
                        <li>
                            Participated in rapid prototyping and development of new ideas in a variety of languages
                        </li>
                    </ul>
                </div>
            </AccordionItem>
        </div>
	</Accordion>
</section>

<style>

    .unstability-link {
        font-size: min(2em, 4vw);
        margin: min(1em, 10vw);
        margin-top: 0;
    }

    .job-body {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .job-entry {
        border: 1px solid #aaa;
        padding: min(1em, 2vw);
        margin: min(0.5em, 1vw);
        background-color: white;
    }

    .tenure {
        font-size: min(1.5em, 4vw);
    }

	.job-title {
		font-size: min(2em, 5vw);
		font-style: italic;
        text-align: left;
	}

	section {
		flex: 1;
	}

    .job-responsibilities {
        padding-left: min(2em, 20vw);
    }

	.job-responsibilities li {
		font-size: min(1.35em, 4vw);
	}
</style>
