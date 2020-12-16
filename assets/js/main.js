let root = new Vue ({
    el: "#root",
    data:{
        list:["do something", "do else", "do something else"],
        task: ""
    },
    methods:{
        creaTask (){
            if (this.task.length >= 3){
                this.list.push(this.task);
                this.task = "";
            }
        },
        rimuoviTask (index){
            this.list.splice(index, 1);
        }
    }
})