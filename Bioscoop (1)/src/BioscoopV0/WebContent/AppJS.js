
var app = new Vue({


    el: '#wrapper',
    data: {
            title:"Films",
            items: [],

        },


    methods: {
        addItem: function() {
            var input = document.getElementById('itemForm');   //collectie van alle elementen in het document 'itemForm' in de tag input

            if (input.value !== '') {       //check als de input niet leeg is
                this.items.push({           //dan zet de items in de array
                    text: input.value
                })
                input.value = "";
            }
        },
        deleteItem: function(index) {
            this.items.splice(index, 1);    //verwijder de film(data) uit de array
                 },

    }


});