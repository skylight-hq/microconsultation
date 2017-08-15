
function render_project_card(project,options) {
    var width = options ? (options.width ? options.width : "20rem") : "20rem";
    var html = "";
    html += '<div class="card" style="width: '+width+';">';
    html += '<div class="card-body">';
    html +='<h4 class="card-title">'+project.title+'</h4>';
    html += '<p class="card-text">'+project.description+'</p>';
    html += '<p class="card-footer">';
    html += project.expiration + '</p>';    
    html += '</div>';
    html += '</div>';
return html;
}

function render_provider_card(provider,options) {
    var width = options ? (options.width ? options.width : "20rem") : "20rem";    
    var html = "";
    html += '<div class="card" style="width: '+width+';">';    
    html += '<div class="card-body">';
    html +='<h4 class="card-title">'+provider.name+'</h4>';
    html += '<p class="card-text">'+provider.motto+'</p>';
    html += '<p class="card-footer">';
    html += '</div>';
    html += '</div>';
return html;
}

function create_new_provider() {
    alert("xxx");
    var name =  $("#newprovidername").val();
    var motto =  $("#newprovidermotto").val();
    var provider = {client_id: 2,
		    name: name,
		    motto: motto
		   };

    submitProvider(provider);    
    
}

function render_provider_input_card(options) {
    var width = options ? (options.width ? options.width : "20rem") : "20rem";    
    var html = "";
    html += '<div class="card" style="width: '+width+';">';    
    html += '<div class="card-body">';
    
    html +='<h4 class="card-title"> Provider:';
    html += '<input type="text" id="newprovidername"></input>';
    html += '</h4>';
    html += '<p class="card-text">Motto: </p>';
    html += '<input type="text" id="newprovidermotto"></input>';
    html += '<button type="button" id="createnewprovider" class="btn btn-primary">Create New Provider</button>';
    html += '</div>';
    html += '</div>';
return html;
}

function render_proposal_card(proposal,options) {
    var width = options ? (options.width ? options.width : "20rem") : "20rem";    
    var html = "";
    html += '<div class="card" style="width: '+width+';">';        
    html += '<div class="card-body">';
    html += '<p class="card-text">'+proposal.notes+'</p>';
    html += '<p class="card-text">Offer: $'+proposal.offer+'</p>';
    html +='<h6 class="card-subtitle mb-2">Project: '+proposal.project_name+'</h6>';        
    html +='<h6 class="card-subtitle mb-2">Provider: '+proposal.provider_name+'</h6>';
    if (options && options.SHOW_ACCEPT)     
	html += '<a href="#" class="btn btn-primary">Accept Proposal</a>';
    html += '<p class="card-footer">';
    html += proposal.expiration + '</p>';    
    html += '</div>';
    html += '</div>';
return html;
}


function render_project(project,options) {
    var html = "";
    html += '<div>';
    html +='<h4>'+project.title+'</h4>';
    html += '<p>'+project.description+'</p>';
    html += '<p>';
    html += project.expiration + '</p>';    
    html += '</div>';
return html;
}

function render_provider(provider,options) {
    var html = "";
    html += '<div>';    
    html +='<h4>'+provider.name+'</h4>';
    html += '<p>'+provider.motto+'</p>';
    html += '</div>';
return html;
}

function render_proposal(proposal,options) {
    var html = "";
    html += '<div>';
    html += '<div class="d-flex justify-content-center">';
    if (options && options.SHOW_ACCEPT) 
	html += '<a href="#" class="btn btn-primary">Accept This Proposal</a>';
    html += '</div>';            
    html += '<p>'+proposal.notes+'</p>';
    html += '<p>Offer: $'+proposal.offer+'</p>';

    html += '<p>Expires: ';
    html += proposal.expiration + '</p>';
    html += '</div>';
return html;
}


// A basic approach here is to focus on just the item in question
// and render it with enahnced detail. If there are any linked concepts,
// these can be rendered as well, but in narrower columns.
function render_focus_on_project(p,dataview) {
    dataview.projects.forEach(x => {
	$( "#projects" ).append(render_project_card(x,"40rem"));
    });

    dataview.proposals.forEach(x => {
	$( "#proposals" ).append(render_proposal_card(x,"10rem"));	
    });

    dataview.providers.forEach(x => {
	$( "#providers" ).append(render_provider_card(x,"10rem"));	
    });
}

function render_focus_on_proposal(p,database) {
}

function render_focus_on_provider(p,database) {
}
function add_provider_creation() {
    $( "#providers" ).append(render_provider_input_card());
    $("#createnewprovider").click(create_new_provider);    
}
