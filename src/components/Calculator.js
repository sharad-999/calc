import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

const Calculator = () => {
    const [display, setdisplay] = useState(0)
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    const inputNum = (e) => {
        let input = e.target.value
        if (num === 0) {
            setNum(input);
            if (display === 0) {
                setdisplay(input)
            } else {
                setdisplay(display + input)
            }
        } else {
            setNum(num + input);
            setdisplay(display + input);
        }
    }
    const operatorHandler = (e) => {
        let operatorInput = e.target.value;
        if (!operator) {
            setOperator(operatorInput);
            setdisplay(display + operatorInput);
            setOldNum(num);
            setNum(0);
        } else {
            if (operator === "/") {
                setOldNum(parseFloat(oldNum) / parseFloat(num));
                setNum(0);
                setdisplay(display + operatorInput);
                setOperator(operatorInput)
            } else if (operator === "*") {
                setOldNum(parseFloat(oldNum) * parseFloat(num));
                setNum(0);
                setdisplay(display + operatorInput);
                setOperator(operatorInput)
            } else if (operator === "-") {
                setOldNum(parseFloat(oldNum) - parseFloat(num));
                setNum(0);
                setdisplay(display + operatorInput);
                setOperator(operatorInput)
            } else if (operator === "+") {
                setOldNum(parseFloat(oldNum) + parseFloat(num));
                setNum(0);
                setdisplay(display + operatorInput);
                setOperator(operatorInput)
            }
        }
    }
    const clear = () => {
        setNum(0)
        setdisplay(0);
        // setOldNum(0);
    }
    const changeSign = () => {
        setNum(num * -1)
        setdisplay(num * -1);
    }
    const percentage = () => {
        setNum(num / 100)
        setdisplay(num / 100)
    }
    const calculate = () => {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
            setdisplay(parseFloat(oldNum) / parseFloat(num));
            setOperator()
        } else if (operator === "*") {
            setNum(parseFloat(oldNum) * parseFloat(num));
            setdisplay(parseFloat(oldNum) * parseFloat(num));
            setOperator()
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
            setdisplay(parseFloat(oldNum) - parseFloat(num));
            setOperator()
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
            setdisplay(parseFloat(oldNum) + parseFloat(num));
            setOperator()
        }
    }

    return (
        <div>
            <Box m={2} />  {/* Box margin-top */}
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={12} />
                    <h1 className='resultado'>{display}</h1>
                    {/* <h1 className='resultado'>{oldNum}</h1> */}
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
                    <button className='grey' onClick={inputNum} value={7}>7</button>
                    <button className='grey' onClick={inputNum} value={8}>8</button>
                    <button className='grey' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value={'*'}>*</button>
                    <button className='grey' onClick={inputNum} value={4}>4</button>
                    <button className='grey' onClick={inputNum} value={5}>5</button>
                    <button className='grey' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
                    <button className='grey' onClick={inputNum} value={1}>1</button>
                    <button className='grey' onClick={inputNum} value={2}>2</button>
                    <button className='grey' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
                    <button className='grey' onClick={inputNum} value={0}>0</button>
                    {/* <button style={{ visibility: "hidden" }}>k</button>  */}
                    <button className='grey' onClick={inputNum} value={"."}>.</button>
                    <button className='orange equal' onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}

export default Calculator
