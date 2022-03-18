const app = new Vue({
    el : '#app',

    data : {
        newToDo : '',
        toDoList : []
    },

    methods : {
        addToDo(){
            const toAdd = {text : this.newToDo, done : false,};
            this.toDoList.push(toAdd);
        },

        deleteItem(index){
            this.toDoList.splice(index,1);
        }
    }
})