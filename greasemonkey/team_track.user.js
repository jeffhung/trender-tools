// ==UserScript==
// @name          Team Track
// @namespace     https://github.com/jeffhung/tte4t
// @description   Team Track greasemonkey script
// @include       https://adcteamtrack.trend.com.tw/*
// ==/UserScript==

function setFormSelectedValue(submitForm, elementName, elementValue) {
	var selectedElement;
	for(i = 0; i < submitForm.length; i++) {
		if(submitForm.elements[i].type == "select-one" && submitForm.elements[i].name == elementName) {
			selectedElement = submitForm.elements[i];
			break;
		}
	}
	
	if(!selectedElement) {
		return;
	}
	
	for(i = 0; i < selectedElement.options.length; i++) {
		option = selectedElement.options[i];
		if(option.text == elementValue) {
			selectedElement.value = option.value;
			break;
		}
	}
	
	selectedElement.style.color = "gray";
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

var submitForm = document.forms[0];
var fields = new Array(7);
fields[0] = {name: "F330", label: "* Defect Type:", defaultValue: "Code Defect"};
fields[1] = {name: "F352", label: "* Frequency:", defaultValue: "Always"};
fields[2] = {name: "F327", label: "* Priority:", defaultValue: "P1: Fix Immediately"};
fields[3] = {name: "F326", label: "* Severity:", defaultValue: "A- Critical"};
fields[4] = {name: "F435", label: "* Defect Found in Stage:", defaultValue: "Pre-Alpha"};
fields[5] = {name: "F339", label: "* How Found:", defaultValue: "Unit Test"};
fields[6] = {name: "F338", label: "* Report From:", defaultValue: "PDG QA"};

if(submitForm)  {
	for(x = 0; x < fields.length; x++) {
		setFormSelectedValue(submitForm, fields[x].name, fields[x].defaultValue);
	}
}

//set css
addGlobalStyle("span.reqfilled, td.ttFieldName {color: gray !important;}");

spanElements = document.getElementsByTagName("span");
for(i = 0; i < spanElements.length; i++) {
	for(j = 0; j < fields.length; j++) {
		if(spanElements[i].innerHTML == fields[j].label) {
			spanElements[i].style.color = "gray";
			spanElements[i].innerHTML = spanElements[i].innerHTML.substring(2);
		}
	}
}