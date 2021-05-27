import '../../styles/TabMenuContainer.css'
// import { createEventDispatcher } from 'svelte'
// const dispatch = createEventDispatcher();
import React, { Component } from "react";

export let activeItem;
export let tabItems = [];

class TabMenuContainer extends Component {
    render() {
        let listItems = tabItems.map((item) => 
            <li>
                {/* on:click={() => dispatch('tabChangeEvent', item)}> */}
                <div> {/*class:active={item === activeItem}>*/}{item}</div>
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