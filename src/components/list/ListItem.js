import '../../styles/ListItem.css'
import React, { Component } from "react";

let isChecked;
class ListItem extends Component {

    constructor(props) {
        super(props)
        this.onListItemClick = this.onListItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
        isChecked = this.props.isChecked
    }

    onListItemClick() {
        isChecked = !isChecked
        this.props.onListItemClick(this.props.elementNumber, isChecked)
    }

    deleteListItemClick() {
        this.props.onDeleteListItemClick(this.props.elementNumber)
    }

    render() {
        return (
            <div className="listitem">
                <input onClick={this.onListItemClick} type="checkbox" checked={this.props.isChecked}/>{/* type={checkbox} on:click={onListItemClick}*/}
                
                <p>{this.props.contentText}</p>
                
                <button onClick={this.deleteListItemClick}>Delete</button>
            </div>
        );
    }
}

export default ListItem