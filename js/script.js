function naming(){

    var CC=parseInt(document.getElementById("CC").value);
    var YY=parseInt(document.getElementById("YY").value);
    var MM=parseInt(document.getElementById("MM").value);
    var DD=parseInt(document.getElementById("DD").value);
  
    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
    var namesFemale=["Akosua", "Adwoa","Abenaa","Akua","Yaa"," Afua","Ama"];
    var namesMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  
    if(CC.value =="" || YY.value =="" || MM.value =="" || DD.value ==""){
        alert("No blank values allowed");

    }

    var gender = document.querySelector('input[name="gender"]:checked').value;
    var  dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;