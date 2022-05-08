//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


// Pdgpn76oR0SCDKTH0ahz0BV7bOFGjqhGocs3GF2O

 document.querySelector('button').addEventListener('click', getPicture)

 function getPicture (){
     let date = document.querySelector('#userInput').value
    

    // fetch goes  
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Pdgpn76oR0SCDKTH0ahz0BV7bOFGjqhGocs3GF2O&date=${date}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('img').src =data.url 
        
        fetch (`https://apod.nasa.gov/apod/image/2204/VortexAurora_Suarez_1080.jpg&date=${date}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data) 
            document.querySelector('img').src =data.url
        })

    })
    .catch(err => {
        console.log('errors $(err)')
    })
}