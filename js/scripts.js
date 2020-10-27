//Monica Zavala sanchez
//desarollo en javascrip para llamar la API y mostrarla


(() => {
    //Seleccionado el contenedor para poner las tarjetas de las peliculas
    const container = document.getElementById('container-movies')


    //Pedir la informacion de las peliculas a la api
    const getDataMovie = async () => {
        //Puedes cambiar el tipo de peliculas por ejemplo cambiando la palabra por batman por marvel
        //const response = await fetch(`http://www.omdbapi.com/?apikey=e442a068&s=marvel`);
        const response = await fetch(`http://www.omdbapi.com/?apikey=e442a068&s=Batman`);
        let data = response.json()
        return data;
    }

    //Completando la promesa y agregando la tarjetas con la informacion de la API
    getDataMovie()
        .then(data => {
            console.log(data.Search)
            data.Search.map(movie =>{
                console.log(movie.Title)
                container.innerHTML += `
                    <div class="col-md-4 col-sm-12 p-3">
                        <img src="${movie.Poster}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title text-center">${movie.Title} ( ${movie.Year} )</h5>
                        </div>
                    </div>
                `;
            })

        });
})()
