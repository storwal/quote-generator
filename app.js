let btn = document.getElementById('new-quote');
let quote = document.getElementById('quote')
let person = document.querySelector('.person')

const quotes = [{
  quote: "The best way to find yourself is to lose yourself in the service of others.",
  person: `Mahatma Gandhi`
},{
  quote: "If you want to live a happy life, tie it to a goal, to people or things.",
  person: `Albert Einstein` 
},{
  quote: "At his best, man is the noblest of all animals; separated form law and justice he is the worst",
  person: `Aristotle`  
},{
  quote: "Your time is limited, so dont waste it living someone else's life",
  person: `Steve Jobs`   
},{
  quote: "tell me and i forget. Teach me and i remember. Involve me and i learn",
  person: `Benjamin Franklin`    
},{
  quote: "Shit happens",
  person: `Robert kyle`   
},{
  quote: "It does not matter how slowly you go as long as you do not stop",
  person: `confucius`  
},{
  quote: "Our lives begin to end the day we become silent about things that matter",
  person: `Martin luther King jr` 
},{
  quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck",
  person: `Dalai Lama`  
},{
  quote: "The journey of a thousand miles begins with one step",
  person: `Lao Tzu` 
},]


btn.addEventListener('click', function(){



let random = Math.floor(Math.random() * quotes.length)

quote.innerHTML = quotes[random].quote
person.innerHTML = quotes[random].person
})