document.addEventListener("alpine:init", () => {
    
    Alpine.data('bootcampAPIWidgets', () => {
        return{
            sentence : '',
            longestWrd : '',
            shortestWrd : '',
            wrdLengths : 0,
            usage: '',
            airtime: 0,
            remainingBalance : 0,
            totalPhoneBill : 0,
            bill: '',
            price: 0,
            smsCost: 0,
            callCost: 0,
            type: '',
            newPrice: 0,
            message: '',

            getLongestWord(){
                const analyseSentenceURL = `/api/word_game?sentence=${this.sentence}`;
                return axios.get(analyseSentenceURL).then(result => {
                    this.longestWrd = result.data.longestWord;
                })
            },

            getShortestWord(){
                const analyseSentenceURL = `/api/word_game?sentence=${this.sentence}`;
                return axios.get(analyseSentenceURL).then(result => {
                    this.shortestWrd = result.data.shortestWord;
                })
            },
            
            getSumOfWords(){
                const analyseSentenceURL = `/api/word_game?sentence=${this.sentence}`;
                return axios.get(analyseSentenceURL).then(result => {
                    this.wrdLengths = result.data.wordLengths;
                })
            },

            getRemainingBalance() {
                return axios.post('/api/enough', {
                    "usage": this.usage,
                    "available" : this.airtime
                })
            },

            showRemainingBalance() {
                this.getRemainingBalance().then(result => {
                    this.remainingBalance = result.data.result;
                    setTimeout(function(){
                        this.remainingBalance = 0;
                    }, 4000)
                })
            },

            getTotalPhoneBill() {
                return axios.post('/api/phoneBill/total', {
                    "bill": this.bill
                })
            },

            showTotalPhoneBill() {
                this.getTotalPhoneBill().then(result => {
                    this.totalPhoneBill = result.data.totalPhoneBill;
                })
            },
            
            showPrices(){
                const analyseSentenceURL = '/api/phonebill/prices';
                return axios.get(analyseSentenceURL).then(result => {
                    this.smsCost = result.data.sms;
                    this.callCost = result.data.call;
                })
            },

            changePrice(){
                return axios.post('/api/phoneBill/price', {
                    "type" : this.type,
                    "price" : this.newPrice
                }).then(result => {
                    this.message = result.data.message;
                })
            },

            
        }
    })
})