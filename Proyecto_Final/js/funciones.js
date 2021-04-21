

function cargarPortafolio(){
    fetch('../recursos/datos/datos.json')  
        .then(function(respuesta){          
            return respuesta.json();
            
        }).then(function(datos){
            let html = '';
            // console.log(datos);
            console.log(datos.portafolio)
            datos.portafolio.forEach(portafolio =>{
                html += `
                <div class="trabajo">
                <div class="img col-lg-3">
                    <img src="../recursos/img/${portafolio.id}.jpg" alt="Imagen">
                </div>
                    <div class="texto">
                        <h3>${portafolio.nombre}</h3>
                    <p>${portafolio.desc}</p>
                    
                </div>
            </div>
                `;
            });
                       
            document.querySelector('#trabajos').innerHTML = html;
        }).catch(function(error){
            console.log(error);
        })
}
// document.getElementById('target').style.color = 'tomato';
//   document.head.appendChild(style);

//window.onload = cargarPortafolio;

function cargarTrabajadores(){
    fetch('../recursos/datos/informacion.json')
        .then(function(respuesta){
            return respuesta.json();
        }).then(function(informacion){
            let html = '';
            console.log(informacion.trabajadores)
            informacion.trabajadores.forEach(trabajadores =>{
                html += `
                <div class="trabajadores">
                <div class="img">
                      <img src="../img/${trabajadores.id}.jpg" alt="Imagen">
                </div>
                    <div class="info">
                        <h3>${trabajadores.puesto}</h3>
                        <h4>${trabajadores.nombre}</h4>
                        <p>${trabajadores.desc}</p>
                    </div>
                    <div class="redes">
                <a href="https://www.facebook.com/"><img src="/recursos/redes/1.png" alt="Facebook"></a>
                <a href="https://twitter.com/"><img src="/recursos/redes/2.png" alt="Twitter"></a>
                <a href="https://instagram.com/"><img src="/recursos/redes/3.png" alt="Instagram"></a>
            </div>
            
                <\div>
                `;
            });
            document.querySelector('#informacion').innerHTML = html;

        }).catch(function(error){
            console.log(error);
        })
        
}
function lanzadera(){
    cargarPortafolio();
    cargarTrabajadores();
}

window.onload = lanzadera;

//window.onload = cargarTrabajadores;