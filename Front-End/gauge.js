const process_txt = document.querySelector('.process');
const success_txt = document.querySelector('.success');

setTimeout(() => {
		process_txt.classList.add('active');
}, 0)

setTimeout(toggleMsg, 1600);

function toggleMsg() {
		process_txt.classList.remove('active');
		success_txt.classList.add('active');
}
window.onload = function() {
	$.getJSON("https://blynk.cloud/external/api/get?token=dLCvIJb6KkGtjuRT4rpoCK-DdCfhZTL3&dataStreamId=8", function(data) { 
		updateChart();
	});
	function updateChart() {
	$.getJSON("https://blynk.cloud/external/api/get?token=dLCvIJb6KkGtjuRT4rpoCK-DdCfhZTL3&dataStreamId=8", function(data) {
		bar.style.transform = 'rotate('+(-10)+'deg)'; 
   setTimeout(function(){updateChart()}, 1000);
	});
	}
}