console.log('Client fact side is working kk!')
console.log('Sachi is yours')

$(document).ready(function() {

    const factsMessage = document.querySelector('#factsMessage')
    const authorMessage = document.querySelector('#authorMessage')

    // factsMessage.textContent = ''

    //alert("Success")

        fetch('/facts').then((response)=> {
            response.json().then((data) => {

                    factsMessage.textContent = data.fact
                    authorMessage.textContent = data.author
                    

        
            })


    })

})
