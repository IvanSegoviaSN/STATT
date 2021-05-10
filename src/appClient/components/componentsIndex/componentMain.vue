<template>
  <!-- FORM BOX -->
  <div class="form-box login-register-form-element">
    <!-- FORM BOX DECORATION -->
    <img class="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket">
    <!-- /FORM BOX DECORATION -->

    <!-- FORM BOX TITLE -->
    <h2 class="form-box-title">¡ Tengo mi usuario !</h2>
    <!-- /FORM BOX TITLE -->

    <!-- FORM -->
    <form class="form">
      <!-- FORM ROW -->
      <div class="form-row">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM INPUT -->
          <div class="form-select">
            <label for="id-game">Juego</label>
            <select id="id-game" v-model="selectedGame" v-on="expandPanel(selectedGame)">
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

      <!-- FORM ROW -->
      <div v-if="selectedGame == 'Brawl Stars'" class="form-row">
        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM INPUT -->
          <div class="form-input">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" name="login_password">
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
            <label for="login-remember">Remember Me</label>
          </div>
          <!-- /CHECKBOX WRAP -->
        </div>
        <!-- /FORM ITEM -->

        <!-- FORM ITEM -->
        <div class="form-item">
          <!-- FORM LINK -->
          <a class="form-link" href="#">Forgot Password?</a>
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
          <button class="button medium secondary">Login to your Account!</button>
          <!-- /BUTTON -->
        </div>
        <!-- /FORM ITEM -->
      </div>
      <!-- /FORM ROW -->
    </form>
    <!-- /FORM -->

    <!-- LINED TEXT -->
    <p class="lined-text">Login with your Social Account</p>
    <!-- /LINED TEXT -->
  </div>
  <!-- /FORM BOX -->
</template>

<script>
export default {
  name: "componentMain",
  data() {
    return {
      selectedGame: ''
    }
  },
  methods: {
    expandPanel(game) {
      switch (game) {
        case 'Brawl Stars':
          break;
        case 'Clash Royale':
          break;
        case 'Clans of Clans':
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>