import '../../styles/TabMenuContainer.css'
import React, { Component } from "react";

export let activeItem;
export let tabItems = [];

class TabMenuContainer extends Component {

    constructor() {
        super()
        this.onTabChangeEvent = this.onTabChangeEvent.bind(this)
    }

    onTabChangeEvent(item) {
        this.props.onTabChangeEvent(item)
    }

    render() {

        let listItems = this.props.tabItems.map((item) =>
            <li onClick={() => this.onTabChangeEvent(item)}>
                <div className={item === this.props.activeItem ? 'active' : ''}>{item}</div>
            </li>
            );
        return (
            <div class="tabs">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default TabMenuContainer;