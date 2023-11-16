function is_NaN(value){
    if (+value % 1 !==0 || value !== value){
        return true;
    } 
    else {
        return false;
    }
}
let num1 = is_NaN(54);
console.log(num1);

let num2 = is_NaN(NaN)
console.log(num2);

let num3 = is_NaN("wow, it's working")
console.log(num3);

let num4 = is_NaN("54")
console.log(num4);