import Constants from '../constants/Constants'

export async function deleteListItem(itemId, promiseItems) {
    let objectId = await getItemObjectId(itemId, promiseItems)
    const res = await fetch(Constants.serverAddress + Constants.deleteItemEndpoint + objectId, { method: 'DELETE' })
    const text = await res.text()

    if (res.ok) {
        return text
    } else {
        throw new Error(text)
    }
}

export async function updateListItem(itemId, checked, promiseItems) {
    let objectId = await getItemObjectId(itemId, promiseItems)
    const res = await fetch(Constants.serverAddress + Constants.getTodosEndpoint, { method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "_id": objectId,
            "done": checked
        }) 
    })
    const text = await res.text()

    if (res.ok) {
        return text
    } else {
        throw new Error(text)
    }
}

export async function getAllItems() {
    const res = await fetch(Constants.serverAddress + Constants.getTodosEndpoint)
    const text = await res.text()

    if (res.ok) {
        return text
    } else {
        throw new Error(text)
    }
}

async function getItemObjectId(itemNumber, promiseItems) {
    let objectId = JSON.parse(await promiseItems)[itemNumber]._id
    return objectId
}