import React, { useState } from 'react'
import { Checkbox, IconButton, Label, Stack, TextField } from '@fluentui/react'
import { deleteIcon, editIcon, saveIcon, stackTokens } from '../constants'
import { TTodoItem } from '../Types/TodoItemType'
import { ACTIONS, TDispatchAction } from '../Reducer/action'

export type TTodoItemProps = {
    item: TTodoItem
    dispatch: React.Dispatch<TDispatchAction>
}

const TodoItem = (props: TTodoItemProps) => {
    const { dispatch } = props
    const { id, text, checked } = props.item
    const [temporaryText, setText] = useState<string>(text)
    const [isChanging, setChanging] = useState<boolean>(false)

    const handleOnChangeCheckBox = () => {
        const todoItemData: TTodoItem = {
            id: id,
            text: text,
            checked: !checked
        }
        dispatch({ type: ACTIONS.UPDATE_TODO, payload: todoItemData })
    }

    const handleOnClickDelete = () => {
        dispatch({ type: ACTIONS.REMOVE_TODO, payload: id })
    }

    const doSave = () => {
        const todoItemData: TTodoItem = {
            id: id,
            text: temporaryText,
            checked: checked
        }
        dispatch({ type: ACTIONS.UPDATE_TODO, payload: todoItemData })
        setChanging(false)
    }

    const handleOnClickSaveEdit = () => {
        if (isChanging) {
            doSave()
        } else {
            setChanging(true)
        }
    }

    const handleOnInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            doSave()
        }
    }

    return (
        <Stack horizontal tokens={stackTokens} className='label-item'>
            <Stack.Item align='center'>
                <Checkbox checked={checked} onChange={handleOnChangeCheckBox} />
            </Stack.Item>
            <Label
                className={checked && !isChanging ? 'label-checked' : ''}
                onClick={() => setChanging(true)}
            >
                {
                    isChanging ? 
                        <TextField 
                            value={temporaryText} 
                            onChange={(e) => setText((e.target as HTMLInputElement).value)}
                            onKeyUp={handleOnInputKeyUp}
                        />
                    : <>{text}</>
                }
            </Label>
            <Stack.Item className='btn-icon' align='center' onClick={handleOnClickSaveEdit}>
                <IconButton iconProps={isChanging ? saveIcon : editIcon} aria-label="Emoji" />
            </Stack.Item>
            <Stack.Item className='btn-icon' align='center' onClick={handleOnClickDelete}>
                <IconButton iconProps={deleteIcon} aria-label="Emoji" />
            </Stack.Item>
          </Stack>
    )
}

export default TodoItem