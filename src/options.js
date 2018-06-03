var form = document.getElementById('options-form'),
  siteListEl = document.getElementById('site-list'),
  saveSuccessfulEl = document.getElementById('save-successful'),
  background = chrome.extension.getBackgroundPage(),
  style = document.getElementById('style'),
  startCallbacks = {}, durationEls = {};
  

form.onsubmit = function () {
  console.log("form submitted");
  var durations = {}, duration, durationStr, durationMatch;
  
  for(var key in durationEls) {
    durationStr = durationEls[key].value;
      console.log(durationMatch);
      durations[key] = 60;
  }
  
  console.log(durations);
  
  background.setPrefs({
    siteList:siteListEl.value.split(/\r?\n/),
  })
  saveSuccessfulEl.className = 'show';
  return false;
}

  siteListEl.onfocus = formAltered;

function formAltered() {
  saveSuccessfulEl.removeAttribute('class');
  timeFormatErrorEl.removeAttribute('class');
}

siteListEl.value = background.PREFS.siteList.join("\n");


function enlighten() {
  var URL = "lighting.html"
  chrome.tabs.create({ url: URL });
}

document.getElementById('save-button').addEventListener('click', enlighten);
