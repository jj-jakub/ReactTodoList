import FinishedItemsListContainer from "../list/FinishedItemsListContainer.js";
import AllListContainer from "../list/AllListContainer.js";
import TodoItemsListContainer from "../list/TodoItemsListContainer.js";
import NewListItemInput from "../input/NewListItemInput.js";
import React, { Component } from "react";

import Constants from '../../constants/Constants'
import { updateListItem, deleteListItem, getAllItems } from "../../server/ServerTodoUpdateMethods.js";

export let activeItem;

let childComponent;

async function addListItem(itemText) {
    const res = await fetch(Constants.serverAddress + Constants.getTodosEndpoint, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "text": itemText
        })
    })
    const text = await res.text()

    if (res.ok) {
        return JSON.parse(text)
    } else {
        throw new Error(text)
    }
}

class TabItem extends Component {

    constructor() {
        super()
        this.state = { promiseItems: [] }
        this.onAddNewItemButtonClick = this.onAddNewItemButtonClick.bind(this)
        this.listItemClick = this.listItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
    }

    async componentDidMount() {
        this.setState({ promiseItems: await getAllItems()})
    }

    async onAddNewItemButtonClick(itemText) {
        this.setState({ promiseItems: await addListItem(itemText)})
    }

    async listItemClick(elementNumber, checked) {
        let items = await updateListItem(elementNumber, checked, this.state.promiseItems)
        this.setState({ promiseItems: items });
    }

    async deleteListItemClick(elementNumber) {
        let newItems = await deleteListItem(elementNumber, this.state.promiseItems)
        this.setState({ promiseItems: newItems });
    }

    render() {
        activeItem = this.props.activeItem
        if (activeItem === Constants.allItemsTabName) {
            childComponent = <AllListContainer promiseItems={this.state.promiseItems} onListItemClick={this.listItemClick} onDeleteListItemClick={this.deleteListItemClick}/>
        } else if (activeItem === Constants.finishedItemsTabName) {
            childComponent = <FinishedItemsListContainer promiseItems={this.state.promiseItems} onListItemClick={this.listItemClick} onDeleteListItemClick={this.deleteListItemClick}/>
        } else {
            childComponent = <TodoItemsListContainer promiseItems={this.state.promiseItems} onListItemClick={this.listItemClick} onDeleteListItemClick={this.deleteListItemClick}/>
        }
        return (
            <div>
                {childComponent}
                <NewListItemInput onAddButtonClick={this.onAddNewItemButtonClick}/>
            </div>
        );
    }
}

export default TabItem;