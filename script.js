
function showHideDiv(button) {
    var show_items = document.getElementById("show_items");
    if (button.value == "SHOW ITEMS") {
        show_items.style.display = "block";
         button.value = "GO BACK";
    } else if(button.value == "GO BACK") {
        show_items.style.display = "none";
        button.value = "SHOW ITEMS";
    }
}

function customFunction(){
    var x=document.getElementById("custom");
    document.getElementById(alert("THE SHOP IS CURRENTLY CLOSED")).innerHtml=x;
}
console.log("here");