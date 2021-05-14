<template>
  <!-- FORM BOX -->
  <div class="form-box login-register-form-element">
    <!-- FORM BOX DECORATION -->
    <img class="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket">
    <!-- /FORM BOX DECORATION -->

    <!-- FORM BOX TITLE -->
    <h2 class="form-box-title">Selecciona un juego.</h2>
    <!-- /FORM BOX TITLE -->

    <!-- FORM -->
    <form @submit.prevent="sendUserData" class="form">
      <!-- FORM ROW -->
      <div class="form-row">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM INPUT -->
          <div class="form-select">
            <label for="id-game">Selecciona juego.</label>
            <select v-model="selectedGame" id="id-game">
              <option>Brawl Stars</option>
              <option>Clash Royale</option>
              <option>Clash of Clans</option>
            </select>
          </div>
          <!-- /FORM INPUT -->
        </div>
        <!-- /FORM ITEM -->
      </div>
      <!-- /FORM ROW -->

      <!-- FORM ROW -->
      <div class="form-row">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM INPUT -->
          <div class="form-input">
            <label for="usertag">Nombre de usuario: </label>
            <input v-model="userTagName" type="text" id="usertag" name="usertag">
          </div>
          <!-- /FORM INPUT -->
        </div>
        <!-- /FORM ITEM -->
      </div>
      <!-- /FORM ROW -->

      <!-- FORM ROW -->
      <div class="form-row space-between">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- CHECKBOX WRAP -->
          <div class="checkbox-wrap">
            <input type="checkbox" id="login-remember" name="login_remember" checked>
            <!-- CHECKBOX BOX -->
            <div class="checkbox-box">
              <!-- ICON CROSS -->
              <svg class="icon-cross">
                <use xlink:href="#svg-cross"></use>
              </svg>
              <!-- /ICON CROSS -->
            </div>
            <!-- /CHECKBOX BOX -->
            <label for="login-remember">Guardar sesión.</label>
          </div>
          <!-- /CHECKBOX WRAP -->
        </div>
        <!-- /FORM ITEM -->

        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM LINK -->
          <a class="form-link">¿Cómo obtengo uno?</a>
          <!-- /FORM LINK -->
        </div>
        <!-- /FORM ITEM -->
      </div>
      <!-- /FORM ROW -->

      <!-- FORM ROW -->
      <div class="form-row">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- BUTTON -->
          <button class="button medium secondary">¡ Comprobar y visualizar !</button>
          <!-- /BUTTON -->
        </div>
        <!-- /FORM ITEM -->
      </div>
      <!-- /FORM ROW -->
    </form>
    <!-- /FORM -->

    <!-- LINED TEXT -->
    <p class="lined-text"><a class="form-link" href="">Política de privacidad y cookies.</a></p>
    <!-- /LINED TEXT -->
  </div>
  <!-- /FORM BOX -->
</template>

<script>

import axios from "axios";

export default {
  name: "componentMain",
  data() {
    return {
      selectedGame: 'Ingresa nombre de usuario.',
      userTagName: '',
      error: false
    }
  },
  methods: {
    sendUserData() {
      axios('/link-api/' + this.userTagName).then(response => response.data == 404 ? alert("NOPE") : window.location.replace("/panel"));
    }
  }
}
</script>

<style scoped>

</style>