function getPM(){
 	var listItems= "<option value=''disabled selected>Select a project</option>";
    
	$.getJSON('mocks/projectsData.json', function(data) {
    	for (var i = 0; i < data.projects.length; i++) {
        	listItems += "<option value='" + data.projects[i].name + "'>" + data.projects[i].name + "</option>";
    	}
    	$("#PMname").html(listItems);
		localStorage.setItem('projects', JSON.stringify(data));
    }); 
}