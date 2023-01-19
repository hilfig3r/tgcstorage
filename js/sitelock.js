//Checking if the page is loaded in an iframe
if(window.self != window.top) {
//Analyzing URL to check embed link
try {
if(window.parent.location.hostname.indexOf("https://sites.google.com/k12.friscoisd.org/tgcofficial/") == -1) {
window.location.href = "https://sites.google.com/k12.friscoisd.org/tgcofficial/";
} else {
//iFrame from host site
}
} catch (ex) {
//Blocking Embed...
window.location.href = "https://example.com/embedblock";
}
} 
