// ==UserScript==
// @name          Team Track
// @namespace     https://github.com/jeffhung/tte4t
// @description   Team Track greasemonkey script
// @include       https://adcteamtrack.trend.com.tw/*
// ==/UserScript==

submitForm = document.forms[0];
function getFormElement(name) {
	for(i = 0; i < submitForm.length; i++) {
		if(submitForm.elements[i].name == name) {
			return submitForm.elements[i];
		}
	}
	
	return;
}

defaultDefectType = "2725"; //Code Defect
defaultFrequency = "605"; //Always
defaultPriority = "477"; //P1: Fix Immediately
defaultSeverity = "472"; //A- Critical
defaultDefectFoundInStage = "2722"; //Pre-Alpha
defaultHowFound = "2198"; //Unit Test
defaultReportFrom = "1206"; //PDG QA

getFormElement("F330").value = defaultDefectType;
getFormElement("F330").disabled = true;
getFormElement("F352").value = defaultFrequency;
getFormElement("F352").disabled = true;
getFormElement("F327").value = defaultPriority;
getFormElement("F327").disabled = true;
getFormElement("F326").value = defaultSeverity;
getFormElement("F326").disabled = true;
getFormElement("F435").value = defaultDefectFoundInStage;
getFormElement("F435").disabled = true;
getFormElement("F339").value = defaultHowFound;
getFormElement("F339").disabled = true;
getFormElement("F338").value = defaultReportFrom;
getFormElement("F338").disabled = true;