import type { SSTConfig } from "sst";
import { SvelteKitSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "maurdekye-website",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new SvelteKitSite(stack, "site", {
        customDomain: "maurdekye.com",
      });
      stack.addOutputs({
        Site: site.customDomainUrl || site.url,
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
