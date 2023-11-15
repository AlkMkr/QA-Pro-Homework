function drawTriangle(star, num) {
    for (let i = 1; i <= num; i++) {
      let result = "";
      for (let j = 1; j <= i; j++) {
        result += star;
      }
      console.log(result);
    }
  }
  
  const draw = drawTriangle("*", 5);

  function drawAnotherTriangle(star, num){
    let result = '';
    for (let i = 1; i <= num; i++){
        result += star;
        console.log(result);
    }
  }

  const drawANother = drawAnotherTriangle("*", 5);