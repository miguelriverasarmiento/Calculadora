import React from 'react'
import { Button } from './Button';

export const Home = () => {

    const buttons = ["C","9","8","/","7","6","5","*","4","3","2","+","1","0","-",".","Del","="];

    return (
        <div className='home'>
            <div className='inner'>
                <div className='result'>
                    <div className='resbox'></div>
                </div>
            
                <div className='btns'>
                    {buttons.map((element, index) => { 
                        return <Button value={element} key={index} />
                    })}
                </div>
            </div>
        </div>
  )
}
