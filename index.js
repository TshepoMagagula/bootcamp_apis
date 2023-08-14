import express from 'express';
import cors from 'cors';
import {totalPhoneBill} from './TotalPhoneBill.js';
import {enoughAirtime} from './enoughAirtime.js'; 
import {shortestWord, longestWord, wordLengths} from './wordGame.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const PORT = process.env.PORT || 3008;

app.get('/api/word_game', function(req, res) {
    const sentence = req.query.sentence;
    
    res.json({
        "shortestWord" : shortestWord(sentence),
        "longestWord" : longestWord(sentence),
        "wordLengths" : wordLengths(sentence)
    })
});

app.post('/api/phoneBill/total', function(req, res) {
    const bill = req.body.bill;
    
    res.json({
        "totalPhoneBill" : totalPhoneBill(bill)
    })
});

const prices = {
    'sms' : 0.65,
    'call' : 2.75
}

app.get('/api/phonebill/prices', function(req, res) {

    res.json({
        call : prices.call,
        sms : prices.sms
    })
});

app.post('/api/phoneBill/price', function(req, res) {
    const type = req.body.type;
    const price = req.body.price;
    prices[type] = price;
    
    res.json({
        status : 'success',
        message : `The ${type} was set to ${price}` 
    })
});

app.post('/api/enough', function(req, res) {
    const usage = req.body.usage;
    const available = req.body.available;
    
    res.json({
        result : enoughAirtime(usage, available) 
    })
});

app.listen(PORT, () => console.log(`started on port ${PORT}`))