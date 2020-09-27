const request = require('request')
const riddles = (address, callback) => {
    const url = 'https://theentertainmentcompany.azurewebsites.net/riddles'

    request({url:url, json:true }, (error, response)=>{
        if(error){
            callback('Unable to connect to Server!', undefined)
        }else {
            callback("",{
                riddle: response.body.riddle,
                answer: response.body.answer
                
            })
        }

        //console.log("Here is a fact! " + response.body.name + "It is authored by: " + response.body.author + ".")

    })
}    

module.exports = riddles