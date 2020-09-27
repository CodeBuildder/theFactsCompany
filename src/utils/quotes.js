const request = require('request')

const quotes = (address, callback) => {
    const url = 'https://theentertainmentcompany.azurewebsites.net/quotes'

    request({url:url, json:true }, (error, response)=>{
        if(error){
            callback('Unable to connect to Server!', undefined)
        }else {
            callback("",{
                quote: response.body.quote,
            })
        }

        //console.log("Here is a fact! " + response.body.name + "It is authored by: " + response.body.author + ".")

    })
}    

module.exports = quotes