let val1 = "({[]})[]"; /*Expected: True*/
let val2 = "([])[{}]"; /*Expected: True*/
let val3 = "({[)]})[{}]"; /*Expected: False*/
let val4 = "({[]})[{]}]"; /*Expected: False*/

function bracesValid (x){
    let holder = [];
  
    for(let i=0;i < x.length; i++){
      if ( x[i]=== "{" || x[i]=== "(" || x[i]=== "[" ) {
        holder.push(x[i])
      }
      else{
        if ( x[i]=== ")" && holder [holder.length-1] === "(" || x[i]=== "}" && holder [holder.length-1] === "{" || x[i]=== "]" && holder [holder.length-1] === "[" ){
          holder.pop();
        }  
        else{
            break;
        } 
      }
    }
    if (holder.length === 0){
        return true;
    }
    else{
        return false;
    }
  }
  
console.log (bracesValid (val1));
console.log (bracesValid (val2));
console.log (bracesValid (val3));
console.log (bracesValid (val4));