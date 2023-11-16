function is_NaN(value){
    if (+value % 1 !==0 || value !== value){
        return true;
    } 
    else {
        return false;
    }
}

console.log(is_NaN(54));
console.log(is_NaN(NaN));
console.log(is_NaN("wow"));
console.log(is_NaN("54"));
