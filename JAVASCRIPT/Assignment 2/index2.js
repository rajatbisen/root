function Assign2(){
    var x1 = compose(Square, double) 
    var x = document.getElementById('input1').value
    document.getElementById('x1').innerHTML = "x1 =" + x1(x)
    
    var x2 = compose(double, Square) 
    document.getElementById('x2').innerHTML = "x2 =" + x1(x)
    
    }
    
    function compose(){
        arg1 = arguments[0]
        arg2 = arguments[1]
        return function(x){
            return arg1(arg2(x))
        }
    }
    
    
    
    function double(x){
        return x*2;
    }
    
    
    function Square(x){
        
        return x*x;
       }
       