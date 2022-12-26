import React,{useState} from 'react';
import './Counter.css';
function Counter(props){

    const [text,setText]=useState(0);
    
    const increment=()=>{
        let numInc=parseInt(text);
        numInc=numInc+1;
        console.log(numInc);    
        setText(numInc)
    }

    const decrement=()=>{
            if(text>0){
            let numDec=parseInt(text); 
            numDec=numDec-1;
            console.log(numDec);
            setText(numDec);
        }
    }

    return(
        <>
            <div className='container mr-2'>
                <h3>{props.appTitle}</h3>
                <div className='container counter'>
                    <button className='btn btn-success mx-2 ' onClick={decrement}>-</button>
                    <p className='p mx-2' >{text}</p>
                    <button className='btn btn-success mx-2 ' onClick={increment}>+</button>
                </div>
            </div>            
        </>

    );
}

export default Counter;