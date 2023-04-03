import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide, faEquals, faMinus, faMultiply, faPercent, faPlus, faPlusMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function App() {
 
  const [number, setNumber] = useState(0);
  const [opNumber, setOpNumber] = useState(0);
  const [operator, setOperator] = useState();

    function inputNumber(valor) {
      var input = valor.target.value;

      if(number === 0) {
        setNumber(input);
      }
      else {
        setNumber(number + input);
      }
    }

    function percent() {
      setNumber(number / 100); 
    }

    function plusMinus() {
      if (number > 0) {
        setNumber(-number);
      }
      else {
        setNumber(Math.abs(number))
      }
    }

    function operatorValue(event) {
      var operatorInput = event.target.value;
      setOperator(operatorInput);
      setOpNumber(number);
      setNumber(0);
    }

    function equals() {
    
      if(operator == "/") {
        setNumber(opNumber / number);
      }
      else if(operator === "x") {
                setNumber(opNumber * number);
            }

      else if(operator === "-") {
              number(opNumber - number);
            }

      else if(operator === "+") {
              setNumber(parseFloat(opNumber) + parseFloat(number));
            }  
    }
 
    function setClear() {
      setNumber(0);
    }

  return (
    <div>
     <div id="display" className="mt-14 px-14 ">
      <div id="last-calc" className="text-right text-xl text-resNumber"></div>
      <div id="result" className="flex justify-between mt-2" >
        <FontAwesomeIcon icon={faEquals}  className="fa-2xl text-resNumber" />
        <span className="text-3xl text-numbers">{number}</span>
      </div>
     </div>
     <div id="keyboard" className="mt-6 mx-8 pb-10 grid grid-cols-4 gap-3">
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-secondary hover:bg-black hover:text-gray-100' onClick={setClear} >CE</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black'>C</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={percent}>
        <FontAwesomeIcon icon={faPercent} />
      </button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl bg-backgroundOp text-numbers hover:bg-black' onClick={operatorValue} value={"/"}>
        <FontAwesomeIcon icon={faDivide} /> 
      </button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={7} >7</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={8} >8</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={9} >9</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers bg-backgroundOp hover:bg-black' onClick={operatorValue} value={'x'} >
        <FontAwesomeIcon icon={faMultiply} />
      </button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={4} >4</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={5} >5</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={6} >6</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers bg-backgroundOp hover:bg-black' onClick={operatorValue} value={'-'}  > 
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={1} >1</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={2} >2</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={3} >3</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers bg-backgroundOp hover:bg-black' onClick={operatorValue} value={'+'}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={plusMinus}>
        <FontAwesomeIcon icon={faPlusMinus} />
      </button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={0} >0</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers hover:bg-black' onClick={inputNumber} value={','} >,</button>
      <button className='w-16 h-16 bg-backgroundButton rounded-full shadow-4xl text-2xl text-numbers bg-backgroundOp hover:bg-black' onClick={equals}>
        <FontAwesomeIcon icon={faEquals} />
      </button>
     </div>
    </div>
  )
}

export default App
