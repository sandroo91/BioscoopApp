<template>
  <body style="background-color: slategray;">

    <br>
    <br>
    <b-dropdown text="Kies een dag:" class="m-2">
      <b-dropdown-item-button>Maandag</b-dropdown-item-button>
      <b-dropdown-item-button>Dinsdag</b-dropdown-item-button>
      <b-dropdown-item-button>Woensdag</b-dropdown-item-button>
      <b-dropdown-item-button>Donderdag</b-dropdown-item-button>
      <b-dropdown-item-button>Vrijdag</b-dropdown-item-button>
      <b-dropdown-item-button>Zaterdag</b-dropdown-item-button>
      <b-dropdown-item-button>Zondag</b-dropdown-item-button>
    </b-dropdown>
    <div style="margin-left: 160px;">
    <b-table class="tijd" striped hover :items="items" :fields="fields"></b-table>
    </div>
    <br>
    <h2 align="center">Binnenkort in Retro Cinema</h2>

      <!-- CAROUSEL CODE HIERONDER -->
    <div align="center">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333; width: 280px; height: 160px; margin-bottom: 50px;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="5000"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"

      >

        <!-- Text slides with image -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100"
               src="../assets/creed2.jpg" alt="image slot"
               style="width: 280px; height: 160px;"/>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100"
               src="../assets/dunkirk.jpg" alt="image slot"
               style="width: 280px; height: 160px;">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100"
               src="../assets/fantasticbeasts.jpg" alt="image slot"
               style="width: 280px; height: 160px;">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100"
               src="../assets/firstman.jpg" alt="image slot"
               style="width: 280px; height: 160px;">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100"
               src="../assets/halloween.jpg" alt="image slot"
               style="width: 280px; height: 160px;">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100"
               src="../assets/hunterkiller.jpg" alt="image slot"
               style="width: 280px; height: 160px;">
        </b-carousel-slide>
      </b-carousel>

  <!--    <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
  -->

    </div>
  >







  </div>
  </body>
</template>

<script>
    export default {
        name: "programma",
      data () {
        return {
          slide: 0,
          sliding: true,
          fields: [ 'Titel', 'Zaal_1', 'Zaal_2','Zaal_3','Zaal_4','Zaal_5'],
          items: [
            { Titel: 'James Bond', Zaal_1: '10:30- 12:30', Zaal_2:'14:30- 17:30', Zaal_3: '', Zaal_4:'', Zaal_5:'' },
            { Titel: 'De Smurfen', Zaal_1: '13:00- 14:30', Zaal_2:'', Zaal_3: '15:00- 17:00', Zaal_4:'', Zaal_5:'' },
            { Titel: 'Haniball', Zaal_1: '15:00- 17:00', Zaal_2:'18:30- 19:30', Zaal_3: '', Zaal_4:'16:30- 18:30', Zaal_5:'' },
            { Titel: 'King Kong', Zaal_1: '', Zaal_2:'21:00- 22:30', Zaal_3: '', Zaal_4:'', Zaal_5:'' },
            { Titel: 'Face Book', Zaal_1: '', Zaal_2:'18:30- 20:30', Zaal_3: '', Zaal_4:'', Zaal_5:'18:30- 20:30' },

          ]
        }
      },
      methods: {
        onSlideStart (slide) {
          this.sliding = true
        },
        onSlideEnd (slide) {
          this.sliding = false
        }
      }
    }
</script>

<style scoped>
  .tijd {
    width: 800px;
    height: 150px;

    font-size: 15px;
    color: black;
    background-color: lightgray;
    line-height: 1.4em;
    border: 5px dimgray;
    margin: 0 auto;

  }

</style>
