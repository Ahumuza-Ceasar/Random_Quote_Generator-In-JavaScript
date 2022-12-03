let button = document.querySelector('#btn')
let  quotes =document.querySelector('.quote')
let speaker = document.querySelector('.speaker')

let myQuotes =[
    {
        quotation:"If you think you can do a thing or think you can’t do a thing, you’re right.",
        saidBy:"Henry Ford"
    },

    {
        quotation:"Hard work certainly goes a long way. These days a lot of people work hard, so you have to make sure you work even harder and really dedicate yourself to what you are doing and setting out to achieve",
        saidBy:"Lakshmi Mittal."
    },


    {
        quotation:"What other people label or might try to call failure, I have learned is just God’s way of pointing you in a new direction",
        saidBy:"Oprah Winfrey"
    },

    {
        quotation:"Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
        saidBy:"Steve Jobs"
    },

    {
        quotation:"The biggest risk is not taking any risk… In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        saidBy:"Mark Zuckerberg"
    },

    {
        quotation:"Loyalty is not won by being first. It is won by being best.",
        saidBy:"Stefan Persson"
    },

    {
        quotation:"If people are not laughing at your goals, your goals are too small.",
        saidBy:"Azim Premji"
    },

    {
        quotation:"You can never quit. Winners never quit, and quitters never win.",
        saidBy:"Ted Turner"
    },

    {
        quotation:"Sweat equity is the most valuable equity there is. Know your business and industry better than anyone else in the world. Love what you do or don’t do it.",
        saidBy:"Mark Cuban"
    },

    {
        quotation:"Whether you’ve found your calling, or if you’re still searching, passion should be the fire that drives your life’s work.",
        saidBy:"Michael Dell"
    },

    {
        quotation:"Succes requires dedication, consistency,patience,prayer and hardwork",
        saidBy:"Ahumuza J Ceasar"
    }
]




function generateQuote(){
    let randomQuote =Math.floor(Math.random()*myQuotes.length)
    quotes.innerHTML = "&#8220;"+ myQuotes[randomQuote].quotation  + "&#8221;"

    speaker.innerHTML ="____"+myQuotes[randomQuote].saidBy 

}

button.addEventListener("click",generateQuote)