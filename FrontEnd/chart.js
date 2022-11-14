
window.onload = function() {
	var dataPoints = [];
	var chart;
  var row = 2;

	$.getJSON("https://blynk.cloud/external/api/get?token=dLCvIJb6KkGtjuRT4rpoCK-DdCfhZTL3&dataStreamId=8", function(data) { 
			dataPoints.push({x: 1, y: data }); 
		chart = new CanvasJS.Chart("chartContainer",{
			title:{
				text:"Live temperature"
			},
			backgroundColor: "#e5e5e5",
			data: [{
				type: "line",
				dataPoints : dataPoints,
			}]
		});
		chart.render();
		setTimeout(function(){updateChart(row, 0)}, 1000);
	});
	function updateChart(row , preTemp) {
	$.getJSON("https://blynk.cloud/external/api/get?token=dLCvIJb6KkGtjuRT4rpoCK-DdCfhZTL3&dataStreamId=8", function(data) {
		bar.style.transform = 'rotate('+((data/50*180 -90))+'deg)';	
		needle.style.transform = 'rotate('+((data/50*180 -90))+'deg)';
		tempMsg.text = data;
		if(data > preTemp)
		bar.style.backgroundColor = "#D32A37"; 
		else
		bar.style.backgroundColor = "#2C1AD6"; 
			dataPoints.push({
			x: parseInt(row),
			y: data
			});
		chart.render();
    row = row + 1;

		setTimeout(function(){updateChart(row ,data )}, 1000);
	});
	}
}
  