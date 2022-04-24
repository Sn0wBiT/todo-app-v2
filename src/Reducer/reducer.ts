import { TTodoItem } from "../Types/TodoItemType"
import { genId, saveToLocalStorage } from "../Utils/helper"
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
            // save to localStorage
            saveToLocalStorage(currentTodoList)
            return currentTodoList
        case ACTIONS.UPDATE_TODO:
            const updateTodoItem = action.payload as TTodoItem
            const todoListUpdated = todoList.map(item => {
                if (item.id === updateTodoItem.id) {
                    item.checked = updateTodoItem.checked
                    item.text = updateTodoItem.text
                }
                return item
            })
            // save to localStorage
            saveToLocalStorage(todoListUpdated)
            return todoListUpdated
        case ACTIONS.REMOVE_TODO:
            const removeTodoId = action.payload as number
            const newTodoList = todoList.filter(item => item.id !== removeTodoId)
            // save to localStorage
            saveToLocalStorage(newTodoList)
            return newTodoList
    }
    return todoList
}

export default todoReducer
