const app = new Vue({
    el: "#app",
    
    data: {
        activeChat: 0,
        activeAvatar:"_1",
        activeName:"Michele",
        userMessage: "",
        searchedContact: "",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
        
    },

    methods: {
        /**
         * funzione che cambia il valore della variabile activeChat e della proprietà "visible" dell'oggetto selezionato tramite l'index passato come argomento
         * @param {Int} index  
         */
        isActive(index){
            this.activeChat = index;
            
        },

        /**
         * funzione che aggiunge alla chat attiva il messaggio scritto dall'utente
         * @param {String} userMessage 
         * @param {Object} list 
         */
        sendMessage(userMessage , list){
            list.forEach((element , index) => {
                if(this.activeChat === index){
                    if(userMessage.trim()!= ""){
                        element.messages.push({
                            date: 'Ora',
                            message: userMessage,
                            status: 'sent'
                        },)
                        this.userMessage = "";
                        
                    }
                }
                
            });
        },

        /**
         * funzione che risponde con "OK!!!!!!" dopo 1 secondo da quando l'utente inserisce il messaggio
         * @param {Int} index 
         */
        botAnswer(list){
            list.forEach((element , index )=> {
                if(this.activeChat === index){
                    setTimeout(()=>{
                        element.messages.push({
                            date: 'Ora',
                            message: "OK!!!!!",
                            status: 'received'
                        })
        
                    },1000)

                }
                
            });
        },

        /**
         * funzione che mostra nella lista contatti i contatti cercati dall'utente
         * @param {Array} list 
         */
        isSearched(list){
            list.forEach ((element) => {

                if(!element.name.toLowerCase().includes(this.searchedContact.toLowerCase())){
                    element.visible = false;
                }else{
                    element.visible = true;
                }
                
            });
        },

        /**
         * funzione che mostra nel DOM l'avat e il nome dell'utente selezionato nella lista dei contatti
         * @param {Array} list 
         */
        avatarActiveChat(list){
            list.forEach((element, index) => {
                if(index === this.activeChat){
                    this.activeAvatar = element.avatar;
                    this.activeName = element.name;
                }
            });
        }
    }
},)

