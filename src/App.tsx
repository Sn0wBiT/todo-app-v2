import React, { createContext, useReducer, useState } from 'react'
import { Stack, TextField, PrimaryButton, initializeIcons, Label } from '@fluentui/react'
import Section from './Components/Section'
import TodoItem from './Components/TodoItem'
import { initialContextData, initialTodoList, stackTokens } from './constants'
import { TTodoItem } from './Types/TodoItemType'
import todoReducer from './Reducer/reducer'
import { ACTIONS, TDispatchAction } from './Reducer/action'

export const TodoContext = createContext(initialContextData)

initializeIcons(undefined, { disableWarnings: true })

export const App: React.FunctionComponent = () => {
    // Get todolist from localStorage
    const todoListRaw = localStorage.getItem('todoList')
    let todoListParsed: TTodoItem[] = []
    if (todoListRaw !== null) {
        todoListParsed = JSON.parse(todoListRaw)
    }

    const [todoList, dispatch] = useReducer<(todoList: TTodoItem[], action: TDispatchAction) => TTodoItem[]>(todoReducer, todoListRaw !== null ? todoListParsed : initialTodoList)
    const [temporaryTodo, setTemporaryTodo] = useState<string>('')

    const handleOnClickAdd = () => {
        dispatch({ type: ACTIONS.ADD_TODO, payload: temporaryTodo })
        setTemporaryTodo('')
    }

    const handleOnInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            handleOnClickAdd()
        }
    }

    const todoContextData = {
        state: todoList,
        dispatch: dispatch
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            <Stack horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
                <Section>
                    <Stack>
                        <Label>Todo list</Label>
                    </Stack>
                    <Stack horizontal tokens={stackTokens}>
                        <TextField
                            className='input-field'
                            placeholder="What do you want to do today?"
                            onChange={(e) => setTemporaryTodo((e.target as HTMLInputElement).value)}
                            onKeyUp={handleOnInputKeyUp}
                            value={temporaryTodo}
                        />
                    <PrimaryButton text="Add" onClick={handleOnClickAdd} />
                    </Stack>
                    <div className='todo-list'>
                    {
                        todoList.length > 0 ? 
                        todoList.map((todoItem, index) => {
                            return <TodoItem key={`index-key-${index}`} item={todoItem} />
                        })
                        : <div className='empty-todo'>Try starring some tasks to see them here.</div>
                    }
                    </div>
                </Section>
            </Stack>
        </TodoContext.Provider>
    )
}
