

var projects = [];
var PROJECT_KEY = 0;
var providers = [];
var PROVIDER_KEY = 0;
var proposals = [];
var PROPOSAL_KEY = 0;



// The archive contains a series of events;
// generally, these are associated with one or more data objects.
// The first events are:
// ProviderSubmission
// ProivderPublication
// ProjectCreation
// ProposalSubmission
// ProposalPublication
// ProposalAcceptance

var event = {
    type: "ProviderSubmission",
    object0: null,
    object1: null,
    timestamp:  null
}

var Archive = [];

var database = {
     projects: [],
     providers: [],
     proposals: []
 };

var status = {
    UNPUBLISHED : 0,
    PUBLISHED : 1,
    REMOVED : 2,
    ACCEPTED: 3
};

// In a sense, this represents the main API of this entire application
function submitProvider(p) {
    var key = PROVIDER_KEY++;
    p.status = status.UNPUBLISHED;
    p.key = key;
    database.providers[key] = p;
}

function publishProvider(p) {
    
}

function createProject(p) {
    var key = PROJECT_KEY++;
    p.status = status.PUBLISHED;    
    p.key = key;
    database.projects[key] = p;
}

function submitProposal(prop,proj,prov) {
    var key = PROJECT_KEY++;
    prop.status = status.UNPUBLISHED;        
    prop.key = key;
    prop.project = proj;
    prop.provider = prov;
    database.proposals[key] = prop;
}

function publishProposal(p) {
    p.status = status.PUBLISHED;
}

function acceptProposal(p) {
    p.status = status.ACCEPTED;
}

function removeProposal(p) {
    p.status = status.REMOVED;    
}

function removeProvider(p) {
    p.status = status.REMOVED;        
}

function removeProject(p) {
    p.status = status.REMOVED;        
}


// This is a standard-hard-wired initiation
function standard_init() {
    
    var project0 = {
	client_id: 0,
		    title: "Antibiotic resistant bacteria information website",
		    description: "Quickly build a website to link to the latest information on antibiotic resistant bacteria information website",
		    reward_guidance: "only $2,000 for this one",
		    expiration: "08/30/17"
		   };

    createProject(project0);

    var provider0 = {
	client_id: 0,
		     name: "Skylight Digital",
		     motto: "We make government work in a digital world"
		    };

    submitProvider(provider0);

    var proposal0 = {client_id: 0,
		     name: " ",
		     provider_id: 0,
		     // TODO: This should be done by ids, rather than names
		     provider_name: "Skylight Digital",
		     project_name: "Antibiotic resistant bacteria information website",
		     notes: "We can style it and provide all resources from reputable sites, you will have to confirm you approve each reference",
		     offer: 2000,
		     expiration: "08/30/17"
		   };

    submitProposal(proposal0,project0,provider0);

    var project1 = {client_id: 1,
		title: "Fix SQL Injection Vulnerability",
		description: "Fix the many documented SQL Injection vulnerabilities in Legacy Codebase #1",
		reward_guidance: "$3,500",
		expiration: "08/30/17"
		   };

    createProject(project1);


    var provider1 = {client_id: 1,
		       name: "Digitellitechcom",
		       motto: "We use lots of buzzwords."
	      };


    submitProvider(provider1);    

    var proposal1 = {
	client_id: 1,
		 name: " ",
		 provider_id: 1,
		 // TODO: This should be done by ids, rather than names
		 provider_name: "Digitellitechcom",
		 project_name: "Fix SQL Injection Vulnerability",
		 notes: "We will fix and make sure the web scan is clear.",
		 offer: 3500,
		 expiration: "08/30/17"
		    };

    submitProposal(proposal1,project1,provider1);    
    
}


standard_init();
