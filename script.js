// Displays the current Date at top of Page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
// Checks Local Storage on launch to see if there are any plans saved
$("#txtBox9").val(localStorage.getItem(9));
$("#txtBox10").val(localStorage.getItem(10));
$("#txtBox11").val(localStorage.getItem(11));
$("#txtBox12").val(localStorage.getItem(12));
$("#txtBox13").val(localStorage.getItem(13));
$("#txtBox14").val(localStorage.getItem(14));
$("#txtBox15").val(localStorage.getItem(15));
$("#txtBox16").val(localStorage.getItem(16));
$("#txtBox17").val(localStorage.getItem(17));
// time pulls the hour of the day it is in military time
let time = moment().format('H');
let txtBox = $(".textBox");
// Checks to see if a timeblock is past present or future and sets background color of textbox
txtBox.each(function () {
    if (time === parseInt($(this).attr("title"))) {
        $(this).attr("style", "background-color: red")
    }
    else if(time > parseInt($(this).attr("title"))){
        $(this).attr("style", "background-color: lightgray")
    }
    else if(time < parseInt($(this).attr("title"))){
        $(this).attr("style", "background-color: green")
    }
})
// event listener for the save buttons and sets text in local storage 
$(".saveBtn").on("click",function(){
    if($(this).attr("id")==="btn9"){
        let schedule = $("#txtBox9").val();
        localStorage.setItem(9,schedule);
    }
    else if($(this).attr("id")==="btn10"){
        let schedule = $("#txtBox10").val();
        localStorage.setItem(10,schedule);
    }
    else if($(this).attr("id")==="btn11"){
        let schedule = $("#txtBox11").val();
        localStorage.setItem(11,schedule);
    }
    else if($(this).attr("id")==="btn12"){
        let schedule = $("#txtBox12").val();
        localStorage.setItem(12,schedule);
    }
    else if($(this).attr("id")==="btn13"){
        let schedule = $("#txtBox13").val();
        localStorage.setItem(13,schedule);
    }
    else if($(this).attr("id")==="btn14"){
        let schedule = $("#txtBox14").val();
        localStorage.setItem(14,schedule);
    }
    else if($(this).attr("id")==="btn15"){
        let schedule = $("#txtBox15").val();
        localStorage.setItem(15,schedule);
    }
    else if($(this).attr("id")==="btn16"){
        let schedule = $("#txtBox16").val();
        localStorage.setItem(16,schedule);
    }
    else if($(this).attr("id")==="btn17"){
        let schedule = $("#txtBox17").val();
        localStorage.setItem(17,schedule);
    }
})