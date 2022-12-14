export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.message}
        default:
            return state
    }
}

export const setStatusAC = (status: RequestStatusType) => ({
    type: 'APP/SET-STATUS',
    status
} as const)

export const setErrorAC = (message: null | string) => ({
    type: 'APP/SET-ERROR',
    message
} as const)

export type StatusType = ReturnType<typeof setStatusAC>
export type ErrorType = ReturnType<typeof setErrorAC>

type ActionsType = StatusType | ErrorType
