function click()
{
  var f1 = Number(document.getElementById("first").value);
  
  var select=Number(document.getElementsByName("myselect")[0].value);
  if(select==1)
  {
  	var res = document.querySelector('input[name="myradio"]:checked')==null?"Не выбрали размер":f1*document.querySelector('input[name="myradio"]:checked').value;

  }
  else{
  	var res=f1*3;
  }
  document.getElementById("output").innerHTML = res;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("myCount");
  b.addEventListener("click", click);
  let s = document.getElementsByName("myselect");
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("myradios");
    console.log(select.value);
    // Можно использовать getElementsByClassName()
    if (select.value == "2") {
      radios.style.display = "none";
    }
    else {
      radios.style.display = "block";

    }
  });

  let r = document.querySelectorAll(".myradios input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
 
    });    
  });
  });