import React, { Component } from "react";
import '../../styles/NewListItemInput.css'

class NewListItemInput extends Component {
    constructor() {
        super()
        this.onAddButtonClick = this.onAddButtonClick.bind(this)
    }

    onAddButtonClick() {
        let itemText = document.getElementById('itemTextInput').value
        document.getElementById('itemTextInput').value = ""
        this.props.onAddButtonClick(itemText)
    }

    render() {
        return (
            <div className='newListItemInput'> {/*class="newListItemInput"*/}
                <input  id="itemTextInput"/> {/*id="itemTextInput""*/}
                <button onClick={this.onAddButtonClick}>Add item</button> {/* on:click={onAddButtonClick} */}
            </div>
        )
    }
}

export default NewListItemInput;