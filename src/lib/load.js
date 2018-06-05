var foo = hljs.initHighlightingOnLoad();

var background = chrome.extension.getBackgroundPage();
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = "styles/" + background.STYLE + ".css";
document.head.appendChild(link);
console.log(background.STYLE);


var preTag = document.getElementById("pre");
var language = background.LANGUAGE;
preTag.innerHTML = '<code id="snippet" class="' + language + '"></code>';
