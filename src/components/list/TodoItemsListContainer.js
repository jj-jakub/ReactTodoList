import ListItem from "./ListItem.js";
import { getAllItems, updateListItem, deleteListItem } from "../../server/ServerTodoUpdateMethods.js";
import React, { Component } from "react";

let promiseItems = getAllItems();

const listItemClick = (e) => {
    promiseItems = updateListItem(e.detail.elementNumber, e.detail.checked, promiseItems)
}

const onDeleteListItemClick = (e) => {
    promiseItems = deleteListItem(e.detail.elementNumber, promiseItems)
}

export function refresh() {
    promiseItems = getAllItems()
}

class TodoItemsListContainer extends Component {
    constructor() {
        super();
        this.state = { promiseItems: [] }
    }

    async componentDidMount() {
        const jsonItems = JSON.parse(await getAllItems());
        this.setState({ promiseItems: jsonItems });
    }

    render() {

        return (
            <div>
                {this.state.promiseItems.map(item => (
                    !item.done ?  
                        <li>
                            <ListItem contentText={item.text} isChecked={item.done}/> {/* elementNumber={i} on:listItemClick={listItemClick} on:deleteListItemClick={onDeleteListItemClick}/>*/}
                        </li> : <br></br>

                ))}
            </div>
        );
    }
}

export default TodoItemsListContainer