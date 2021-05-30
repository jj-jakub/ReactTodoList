import ListItem from "./ListItem.js";
import { updateListItem, deleteListItem, getAllItems } from "../../server/ServerTodoUpdateMethods.js";
import React, { Component } from "react";

let itemsToShow = [];

class TodoItemsListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { promiseItems: [] };
        this.listItemClick = this.listItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
        this.getItems()
    }

    async getItems() {
        let items = await getAllItems()
        itemsToShow = items
        this.setState({ promiseItems: items})
    }

    async listItemClick(elementNumber, checked) {
        let items = await updateListItem(elementNumber, checked, itemsToShow)
        this.setState({ promiseItems: items });
    }

    async deleteListItemClick(elementNumber) {
        let newItems = await deleteListItem(elementNumber, itemsToShow)
        this.setState({ promiseItems: newItems });
        itemsToShow = newItems
    }

    shouldComponentUpdate(newProps, newState) {
        if (newProps.promiseItems !== this.props.promiseItems) itemsToShow = newProps.promiseItems
        else if (newState.promiseItems !== []) itemsToShow = newState.promiseItems
        return true
    }

    render() {
        return (
            <div>
                {Array.from(itemsToShow).map((item, i) => {
                    if (!item.done) 
                        return <li>
                            <ListItem elementNumber={i} onDeleteListItemClick={() => this.deleteListItemClick(i)} onListItemClick={this.listItemClick} contentText={item.text} isChecked={item.done}/>
                        </li>
                    })
                }
            </div>
        );
    }
}

export default TodoItemsListContainer