import { useState } from 'react'
import Display from './components/Display'
import Keyboard from './components/Keyboard'

export default () => {

    const [displayValue, setDisplayValue] = useState<string>('');
    const [lastInput, setLastInput] = useState<string>('');

    const onDisplay = (value: string, className: string) => {
      if (value === '=') {
         console.log(handleCalculation())
         return
      }
      if (value === 'AC') {
         setLastInput('');
         setDisplayValue('');
         return
      }

      if(displayValue.length<1 && (className ==='operator' || value === ')') ){
        setDisplayValue(prev=>prev);
      }

        if(lastInput == 'operator' &&  className === 'operator'){
         setLastInput(className);
         return
        }
         setLastInput(className);
         setDisplayValue(prev=> prev+value);
    }

    const onOperation = (a: string,  op: string, b: string) => {
      if (op === '+') {
        return String(+a + +b)
      }

      return '0'
    }

    const handleCalculation = () => { // 8+8+6
      const arr = displayValue.match(/\d|\+/g) //[8 + 8
      let current: string[] = [] // 16 + 6
      if (arr) {
        for (let el of arr) {
          if (current && current.length === 3) {
            const temp = onOperation(...current)
            current = [temp, el]
          } else {
            current.push(el)
          }
        }
        if (current.length === 3) {
          const temp = onOperation(...current)
          current = [temp] // [22]
        }
      }
      
      console.log('>>>>>', current)
    }; 
  
      

  return (
   <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keyboard onDisplay={onDisplay} />
   </div>
  )
}


// take into account all edge cases, e.g. : "8)", "8(", "()", ")"

// 1 написать функцию handleCalculation
// 2 написать логику соблюдения приортености операций 2+ 2 * 2 = 6
// 3 история операций
// 4 последняя операция в шапке дисплея 