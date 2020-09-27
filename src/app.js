const express = require('express')
const path = require('path')
const hbs = require('hbs')

const riddles = require('./utils/riddles')
const facts = require('./utils/facts')
const quotes = require('./utils/quotes')
const captions = require('./utils/captions')

const app = express()
const port = process.env.PORT || 3000


const publicPath =path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

app.get('', (req,res)=>{
    res.render('index', {
        "title": "Fact App",
        "name": "CodeBuilder"
    })

})

// app.get('/riddles', (req,res) =>{
 
//     riddles('', (error, {riddle, answer} ={} ) =>{
//         if(error){
//              return res.send({
//                  error
//             })
//         }

//         res.send({
//             "Here is a question for ya!":riddle,
//             answer: answer
//         })  
//     })
// })

// app.get('/captions', (req,res) =>{
 
//     captions('', (error, {caption} ={} ) =>{
//         if(error){
//              return res.send({
//                  error
//             })
//         }

//         res.send({
//             "Caption for the day!":caption
//         })  
//     })
// })

// app.get('/quotes', (req,res) =>{
 
//     quotes('', (error, {quote} ={} ) =>{
//         if(error){
//              return res.send({
//                  error
//             })
//         }

//         res.send({
//             "Thought for the day is:":quote
//         })  
//     })
// })

app.get('/facts', (req,res) =>{
 
    facts('', (error, {fact, author} ={} ) =>{
        if(error){
             return res.send({
                 error
            })
        }
        res.send({
            fact: fact,
            author : author
        })  
    })

})

app.listen(port,() => {
    console.log("Server is running, wakey wakey kk.")
})
