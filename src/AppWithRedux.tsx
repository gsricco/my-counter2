import React, {useEffect} from 'react';
import './App.css';
import {DisplayCounter} from "./components/Display/DisplayCounter";
import UneversalButton from "./components/Button/UneversalButton";
import {DisplayValue} from "./components/Display/DisplayValue";
import Info from "./components/Info/Info";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    changeCounterAC,
    changeMessageAC,
    onSetCounterAC,
    onSetSetAC,
    resetCounterAC,
    setInitialValuesAC,
    setMaxValueAC,
    setStartValueAC
} from "./state/counter-reducer";

// export const getMaxValue = () => {
//     let maxValueString = localStorage.getItem('maxValue');
//     if (maxValueString) return JSON.parse(maxValueString); else return 0;
// }
// export const getStartValue = () => {
//     let startValueString = localStorage.getItem('startValue');
//     if (startValueString) return JSON.parse(startValueString); else return 0;
// }
// export const getCounter = () => {
//     let counterString = localStorage.getItem('counter');
//     if (counterString) return JSON.parse(counterString); else return 0;
// }
// export const getMessage = () => {
//     let messageString = localStorage.getItem('message');
//     if (messageString) return messageString; else return '';
// }

function AppWithRedux() {
    // let [maxValue, setMaxValue] = useState<number>(getMaxValue);
    // let [startValue, setStartValue] = useState<number>(getStartValue);
    // let [counter, setCounter] = useState<number>(getCounter);
    // let [message, setMessage] = useState<string>(getMessage);
    // let [startSet, setStartSet] = useState<boolean>(false);

    const dispatch = useDispatch();
    let counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    let message = useSelector<AppRootStateType, string>(state => state.counter.message)
    let startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    let startSet = useSelector<AppRootStateType, boolean>(state => state.counter.startSet)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)


    let condition;

    /*useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter])
    useEffect(() => {
        localStorage.setItem('message', message);
    }, [message])*/

    useEffect(() => {
        const a = localStorage.getItem('settings')
        if (a !== null) {
            const b = JSON.parse(a);
            console.log(b);
            dispatch(setInitialValuesAC(b.maxValue, b.startValue))
        }
    }, [])


    const onChangeMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        // setMaxValue(maxValue);
    }

    const onChangeStartValue = (startValue: number) => {
        dispatch(setStartValueAC(startValue));
    }

    const onSetCounter = () => {

        // setCounter(startValue);
        // setMessage('');
        // setStartSet(!startSet);
        dispatch(onSetCounterAC(startValue, startSet))
        localStorage.setItem('settings', JSON.stringify({
            'maxValue': maxValue,
            'startValue': startValue
        }))
    }
    const onSetSet = () => {
        // setStartSet(!startSet)
        // setMessage(`enter values and press 'SET'`);
        dispatch(onSetSetAC(startSet, `enter values and press 'SET'`))
    }

    const resetCounter = () => {
        // setCounter(startValue);
        dispatch(resetCounterAC(startValue))
    }
    const changeCounter = () => {
        // if (counter < maxValue) setCounter(counter + 1);
        if (counter < maxValue) dispatch(changeCounterAC(counter + 1));
    }

    const changeMessage = (msg: string) => {
        // setMessage(msg);
        dispatch(changeMessageAC(msg));
    }

    condition = maxValue <= startValue || startValue < 0;
    // if (maxValue <= startValue || startValue < 0) condition = true;else condition = false;

    const finalClassName = `${message ? 'message' : ''} ${condition ? 'error' : ''}`

    return (
        <div className="App">
            <div className={'counter'}>
                <Info/>
                <div className={'content'}>
                    {
                        startSet
                            ? <div className={'content'}>
                                <DisplayCounter counter={counter} maxValue={maxValue} condition={condition}
                                                message={message}/>
                                <UneversalButton name={'inc'} disable={counter === maxValue || condition}
                                                 callBack={changeCounter}/>
                                <UneversalButton name={'reset'} disable={counter === startValue || condition}
                                                 callBack={resetCounter}/>
                                <UneversalButton name={'set'} disable={condition} callBack={onSetSet}/>
                            </div>
                            : <div className={'content'}>
                                <DisplayValue counter={counter} onChangeMaxValue={onChangeMaxValue}
                                              onChangeStartValue={onChangeStartValue} maxValue={maxValue}
                                              startValue={startValue}
                                              changeMessage={changeMessage} condition={condition} message={message}/>
                                <div className={'buttons'}>
                                    <UneversalButton name={'set'} disable={condition} callBack={onSetCounter}/>
                                </div>
                            </div>
                    }
                </div>
                <div className={'boy'}>
                    {
                        (message || condition) &&
                        <div className={finalClassName}>
                            {message}
                            <img className={'pic'}
                                 src="https://downloadwap.com/thumbs3/screensavers/d/new/cartoon-anime/bart_eyes-23642.gif"
                                 alt={''}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default AppWithRedux;

