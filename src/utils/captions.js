const request = require('request')

const captions = (address, callback) => {
    const url = 'https://theentertainmentcompany.azurewebsites.net/captions'

    request({url:url, json:true }, (error, response)=>{
        if(error){
            callback('Unable to connect to Server!', undefined)
        }else {
            callback("",{
                caption: response.body.caption,
            })
        }

        //console.log("Here is a fact! " + response.body.name + "It is authored by: " + response.body.author + ".")

    })
}    

module.exports = captions