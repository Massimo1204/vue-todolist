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
            console.log(this.toDoList[0].done)
        }
    }
})