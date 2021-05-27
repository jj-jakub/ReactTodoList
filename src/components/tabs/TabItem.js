// import FinishedItemsListContainer from "../list/FinishedItemsListContainer.svelte";

// import AllListContainer from "../list/AllListContainer.svelte";
// import TodoItemsListContainer from "../list/TodoItemsListContainer.svelte";
// import NewListItemInput from "../input/NewListItemInput.svelte";
import React, { Component } from "react";

import Constants from '../../constants/Constants'

export let activeItem;

let childComponent;

const onAddNewItemButtonClick = (e) => {
    addListItem(e.detail.itemText)
}

async function addListItem(itemText) {
    const res = await fetch(Constants.serverAddress + Constants.getTodosEndpoint, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "text": itemText
        })
    })
    const text = await res.text()

    childComponent.refresh()

    if (res.ok) {
        promiseItems = text
    } else {
        throw new Error(text)
    }
}

let promiseItems = [];

class TabItem extends Component {
    render() {
        let container = <button>Click me</button>

        // if (activeItem == Constants.allItemsTabName) {
        //     container = <AllListContainer/> //bind:this="{childComponent}"/>
        // } else if (activeItem == Constants.finishedItemsTabName) {
        //     container = <FinishedItemsListContainer/> // bind:this="{childComponent}"/>
        // } else {
        //     container = <TodoItemsListContainer/> // bind:this="{childComponent}"/>
        // }
        return (
            <div>
                {container}
                {/* <NewListItemInput/> // on:addButtonClick={onAddNewItemButtonClick}/> */}
            </div>
        );
    }
}

export default TabItem;