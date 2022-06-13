import React from 'react';

type ButtonPropsType = {
    counter:number
    changeCounter:(value:number)=>void
}
const Button = (props:ButtonPropsType) => {
    return (
        <div className={'buttons'}>
            <button className={'button'} disabled={(props.counter>4)?true:false} onClick={()=>props.changeCounter(props.counter+1)}>inc</button>
            <button className={'button'} disabled={(props.counter<1)?true:false} onClick={()=>props.changeCounter(0)}>reset</button>
        </div>
    );
};

export default Button;