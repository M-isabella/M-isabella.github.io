function getGreeting(){ 
return new Date();
}
window.onload = function() {
document.getElementById('greeting').innerHTML = getGreeting();
};
