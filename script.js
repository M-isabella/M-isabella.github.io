window.onload = function() {
document.getElementById('greeting').innerHTML = getGreeting();
};
function getGreeting(){ 
return new Date();
}
