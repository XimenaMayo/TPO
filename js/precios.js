   //Guardamos las urls de las apis que vamos a usar
   const url_api = ['https://api.mercadolibre.com/items/MLA1161085808' , 'https://api.mercadolibre.com/items/MLA1126219503' , 'https://api.mercadolibre.com/items/MLA924335555' , 'https://api.mercadolibre.com/items/MLA1112159254' , 'https://api.mercadolibre.com/items/MLA933463180' , 'https://api.mercadolibre.com/items/MLA1156177498' , 'https://api.mercadolibre.com/items/MLA803728646' , 'https://api.mercadolibre.com/items/MLA1126576379' , 'https://api.mercadolibre.com/items/MLA921746496' , 'https://api.mercadolibre.com/items/MLA1187363403']
       
   //Indicamos que la función va a ser asíncrona (lo usamos cuando trabajamos con apis externas)
   async function obtenerPrecios(){

       var precios = []

       for (let i = 0 ; i<10 ; i++){
           
           //Fetch va a buscar los datos a la api y devuelve promesas
           //Con await decimos que espere porque puede tardar 
           const response = await fetch(url_api[i])
           console.log(response) 
       
           //Debemos transformar esto en un objeto json para poder trabajarlo:
           const data = await response.json()
           console.log(data)

           //Ahora podemos mostrar los datos:
           const precio = data.price
           console.log(precio)

           //Generamos array de precios
           precios.push(precio)
           console.log(precios[i])
       }
       document.getElementById("precio0").innerHTML = JSON.stringify(precios[0], null, 2)   
       document.getElementById("precio1").innerHTML = JSON.stringify(precios[1], null, 2)     
       document.getElementById("precio2").innerHTML = JSON.stringify(precios[2], null, 2)   
       document.getElementById("precio3").innerHTML = JSON.stringify(precios[3], null, 2)
       document.getElementById("precio4").innerHTML = JSON.stringify(precios[4], null, 2)   
       document.getElementById("precio5").innerHTML = JSON.stringify(precios[5], null, 2)    
       document.getElementById("precio6").innerHTML = JSON.stringify(precios[6], null, 2)   
       document.getElementById("precio7").innerHTML = JSON.stringify(precios[7], null, 2)    
       document.getElementById("precio8").innerHTML = JSON.stringify(precios[8], null, 2)   
       document.getElementById("precio9").innerHTML = JSON.stringify(precios[9], null, 2)        
   }

   obtenerPrecios()
   //Si vamos actualizando se va a ir viendo el cambio en los datos