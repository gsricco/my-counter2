import React from 'react';

type ButtonPropsType = {
    name: string
    disable: boolean
    callBack: () => void
}
const UneversalButton = (props: ButtonPropsType) => {
    return (
        <>
            <button className={props.disable ? 'button' : 'button1'}
                    disabled={props.disable}
                    onClick={props.callBack}>{props.name}
            </button>
        </>
    );
};

export default UneversalButton;