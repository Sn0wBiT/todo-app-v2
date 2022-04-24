import { TTodoItem } from "../Types/TodoItemType";

const genId = (length: number = 3) => {
    let result: string = '';
    const characters: string = '0123456789';
    const charactersLength: number = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result);
}

const saveToLocalStorage = (todoList: TTodoItem[]) => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

export {
    genId,
    saveToLocalStorage
}