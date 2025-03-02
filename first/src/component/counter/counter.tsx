import { useState } from "react";


interface DoCounter {

    title: string;

}


const Counter: React.FC<DoCounter> = (props) => {

    const handlerPlus = () => {

        setCounter(counterNum + 1)
    }

    const handlerMinus = () => {

        if (counterNum < 1) return;
        setCounter(counterNum - 1);

    }



    const [counterNum, setCounter] = useState(0);




    return <div>
        <div className="txt-number">{counterNum}</div>

        <div className="counter-section">
            <button onClick={handlerPlus}>+</button>
            <button onClick={handlerMinus}>-</button>


        </div>

        {props.title}


    </div>

}

export default Counter;