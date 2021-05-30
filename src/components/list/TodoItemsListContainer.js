import ListItem from "./ListItem.js";
import { getAllItems, updateListItem, deleteListItem } from "../../server/ServerTodoUpdateMethods.js";
import React, { Component } from "react";

class TodoItemsListContainer extends Component {
    constructor() {
        super();
        this.state = { promiseItems: getAllItems() }
        this.refresh = this.refresh.bind(this)
        this.listItemClick = this.listItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
    }

    refresh() {
        this.setState({ promiseItems: getAllItems() });
    }

    listItemClick(elementNumber, checked) {
        this.setState({ promiseItems: updateListItem(elementNumber, checked, this.state.promiseItems) })
    }

    deleteListItemClick(elementNumber) {
        this.setState({ promiseItems: deleteListItem(elementNumber, this.state.promiseItems) });
    }

    async componentDidMount() {
        const jsonItems = JSON.parse(await getAllItems());
        this.setState({ promiseItems: jsonItems });
    }

    render() {

        return (
            <div>
                {Array.from(this.state.promiseItems).map((item) => 
                    !item.done ?  
                        <li>
                            <ListItem contentText={item.text} isChecked={item.done}/> {/* elementNumber={i} on:listItemClick={listItemClick} on:deleteListItemClick={onDeleteListItemClick}/>*/}
                        </li> : <br></br>

                )}
            </div>
        );
    }
}

export default TodoItemsListContainer