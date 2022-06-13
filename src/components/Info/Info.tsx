import React from 'react';

const Info = () => {
    const infoHandler = () => {
        alert(`Should be "max value">"start value" and "max value">0, "start value">0 `)
    }
    return (
        <>
            <div className={'info'} onClick={infoHandler}>
                <div>
                    <img className={'pic'} src="https://media.giphy.com/media/XEsH1y3yE1AwXkGKig/giphy.gif" alt={''}/>
                    INFO
                </div>
                <p>
                    <b>Should be:</b><br/> max value &gt; start value; <br/>max value &gt; 0, integer;<br/> start
                    value &gt; 0, integer.
                </p>
            </div>
        </>
    );
};
export default Info;