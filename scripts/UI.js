$('#lableQA').bind("click", function() {
	$("#QA").toggleClass('displated notdisplayed');
	$(document).scrollTop(1300);
});

$('#lableDEV').bind("click", function() {
	$("#DEV").toggleClass('displated notdisplayed');
});

$(document).ready(function() {
    $("div").click(function(event) {
    });
});

function changeZoom(){
	var select = document.getElementById("PMname").value
	
	switch (select){
		case "nozoom":
		break;
		
		case "normal":
		break;
		
		case "high":
		break;
	}
}