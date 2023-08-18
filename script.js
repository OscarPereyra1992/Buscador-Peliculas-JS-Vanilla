document.getElementById('searchButton').addEventListener('click',searchMovies);

let apiKey = '890cda877f85e4bb64e7d63d78737887';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200';

let resultContainer = document.getElementById('results');

function searchMovies() {
    resultContainer.innerHTML= 'Cargando...';
    let searchInput = document.getElementById('searchInput').value;
    
    fetch(`${urlBase}?api_key=${apiKey}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
   
    resultContainer.innerHTML= '';

    if(movies.length === 0){
        resultContainer.innerHTML = '<p> No movies found to display </p>';
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let realeaseData = document.createElement('p');
        realeaseData.textContent ='La fecha de lanzamiento fue:'+ movie.release_date ;

        let overview = document.createElement('p');
        overview.textContent = movie.overview ;

        let posterPath = urlImg + movie.poster_path;
        let poster = document.createElement('img');
        poster.src = posterPath;


        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(overview);
        movieDiv.appendChild(realeaseData);

        resultContainer.appendChild(movieDiv);
    });
}