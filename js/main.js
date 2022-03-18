const app = new Vue({
    el : '#app',

    data : {
        newToDo : 'HELLO',

        toDoList : [{
            text : 'esempio',
            done : false ,
            }
        ],
    },

    methods : {
        addToDo(){
            const toAdd = {text : this.newToDo, done : false,};
            this.toDoList.push(toAdd);
        }
    }
})