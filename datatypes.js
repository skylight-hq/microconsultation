var projects = [];
var PROJECT_KEY = 0;
var providers = [];
var PROVIDER_KEY = 0;
var proposals = [];
var PROPOSAL_KEY = 0;

projects[0] = { client_id: 0,
		title: "Antibiotic resistant bacteria information website",
		description: "Quickly build a website to link to the latest information on antibiotic resistant bacteria information website",
		reward_guidance: "only $2,000 for this one",
		expiration: "08/30/17"
	      };

providers[0] = { client_id: 0,
		name: "Skylight Digital",
		motto: "We make government work in a digital world"
	      };

proposals[0] = { client_id: 0,
		 name: " ",
		 provider_id: 0,
		 // TODO: This should be done by ids, rather than names
		 provider_name: "Skylight Digital",
		 project_name: "Antibiotic resistant bacteria information website",
		 notes: "We can style it and provide all resources from reputable sites, you will have to confirm you approve each reference",
		 offer: 2000,
		 expiration: "08/30/17"
	      };



projects[1] = { client_id: 1,
		title: "Fix SQL Injection Vulnerability",
		description: "Fix the many documented SQL Injection vulnerabilities in Legacy Codebase #1",
		reward_guidance: "$3,500",
		expiration: "08/30/17"
	      };


providers[1] = { client_id: 1,
		name: "Digitellitechcom",
		motto: "We use lots of buzzwords."
	      };


proposals[1] = { client_id: 1,
		 name: " ",
		 provider_id: 1,
		 // TODO: This should be done by ids, rather than names
		 provider_name: "Digitellitechcom",
		 project_name: "Fix SQL Injection Vulnerability",
		 notes: "We will fix and make sure the web scan is clear.",
		 offer: 3500,
		 expiration: "08/30/17"
	      };
