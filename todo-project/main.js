// Milyen lesz az adatok szerkezete?
// Hogyan tárolom az adatokat, milyen változókban?
// Milyen műveleteket kell végeznem az adatokkal vagy az adatokon?

/*
Todo:
id: number
title: string
desc: string
done: boolean
*/

const baseTodo = {
    id: 1,
    title: 'Base Todo',
    desc: 'Description of the baseTodo.',
    done: false,
};

const todoList = [];

const getAllTodods = (list = [baseTodo]) => {
    return todoList;
};

const getUnresolvedTodos = (list = [baseTodo]) => {
    return list.filter( todo => !todo.done );
};

const getResolvedTodos = (list = [baseTodo]) => {
    return list.filter( todo => todo.done );
};

const createTodo = (list = [baseTodo], newTodo = baseTodo) => {
    newTodo.id = list.length ? list[list.length-1].id + 1 : 1;
    // push new todo into the list
    // storeTodos
    // showTodos
};

const removeTodo = (list = [baseTodo], todo = baseTodo) => {
    // get index of todo: list.indexof
    // list.splice
    // storeTodos
    // showTodos
};

const storeTodos = (list = [baseTodo]) => {
    localStorage.todoList = JSON.stringify(list);
}

const showTodos = (list = [baseTodo]) => {
    list = localStorage.todoList ? JSON.parse(localStorage.todoList) : list;
    const unresolved = getUnresolvedTodos(list);
    const resolved = getResolvedTodos(list);

    // Get div for unresolved.
    const unresolvedContainer = document.querySelector('.todo-container-unresolved');
    unresolvedContainer.innerHTML = '';
    unresolved.forEach( todo => {
        // create a todo element
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-list__todo-element';

        // fill with data
        const title = document.createElement('span');
        title.className = 'todo-element__title';
        title.textContent = todo.title;
        todoDiv.appendChild(title);
        // description -->

        // add a checkbox to the todo
        const doneCheck = document.createElement('input');
        doneCheck.id = todo.id;
        doneCheck.type = 'checkbox';
        todoDiv.appendChild(doneCheck);

        // create a listener to the checkbox: changeTodoStatus
        doneCheck.addEventListener('change', (ev) => {
            todoList.find( t => t.id == ev.target.id ).done = ev.target.checked;
            storeTodos(todoList);
            showTodos(todoList);
        });

        unresolvedContainer.appendChild(todoDiv);
    });
};

showTodos(todoList);

document.querySelector('#createNewTodoButton').addEventListener( 'click', () => {
    createTodo(todoList, {id: 44, title: 'Buy something', desc: 'kdljflsdk', done: false});
});
