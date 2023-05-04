//const saveList = (state, todoItem) => {
//    const obj = {completed: false, item: restaurant, index: state.index};
    //localStorage.setItem(todoItem,JSON.stringify(obj));
    //state.restaurant.push(obj);

//    }
export default {
    SET_STORE(state, store) {
        state.store = store;
    },
    SET_COUNT(state, count) {
        state.count = count;
    },
}