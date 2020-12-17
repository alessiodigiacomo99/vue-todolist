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
        rimuoviTask (index, list){
            list.splice(index, 1);
        },
        spostaTask(index, listaPartenza, listaArrivo){
            listaArrivo.push(listaPartenza[index])
            this.rimuoviTask(index, listaPartenza);
        }
    }
})
/* L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata
inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
si, l'utente é un ropi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino" */