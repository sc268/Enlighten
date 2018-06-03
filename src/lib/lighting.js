var form = document.getElementById('options-form'),
  saveSuccessfulEl = document.getElementById('save-successful'),
  background = chrome.extension.getBackgroundPage(),
  startCallbacks = {}, durationEls = {};
  
var code = document.getElementById('snippet');
code.innerHTML = background.PREFS.siteList.join("\n");

function enlighten() {
  var URL = "lighting.html"
  chrome.tabs.create({ url: URL });
}


function copyToClickboard() {
  /* Get the text field */
  var copyText = document.getElementById("snippet");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}