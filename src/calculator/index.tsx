import { useState } from 'react'
import Display from './components/Display'
import Keyboard from './components/Keyboard'

export default () => {

    const [displayValue, setDisplayValue] = useState<string>('');
    const [lastInput, setLastInput] = useState<string>('');

    const onDisplay = (value: string, className: string) => {
      if (value === '=') {
         handleCalculation()
         return
      }
      if (value === 'AC') {
         setLastInput('');
         setDisplayValue('');
         return
      }

        if(lastInput == 'operator' &&  className === 'operator'){
         setLastInput(className);
         return
        } 

         setLastInput(className);
         setDisplayValue(prev=> prev+value);
    }

    const handleCalculation = () => {
        displayValue
    }

  return (
   <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keyboard onDisplay={onDisplay} />
   </div>
  )
}


// 1 написать функцию handleCalculation
// 2 написать логику соблюдения приортености операций 2+ 2 * 2 = 6 