import React, { Component } from "react";

import Constants from '../../constants/Constants'

import TabMenuContainer from "./TabMenuContainer.js";
import TabItem from "./TabItem.js";

let tabItems = [Constants.allItemsTabName, Constants.finishedItemsTabName, Constants.todoItemsTabName];

class TabMainPage extends Component {
    
    constructor() {
        super()
        this.state = { activeItem: Constants.allItemsTabName}
        this.tabChange = this.tabChange.bind(this)
    }

    tabChange(newActiveItem) {
        this.setState({activeItem: newActiveItem})
    }

    render() {
        return (
            <div>
                <TabMenuContainer activeItem={this.state.activeItem} tabItems={tabItems} onTabChangeEvent={this.tabChange}/> {/*//on:tabChangeEvent={tabChange}/>*/}
                <TabItem activeItem={this.state.activeItem}/>
            </div>
        )
    }
}

export default TabMainPage;