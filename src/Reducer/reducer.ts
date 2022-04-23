import { TTodoItem } from "../Types/TodoItemType"
import { genId } from "../Utils/helper"
import { ACTIONS, TDispatchAction } from "./action"

const todoReducer = (todoList: TTodoItem[], action: TDispatchAction): TTodoItem[] => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            if (action === undefined || action === null) {
                return todoList
            }
            const trimmedText = (action.payload as string).trim()
            if (trimmedText === '') {
                return todoList
            }
            const currentTodoList: TTodoItem[] = todoList !== undefined ? [...todoList] : []
            const newTodoItem: TTodoItem = {
                id: genId(),
                text: trimmedText,
                checked: false
            }
            currentTodoList.push(newTodoItem)
            return currentTodoList
        case ACTIONS.UPDATE_TODO:
            const updateTodoItem = action.payload as TTodoItem
            return todoList.map(item => {
                if (item.id === updateTodoItem.id) {
                    item.checked = updateTodoItem.checked
                    item.text = updateTodoItem.text
                }
                return item
            })
        case ACTIONS.REMOVE_TODO:
            const removeTodoId = action.payload as number
            return todoList.filter(item => item.id !== removeTodoId)
    }
    return todoList
}

export default todoReducer
