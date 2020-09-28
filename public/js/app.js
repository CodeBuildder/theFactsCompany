console.log('Client fact side is working kk!')
console.log('Sachi is yours')

$(document).ready(function() {

    $(window).scroll(function(){
 
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
            }else{
             $(".navbar").removeClass("sticky");
             $(".goTop").fadeOut();
            }
   });

   $('.menu-toggler').click(function(){
 
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");

    });

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
