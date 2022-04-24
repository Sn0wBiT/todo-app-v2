import { IStackTokens, IIconProps } from '@fluentui/react'
import { TTodoContextData, TTodoItem } from './Types/TodoItemType'

const deleteIcon: IIconProps = { iconName: 'delete' }
const editIcon: IIconProps = { iconName: 'edit' }
const saveIcon: IIconProps = { iconName: 'save' }
const stackTokens: IStackTokens = { childrenGap: 15 }
const initialTodoList: TTodoItem[] = []
const initialContextData: TTodoContextData = {
    state: initialTodoList,
    dispatch: () => {}
}

export {
    deleteIcon,
    editIcon,
    saveIcon,
    stackTokens,
    initialTodoList,
    initialContextData
}