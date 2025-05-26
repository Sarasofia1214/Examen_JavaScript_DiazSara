const api= "https://68335f6e464b499636ff3ec4.mockapi.io/prueba/filtro";
const container = document.getElementById("container_comida");
const plantilla = document.getElementById("template_comida");
const more_info = document.getElementById("tarjeta_info")

fetch (api)
.then (res => res.json())
.then (data =>{
    const  recetas= data[0].meals;

    recetas.forEach(receta => {
        const clone = plantilla.content.cloneNode(true);
  
  
        clone.querySelector('.nombre').src = receta.strMeal || '';
        clone.querySelector('.foto').src = receta.strMealThumb|| '';
        clone.querySelector('.nombre_categoria').textContent = receta.strCategory;
        clone.querySelector('.video').src = receta.strYoutube || '';
        clone.querySelector('.tags').textContent = receta.strTags;
  

        clone.querySelector('.Receta').onclick = () => {
          mostrarInformacion(receta);
        };
  
  
        container.appendChild(clone);
      });
    });
  
  
//   function mostrarInformacion(receta) {
//     document.getElementById('foto_info').src = receta.foto || './img/default.png';
//     document.getElementById('nombre_info').textContent = receta.nombre;
//     document.getElementById('pais_info').textContent = receta.pais || 'Desconocido';
//     document.getElementById('genero_info').textContent = receta.genero || 'Pop';
  
  
//     if (modal.style.display === 'block') {
//       modal.style.display = 'none';
     
//     } else {
//       modal.style.display = 'block';
  
  
//     }
//   }
  
  
//   document.getElementById('btn_cerrar').onclick = () => {
//     modal.style.display = 'none';
//   };
  