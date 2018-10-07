<template>
    <b-table class="tijd" striped hover :items="items" :fields="fields"></b-table>
</template>

<script>

    export default {
        data () {
            return {

                fields: [ 'Titel', 'Zaal_1', 'Zaal_2','Zaal_3','Zaal_4','Zaal_5'],
                items: [
                    { Titel: 'James Bond', Zaal_1: '10:30- 12:30', Zaal_2:'14:30- 17:30', Zaal_3: '', Zaal_4:'', Zaal_5:'' },
                    { Titel: 'De Smurfen', Zaal_1: '13:00- 14:30', Zaal_2:'', Zaal_3: '15:00- 17:00', Zaal_4:'', Zaal_5:'' },
                    { Titel: 'Haniball', Zaal_1: '15:00- 17:00', Zaal_2:'18:30- 19:30', Zaal_3: '', Zaal_4:'16:30- 18:30', Zaal_5:'' },
                    { Titel: 'King Kong', Zaal_1: '', Zaal_2:'21:00- 22:30', Zaal_3: '', Zaal_4:'', Zaal_5:'' },
                    { Titel: 'Face Book', Zaal_1: '', Zaal_2:'18:30- 20:30', Zaal_3: '', Zaal_4:'', Zaal_5:'18:30- 20:30' },

                ]
            }
        }
    }
</script>

<style >
    .tijd {
        width: 150px;
        height: 150px;
        font-family: Georgia, "Times New Roman", Serif;
        font-size: 15px;
        color: black;
        background-color: gold;
        line-height: 1.4em;
        border: 5px solid gold;
        margin: 0 auto;

    }
</style>


}
