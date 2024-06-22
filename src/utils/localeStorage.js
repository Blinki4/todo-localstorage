export const setToLocaleStorage = (id, object) => {
    const json = JSON.stringify(object)
    localStorage.setItem(id, json)
}


export const removeFromLocaleStorage = (key) => {
    localStorage.removeItem(key)
}

export const updateLocaleItemToImportant = (key) => {
    const item = JSON.parse(localStorage.getItem(key))
    item.important = !item.important
    setToLocaleStorage(key, item)
}