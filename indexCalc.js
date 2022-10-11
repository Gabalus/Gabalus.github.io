function click()
{
  var f1 = Number(document.getElementById("first").value);
  var f2 = Number(document.getElementById("second").value);
  var res=f1*f2;
  document.getElementById("output").innerHTML = res;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("myCount");
  b.addEventListener("click", click);
});