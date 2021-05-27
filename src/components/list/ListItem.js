import '../../styles/ListItem.css'
import React, { Component } from "react";

export let elementNumber;
export let contentText;
export let isChecked;

function onListItemClick() { 
    isChecked = !isChecked
   
    // dispatch('listItemClick', {
    //     elementNumber: elementNumber,
    //     checked: isChecked
    // })
}

function onDeleteListItemClick() {
    // dispatch('deleteListItemClick', {
    //     elementNumber: elementNumber
    // })
}

class ListItem extends Component {

    render() {
        return (
            <div class="listitem">
                <input checked={isChecked}/>{/* type={checkbox} on:click={onListItemClick}*/}
                
                <p>{contentText}</p>
                
                <button >Delete</button>{/*on:click={onDeleteListItemClick}*/}
            </div>
        );
    }
}

export default ListItem