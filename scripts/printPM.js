function printPM(path) {
	var inner = '';
	$.getJSON(path, function(data) {
		inner += '<table>';
		inner += '<tr><td><b>Project Prefix:</b></td> '	+ '<td>'    + data[0].prefix 		 + '</td>' + '</tr>';
		inner += '<tr><td><b>Id: </b></td>' + '<td>' 		 		+ data[0].id 		   	 + '</td>' + '</tr>';
		inner += '<tr><td><b>Priority: </b></td>'+ '<td>'	 		+ data[0].priority		 + '</td>' + '</tr>';
		inner += '<tr><td><b>Type: </b></td>'+ '<td>' 		 		+ data[0].type			 + '</td>' + '</tr>';	
		inner += '<tr><td><b>Summary: </b></td>' + '<td>' 		    + data[0].summary 		 + '</td>' + '</tr>';	
		inner += '<tr><td><b>Description: </b></td>' + '<td>'		+ data[0].description 	 + '</td>' + '</tr>';
		inner += '<tr><td><b>Assignee: </b></td>' + '<td>'   		+ data[0].assignee 		 + '</td>' + '</tr>';
		inner += '<tr><td><b>Project Manager: </b></td>' + '<td>'   + data[0].projectManager + '</td>' + '</tr>';
		inner += '<tr><td><b>Complete Date: </b></td>' + '<td>' 	+ data[0].completeDate	 + '</td>' + '</tr>';
		inner += '</table>';
		$("#PM").html(inner);	
	});
}