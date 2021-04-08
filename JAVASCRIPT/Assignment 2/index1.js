function Assign1(){
var x = document.getElementById('input1').value
composedValue(Square , double , x)
}

function composedValue(){
    document.getElementById('assign1').innerHTML = arguments[0](arguments[1](arguments[2]))
}



function double(x){
    return x*2;
}


function Square(x){
    
    return x*x;
   }
   