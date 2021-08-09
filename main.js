menu_list_array = ["Veg Margherita Pizza",
"FRAM HOUSE PIZZA",
"CHEESE BRUST PIZZA",
"TRIPPLE CHEESE",
"MEXCIAN PIZZA",
"PERI PERI PANNER PIZZA",
"PANNER TIKKA PIZZA",
"CHICKEN TIKKA PIZZA"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;j++){
    htmldata=htmldata+'<li>' + menu_list_array[i]+ '<li>'
}
htmldata=htmldata+ "</ol>"
document.getElementById(display_menu).innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0 ;i <menu_list_array.length;i++){
    htmldata=htmldata+'<div class="cards">'
    + '<img src="image/pizzalmg.png"/>'
    + menu_list_array[1] + '<div/>'
}
htmldata=htmldata+ "</div>"
document.getElementById(display_addedmenu).innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}