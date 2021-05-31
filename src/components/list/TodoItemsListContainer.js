import ListItem from "./ListItem.js";
import React, { Component } from "react";


class TodoItemsListContainer extends Component {
    render() {
        return (
            <div>
                {Array.from(this.props.promiseItems).map((item, i) => {
                    if (!item.done) 
                        return <li>
                            <ListItem elementNumber={i} onDeleteListItemClick={this.props.onDeleteListItemClick} onListItemClick={this.props.onListItemClick} contentText={item.text} isChecked={item.done}/>
                        </li>
                    })
                }
            </div>
        );
    }
}

export default TodoItemsListContainer