var form = document.getElementById('options-form'),
  siteListEl = document.getElementById('site-list'),
  saveSuccessfulEl = document.getElementById('save-successful'),
  background = chrome.extension.getBackgroundPage(),
  style = document.getElementById('style'),
  language = document.getElementById('language'),
  startCallbacks = {}, durationEls = {};
  

form.onsubmit = function () {
  console.log("form submitted");
  background.setLanguage(language.value);
  background.setStyle(style.value);
  background.setPrefs({
    siteList:siteListEl.value.split(/\r?\n/),
  })
  saveSuccessfulEl.className = 'show';
  
  return false;
}

language.value = background.LANGUAGE;
style.value = background.STYLE;


function enlighten() {
  var URL = "lighting.html"
  chrome.tabs.create({ url: URL });
}

document.getElementById('save-button').addEventListener('click', enlighten);
