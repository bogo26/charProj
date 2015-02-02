function printAll() {
	var i  = 0, projectName;
	var loc = JSON.parse(localStorage.getItem('projects'));
	
	projectName = document.getElementById("PMname").value;
	for (i = 0; i < loc.projects.length; i += 1) {
		if (projectName === loc.projects[i].name) {
			printPM(loc.projects[i].PM);
			printChart(loc.projects[i].DEV, "DEV");
			printChart(loc.projects[i].QA, "QA");
		}
	}
};