<template>
  <div>
    <!-- LANDING -->
    <div v-if="showIndex" class="landing">
      <!-- LANDING DECORATION -->
      <div class="landing-decoration"></div>
      <!-- /LANDING DECORATION -->

      <!-- LANDING INFO -->
      <div class="landing-info">
        <!-- LOGO -->
        <div class="logo">
          <!-- ICON LOGO VIKINGER -->
          <svg class="icon-logo-vikinger">
            <use xlink:href="#svg-logo-vikinger"></use>
          </svg>
          <!-- /ICON LOGO VIKINGER -->
        </div>
        <!-- /LOGO -->

        <!-- LANDING INFO PRETITLE -->
        <h2 class="landing-info-pretitle">Bienvenido a</h2>
        <!-- /LANDING INFO PRETITLE -->

        <!-- LANDING INFO TITLE -->
        <h1 class="landing-info-title">STATT</h1>
        <!-- /LANDING INFO TITLE -->

        <!-- LANDING INFO TEXT -->
        <p class="landing-info-text">Visualiza las estadísticas de los juegos creados por la desarrolladora
          Supercell ¡ Diviértete! </p>
        <!-- /LANDING INFO TEXT -->

        <!-- TAB SWITCH -->
        <div class="tab-switch">
          <!-- TAB SWITCH BUTTON -->
          <p class="tab-switch-button login-register-form-trigger">Tengo Usuario/ID</p>
          <!-- /TAB SWITCH BUTTON -->

          <!-- TAB SWITCH BUTTON -->
          <p class="tab-switch-button login-register-form-trigger">Cómo obtenerlo</p>
          <!-- /TAB SWITCH BUTTON -->
        </div>
        <!-- /TAB SWITCH -->
      </div>
      <!-- /LANDING INFO -->

      <!-- LANDING FORM -->
      <div class="landing-form">
        <component-form-index v-on:eventRunChange="changeOrder"></component-form-index>

        <!-- FORM BOX -->
        <div class="form-box login-register-form-element">
          <!-- FORM BOX DECORATION -->
          <img class="form-box-decoration" src="img/landing/rocket.png" alt="rocket">
          <!-- /FORM BOX DECORATION -->

          <!-- FORM BOX TITLE -->
          <h2 class="form-box-title">¿Cómo obtengo uno?</h2>
          <!-- /FORM BOX TITLE -->

          <!-- FORM TEXT -->
          <p class="form-text">Para acceder a la plataforma se necesita un nombre de usuario, aquí te facilitamos todo a través de guías.</p>
          <!-- /FORM TEXT -->

          <!-- GRID -->
          <div class="centered-on-mobile">
            <!-- USER PREVIEW -->
            <div class="user-preview">
              <!-- USER PREVIEW INFO -->
              <div class="user-preview-info">

                <p class="lined-text"><i>Brawl Stars</i></p>
                <!-- USER PREVIEW ACTIONS -->
                <div class="user-preview-actions">

                  <!-- BUTTON -->
                  <p class="button secondary">
                    Abrir guía
                  </p>
                  <!-- /BUTTON -->
                </div>
                <!-- /USER PREVIEW ACTIONS -->

                <p class="lined-text"><i>Clash Royale</i></p>
                <!-- USER PREVIEW ACTIONS -->
                <div class="user-preview-actions">

                  <!-- BUTTON -->
                  <p class="button secondary">
                    Obtener
                  </p>
                  <!-- /BUTTON -->
                </div>
                <!-- /USER PREVIEW ACTIONS -->

                <p class="lined-text"><i>Clash of Clans</i></p>
                <!-- USER PREVIEW ACTIONS -->
                <div class="user-preview-actions">

                  <!-- BUTTON -->
                  <p class="button secondary">
                    Obtener
                  </p>
                  <!-- /BUTTON -->
                </div>
                <!-- /USER PREVIEW ACTIONS -->
              </div>
              <!-- /USER PREVIEW INFO -->
            </div>
            <!-- /USER PREVIEW -->
          </div>
          <!-- /GRID -->

          <!-- FORM TEXT -->
          <p class="form-text">Selecciona un juego de la lista con el que podrás obtener información para obtener tu nombre de usuario.</p>
          <!-- /FORM TEXT -->

        </div>
        <!-- /FORM BOX -->
      </div>
      <!-- /LANDING FORM -->
    </div>
    <!-- /LANDING -->

    <div id="panelDisplay" style="display: none">

      <component-navigation/>

      <component-header></component-header>

      <component-content></component-content>

    </div>
  </div>
</template>

<script>
import componentFormIndex from "./components/componentsIndex/index.vue";

import componentHeader from "./components/componentsPanel/header/componentHeader.vue";
import componentNavigation from "./components/componentsPanel/header/componentNavigation.vue";
import componentContent from "./components/componentsPanel/body/componentContent.vue";

export default {
  name: "app",
  data() {
    return {
      showIndex: true
    }
  },
  methods: {
    changeOrder(response) {
      if (getCookie("tag") != "") {
        // Response response.name (If not possible reload)
        window.location.reload()
      }
    }
  },
  mounted() {
    const cookie = getCookie("tag");
    if (cookie != "") {
      this.showIndex = false
      document.getElementById('panelDisplay').style.removeProperty("display");
    }
  },
  components: {
    componentFormIndex,
    componentHeader,
    componentNavigation,
    componentContent
  }
}

// Util Functions
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
</script>