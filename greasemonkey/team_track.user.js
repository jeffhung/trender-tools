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

if(submitForm && (submitForm.name == 'SubmitForm'))  {
	for(x = 0; x < fields.length; x++) {
		setFormSelectedValue(submitForm, fields[x].name, fields[x].defaultValue);
	}
}

//set css
addGlobalStyle("span.reqfilled, td.ttFieldName {color: gray !important;}" +
	"	/* item list */\n" +
	"	td.listField3 {\n" +
	"		font-size: 16px !important;\n" +
	"	}\n" +
	"	\n" +
	"	/* item detail */\n" +
	"	td.ttFieldName {\n" +
	"		font-weight: normal !important;\n" +
	"	}\n" +
	"	td.listField {\n" +
	"		color: gray !important;\n" +
	"	}\n" +
	"	span.F306,    /* item id */\n" +
	"	span.F307,    /* title */\n" +
	"	span.F672V575 /* product name */,\n" +
	"	span.F327V481 /* priority */,\n" +
	"	span.F332,    /* defect found in build */\n" +
	"	span.F308     /* description */\n" +
	"	{\n" +
	"		color: black !important;\n" +
	"		font-weight: bold !important;\n" +
	"		/*\n" +
	"		font-size: 16px !important;\n" +
	"		*/\n" +
	"	}\n" +
	"	span.F308 {    /* description */\n" +
	"		font-family: Monaco, \"Courier New\", monospace;\n" +
	"   }\n" +
	"\n" +
	"	/* Report Table */\n" +
	"\n" +
	"	/* Enlarge the table so it use more space to show the data. */\n" +
	"	table.rptTabulary {\n" +
	"		width: auto !important;\n" +
	"		margin-left: 20px !important;\n" +
	"		margin-right: 20px !important;\n" +
	"	}\n" +
	"	/* Enlarge the font so we can read it easier. */\n" +
	"	th.rptTabHeader,\n" +
	"	th.rptTabSubHeader,\n" +
	"	td.rptTabData {\n" +
	"		font-size: 16px !important;\n" +
	"		padding: 0.2em;\n" +
	"	}\n" +
	"	/* Gray out those no link cells since they carry no information. */\n" +
	"	td.rptTabData {\n" +
	"		color: gray !important;\n" +
	"	}\n");

spanElements = document.getElementsByTagName("span");
for(i = 0; i < spanElements.length; i++) {
	for(j = 0; j < fields.length; j++) {
		if(spanElements[i].innerHTML == fields[j].label) {
			spanElements[i].style.color = "gray";
			spanElements[i].innerHTML = spanElements[i].innerHTML.substring(2);
		}
	}
}
