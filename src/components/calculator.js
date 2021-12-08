import React from "react";

function Calculator({firstValue, secondValue, operator}){
    if(!Number.isInteger(firstValue)){
        return(
            <div>
                <spa>El primer valor no es un numero </spa>
            </div>
        )
    }

    if(!Number.isInteger(secondValue)){
        return(
            <div>
                <spa>El primer valor no es un numero </spa>
            </div>
        )
    }

   let result =  firstValue + secondValue;

   switch(operator){
       case "suma":
           result = firstValue + secondValue;
           break;
        case "resta":
            result = firstValue - secondValue;
            break;
        case "mul":
            result = firstValue * secondValue;
            break;
        default:
            result = 'Operacion no encontrada'

   }

    return(
        <div>
            <spa>El resultado es: {result} </spa>
        </div>
    )
}

export default Calculator