let root = new Vue ({
    el: "#root",
    data:{
        listaFatti:[],
        cestino:[],
        listaDaFare:[
            compitoUno = {
            compito: "do something",
          },
          compitoDue = {
            compito: "do else",
          },
          compitoTre = {
            compito: "do something else",
          }
        ],
        task: {
            compito: ""
        }
    },
    methods:{
        creaTask (){
            if (this.task.compito.length >= 3){
                this.listaDaFare.push(this.task);
                this.task = {
                    compito: ""
                };
            }
        },
        rimuoviTask(list){
            list.splice(0, list.length)
        },
        spostaTask(index, listaPartenza, listaArrivo){
            listaArrivo.push(listaPartenza[index])
            listaPartenza.splice(index, 1);
        }
    }
})
