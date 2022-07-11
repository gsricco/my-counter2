const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_START_VALUE = 'SET_START_VALUE';
const ON_SET_COUNTER = 'ON_SET_COUNTER';
const ON_SET_SET = 'ON_SET_SET';
const RESET_COUNTER = 'RESET_COUNTER';
const CHANGE_COUNTER = 'CHANGE_COUNTER';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
const SET_INITIAL_VALUES = 'SET_INITIAL_VALUES';

export type InitialStateType = {
    startValue: number
    maxValue: number
    counter: number
    message: string
    startSet: boolean
}

const initialState: InitialStateType = {
    startValue: 0,
    maxValue: 2,
    counter: 0,
    message: '',
    startSet: false
}

export type ActionsType = SetMaxValueActionType
    | setStartValueActionType
    | onSetCounterActionType
    | onSetSetActionType
    | resetCounterActionType
    | changeCounterActionType
    | changeMessageActionType
    | setInitialValuesActionType

export const counterReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
        case SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            }
        case ON_SET_COUNTER:
            return {
                ...state,
                counter: action.startValue,
                message: '',
                startSet: !action.startSet
            }
        case ON_SET_SET:
            return {
                ...state,
                message: action.message,
                startSet: !action.startSet
            }
        case RESET_COUNTER:
            return {
                ...state,
                counter: action.startValue
            }
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: action.counter
            }
        case CHANGE_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        case SET_INITIAL_VALUES:
            return {
                ...state,
                maxValue: action.maxValue,
                startValue:action.startValue
            }

        default:
            return state;
    }
};


export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type setStartValueActionType = ReturnType<typeof setStartValueAC>
export type onSetCounterActionType = ReturnType<typeof onSetCounterAC>
export type onSetSetActionType = ReturnType<typeof onSetSetAC>
export type resetCounterActionType = ReturnType<typeof resetCounterAC>
export type changeCounterActionType = ReturnType<typeof changeCounterAC>
export type changeMessageActionType = ReturnType<typeof changeMessageAC>
export type setInitialValuesActionType = ReturnType<typeof setInitialValuesAC>

export const setMaxValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue} as const);
export const setStartValueAC = (startValue: number) => ({type: SET_START_VALUE, startValue} as const);
export const onSetCounterAC = (startValue: number, startSet: boolean) => ({
    type: ON_SET_COUNTER,
    startValue,
    startSet
} as const);
export const onSetSetAC = (startSet: boolean, message: string) => ({
    type: ON_SET_SET,
    startSet,
    message
} as const);
export const resetCounterAC = (startValue: number) => ({type: RESET_COUNTER, startValue} as const);
export const changeCounterAC = (counter: number) => ({type: CHANGE_COUNTER, counter} as const);
export const changeMessageAC = (message: string) => ({type: CHANGE_MESSAGE, message} as const);
export const setInitialValuesAC = (maxValue: number, startValue: number) => ({
    type: SET_INITIAL_VALUES,
    maxValue,
    startValue
} as const);
