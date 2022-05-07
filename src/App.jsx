import React from "react"
import { useState } from "react"

function App() {
    const [operator, setOperator] = useState("")
    const [negative, setNegative] = useState(false)
    const [result, setResult] = useState("")

    const math = ["+", "+/-", "-", "*", "/", "=", "%"]

    const inputNum = (e) => {
        if (e === "DEL") {
            setOperator("")
            setResult("")
            setNegative(false)
            return
        } else if (operator.length === 9) {
            return
        }
        if (math.includes(e) && operator === "" ||
            math.includes(e) && math.includes(operator.slice(-1))) {
            return
        }
        else if (e === "+/-" && math.includes(result.charAt(0)) === false) {
            setOperator("-" + operator)
            setResult("-" + result)
            setNegative(true)
        }
        setOperator(operator + e)
        if (e === "=") {
            if (math.includes(operator.slice(-1))) return
            else {
                if (parseFloat(eval(operator)) < 0) {
                    setOperator("MATH_ERROR")
                    setResult("")
                    setNegative(false)
                } else if (parseFloat(eval(operator)).toString().length > 9) {
                    setOperator(eval(operator).toFixed(8).toString())
                    setOperator(eval(operator).toFixed(8).toString())
                    setNegative(false)
                } else if (parseFloat(eval(operator)) > 999999999) {
                    setOperator("MATH_ERROR")
                    setResult("")
                    setNegative(false)
                } else {
                    setOperator(eval(operator).toString())
                    setResult(eval(operator).toString())
                }
            }
        }
    }

    return (
        <div className='App'>
            <div className='calculator'>
                <div className='display'>
                    <div className='screen'>{operator}</div>
                </div>
                <div className='keys'>
                    <button type='button' className='numero btn btn-light' value='7' onClick={() => inputNum("7")}>7</button>
                    <button type='button' className='numero btn btn-light' value='8' onClick={() => inputNum("8")}>8</button>
                    <button type='button' className='numero btn btn-light' value='9' onClick={() => inputNum("9")}>9</button>
                    <button type='button' className='operador btn btn-secondary' onClick={() => inputNum("%")}>mod</button>
                    <button type='button' className='delete btn btn-danger' value='DEL' onClick={() => inputNum("DEL")}>DEL</button>
                    <button type='button' className='numero btn btn-light' value='4' onClick={() => inputNum("4")}>4</button>
                    <button type='button' className='numero btn btn-light' value='5' onClick={() => inputNum("5")}>5</button>
                    <button type='button' className='numero btn btn-light' value='6' onClick={() => inputNum("6")}>6</button>
                    <button type='button' className='operador btn btn-secondary' onClick={() => inputNum("*")}>x</button>
                    <button type='button' className='operador btn btn-secondary' onClick={() => inputNum("/")}>/</button>
                    <button type='button' className='numero btn btn-light' value='1' onClick={() => inputNum("1")}>1</button>
                    <button type='button' className='numero btn btn-light' value='2' onClick={() => inputNum("2")}>2</button>
                    <button type='button' className='numero btn btn-light' value='3' onClick={() => inputNum("3")}>3</button>
                    <button type='button' className='operador btn btn-secondary' onClick={() => inputNum("+")}>+</button>
                    <button type='button' className='operador btn btn-secondary' onClick={() => inputNum("-")}>-</button>
                    <button type='button' className='numero btn btn-light' value='0' onClick={() => inputNum("0")}>0</button>
                    <button type='button' className='punto btn btn-light' value='.' onClick={() => inputNum(".")}>.</button>
                    <button type='button' className='operador btn btn-secondary' onClick={() => inputNum("+/-")}>+/-</button>
                    <button type='button' className='igual btn btn-secondary' value='=' onClick={() => inputNum("=")}>=</button>
                </div>
            </div>
        </div>
    )
}

export default App