
function myFunction(){  //calling
    var cc=document.getElementById("century");
    var yy=parseInt(document.getElementById("year").value)
    var mm=parseInt(document.getElementById("month").value)
    var dd=parseInt(document.getElementById("day").value)
    var male=document.getElementById("male");
    var female=document.getElementById("female");

    //starting arrays
    var femaleNames=
    var femaleNames=
    ["Akosua",
    "Adowa",
    "Akua",
    "Yaa",
    "Afua",
    "Afu",
    "Ama"];
    var maleNames=
    ["Kwasi",
     "Kwadwo",
     "Kwabena",
     "Kwafu",
     "Yaw",
     "Kofi",
     "Kwame",]
               //0       1        2          3           4         5           6
 var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   //validating
   if(dd<=0||dd>31){
    alert("invalid day please put the correct day!")
}
else if(mm<=0||mm>12){
    alert("invalid year please put the correct month!")
}
if(yy<190||yy>2020){
    alert("invalid year please put the correct year!")
}
else if(cc<19||cc>20){
    alert("invalid century please put put the correct century")
}    var day =new Date(cc + "-" + yy + "-" + mm + "-" + dd);    var dayWanted=day.getDay();
}