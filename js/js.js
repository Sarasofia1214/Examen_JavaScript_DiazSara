const api= "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
const container = document.getElementById("container_comida");
const plantilla = document.getElementById("template_comida");
const more_info = document.getElementById("tarjeta_info")

fetch (api)
.then (res => res.json())
.then (data =>{
    const  recetas= data.meals;

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
  
    function mostrarInformacion(receta) {
        document.getElementById('foto_info').src = receta.strMealThumb || 'https://media.istockphoto.com/id/886600658/es/foto/plato-vac%C3%ADo-de-alimentos-despu%C3%A9s-de-comer-en-una-mesa-de-madera.jpg?s=170667a&w=0&k=20&c=awejW2hSeOCQd1EHcEr7VthUPhr5RmFF_9pOHSHzSKk=';
        document.getElementById('nombre_info').textContent = receta.strMeal;
        document.getElementById('instructions_info').textContent = receta.strInstructions || 'Desconocido';
        document.getElementById('area_info').textContent = receta.strArea || 'Dessert';
      
      
        if (more_info.style.display === 'block') {
          more_info.style.display = 'none';
         
        } else {
          more_info.style.display = 'block';
        }
      }
      
      
      document.getElementById('btn_cerrar').onclick = () => {
        modal.style.display = 'none';
      };
      
      
      
      