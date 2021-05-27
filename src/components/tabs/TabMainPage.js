import React, { Component } from "react";

import Constants from '../../constants/Constants'

import TabMenuContainer from "./TabMenuContainer.js";
import TabItem from "./TabItem.js";

let tabItems = [Constants.allItemsTabName, Constants.finishedItemsTabName, Constants.todoItemsTabName];
let activeItem = Constants.allItemsTabName;

const tabChange = (e) => {
    activeItem = e.detail;
}  

class TabMainPage extends Component {
    render() {
        return (
            <div>
                <button>Click me too</button>
                <TabMenuContainer activeItem={activeItem} tabItems={tabItems}/> {/*//on:tabChangeEvent={tabChange}/>*/}

                <TabItem activeItem={activeItem}/>
            </div>
        )
    }
}

export default TabMainPage;