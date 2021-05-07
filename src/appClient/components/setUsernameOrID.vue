<template>
  <!-- FORM BOX -->
  <div class="form-box login-register-form-element">
    <!-- FORM BOX DECORATION -->
    <img class="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket">
    <!-- /FORM BOX DECORATION -->

    <!-- FORM BOX TITLE -->
    <h2 class="form-box-title">Usuario/ID</h2>
    <!-- /FORM BOX TITLE -->

    <!-- FORM -->
    <form class="form" @submit.prevent="searchUser">

      <!-- FORM ROW -->
      <div class="form-row">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM INPUT -->
          <div class="form-input">
            <label for="login-username">Usuario/ID</label>
            <input type="text" id="login-username" v-model="getByTag.tag">
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
          <div class="form-select">
            <label for="id-game">Juego</label>
            <select id="id-game" v-model="getByTag.game">
              <option>Selecciona un juego</option>
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


      <div class="form-row"><p class="text">Después podrás añadir más juegos a tu perfil.</p></div>


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
            <label for="login-remember">Recuerdame</label>
          </div>
          <!-- /CHECKBOX WRAP -->
        </div>
        <!-- /FORM ITEM -->

        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM LINK -->
          <a class="form-link" href="#">Cómo obtener tu usuario o ID</a>
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
          <button class="button medium secondary">Comprobar resultados</button>
          <!-- /BUTTON -->
        </div>
        <!-- /FORM ITEM -->
      </div>
      <!-- /FORM ROW -->
    </form>
    <!-- /FORM -->

    <!-- LINED TEXT -->
    <p class="lined-text">Política de privacidad y cookies</p>
    <!-- /LINED TEXT -->

  </div>
  <!-- /FORM BOX -->
</template>

<script>
import axios from "axios";

class getByTag {
  constructor(tag, game) {
    this.tag = tag;
    this.game = game;
  }
}

export default {
  name: "setUsernameOrID",
  data() {
    return {
      getByTag: new getByTag()
    }
  },
  methods: {
    searchUser() {
      switch (this.getByTag.game) {
        case 'Brawl Stars':
          axios.get("http://localhost:3000/api/main/player/" + this.getByTag.tag || 'https://www.statt.es/api/main/player/' + this.getByTag.tag).then((result) => {
            console.log(result.data);
          });
          break;
        case 'Clash of Clans':
          break;
        case 'Clash Royale':
          break;
      }

      // Reset
      this.getByTag = new getByTag();
    }
  }
}
</script>

<style scoped>

</style>