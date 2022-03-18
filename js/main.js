const app = new Vue({
    el : '#app',

    data : {
        newToDo : '',
        toDoList : [],
    },

    methods : {
        addToDo(){
            if(this.newToDo.trim() != ''){
                const toAdd = {text : this.newToDo, done : false,};
                this.toDoList.push(toAdd);
                this.newToDo = '';
            }
        },

        deleteItem(index){
            this.toDoList.splice(index,1);
        },
    }
})