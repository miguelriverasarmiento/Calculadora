import React, { useState } from 'react'
import { Button } from './Button';
import { evaluate } from 'mathjs';

export const Home = () => {

    const [res, setRes] = useState('')

    const buttons = ["C","9","8","/","7","6","5","*","4","3","2","+","1","0",".","-","Del","="];

    const handleButton = (val) => {
        
        setRes(res + val)
        
        if (val === '=') {
            setRes(evaluate(res))
        }
        if (val === 'C') {
            setRes('');
        }
        if (res === 'Infinity') {
            setRes('');
            return;
        }
        if (val === 'Del') {
            let n = res.length;
            if (n > 0)
            setRes('')
            setRes(res.slice(0, n-1))
        }
    };

    return (
        <div className='home'>
            <div className='inner'>
                <div className='result'>
                    <div className='resbox'>{res}</div>
                </div>
                <div className='btns'>
                    {buttons.map((element, index) => { 
                        return <Button value={element} key={index} handleButton={handleButton}/>
                    })}
                </div>
            </div>
        </div>
    )
}
