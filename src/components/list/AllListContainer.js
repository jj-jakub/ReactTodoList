import ListItem from "./ListItem.js";
import React, { Component } from "react";

class AllListContainer extends Component {
    render() {
        return (
            <div>
                {Array.from(this.props.promiseItems).map((item, i) => 
                    <li>
                        <ListItem elementNumber={i} onDeleteListItemClick={this.props.onDeleteListItemClick} onListItemClick={this.props.onListItemClick} contentText={item.text} isChecked={item.done}/>
                    </li>
                )}
            </div>
        );
    }
}   

export default AllListContainer