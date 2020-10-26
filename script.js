$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
let time = moment().format('H');
let txtBox = $(".textBox");
txtBox.each(function () {
    if (time === parseInt($(this).attr("title"))) {
        $(this).attr("style", "background-color: red")
        // console.log($(this).attr("title"))
    }
    else if(time > parseInt($(this).attr("title"))){
        $(this).attr("style", "background-color: gray")
    }
    else if(time < parseInt($(this).attr("title"))){
        $(this).attr("style", "background-color: green")
    }
})

