var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

var x = 0;

$("#this-dialog").position({
   my: "center",
   at: "center",
   of: window
});


function showThisDialog() {
  document.getElementById('this-dialog').showModal();
}

function hideThisDialog() {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
  document.getElementById('this-dialog').close();
}

function fijarBody(){
    const body = document.querySelector("body");
    body.classList.add("fijar-body");
}

function setX1(){
    x = 1;
}
function setX0(){
    x = 0;
}
function cerrarXD(){
    if(x == 0){
        showThisDialog()
    }else{
        hideThisDialog();
    }
}