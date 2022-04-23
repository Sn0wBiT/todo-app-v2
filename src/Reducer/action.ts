import { TTodoItem } from "../Types/TodoItemType"

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
}

export type TDispatchAction = {
    type: string
    payload: TTodoItem | string | number
}