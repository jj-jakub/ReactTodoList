import FinishedItemsListContainer from "../list/FinishedItemsListContainer.js";
import AllListContainer from "../list/AllListContainer.js";
import TodoItemsListContainer from "../list/TodoItemsListContainer.js";
import NewListItemInput from "../input/NewListItemInput.js";
import React, { Component } from "react";

import Constants from '../../constants/Constants'

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

    // childComponent.refresh()

    if (res.ok) {
        promiseItems = text
    } else {
        throw new Error(text)
    }
}

let promiseItems = [];

class TabItem extends Component {

    onAddNewItemButtonClick(itemText) {
        addListItem(itemText)
    }

    render() {
        let container = <button>Click me</button>

        activeItem = this.props.activeItem
        if (activeItem == Constants.allItemsTabName) {
            container = <AllListContainer /> //bind:this="{childComponent}"/>
        } else if (activeItem == Constants.finishedItemsTabName) {
            container = <FinishedItemsListContainer/> // bind:this="{childComponent}"/>
        } else {
            container = <TodoItemsListContainer/> // bind:this="{childComponent}"/>
        }
        childComponent = container
        return (
            <div>
                {container}
                <NewListItemInput onAddButtonClick={this.onAddNewItemButtonClick}/> {/*// on:addButtonClick={onAddNewItemButtonClick}/>*/}
            </div>
        );
    }
}

export default TabItem;