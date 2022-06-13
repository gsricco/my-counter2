import React from "react";

type DisplayPropsType = {
    counter: number
    maxValue: number
    message: string
    condition: boolean

}

export const DisplayCounter = (props: DisplayPropsType) => {
    const finalClassName = `${props.message ? 'message' : ''} ${props.condition ? 'error' : ''}`

    return (
        <div className={(props.counter > props.maxValue - 1) ? 'stop' : 'goodInc'}>
            <div className={finalClassName}>
                {props.counter}
            </div>
        </div>
    )
}
