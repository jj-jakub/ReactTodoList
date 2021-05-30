import ListItem from "./ListItem.js";
import { getAllItems, updateListItem, deleteListItem } from "../../server/ServerTodoUpdateMethods.js";
import React, { Component } from "react";

// export function refresh() {
//     promiseItems = getAllItems()
// }

class AllListContainer extends Component {
    constructor() {
        super();
        this.state = { promiseItems: getAllItems() };
        this.refresh = this.refresh.bind(this)
        this.listItemClick = this.listItemClick.bind(this)
        this.deleteListItemClick = this.deleteListItemClick.bind(this)
    }

    refresh() {
        this.setState({ promiseItems: getAllItems() });
    }

    listItemClick(elementNumber, checked) {
        let items = updateListItem(elementNumber, checked, this.state.promiseItems)
        this.setState({ promiseItems: items });
    }

    deleteListItemClick(elementNumber) {
        let items = this.state.promiseItems
        this.setState({ promiseItems: deleteListItem(elementNumber, items) });
    }

    async componentDidMount() {
        const jsonItems = JSON.parse(await getAllItems());
        this.setState({ promiseItems: jsonItems });
    }

    render() {
        return (
            <div>
                {Array.from(this.state.promiseItems).map((item, i) => 
                    <li>
                        <ListItem onDeleteListItemClick={() => this.deleteListItemClick(i)} onListItemClick={this.listItemClick} contentText={item.text} isChecked={item.done}/> {/* elementNumber={i} on:listItemClick={listItemClick} on:deleteListItemClick={onDeleteListItemClick}/>*/}
                    </li>
                )}
            </div>
        );
    }
}   

export default AllListContainer