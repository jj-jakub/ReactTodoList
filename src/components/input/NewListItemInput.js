import React, { Component } from "react";

function onAddButtonClick() {
    let itemText = document.getElementById('itemTextInput').value
    document.getElementById('itemTextInput').value = ""

    // dispatch('addButtonClick', {
    //     itemText: itemText
    // })
}

class NewListItemInput extends Component {
    render() {
        return (
            <div class="newListItemInput"> {/*class="newListItemInput"*/}
                <input id="itemTextInput"/> {/*id="itemTextInput""*/}
                <button >Add item</button> {/* on:click={onAddButtonClick} */}
            </div>
        )
    }
}

export default NewListItemInput;