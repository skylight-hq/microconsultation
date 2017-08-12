
function render_project_card(project,width = "20rem") {
    var html = "";
    html += '<div class="card" style="width: '+width+';">';
//    html += '<img class="card-img-top" src="..." alt="Card image cap">';
    html += '<div class="card-body">';
    html +='<h4 class="card-title">'+project.title+'</h4>';
    html += '<p class="card-text">'+project.description+'</p>';
    html += '<p class="card-footer">'+project.expiration+'</p>';                
    html += '</div>';
    html += '</div>';
return html;
}

function render_provider_card(provider,width = "20rem") {
    var html = "";
    html += '<div class="card" style="width: '+width+';">';    
//    html += '<img class="card-img-top" src="..." alt="Card image cap">';
    html += '<div class="card-body">';
    html +='<h4 class="card-title">'+provider.name+'</h4>';
    html += '<p class="card-text">'+provider.motto+'</p>';
    html += '</div>';
    html += '</div>';
return html;
}

function render_proposal_card(proposal,width = "20rem") {
    var html = "";
    html += '<div class="card" style="width: '+width+';">';        
//    html += '<img class="card-img-top" src="..." alt="Card image cap">';
    html += '<div class="card-body">';
    html += '<p class="card-text">'+proposal.notes+'</p>';
    html += '<p class="card-text">Offer: $'+proposal.offer+'</p>';
    html +='<h6 class="card-subtitle mb-2">Project: '+proposal.project_name+'</h6>';        
    html +='<h6 class="card-subtitle mb-2">Provider: '+proposal.provider_name+'</h6>';
    html += '<a href="#" class="btn btn-primary">Accept Proposal</a>';
    html += '<p class="card-footer">'+proposal.expiration+'</p>';            
    html += '</div>';
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
