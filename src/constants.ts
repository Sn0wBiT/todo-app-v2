import { IStackTokens, IIconProps } from '@fluentui/react'
import { TTodoItem } from './Types/TodoItemType'

const deleteIcon: IIconProps = { iconName: 'delete' }
const editIcon: IIconProps = { iconName: 'edit' }
const saveIcon: IIconProps = { iconName: 'save' }
const stackTokens: IStackTokens = { childrenGap: 15 }
const initialTodoList: TTodoItem[] = []

export {
    deleteIcon,
    editIcon,
    saveIcon,
    stackTokens,
    initialTodoList
}