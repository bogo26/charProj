function printChart(devArr, divId) {
    var results = [],
        dataPts = [];
    var i = 0,
        j = 0,
        k = 0,
        x = 0;
    var valX, valY;
    var iDiv = document.getElementById(divId);
    
	while (iDiv.firstChild) {
        iDiv.removeChild(iDiv.firstChild);
    }
    for (i = 0; i < devArr.length; i++) {
        switch (devArr[i].tip) {
            case "line":
                var chartDiv = document.createElement('div');
                
				chartDiv.id = divId + i;
                chartDiv.className = 'chartDiv';
                iDiv.appendChild(chartDiv);
                printLineChart(devArr[i], divId + i);
                break;

			case "bar":
                var x = k;
                var chartDiv = document.createElement('div');
                
				chartDiv.id = divId + i;
                chartDiv.className = 'chartDiv';
                iDiv.appendChild(chartDiv);
                printBarChart(devArr[i], divId + i);
                break;

            case "pie":
                var x = k;
                var chartDiv = document.createElement('div');
                
				chartDiv.id = divId + i;
                chartDiv.className = 'chartDiv';
                iDiv.appendChild(chartDiv);
                printPieChart(devArr[i], divId + i);
                break;
        }
    };
};


function printLineChart(devArr, divId) {
    var results = [],
        dataPts = [];
    var i = 0,
        j = 0,
        k = 0,
        x = 0;
    
	$.get(devArr.adr, function(data) {})
        .done(function(data) {
            results = Papa.parse(data);
            for (i = 1; i < results.data.length; i++) {
                results.data[i][0] = new Date(Number(results.data[i][0].split('.')[2]), Number(results.data[i][0].split('.')[1]) - 1, Number(results.data[i][0].split('.')[0]));
                results.data[i][1] = Number(results.data[i][1]);
			}
            google.load("visualization", "1", {
                packages: ["corechart"],
                callback: drawChart
            });
            function drawChart() {
                var tableData = google.visualization.arrayToDataTable(results.data);
                var options = {
                    title: devArr.name,
                };
                var chart = new google.visualization.LineChart(document.getElementById(divId));
                chart.draw(tableData, options);
            }
        });
}

function printBarChart(devArr, divId) {
    var results = [];
    var i = 0,
        j = 0,
        k = 0,
        x = 0;
    
	$.get(devArr.adr, function(data) {})
        .done(function(data) {
            results = Papa.parse(data);
            console.log(results);
            for (i = 1; i < results.data.length; i++) {
                results.data[i][0] = new Date(Number(results.data[i][0].split('.')[2]), Number(results.data[i][0].split('.')[1]) - 1, Number(results.data[i][0].split('.')[0]));
                results.data[i][1] = Number(results.data[i][1]);
                results.data[i][2] = Number(results.data[i][2]);
            }
            google.load("visualization", "1", {
                packages: ["corechart"],
                callback: drawChart
            });
			function drawChart() {
                var tableData = google.visualization.arrayToDataTable(results.data);
                var options = {
                    title: devArr.name,
                    vAxis: {
                        title: 'Year',
                        titleTextStyle: {
                            color: 'red'
                        }
                    }
                };
                var chart = new google.visualization.BarChart(document.getElementById(divId));
                chart.draw(tableData, options);
            }
        });
}

function printPieChart(devArr, divId) {
    var results = [];
    var i = 0,
        j = 0,
        k = 0,
        x = 0;
   
   $.get(devArr.adr, function(data) {})
        .done(function(data) {
            results = Papa.parse(data);
            console.log(results);
            for (i = 1; i < results.data.length; i++) {
                results.data[i][1] = Number(results.data[i][1]);
            }
            google.load("visualization", "1", {
                packages: ["corechart"],
                callback: drawChart
            });
			function drawChart() {
                var tableData = google.visualization.arrayToDataTable(results.data);
                var options = {
                    title: devArr.name,
                    // is3D: true,
                    pieHole: 0.4
                };
                var chart = new google.visualization.PieChart(document.getElementById(divId));
                
				chart.draw(tableData, options);
            }
        });
}