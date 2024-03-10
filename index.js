

const fetchImg = async()=>{
    console.log('Image function called');
    try {
       const pokemonName = document.getElementById('Name').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error('There is a problem');
        }else{
            const data = await response.json();
          
            const img = document.getElementById('pokemonImg');
            const images = data.sprites.front_default;
            console.log(images);
            img.style.display='block';
            img.src = images;
          
        }
    } catch (error) {
        console.log(error);
    }
  
}
fetchImg();