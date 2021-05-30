import '../../styles/ListItem.css'
import React, { Component } from "react";

export let elementNumber;
export let contentText;
export let isChecked;

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.onListItemClick = this.onListItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
    }

    onListItemClick() {
        isChecked = !isChecked
        this.props.onListItemClick(elementNumber, isChecked)
    }

    deleteListItemClick() {
        alert(JSON.stringify(this.props))
        this.props.onDeleteListItemClick(elementNumber)
    }

    render() {
        return (
            <div class="listitem">
                <input onClick={this.onListItemClick} type="checkbox" checked={isChecked}/>{/* type={checkbox} on:click={onListItemClick}*/}
                
                <p>{contentText}</p>
                
                <button onClick={this.deleteListItemClick}>Delete</button>
            </div>
        );
    }
}

export default ListItem