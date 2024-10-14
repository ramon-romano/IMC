function IMC(peso, altura){

    const operacion = peso/(altura * altura)
  
    if(operacion > 18.5 && operacion < 24.9){
      console.log(`Seu peso é ${operacion.toFixed(2)} e está normal`)
    } else if(operacion < 18.5){
      console.log(`Seu peso é ${operacion.toFixed(2)} e está abaixo do normal`)
    } else if(operacion > 24.9){
      console.log(`Seu peso é ${operacion.toFixed(2)} e está acima do normal`)
    } 
      
  }
  
  
IMC(100, 1.80);