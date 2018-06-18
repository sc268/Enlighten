


function match(suburl, url){
  return url.indexOf(suburl) >=0
}

function parseLocation(location) {
  var components = location.split('/');
  return {domain: components.shift(), path: components.join('/')};
}

//refactor: use decorator


// update language
var LANGUAGE =  loadLanguage();
function defaultLanguage() {
  return 'auto'
}

function loadLanguage() {
  if(typeof localStorage['language'] !== 'undefined') {
    return localStorage['language'];
  } else {
    return saveLanguage(defaultlanguage());
  }
}

function saveLanguage(language) {
  localStorage['language'] = language;
  return language;
}

function setLanguage(language) {
  LANGUAGE = saveLanguage(language);
  return language;
}




// update style

var STYLE =  loadStyle();
function defaultStyle() {
  return 'github'
}

function loadStyle() {
  if(typeof localStorage['style'] !== 'undefined') {
    return localStorage['style'];
  } else {
    return saveStyle(defaultStyle());
  }
}

function saveStyle(style) {
  localStorage['style'] = style;
  console.log('style saved');
  return style;
}

function setStyle(style) {
  STYLE = saveStyle(style);
  return style;
}



var PREFS = loadPrefs()

function defaultPrefs() {
  return {siteList: ['']}
}

function loadPrefs() {
  if(typeof localStorage['prefs'] !== 'undefined') {
    return updatePrefsFormat(JSON.parse(localStorage['prefs']));
  } else {
    return savePrefs(defaultPrefs());
  }
}

function savePrefs(prefs) {
  localStorage['prefs'] = JSON.stringify(prefs);
  return prefs;
}

function setPrefs(prefs) {
  PREFS = savePrefs(prefs);
  loadRingIfNecessary();
  return prefs;
}




function updatePrefsFormat(prefs) {
  // Sometimes we need to change the format of the PREFS module. When just,
  // say, adding boolean flags with false as the default, there's no
  // compatibility issue. However, in more complicated situations, we need
  // to modify an old PREFS module's structure for compatibility.
  
  if(prefs.hasOwnProperty('domainBlacklist')) {
    // Upon adding the whitelist feature, the domainBlacklist property was
    // renamed to siteList for clarity.s
    prefs.siteList = prefs.domainBlacklist;
    delete prefs.domainBlacklist;
    savePrefs(prefs);
    console.log("Renamed PREFS.domainBlacklist to PREFS.siteList");
  }
  
  if(!prefs.hasOwnProperty('showNotifications')) {
    // Upon adding the option to disable notifications, added the
    // showNotifications property, which defaults to true.
    prefs.showNotifications = true;
    savePrefs(prefs);
    console.log("Added PREFS.showNotifications");
  }
  
  return prefs;
}





//ga
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-120210788-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


