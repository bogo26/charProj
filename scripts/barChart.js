function printBarChart(devArr, divId) {
	var results = [], dataPts = [];
	var i = 0, j = 0, k = 0, x = 0;
	
	$.get(devArr.adr, function(data) {})
		.done(function(data) {
			results = Papa.parse(data);
			for (i = 1; i < results.data.length; i++) {
				results.data[i][0] = new Date(Number(results.data[i][0].split('.')[2]), Number(results.data[i][0].split('.')[1]) - 1, Number(results.data[i][0].split('.')[0]));
				results.data[i][1] = Number(results.data[i][1]);
				results.data[i][2] = Number(results.data[i][2]);
			}
			google.load("visualization", "1", {packages:["corechart"], callback: drawChart});
			function drawChart() {
				var tableData = google.visualization.arrayToDataTable(results.data);
				var options = {
					title: devArr.name,
					vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
				};
				var chart = new google.visualization.BarChart(document.getElementById(divId));
				
				chart.draw(tableData, options);
			}	
		});
}