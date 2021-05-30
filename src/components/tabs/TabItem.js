import FinishedItemsListContainer from "../list/FinishedItemsListContainer.js";
import AllListContainer from "../list/AllListContainer.js";
import TodoItemsListContainer from "../list/TodoItemsListContainer.js";
import NewListItemInput from "../input/NewListItemInput.js";
import React, { Component } from "react";

import Constants from '../../constants/Constants'
import { getAllItems } from "../../server/ServerTodoUpdateMethods.js";

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
    }

    async componentDidMount() {
        this.setState({ promiseItems: await getAllItems()})
    }

    async onAddNewItemButtonClick(itemText) {
        this.setState({ promiseItems: await addListItem(itemText)})
    }

    render() {
        activeItem = this.props.activeItem
        if (activeItem === Constants.allItemsTabName) {
            childComponent = <AllListContainer promiseItems={this.state.promiseItems}/>
        } else if (activeItem === Constants.finishedItemsTabName) {
            childComponent = <FinishedItemsListContainer promiseItems={this.state.promiseItems}/>
        } else {
            childComponent = <TodoItemsListContainer promiseItems={this.state.promiseItems}/>
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