const url = "http://www.omdbapi.com/?";
const apiKey = "9f40028a";

$(function(){
    $(document).on("keypress", "input#search", function(event) {
        console.log($(event.target).val());
    });

    $(document).on("click", "button#btn-search", function(event){
        var searchTerm = $("input#search").val();
        searchMoviesByTerm(searchTerm);
    })
    $(document).on("click", "a#details-button", function(event){
        var id =$(event.target).attr("data-id");
         $.ajax({
        method: "GET",
        url: url + "apiKey=" + apiKey + "&i=" + id
    }).done(function(response){
        
            var movie = new Movie(response);
            displayMovieModal(movie);
        
    });
});
});

const searchMoviesByTerm = function (search) {
    $.ajax({
        method: "GET",
        url: url + "apiKey=" + apiKey + "&s=" + search
    }).done(function(response){
        
        response.Search.forEach(element => {
            var movie = new MovieShortDetails(element);
            displayMovie(movie);
        });
    
       
    });
}

const displayMovie = function (movie) {
   var temp = $("div#template").clone();
   
   var img = temp.find("img");
   img.attr("src" , movie.img);

   temp.removeClass("d-none");
   temp.attr("id", "");
   var title = temp.find("h5.card-title");
   title.text(movie.title);

   var text = temp.find("p.card-text");
  

   text.html(movie.year + "<br>" + movie.type);
   temp.find("#details-button").attr("data-id", movie.imdb);

   $("div.movies").append(temp);
 

}

const displayMovieModal = function (movie) {
    var modal = $("div#exampleModalCenter");

    modal.find("h5.modal-title").text(movie.title);
    modal.find("img").attr("src", movie.img);
    modal.find("p.card-text").html(movie.year + "<br>" + movie.genre.join(", ") + "<br>" + movie.release);
    

}

class MovieShortDetails {
    constructor(data){
        this.title = data.Title;
        this.year = data.Year;
        this.img = data.Poster;
        this.type = data.Type;
        this.imdb = data.imdbID;

    }
}

class Movie {
    constructor(response) {
        this.title = response.Title;
        this.year = response.Year;
        this.release = response.Released;
        this.genre = response.Genre.split(", ");
        this.director = response.Director;
        this.actors = response.Actors.split(", ");
        this.awards = response.Awards;
        this.img = response.Poster;
        this.imdbID = response.imdbID;
    }
}

