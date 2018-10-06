/*---componenten---*/
Vue.component ('movie-list', {
    template: '<div id="movie-list">Film overzicht <div v-for ="movie in movies" class="movie">{{ movie.film }} </div> </div>',
    data: function () {
     return  {
        movies: [
            {film: 'Pulp Fiction'},
            {film: 'James Bond'},
            {film: 'De Smurfen'}
        ],

    }
},

});

new Vue({
    el: '#wrapper',







// zalen: [
//     {zaal: '1'},
//     {zaal: '2'},
//     {zaal: '3'}
// ]

    });