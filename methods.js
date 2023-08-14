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

            getLongestWord(){
                const analyseSentenceURL = `http://localhost:3008/api/word_game?sentence=${this.sentence}`;
                return axios.get(analyseSentenceURL).then(result => {
                    this.longestWrd = result.data.longestWord;
                })
            },

            getShortestWord(){
                const analyseSentenceURL = `http://localhost:3008/api/word_game?sentence=${this.sentence}`;
                return axios.get(analyseSentenceURL).then(result => {
                    this.shortestWrd = result.data.shortestWord;
                })
            },
            
            getSumOfWords(){
                const analyseSentenceURL = `http://localhost:3008/api/word_game?sentence=${this.sentence}`;
                return axios.get(analyseSentenceURL).then(result => {
                    this.wrdLengths = result.data.wordLengths;
                })
            },

            getRemainingBalance() {
                return axios.post('http://localhost:3008/api/enough', {
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
                return axios.post('http://localhost:3008/api/phoneBill/total', {
                    "bill": this.bill
                })
            },

            showTotalPhoneBill() {
                this.getTotalPhoneBill().then(result => {
                    this.totalPhoneBill = result.data.totalPhoneBill;
                })
            },
            
            showPrices(){
                const analyseSentenceURL = 'http://localhost:3008/api/phonebill/prices';
                return axios.get(analyseSentenceURL).then(result => {
                    this.smsCost = result.data.sms;
                    this.callCost = result.data.call;
                })
            },

            changePrice(){
                return axios.post('http://localhost:3008/api/phoneBill/price', {
                    "type" : this.type,
                    "price" : this.newPrice
                })
            }
        }
    })
})