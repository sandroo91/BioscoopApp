<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                label-goto-slide
                background="#ababab"
                :interval="5000"
                img-width="1024"
                img-height="768"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >


      <!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">-->
        <!--<p>#Caroussel is alive</p>-->
      <!--</b-carousel-slide>-->
      <!--&lt;!&ndash; Text slides with image &ndash;&gt;-->

      <!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">-->
        <!--<p>Binnenkort in de Bioscoop</p>-->

      <!--</b-carousel-slide>-->

      <!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
        <!--<p>Binnenkort in de Bioscoop</p>-->
      <!--</b-carousel-slide>-->

      <b-carousel-slide img-src="src/images/koala.jpg">
      <p>Binnenkort in de Bioscoop</p>
      </b-carousel-slide>

      <b-carousel-slide img-src="src/images/Penguins.jpg">
      <p>Binnenkort in de Bioscoop</p>
      </b-carousel-slide>

      <b-carousel-slide img-src="src/images/Jellyfish.jpg">
      <p>Binnenkort in de Bioscoop</p>
      </b-carousel-slide>

      <b-carousel-slide img-src="src/images/Lighthouse.jpg">
      <p>Binnenkort in de Bioscoop</p>
      </b-carousel-slide>


      <!--<p class="mt-4">-->
        <!--Slide #: {{ slide }}<br>-->
        <!--Sliding: {{ sliding }}-->
      <!--</p>-->

    </b-carousel>

     </div>
</template>

<script>
    export default {
        data () {
            return {
                slide: 0,
                sliding: null
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
 carousel-1.vue