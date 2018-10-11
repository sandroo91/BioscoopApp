<template >
  <body>
    <div class="hoofddiv" align="center">
      <br>
      <img src="../assets/retrocinema.jpg" height="200" width="200" style='align: center'>
      <br>

      <div class="div1">
      <p align="left"> Welkom bij Retro Cinema,
       onze openingstijden: <br><br>
      Maandag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16:00 - 01:00<br>
      Dinsdag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16:00 - 01:00 <br>
      Woensdag: &nbsp;&nbsp;&nbsp;&nbsp;16:00 - 01:00<br>
      Donderdag: &nbsp;&nbsp;&nbsp;16:00 - 01:00<br>
      Vrijdag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16:00 - 01:00<br>
      Zaterdag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14:00 - 01:00<br>
      Zondag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14:00 - 01:00<br><br>
      Uitgezonderd acties en feestdagen </p>

      </div>

      <div class="div2">
        <p align="left">
          Contact info: <br><br>
          Retro Cinema N.V.<br>
          steenstraatweg 123 <br>
          1234 AB Droomstad <br>
          Fantasialand <br><br>
          Tel nr: 0123 - 456789 <br>
          Fax: 987654321<br>
          Email: mail.adres@provider.com<br>

        </p>
      </div>
    </div>
  </body>
</template>

<script>
    export default {
        name: "Home",

    }
</script>

<style scoped>
  .div1 {
    float: left;
    background-color: lightgray;
  }

  .div2 {
    float:right;
    background-color: lightgray;
  }
  .hoofddiv{
    background-color: lightslategray;
  }
</style>
