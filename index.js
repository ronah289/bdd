function p() {
  var f = document.getElementById("year").value;
  var m = document.getElementById("output");
  if (isNaN(f)) {
    m.innerHTML = f + "... is not a year";
  } else {
    //alert(f);
    var n = f.toString().length;
    if (n === 4) {
      if (f % 400 == 0 || f % 4 == 0) {
        m.innerHTML = f + " ... is leap year";
      } else {
        m.innerHTML = f + " .. not a leap year";
      }
    }
    //m.innerHTML = f;
    else {
      m.innerHTML = f + ":  not a year.";
      alert("years have 4 digits.");
    }
  }
}