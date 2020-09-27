const request = require('request')

const facts = (address, callback) => {
    const url = 'https://theentertainmentcompany.azurewebsites.net/facts'

    request({url:url, json:true }, (error, response)=>{
        if(error){
            callback('Unable to connect to Server!', undefined)
        }else {
            callback("",{
                fact: response.body.name,
                author: response.body.author
            })
        }

        //console.log("Here is a fact! " + response.body.name + "It is authored by: " + response.body.author + ".")

    })
}    

module.exports = facts