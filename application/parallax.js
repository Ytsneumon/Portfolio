var farest = Array(5)
var middle = Array(5)
var nearest = Array(5)

var viewportWidth = 0;
var viewportHeight = 0;

var farestHTML = "<div class=\"Farest\">0</div>";
var middleHTML = "<div class=\"Middle\">0</div>";
var nearestHTML = "<div class=\"Nearest\">0</div>";

$(document).ready(initialize);

/*
 * Initialize the document
 * */
function initialize(){
	
	viewportWidth = $(window).width();
	viewportHeight = $(window).height();
	
	$("#Nearest").css("top", -viewportHeight / 3);
	$("#Nearest").css("left", -viewportWidth / 3);
	$("#Middle").css("top", -viewportHeight / 2);
	$("#Middle").css("left", -viewportWidth / 2);
	$("#Farest").css("top", -viewportHeight / 4);
	$("#Farest").css("left", -viewportWidth / 4);
	
	populate();
}

/*
 * Create an element (1 or 0) and it includes it in the container as parameter.
 * There are also the id and the class like parameters for this new element.
 * */
function createElement(id, classId, container){
	
	$("#" + id + i).remove();
	$("<div id=\"" + id + i + "\" class=\"" + classId + "\">" + Math.round(Math.random()) + "</div>").appendTo(container);
	element = $("#" + id + i);
	
	radioElement = Math.sqrt(Math.pow(element.width(),2) + Math.pow(element.height(),2));
	
	leftPos = 0;
	topPos = 0;
	PosDifferent = false;
	trys = 0;
	while(!PosDifferent){
		topPos = Math.floor((Math.random() * (container.height() - element.height())) + 1);
		leftPos = Math.floor((Math.random() * (container.width() - element.width())) + 1);
		PosDifferent = true;
		for(j=0;j<i;j++){
			disX = Math.abs($("#" + id + j).position().left - leftPos);
			disY = Math.abs($("#" + id + j).position().top - topPos);
			PosDifferent = PosDifferent && Math.sqrt(Math.pow(disX,2) + Math.pow(disY,2)) >= radioElement;
		}
		trys++;
		
		if(trys > 50) break;
	}
	
	if(PosDifferent){
		element.css("top", topPos);
		element.css("left", leftPos);
		$("#nTrays").text("Trays: " + trys);
		return true;
	}else{
		element.remove();
		return false;
	}
	
}

function moveContainer() {
	
	posNearest = $("#Nearest").position();
	posMiddle = $("#Middle").position();
	posFarest = $("#Farest").position();
	widthNearest = $("#Nearest").width();
	widthMiddle = $("#Middle").width();
	widthFarest = $("#Farest").width();
	heightNearest = $("#Nearest").height();
	heightMiddle = $("#Middle").height();
	heightFarest = $("#Farest").height();
	
	angleOK = false
	while(!angleOK){
		xDir = Math.floor(Math.random() * 20) - 10;
		yDir = Math.floor(Math.random() * 20) - 10;
		
		angle = Math.atan2(yDir,xDir);
		
		yDestNearest = Math.sin(angle) * 300;
		xDestNearest = Math.cos(angle) * 300;
		yDestMiddle = Math.sin(angle) * 100;
		xDestMiddle = Math.cos(angle) * 100;
		yDestFarest = Math.sin(angle) * 50;
		xDestFarest = Math.cos(angle) * 50;
		
		angleOK = 	(posNearest.top + yDestNearest < 0 && posNearest.left + xDestNearest < 0) &&
					(posMiddle.top + yDestMiddle < 0 && posMiddle.left + xDestMiddle < 0) &&
					(posFarest.top + yDestFarest < 0 && posFarest.left + xDestFarest < 0) &&
					(posNearest.top + yDestNearest + heightNearest > viewportHeight) &&
					(posMiddle.top + yDestMiddle + heightMiddle > viewportHeight) &&
					(posFarest.top + yDestFarest + heightFarest > viewportHeight) &&
					(posNearest.left + xDestNearest + widthNearest > viewportWidth) &&
					(posMiddle.left + xDestMiddle + widthMiddle > viewportWidth) &&
					(posFarest.left + xDestFarest + widthFarest > viewportWidth);
	}
	
	
	$("#Nearest").animate({
	    left: '+=' + xDestNearest,
	    top: '+=' + yDestNearest
	  }, 500, function() {
	    // Animation complete.
	  });
	$("#Middle").animate({
	    left: '+=' + xDestMiddle,
	    top: '+=' + yDestMiddle
	  }, 500, function() {
	    // Animation complete.
	  });
	$("#Farest").animate({
	    left: '+=' + xDestFarest,
	    top: '+=' + yDestFarest
	  }, 500, function() {
	    // Animation complete.
	  });
}

/*
 * Create the elements inside the containers
 * */
function populate() {
	
	for( i=0; i<45; i++){
		$("#nearest" + i).remove();
	}
	for( i=0; i<45; i++){
		if(!createElement("nearest", "Nearest", $("#Nearest"))){
			$("#nElements").text("Elements: " + i);
			break;
		}
	}
	
	for( i=0; i<20; i++){
		$("#middle" + i).remove();
	}
	for( i=0; i<20; i++){
		if(!createElement("middle", "Middle", $("#Middle"))){
			break;
		}
	}
	
	for( i=0; i<15; i++){
		$("#farest" + i).remove();
	}
	for( i=0; i<15; i++){
		if(!createElement("farest", "Farest", $("#Farest"))){
			break;
		}
	}
}
