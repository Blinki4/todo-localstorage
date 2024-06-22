export const getSearchedTodoList = (list, query) => {
    if (query) {
        return list.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    }
    return list
}