var x = 1;
var y = 2;

while(x <= 51){
    document.getElementById("whileLoop").innerHTML += x + ", ";
    x = x+ 2;
} 

do{
    document.getElementById("doWhileLoop").innerHTML += y + ", ";
    y = y + 2;  
} while(y <= 50)

for(var z = 1; z <= 4096 ; z = z * 2){
    document.getElementById("forLoop").innerHTML += z + ", ";
}

