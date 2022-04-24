import { TDispatchAction } from "../Reducer/action"

export type TTodoItem = {
    id: number
    text: string
    checked: boolean
}

export type TTodoContextData = {
    state: TTodoItem[]
    dispatch: React.Dispatch<TDispatchAction>
}