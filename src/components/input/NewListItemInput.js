import React, { Component } from "react";

class NewListItemInput extends Component {
    constructor() {
        super()
        this.onAddButtonClick = this.onAddButtonClick.bind(this)
    }

    onAddButtonClick() {
        let itemText = document.getElementById('itemTextInput').value
        document.getElementById('itemTextInput').value = ""
        this.props.onAddButtonClick(itemText)
        // dispatch('addButtonClick', {
        //     itemText: itemText
        // })
    }

    render() {
        return (
            <div> {/*class="newListItemInput"*/}
                <input id="itemTextInput"/> {/*id="itemTextInput""*/}
                <button onClick={this.onAddButtonClick}>Add item</button> {/* on:click={onAddButtonClick} */}
            </div>
        )
    }
}

export default NewListItemInput;