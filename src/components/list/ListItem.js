import '../../styles/ListItem.css'
import React, { Component } from "react";

class ListItem extends Component {

    constructor(props) {
        super(props)
        this.onListItemClick = this.onListItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
        this.isChecked = this.props.isChecked
    }

    onListItemClick() {
        this.isChecked = !this.isChecked
        this.props.onListItemClick(this.props.elementNumber, this.isChecked)
    }

    deleteListItemClick() {
        this.props.onDeleteListItemClick(this.props.elementNumber)
    }

    render() {
        return (
            <div className="listitem">
                <input onClick={this.onListItemClick} type="checkbox" checked={this.isChecked}/>
                
                <p>{this.props.contentText}</p>
                
                <button onClick={this.deleteListItemClick}>Delete</button>
            </div>
        );
    }
}

export default ListItem