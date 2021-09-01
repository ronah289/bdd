function p(){
    var f = document.getElementById("year").value;
    //alert(f);
    var m = document.getElementById("output");
    m.innerHTML = f;
} 



/*
function input(){
    var x = document.getElementById("find");
    var z = document.getElementById("output");
    var y = document.getElementById("year").value;

    y = parseInt(y);
    return y;
    y.toString().length === 4?op(y):z.innerHTML(String(y)+"not a year.");
    function op(y){
        if(y % 4 === 0 && y % 400 === 0 ){
            var m = String(y)+ "is a leap year.";
            z.innerHTML(m);
        }
        else{
            var m = String(y)+ "is not a leap year.";
            z.innerHTML(m);
        }
    }
}
*/