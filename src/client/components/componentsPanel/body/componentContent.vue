<template>
  <div>
    <!-- CONTENT GRID -->
    <div class="content-grid" id="welcomeNavbar">
      <!-- /MAINGAME 1 -->
      <div>
        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.game == 'brawl'">

          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/media_brawlstars_logo.png"
               style="width: 12%;
                      margin-bottom: 1%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.game == 'royale'">
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/clashroyale_logo.png"
               style="width: 25%;
                      margin-bottom: 1%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.game == 'clash'">
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/downloads/coc_logo_2013.png"
               style="width: 25%;
                      margin-bottom: 2%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION HEADER -->
        <div class="section-header">
          <!-- SECTION HEADER INFO -->
          <div class="section-header-info">
            <!-- SECTION PRETITLE -->
            <p class="section-pretitle">Inicio</p>
            <!-- /SECTION PRETITLE -->

            <!-- SECTION TITLE -->
            <h2 class="section-title">Perfil de usuario</h2>
            <!-- /SECTION TITLE -->
          </div>
          <!-- /SECTION HEADER INFO -->
        </div>
        <!-- /SECTION HEADER -->

        <!-- GRID -->
        <div class="grid">
          <!-- GRID -->
          <div class="grid grid-6-3_9 stretched">

            <!-- GRID COLUMN -->
            <div class="grid-column">
              <!-- WIDGET BOX -->
              <div class="widget-box">
                <!-- WIDGET BOX ACTIONS -->
                <div class="widget-box-actions">
                  <!-- WIDGET BOX ACTION -->
                  <div class="widget-box-action">
                    <!-- WIDGET BOX TITLE -->
                    <p class="widget-box-title">Estadísticas mensual</p>
                    <!-- /WIDGET BOX TITLE -->
                  </div>
                  <!-- /WIDGET BOX ACTION -->

                  <!-- WIDGET BOX ACTION -->
                  <div class="widget-box-action">
                    <!-- REFERENCE ITEM LIST -->
                    <div class="reference-item-list">
                      <!-- REFERENCE ITEM -->
                      <div class="reference-item">
                        <!-- REFERENCE BULLET -->
                        <div class="reference-bullet primary"></div>
                        <!-- REFERENCE BULLET -->

                        <!-- REFERENCE ITEM TEXT -->
                        <p class="reference-item-text">Trofeos</p>
                        <!-- /REFERENCE ITEM TEXT -->
                      </div>
                      <!-- /REFERENCE ITEM -->
                    </div>
                    <!-- /REFERENCE ITEM LIST -->

                    <!-- FORM SELECT -->
                    <div class="form-select v2">
                      <select id="ve-monthly-report-date" name="ve_monthly_report_date">
                        <option value="0">Junio 2021</option>
                      </select>
                      <!-- FORM SELECT ICON -->
                      <svg class="form-select-icon icon-small-arrow">
                        <use xlink:href="#svg-small-arrow"></use>
                      </svg>
                      <!-- /FORM SELECT ICON -->
                    </div>
                    <!-- /FORM SELECT -->
                  </div>
                  <!-- /WIDGET BOX ACTION -->
                </div>
                <!-- /WIDGET BOX ACTIONS -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                  <!-- CHART WRAP -->
                  <div class="chart-wrap">
                    <!-- CHART -->
                    <div class="chart">
                      <canvas id="earnings-report-chart"></canvas>
                    </div>
                    <!-- /CHART -->
                  </div>
                  <!-- /CHART WRAP -->
                </div>
                <!-- WIDGET BOX CONTENT -->
              </div>
              <!-- /WIDGET BOX -->
            </div>
            <!-- /GRID COLUMN -->

            <!-- PROFILE STATS -->
            <div class="profile-stats">
              <!-- PROFILE STATS COVER -->
              <div v-if="this.game == 'brawl'" class="profile-stats-cover"
                   style="background: url(https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/brawlstars_loadingscreen_2019.png) no-repeat 65%;">
                <!-- PROFILE STATS COVER TITLE -->
                <p class="profile-stats-cover-title">{{ this.contentData.name }}</p>
                <!-- /PROFILE STATS COVER TITLE -->

                <!-- PROFILE STATS COVER TEXT -->
                <p class="profile-stats-cover-text">#{{ this.contentData.tag }}</p>
                <!-- /PROFILE STATS COVER TEXT -->
              </div>
              <!-- /PROFILE STATS COVER -->

              <!-- PROFILE STATS COVER -->
              <div v-if="this.game == 'royale'" class="profile-stats-cover"
                   style="background: url(https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/royale-titlescreen-2017.jpg) no-repeat 65%;">
                <!-- PROFILE STATS COVER TITLE -->
                <p class="profile-stats-cover-title">{{ this.contentData.name }}</p>
                <!-- /PROFILE STATS COVER TITLE -->

                <!-- PROFILE STATS COVER TEXT -->
                <p class="profile-stats-cover-text">#{{ this.contentData.tag }}</p>
                <!-- /PROFILE STATS COVER TEXT -->
              </div>
              <!-- /PROFILE STATS COVER -->

              <!-- PROFILE STATS COVER -->
              <div v-if="this.game == 'clash'" class="profile-stats-cover"
                   style="background: url(https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/clashofclans_screen2018_summer.jpg) no-repeat 5%;">
                <!-- PROFILE STATS COVER TITLE -->
                <p class="profile-stats-cover-title">{{ this.contentData.name }}</p>
                <!-- /PROFILE STATS COVER TITLE -->

                <!-- PROFILE STATS COVER TEXT -->
                <p class="profile-stats-cover-text">#{{ this.contentData.tag }}</p>
                <!-- /PROFILE STATS COVER TEXT -->
              </div>
              <!-- /PROFILE STATS COVER -->

              <!-- PROFILE STATS INFO -->
              <div class="profile-stats-info">
                <!-- USER AVATAR -->
                <div class="user-avatar medium">
                  <!-- USER AVATAR BORDER -->
                  <div class="user-avatar-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-120-132"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR BORDER -->

                  <!-- USER AVATAR CONTENT -->
                  <div class="user-avatar-content">
                    <!-- HEXAGON -->
                    <div class="hexagon-image-82-90" data-src="img/badge/upowered-b.png"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR CONTENT -->

                  <!-- USER AVATAR PROGRESS -->
                  <div class="user-avatar-progress">
                    <!-- HEXAGON -->
                    <div class="hexagon-progress-100-110"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-border-100-110"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div class="hexagon-32-36"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE BORDER -->

                    <!-- USER AVATAR BADGE CONTENT -->
                    <div class="user-avatar-badge-content">
                      <!-- HEXAGON -->
                      <div class="hexagon-dark-26-28"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE CONTENT -->

                    <!-- USER AVATAR BADGE TEXT -->
                    <p class="user-avatar-badge-text">{{ this.contentData.statsMain_2 }}</p>
                    <!-- /USER AVATAR BADGE TEXT -->
                  </div>
                  <!-- /USER AVATAR BADGE -->
                </div>
                <!-- /USER AVATAR -->

                <!-- FEATURED STAT LIST -->
                <div class="featured-stat-list">
                  <!-- FEATURED STAT -->
                  <div class="featured-stat">
                    <!-- FEATURED STAT ICON -->
                    <svg class="featured-stat-icon icon-status">
                      <use xlink:href="#svg-trophy"></use>
                    </svg>
                    <!-- /FEATURED STAT ICON -->

                    <!-- FEATURED STAT TITLE -->
                    <p class="featured-stat-title">{{ this.contentData.statsMain_1 }}</p>
                    <!-- /FEATURED STAT TITLE -->

                    <!-- FEATURED STAT SUBTITLE -->
                    <p class="featured-stat-subtitle">{{ this.mainData.statsMain_1 }}</p>
                    <!-- /FEATURED STAT SUBTITLE -->

                    <!-- FEATURED STAT TEXT -->
                    <p class="featured-stat-text">{{ this.mainData.statsBoxTextTotal }}</p>
                    <!-- /FEATURED STAT TEXT -->
                  </div>
                  <!-- /FEATURED STAT -->

                  <!-- FEATURED STAT -->
                  <div class="featured-stat">
                    <!-- FEATURED STAT ICON -->
                    <svg class="featured-stat-icon icon-comment">
                      <use xlink:href="#svg-badges"></use>
                    </svg>
                    <!-- /FEATURED STAT ICON -->

                    <!-- FEATURED STAT TITLE -->
                    <p class="featured-stat-title">{{ this.contentData.statsMain_2 }}</p>
                    <!-- /FEATURED STAT TITLE -->

                    <!-- FEATURED STAT SUBTITLE -->
                    <p class="featured-stat-subtitle">{{ this.mainData.statsMain_2 }}</p>
                    <!-- /FEATURED STAT SUBTITLE -->

                    <!-- FEATURED STAT TEXT -->
                    <p class="featured-stat-text">{{ this.mainData.statsBoxTextTotal }}</p>
                    <!-- /FEATURED STAT TEXT -->
                  </div>
                  <!-- /FEATURED STAT -->
                </div>
                <!-- /FEATURED STAT LIST -->

                <div style="display: flex; flex-flow: wrap; justify-content: space-around; margin-top: 3rem;">
                  <p>Fecha de creación: {{ new Date().getDate() - 9 }}/05/2021</p>
                  <p>Última actualización: {{ new Date().getDate() }}/06/2021</p>
                </div>
              </div>
              <!-- /PROFILE STATS INFO -->
            </div>
            <!-- /PROFILE STATS -->
          </div>
          <!-- /GRID -->

          <!-- GRID -->
          <div class="grid grid-3-3-3-3 centered">
            <!-- STATS BOX -->
            <div class="stats-box small stat-profile-views">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.contentData.statsBox_1 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">3.2%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.mainData.statsBox_1 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.mainData.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-posts-created">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.contentData.statsBox_2 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">0.4%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.mainData.statsBox_2 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.mainData.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-reactions-received">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.contentData.statsBox_3 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon negative">
                    <!-- ICON MINUS SMALL -->
                    <svg class="icon-minus-small">
                      <use xlink:href="#svg-minus-small"></use>
                    </svg>
                    <!-- /ICON MINUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">1.8%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.mainData.statsBox_3 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.mainData.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-comments-received">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.contentData.statsBox_4 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">4.5%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.mainData.statsBox_4 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.mainData.statsBoxTextMonth }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->
          </div>
          <!-- /GRID -->
        </div>
        <!-- /GRID -->
        <!-- /MAINGAME 1 -->
      </div>

      <div v-show="showPanelGame_1">
        <!-- GAME 1 -->
        <!-- SECTION HEADER -->
        <div class="section-header"></div>
        <!-- /SECTION HEADER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.gameExtra_1 == 'brawl'"
             style="display: flex;justify-content: flex-end;">
          <!-- SECTION BANNER ICON -->
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/media_brawlstars_logo.png"
               style="width: 15%;
                      margin-bottom: 1%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->

          <button @click="destroyPanel(1)" class="button bg-danger" style="width: 50px">
            <!-- FEATURED STAT ICON -->
            <svg class="featured-stat-icon icon-status">
              <use xlink:href="#svg-delete"></use>
            </svg>
            <!-- /FEATURED STAT ICON -->
          </button>
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.gameExtra_1 == 'royale'"
             style="display: flex;justify-content: flex-end;">
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/clashroyale_logo.png"
               style="width: 25%;
                      margin-bottom: 1%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->

          <button @click="destroyPanel(1)" class="button bg-danger" style="width: 50px">
            <!-- FEATURED STAT ICON -->
            <svg class="featured-stat-icon icon-status">
              <use xlink:href="#svg-delete"></use>
            </svg>
            <!-- /FEATURED STAT ICON -->
          </button>
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.gameExtra_1 == 'clash'"
             style="display: flex;justify-content: flex-end;">
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/downloads/coc_logo_2013.png"
               style="width: 25%;
                      margin-bottom: 2%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->

          <button @click="destroyPanel(1)" class="button bg-danger" style="width: 50px">
            <!-- FEATURED STAT ICON -->
            <svg class="featured-stat-icon icon-status">
              <use xlink:href="#svg-delete"></use>
            </svg>
            <!-- /FEATURED STAT ICON -->
          </button>
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION HEADER -->
        <div class="section-header">
          <!-- SECTION HEADER INFO -->
          <div class="section-header-info">
            <!-- SECTION PRETITLE -->
            <p class="section-pretitle">Inicio</p>
            <!-- /SECTION PRETITLE -->

            <!-- SECTION TITLE -->
            <h2 class="section-title">Perfil de usuario</h2>
            <!-- /SECTION TITLE -->
          </div>
          <!-- /SECTION HEADER INFO -->
        </div>
        <!-- /SECTION HEADER -->

        <!-- GRID -->
        <div class="grid">
          <!-- GRID -->
          <div class="grid grid-3-3-3-3 centered">
            <!-- PROFILE STATS -->
            <div class="profile-stats fixed-height" style="height: 390px">
              <!-- PROFILE STATS COVER -->
              <div class="profile-stats-cover">
                <!-- PROFILE STATS COVER TITLE -->
                <p class="profile-stats-cover-title">{{ this.panelContentData_1.name }}</p>
                <!-- /PROFILE STATS COVER TITLE -->

                <!-- PROFILE STATS COVER TEXT -->
                <p class="profile-stats-cover-text">{{ this.panelContentData_1.tag }}</p>
                <!-- /PROFILE STATS COVER TEXT -->
              </div>
              <!-- /PROFILE STATS COVER -->

              <!-- PROFILE STATS INFO -->
              <div class="profile-stats-info">
                <!-- USER AVATAR -->
                <div class="user-avatar medium">
                  <!-- USER AVATAR BORDER -->
                  <div class="user-avatar-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-120-132"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR BORDER -->

                  <!-- USER AVATAR CONTENT -->
                  <div class="user-avatar-content">
                    <!-- HEXAGON -->
                    <div class="hexagon-image-82-90" data-src="img/badge/silver-b.png"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR CONTENT -->

                  <!-- USER AVATAR PROGRESS -->
                  <div class="user-avatar-progress">
                    <!-- HEXAGON -->
                    <div class="hexagon-progress-100-110"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-border-100-110"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div class="hexagon-32-36"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE BORDER -->

                    <!-- USER AVATAR BADGE CONTENT -->
                    <div class="user-avatar-badge-content">
                      <!-- HEXAGON -->
                      <div class="hexagon-dark-26-28"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE CONTENT -->

                    <!-- USER AVATAR BADGE TEXT -->
                    <p class="user-avatar-badge-text">{{ this.panelContentData_1.statsMain_2 }}</p>
                    <!-- /USER AVATAR BADGE TEXT -->
                  </div>
                  <!-- /USER AVATAR BADGE -->
                </div>
                <!-- /USER AVATAR -->

                <!-- FEATURED STAT LIST -->
                <div class="featured-stat-list">
                  <!-- FEATURED STAT -->
                  <div class="featured-stat">
                    <!-- FEATURED STAT ICON -->
                    <svg class="featured-stat-icon icon-status">
                      <use xlink:href="#svg-status"></use>
                    </svg>
                    <!-- /FEATURED STAT ICON -->

                    <!-- FEATURED STAT TITLE -->
                    <p class="featured-stat-title">{{ this.panelContentData_1.statsMain_1 }}</p>
                    <!-- /FEATURED STAT TITLE -->

                    <!-- FEATURED STAT SUBTITLE -->
                    <p class="featured-stat-subtitle">{{ this.panelData_1.statsMain_1 }}</p>
                    <!-- /FEATURED STAT SUBTITLE -->

                    <!-- FEATURED STAT TEXT -->
                    <p class="featured-stat-text">{{ this.panelData_1.statsBoxTextTotal }}</p>
                    <!-- /FEATURED STAT TEXT -->
                  </div>
                  <!-- /FEATURED STAT -->

                  <!-- FEATURED STAT -->
                  <div class="featured-stat">
                    <!-- FEATURED STAT ICON -->
                    <svg class="featured-stat-icon icon-comment">
                      <use xlink:href="#svg-comment"></use>
                    </svg>
                    <!-- /FEATURED STAT ICON -->

                    <!-- FEATURED STAT TITLE -->
                    <p class="featured-stat-title">{{ this.panelContentData_1.statsMain_2 }}</p>
                    <!-- /FEATURED STAT TITLE -->

                    <!-- FEATURED STAT SUBTITLE -->
                    <p class="featured-stat-subtitle">{{ this.panelData_1.statsMain_2 }}</p>
                    <!-- /FEATURED STAT SUBTITLE -->

                    <!-- FEATURED STAT TEXT -->
                    <p class="featured-stat-text">{{ this.panelData_1.statsBoxTextTotal }}</p>
                    <!-- /FEATURED STAT TEXT -->
                  </div>
                  <!-- /FEATURED STAT -->
                </div>
                <!-- /FEATURED STAT LIST -->
              </div>
              <!-- /PROFILE STATS INFO -->
            </div>
            <!-- /PROFILE STATS -->

            <!-- ACCOUNT STAT BOX -->
            <div class="account-stat-box account-stat-visits" style="height: 390px">
              <!-- PERCENTAGE DIFF -->
              <div class="percentage-diff">
                <!-- PERCENTAGE DIFF ICON WRAP -->
                <div class="percentage-diff-icon-wrap positive">
                  <!-- PERCENTAGE DIFF ICON -->
                  <svg class="percentage-diff-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /PERCENTAGE DIFF ICON -->
                </div>
                <!-- /PERCENTAGE DIFF ICON WRAP -->

                <!-- PERCENTAGE DIFF TEXT -->
                <p class="percentage-diff-text">3.6%</p>
                <!-- /PERCENTAGE DIFF TEXT -->
              </div>
              <!-- /PERCENTAGE DIFF -->

              <!-- ACCOUNT STAT BOX ICON WRAP -->
              <div class="account-stat-box-icon-wrap">
                <!-- ACCOUNT STAT BOX ICON -->
                <svg class="account-stat-box-icon icon-members">
                  <use xlink:href="#svg-members"></use>
                </svg>
                <!-- /ACCOUNT STAT BOX ICON -->
              </div>
              <!-- /ACCOUNT STAT BOX ICON WRAP -->

              <!-- ACCOUNT STAT BOX TITLE -->
              <p class="account-stat-box-title">262</p>
              <!-- /ACCOUNT STAT BOX TITLE -->

              <!-- ACCOUNT STAT BOX SUBTITLE -->
              <p class="account-stat-box-subtitle">Account Visits</p>
              <!-- /ACCOUNT STAT BOX SUBTITLE -->

              <!-- ACCOUNT STAT BOX TEXT -->
              <p class="account-stat-box-text">Times old or new members visited any of your acount pages this month</p>
              <!-- /ACCOUNT STAT BOX TEXT -->
            </div>
            <!-- /ACCOUNT STAT BOX -->

            <!-- ACCOUNT STAT BOX -->
            <div class="account-stat-box account-stat-session-duration" style="height: 390px">
              <!-- PERCENTAGE DIFF -->
              <div class="percentage-diff">
                <!-- PERCENTAGE DIFF ICON WRAP -->
                <div class="percentage-diff-icon-wrap negative">
                  <!-- PERCENTAGE DIFF ICON -->
                  <svg class="percentage-diff-icon icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /PERCENTAGE DIFF ICON -->
                </div>
                <!-- /PERCENTAGE DIFF ICON WRAP -->

                <!-- PERCENTAGE DIFF TEXT -->
                <p class="percentage-diff-text">2.4%</p>
                <!-- /PERCENTAGE DIFF TEXT -->
              </div>
              <!-- /PERCENTAGE DIFF -->

              <!-- ACCOUNT STAT BOX ICON WRAP -->
              <div class="account-stat-box-icon-wrap">
                <!-- ACCOUNT STAT BOX ICON -->
                <svg class="account-stat-box-icon icon-clock">
                  <use xlink:href="#svg-clock"></use>
                </svg>
                <!-- /ACCOUNT STAT BOX ICON -->
              </div>
              <!-- /ACCOUNT STAT BOX ICON WRAP -->

              <!-- ACCOUNT STAT BOX TITLE -->
              <p class="account-stat-box-title">4:39</p>
              <!-- /ACCOUNT STAT BOX TITLE -->

              <!-- ACCOUNT STAT BOX SUBTITLE -->
              <p class="account-stat-box-subtitle">Session Duration</p>
              <!-- /ACCOUNT STAT BOX SUBTITLE -->

              <!-- ACCOUNT STAT BOX TEXT -->
              <p class="account-stat-box-text">Average time in minutes of how much people spend on your pages</p>
              <!-- /ACCOUNT STAT BOX TEXT -->
            </div>
            <!-- /ACCOUNT STAT BOX -->

            <!-- ACCOUNT STAT BOX -->
            <div class="account-stat-box account-stat-returning-visitors" style="height: 390px">
              <!-- PERCENTAGE DIFF -->
              <div class="percentage-diff">
                <!-- PERCENTAGE DIFF ICON WRAP -->
                <div class="percentage-diff-icon-wrap positive">
                  <!-- PERCENTAGE DIFF ICON -->
                  <svg class="percentage-diff-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /PERCENTAGE DIFF ICON -->
                </div>
                <!-- /PERCENTAGE DIFF ICON WRAP -->

                <!-- PERCENTAGE DIFF TEXT -->
                <p class="percentage-diff-text">8.2%</p>
                <!-- /PERCENTAGE DIFF TEXT -->
              </div>
              <!-- /PERCENTAGE DIFF -->

              <!-- ACCOUNT STAT BOX ICON WRAP -->
              <div class="account-stat-box-icon-wrap">
                <!-- ACCOUNT STAT BOX ICON -->
                <svg class="account-stat-box-icon icon-return">
                  <use xlink:href="#svg-return"></use>
                </svg>
                <!-- /ACCOUNT STAT BOX ICON -->
              </div>
              <!-- /ACCOUNT STAT BOX ICON WRAP -->

              <!-- ACCOUNT STAT BOX TITLE -->
              <p class="account-stat-box-title">80%</p>
              <!-- /ACCOUNT STAT BOX TITLE -->

              <!-- ACCOUNT STAT BOX SUBTITLE -->
              <p class="account-stat-box-subtitle">Returning Visitors</p>
              <!-- /ACCOUNT STAT BOX SUBTITLE -->

              <!-- ACCOUNT STAT BOX TEXT -->
              <p class="account-stat-box-text">Percentage of visitors that visited your account more than once</p>
              <!-- /ACCOUNT STAT BOX TEXT -->
            </div>
            <!-- /ACCOUNT STAT BOX -->
          </div>
          <!-- /GRID -->

          <!-- GRID -->
          <div class="grid grid-3-3-3-3 centered">
            <!-- STATS BOX -->
            <div class="stats-box small stat-profile-views">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_1.statsBox_1 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">3.2%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_1.statsBox_1 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_1.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-posts-created">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_1.statsBox_2 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">0.4%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_1.statsBox_2 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_1.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-reactions-received">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_1.statsBox_3 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon negative">
                    <!-- ICON MINUS SMALL -->
                    <svg class="icon-minus-small">
                      <use xlink:href="#svg-minus-small"></use>
                    </svg>
                    <!-- /ICON MINUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">1.8%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_1.statsBox_3 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_1.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-comments-received">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_1.statsBox_4 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">4.5%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_1.statsBox_4 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_1.statsBoxTextMonth }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->
          </div>
          <!-- /GRID -->
        </div>
        <!-- /GRID -->
        <!-- /GAME 1 -->
      </div>

      <div v-show="showPanelGame_2">
        <!-- GAME 1 -->
        <!-- SECTION HEADER -->
        <div class="section-header"></div>
        <!-- /SECTION HEADER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.gameExtra_2 == 'brawl'"
             style="display: flex;justify-content: flex-end;">

          <!-- SECTION BANNER ICON -->
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/media_brawlstars_logo.png"
               style="width: 15%;
                      margin-bottom: 1%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->

          <button @click="destroyPanel(2)" class="button bg-danger" style="width: 50px">X</button>
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.gameExtra_2 == 'royale'"
             style="display: flex;justify-content: flex-end;">
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/clashroyale_logo.png"
               style="width: 25%;
                      margin-bottom: 1%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->

          <button @click="destroyPanel(2)" class="button bg-danger" style="width: 50px">X</button>
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION BANNER -->
        <div class="section-banner" v-if="this.gameExtra_2 == 'clash'"
             style="display: flex;justify-content: flex-end;">
          <img class="section-banner-icon"
               src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/downloads/coc_logo_2013.png"
               style="width: 25%;
                      margin-bottom: 2%;
                      margin-left: 5%;"
               alt="overview-icon">
          <!-- /SECTION BANNER ICON -->

          <button @click="destroyPanel(2)" class="button bg-danger" style="width: 50px">X</button>
        </div>
        <!-- /SECTION BANNER -->

        <!-- SECTION HEADER -->
        <div class="section-header">
          <!-- SECTION HEADER INFO -->
          <div class="section-header-info">
            <!-- SECTION PRETITLE -->
            <p class="section-pretitle">Inicio</p>
            <!-- /SECTION PRETITLE -->

            <!-- SECTION TITLE -->
            <h2 class="section-title">Perfil de usuario</h2>
            <!-- /SECTION TITLE -->
          </div>
          <!-- /SECTION HEADER INFO -->
        </div>
        <!-- /SECTION HEADER -->

        <!-- GRID -->
        <div class="grid">
          <!-- GRID -->
          <div class="grid grid-3-3-3-3 centered">
            <!-- PROFILE STATS -->
            <div class="profile-stats fixed-height" style="height: 390px">
              <!-- PROFILE STATS COVER -->
              <div class="profile-stats-cover">
                <!-- PROFILE STATS COVER TITLE -->
                <p class="profile-stats-cover-title">{{ this.panelContentData_2.name }}</p>
                <!-- /PROFILE STATS COVER TITLE -->

                <!-- PROFILE STATS COVER TEXT -->
                <p class="profile-stats-cover-text">{{ this.panelContentData_2.tag }}</p>
                <!-- /PROFILE STATS COVER TEXT -->
              </div>
              <!-- /PROFILE STATS COVER -->

              <!-- PROFILE STATS INFO -->
              <div class="profile-stats-info">
                <!-- USER AVATAR -->
                <div class="user-avatar medium">
                  <!-- USER AVATAR BORDER -->
                  <div class="user-avatar-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-120-132"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR BORDER -->

                  <!-- USER AVATAR CONTENT -->
                  <div class="user-avatar-content">
                    <!-- HEXAGON -->
                    <div class="hexagon-image-82-90" data-src="img/badge/bronze-b.png"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR CONTENT -->

                  <!-- USER AVATAR PROGRESS -->
                  <div class="user-avatar-progress">
                    <!-- HEXAGON -->
                    <div class="hexagon-progress-100-110"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-border-100-110"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div class="hexagon-32-36"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE BORDER -->

                    <!-- USER AVATAR BADGE CONTENT -->
                    <div class="user-avatar-badge-content">
                      <!-- HEXAGON -->
                      <div class="hexagon-dark-26-28"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE CONTENT -->

                    <!-- USER AVATAR BADGE TEXT -->
                    <p class="user-avatar-badge-text">{{ this.panelContentData_2.statsMain_2 }}</p>
                    <!-- /USER AVATAR BADGE TEXT -->
                  </div>
                  <!-- /USER AVATAR BADGE -->
                </div>
                <!-- /USER AVATAR -->

                <!-- FEATURED STAT LIST -->
                <div class="featured-stat-list">
                  <!-- FEATURED STAT -->
                  <div class="featured-stat">
                    <!-- FEATURED STAT ICON -->
                    <svg class="featured-stat-icon icon-status">
                      <use xlink:href="#svg-status"></use>
                    </svg>
                    <!-- /FEATURED STAT ICON -->

                    <!-- FEATURED STAT TITLE -->
                    <p class="featured-stat-title">{{ this.panelContentData_2.statsMain_1 }}</p>
                    <!-- /FEATURED STAT TITLE -->

                    <!-- FEATURED STAT SUBTITLE -->
                    <p class="featured-stat-subtitle">{{ this.panelData_2.statsMain_1 }}</p>
                    <!-- /FEATURED STAT SUBTITLE -->

                    <!-- FEATURED STAT TEXT -->
                    <p class="featured-stat-text">{{ this.panelData_2.statsBoxTextTotal }}</p>
                    <!-- /FEATURED STAT TEXT -->
                  </div>
                  <!-- /FEATURED STAT -->

                  <!-- FEATURED STAT -->
                  <div class="featured-stat">
                    <!-- FEATURED STAT ICON -->
                    <svg class="featured-stat-icon icon-comment">
                      <use xlink:href="#svg-comment"></use>
                    </svg>
                    <!-- /FEATURED STAT ICON -->

                    <!-- FEATURED STAT TITLE -->
                    <p class="featured-stat-title">{{ this.panelContentData_2.statsMain_2 }}</p>
                    <!-- /FEATURED STAT TITLE -->

                    <!-- FEATURED STAT SUBTITLE -->
                    <p class="featured-stat-subtitle">{{ this.panelData_2.statsMain_2 }}</p>
                    <!-- /FEATURED STAT SUBTITLE -->

                    <!-- FEATURED STAT TEXT -->
                    <p class="featured-stat-text">{{ this.panelData_2.statsBoxTextTotal }}</p>
                    <!-- /FEATURED STAT TEXT -->
                  </div>
                  <!-- /FEATURED STAT -->
                </div>
                <!-- /FEATURED STAT LIST -->
              </div>
              <!-- /PROFILE STATS INFO -->
            </div>
            <!-- /PROFILE STATS -->

            <!-- ACCOUNT STAT BOX -->
            <div class="account-stat-box account-stat-visits" style="height: 390px">
              <!-- PERCENTAGE DIFF -->
              <div class="percentage-diff">
                <!-- PERCENTAGE DIFF ICON WRAP -->
                <div class="percentage-diff-icon-wrap positive">
                  <!-- PERCENTAGE DIFF ICON -->
                  <svg class="percentage-diff-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /PERCENTAGE DIFF ICON -->
                </div>
                <!-- /PERCENTAGE DIFF ICON WRAP -->

                <!-- PERCENTAGE DIFF TEXT -->
                <p class="percentage-diff-text">3.6%</p>
                <!-- /PERCENTAGE DIFF TEXT -->
              </div>
              <!-- /PERCENTAGE DIFF -->

              <!-- ACCOUNT STAT BOX ICON WRAP -->
              <div class="account-stat-box-icon-wrap">
                <!-- ACCOUNT STAT BOX ICON -->
                <svg class="account-stat-box-icon icon-members">
                  <use xlink:href="#svg-members"></use>
                </svg>
                <!-- /ACCOUNT STAT BOX ICON -->
              </div>
              <!-- /ACCOUNT STAT BOX ICON WRAP -->

              <!-- ACCOUNT STAT BOX TITLE -->
              <p class="account-stat-box-title">262</p>
              <!-- /ACCOUNT STAT BOX TITLE -->

              <!-- ACCOUNT STAT BOX SUBTITLE -->
              <p class="account-stat-box-subtitle">Account Visits</p>
              <!-- /ACCOUNT STAT BOX SUBTITLE -->

              <!-- ACCOUNT STAT BOX TEXT -->
              <p class="account-stat-box-text">Times old or new members visited any of your acount pages this month</p>
              <!-- /ACCOUNT STAT BOX TEXT -->
            </div>
            <!-- /ACCOUNT STAT BOX -->

            <!-- ACCOUNT STAT BOX -->
            <div class="account-stat-box account-stat-session-duration" style="height: 390px">
              <!-- PERCENTAGE DIFF -->
              <div class="percentage-diff">
                <!-- PERCENTAGE DIFF ICON WRAP -->
                <div class="percentage-diff-icon-wrap negative">
                  <!-- PERCENTAGE DIFF ICON -->
                  <svg class="percentage-diff-icon icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /PERCENTAGE DIFF ICON -->
                </div>
                <!-- /PERCENTAGE DIFF ICON WRAP -->

                <!-- PERCENTAGE DIFF TEXT -->
                <p class="percentage-diff-text">2.4%</p>
                <!-- /PERCENTAGE DIFF TEXT -->
              </div>
              <!-- /PERCENTAGE DIFF -->

              <!-- ACCOUNT STAT BOX ICON WRAP -->
              <div class="account-stat-box-icon-wrap">
                <!-- ACCOUNT STAT BOX ICON -->
                <svg class="account-stat-box-icon icon-clock">
                  <use xlink:href="#svg-clock"></use>
                </svg>
                <!-- /ACCOUNT STAT BOX ICON -->
              </div>
              <!-- /ACCOUNT STAT BOX ICON WRAP -->

              <!-- ACCOUNT STAT BOX TITLE -->
              <p class="account-stat-box-title">4:39</p>
              <!-- /ACCOUNT STAT BOX TITLE -->

              <!-- ACCOUNT STAT BOX SUBTITLE -->
              <p class="account-stat-box-subtitle">Session Duration</p>
              <!-- /ACCOUNT STAT BOX SUBTITLE -->

              <!-- ACCOUNT STAT BOX TEXT -->
              <p class="account-stat-box-text">Average time in minutes of how much people spend on your pages</p>
              <!-- /ACCOUNT STAT BOX TEXT -->
            </div>
            <!-- /ACCOUNT STAT BOX -->

            <!-- ACCOUNT STAT BOX -->
            <div class="account-stat-box account-stat-returning-visitors" style="height: 390px">
              <!-- PERCENTAGE DIFF -->
              <div class="percentage-diff">
                <!-- PERCENTAGE DIFF ICON WRAP -->
                <div class="percentage-diff-icon-wrap positive">
                  <!-- PERCENTAGE DIFF ICON -->
                  <svg class="percentage-diff-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /PERCENTAGE DIFF ICON -->
                </div>
                <!-- /PERCENTAGE DIFF ICON WRAP -->

                <!-- PERCENTAGE DIFF TEXT -->
                <p class="percentage-diff-text">8.2%</p>
                <!-- /PERCENTAGE DIFF TEXT -->
              </div>
              <!-- /PERCENTAGE DIFF -->

              <!-- ACCOUNT STAT BOX ICON WRAP -->
              <div class="account-stat-box-icon-wrap">
                <!-- ACCOUNT STAT BOX ICON -->
                <svg class="account-stat-box-icon icon-return">
                  <use xlink:href="#svg-return"></use>
                </svg>
                <!-- /ACCOUNT STAT BOX ICON -->
              </div>
              <!-- /ACCOUNT STAT BOX ICON WRAP -->

              <!-- ACCOUNT STAT BOX TITLE -->
              <p class="account-stat-box-title">80%</p>
              <!-- /ACCOUNT STAT BOX TITLE -->

              <!-- ACCOUNT STAT BOX SUBTITLE -->
              <p class="account-stat-box-subtitle">Returning Visitors</p>
              <!-- /ACCOUNT STAT BOX SUBTITLE -->

              <!-- ACCOUNT STAT BOX TEXT -->
              <p class="account-stat-box-text">Percentage of visitors that visited your account more than once</p>
              <!-- /ACCOUNT STAT BOX TEXT -->
            </div>
            <!-- /ACCOUNT STAT BOX -->
          </div>
          <!-- /GRID -->

          <!-- GRID -->
          <div class="grid grid-3-3-3-3 centered">
            <!-- STATS BOX -->
            <div class="stats-box small stat-profile-views">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_2.statsBox_1 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">3.2%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_2.statsBox_1 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_2.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-posts-created">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_2.statsBox_2 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">0.4%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_2.statsBox_2 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_2.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-reactions-received">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_2.statsBox_3 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon negative">
                    <!-- ICON MINUS SMALL -->
                    <svg class="icon-minus-small">
                      <use xlink:href="#svg-minus-small"></use>
                    </svg>
                    <!-- /ICON MINUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">1.8%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_2.statsBox_3 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_2.statsBoxTextTotal }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->

            <!-- STATS BOX -->
            <div class="stats-box small stat-comments-received">
              <!-- STATS BOX VALUE WRAP -->
              <div class="stats-box-value-wrap">
                <!-- STATS BOX VALUE -->
                <p class="stats-box-value">{{ this.panelContentData_2.statsBox_4 }}</p>
                <!-- /STATS BOX VALUE -->

                <!-- STATS BOX DIFF -->
                <div class="stats-box-diff">
                  <!-- STATS BOX DIFF ICON -->
                  <div class="stats-box-diff-icon positive">
                    <!-- ICON PLUS SMALL -->
                    <svg class="icon-plus-small">
                      <use xlink:href="#svg-plus-small"></use>
                    </svg>
                    <!-- /ICON PLUS SMALL -->
                  </div>
                  <!-- /STATS BOX DIFF ICON -->

                  <!-- STATS BOX DIFF VALUE -->
                  <p class="stats-box-diff-value">4.5%</p>
                  <!-- /STATS BOX DIFF VALUE -->
                </div>
                <!-- /STATS BOX DIFF -->
              </div>
              <!-- /STATS BOX VALUE WRAP -->

              <!-- STATS BOX TITLE -->
              <p class="stats-box-title">{{ this.panelData_2.statsBox_4 }}</p>
              <!-- /STATS BOX TITLE -->

              <!-- STATS BOX TEXT -->
              <p class="stats-box-text">{{ this.panelData_2.statsBoxTextMonth }}</p>
              <!-- /STATS BOX TEXT -->
            </div>
            <!-- /STATS BOX -->
          </div>
          <!-- /GRID -->
        </div>
        <!-- /GRID -->
        <!-- /GAME 1 -->
      </div>


      <div id="gameListNavBar"></div>
      <div class="section-header"></div>

      <!-- SECTION HEADER -->
      <div class="section-header">
        <!-- SECTION HEADER INFO -->
        <div class="section-header-info">
          <!-- SECTION PRETITLE -->
          <p class="section-pretitle">Agrega un juego a esta sesión.</p>
          <!-- /SECTION PRETITLE -->

          <!-- SECTION TITLE -->
          <h2 class="section-title">Lista de juegos</h2>
          <!-- /SECTION TITLE -->
        </div>
        <!-- /SECTION HEADER INFO -->
      </div>
      <!-- /SECTION HEADER -->

      <!-- GRID -->
      <div class="grid">

        <!-- GRID -->
        <div class="grid grid-half change-on-desktop">
          <!-- ACHIEVEMENT BOX -->
          <div class="achievement-box secondary">
            <!-- ACHIEVEMENT BOX INFO WRAP -->
            <div class="achievement-box-info-wrap">
              <!-- ACHIEVEMENT BOX IMAGE -->
              <img class="achievement-box-image" src="img/badge/tycoon-b.png">
              <!-- /ACHIEVEMENT BOX IMAGE -->

              <!-- ACHIEVEMENT BOX INFO -->
              <div class="achievement-box-info">
                <!-- ACHIEVEMENT BOX TITLE -->
                <p class="achievement-box-title">Jugador o juego nuevo.</p>
                <!-- /ACHIEVEMENT BOX TITLE -->

                <!-- ACHIEVEMENT BOX TEXT -->
                <p class="achievement-box-text"><span class="bold">Añade un panel adicional y temporal</span>con las
                  estadísticas de otro juego o jugador..</p>
                <!-- /ACHIEVEMENT BOX TEXT -->
              </div>
              <!-- /ACHIEVEMENT BOX INFO -->
            </div>
            <!-- /ACHIEVEMENT BOX INFO WRAP -->

            <!-- BUTTON -->
            <a class="button white-solid popup-selectTag-trigger">¡ Añadir panel !</a>
            <!-- /BUTTON -->

          </div>
          <!-- /ACHIEVEMENT BOX -->

          <!-- ACHIEVEMENT BOX -->
          <div class="achievement-box primary">
            <!-- ACHIEVEMENT BOX INFO WRAP -->
            <div class="achievement-box-info-wrap">
              <!-- ACHIEVEMENT BOX IMAGE -->
              <img class="achievement-box-image" src="img/badge/villain-b.png">
              <!-- /ACHIEVEMENT BOX IMAGE -->

              <!-- ACHIEVEMENT BOX INFO -->
              <div class="achievement-box-info">
                <div v-show="settingsAddGames">
                  <!-- ACHIEVEMENT BOX TITLE -->
                  <p class="achievement-box-title">Cambia el juego principal.</p>
                  <!-- /ACHIEVEMENT BOX TITLE -->

                  <!-- ACHIEVEMENT BOX TEXT -->
                  <p class="achievement-box-text"><span class="bold">Vuelve a la página de inicio</span>para cambiar el
                    juego y visualizar las estadísticas.</p>
                  <!-- /ACHIEVEMENT BOX TEXT -->
                </div>
                <div v-show="settingsInputAddGame">

                  <!-- ACHIEVEMENT BOX TITLE -->
                  <p class="achievement-box-title">¡ Atención !</p>
                  <!-- /ACHIEVEMENT BOX TITLE -->

                  <!-- ACHIEVEMENT BOX TEXT -->
                  <p class="achievement-box-text">Cambiar el juego principal <span class="bold">implica cambiar la sesión</span>,
                    ¿estás seguro?.</p>
                  <!-- /ACHIEVEMENT BOX TEXT -->

                </div>
              </div>
              <!-- /ACHIEVEMENT BOX INFO -->
            </div>
            <!-- /ACHIEVEMENT BOX INFO WRAP -->

            <button @click="resetSession" v-show="settingsInputAddGame" class="button bg-danger"
                    style="margin-right: 5px">Salir
            </button>
            <!-- BUTTON -->
            <a @click="settingsAddGame(settingsInputAddGame)"
               class="button white-solid">{{ !settingsInputAddGame ? '¡ Cambiar juego !' : 'Cancelar' }}</a>
            <!-- /BUTTON -->

          </div>
          <!-- /ACHIEVEMENT BOX -->
        </div>
        <!-- /GRID -->

      </div>
      <!-- /GRID -->


      <div id="faqNavbar"></div>
      <!-- SECTION HEADER -->
      <div class="section-header"></div>
      <!-- /SECTION HEADER -->

      <!-- SECTION HEADER -->
      <div class="section-header">
        <!-- SECTION HEADER INFO -->
        <div class="section-header-info">
          <!-- SECTION PRETITLE -->
          <p class="section-pretitle">Preguntas frecuentes.</p>
          <!-- /SECTION PRETITLE -->

          <!-- SECTION TITLE -->
          <h2 class="section-title">Faqs</h2>
          <!-- /SECTION TITLE -->
        </div>
        <!-- /SECTION HEADER INFO -->
      </div>
      <!-- /SECTION HEADER -->

      <!-- SECTION HEADER -->
      <div class="section-header"></div>
      <!-- /SECTION HEADER -->

      <!-- WIDGET BOX -->
      <div class="widget-box">
        <!-- WIDGET BOX CONTENT -->
        <div class="widget-box-content">
          <!-- SIMPLE ACCORDION LIST -->
          <div class="simple-accordion-list">
            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿Qué es Statt?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Yes! Join me on my channel's chatbox every saturday and I'll be
                    taking game requests for upcoming streams.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->

            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿De donde salen todos los datos que estoy visualizando?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content accordion-open">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Toda la información que se visualiza es pública, Statt obtiene la información de los canales que tiene habilitados Supercell, la desarrolladora.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->

            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿Se pueden solicitar más juegos?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Yes! Join me on my channel's chatbox every saturday and I'll be
                    taking game requests for upcoming streams.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->

            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿Cómo se visualiza el perfil de otro jugador?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Yes! Join me on my channel's chatbox every saturday and I'll be
                    taking game requests for upcoming streams.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->

            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿Cómo se puede salir y reiniciar la sesión?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Yes! Join me on my channel's chatbox every saturday and I'll be
                    taking game requests for upcoming streams.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->

            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿Esta información esta actualizada?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Yes! Join me on my channel's chatbox every saturday and I'll be
                    taking game requests for upcoming streams.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->

            <!-- SIMPLE ACCORDION -->
            <div class="simple-accordion">
              <!-- SIMPLE ACCORDION HEADER -->
              <div class="simple-accordion-header accordion-trigger">
                <!-- SIMPLE ACCORDION TITLE -->
                <p class="simple-accordion-title">¿Qué hago si ha ocurrido un error?</p>
                <!-- /SIMPLE ACCORDION TITLE -->

                <!-- SIMPLE ACCORDION ICON -->
                <div class="simple-accordion-icon">
                  <!-- ICON PLUS SMALL -->
                  <svg class="icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- /ICON PLUS SMALL -->

                  <!-- ICON MINUS SMALL -->
                  <svg class="icon-minus-small">
                    <use xlink:href="#svg-minus-small"></use>
                  </svg>
                  <!-- /ICON MINUS SMALL -->
                </div>
                <!-- /SIMPLE ACCORDION ICON -->

                <!-- SIMPLE ACCORDION CONTENT -->
                <div class="simple-accordion-content accordion-content">
                  <!-- SIMPLE ACCORDION TEXT -->
                  <p class="simple-accordion-text">Yes! Join me on my channel's chatbox every saturday and I'll be
                    taking game requests for upcoming streams.</p>
                  <!-- /SIMPLE ACCORDION TEXT -->
                </div>
                <!-- /SIMPLE ACCORDION CONTENT -->
              </div>
              <!-- /SIMPLE ACCORDION HEADER -->
            </div>
            <!-- /SIMPLE ACCORDION -->
          </div>
          <!-- SIMPLE ACCORDION LIST -->
        </div>
        <!-- /WIDGET BOX CONTENT -->
      </div>
      <!-- /WIDGET BOX -->

      <!-- SECTION HEADER -->
      <div class="section-header"></div>
      <!-- /SECTION HEADER -->


      <div id="contactNavBar"></div>
      <!-- SECTION HEADER -->
      <div class="section-header">
        <!-- SECTION HEADER INFO -->
        <div class="section-header-info">
          <!-- SECTION PRETITLE -->
          <p class="section-pretitle">Contacta con www.statt.es</p>
          <!-- /SECTION PRETITLE -->

          <!-- SECTION TITLE -->
          <h2 class="section-title">Contacto</h2>
          <!-- /SECTION TITLE -->
        </div>
        <!-- /SECTION HEADER INFO -->
      </div>
      <!-- /SECTION HEADER -->

      <!-- SECTION HEADER -->
      <div class="section-header"></div>
      <!-- /SECTION HEADER -->

      <!-- TAB BOX -->
      <div class="tab-box">
        <!-- TAB BOX OPTIONS -->
        <div class="tab-box-options">
          <!-- TAB BOX OPTION -->
          <div class="tab-box-option">
            <!-- TAB BOX OPTION TITLE -->
            <p class="tab-box-option-title">Formulario</p>
            <!-- /TAB BOX OPTION TITLE -->
          </div>
          <!-- /TAB BOX OPTION -->

          <!-- TAB BOX OPTION -->
          <div class="tab-box-option">
            <!-- TAB BOX OPTION TITLE -->
            <p class="tab-box-option-title">Desarrolladora</p>
            <!-- /TAB BOX OPTION TITLE -->
          </div>
          <!-- /TAB BOX OPTION -->
        </div>
        <!-- /TAB BOX OPTIONS -->

        <!-- TAB BOX ITEMS -->
        <div class="tab-box-items" style="margin: 30px">
          <!-- TAB BOX ITEM -->
          <div class="tab-box-item">
            <!-- WIDGET BOX CONTENT -->
            <div class="tab-box-item-content-box-content">
              <!-- FORM -->
              <form id="contactForm" class="form">
                <!-- FORM ROW -->
                <div class="form-row split">
                  <!-- FORM ITEM -->
                  <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                      <label for="billing-first-name">Nombre</label>
                      <input type="text" id="billing-first-name" name="billing_first_name">
                    </div>
                    <!-- /FORM INPUT -->
                  </div>
                  <!-- /FORM ITEM -->

                  <!-- FORM ITEM -->
                  <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                      <label for="billing-last-name">Apellido</label>
                      <input type="text" id="billing-last-name" name="billing_last_name">
                    </div>
                    <!-- /FORM INPUT -->
                  </div>
                  <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->

                <!-- FORM ROW -->
                <div class="form-row split">
                  <!-- FORM ITEM -->
                  <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                      <label for="billing-email">Email</label>
                      <input type="text" id="billing-email" name="billing_email">
                    </div>
                    <!-- /FORM INPUT -->
                  </div>
                  <!-- /FORM ITEM -->

                  <!-- FORM ITEM -->
                  <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                      <label for="billing-phone-number">Teléfono</label>
                      <input type="text" id="billing-phone-number" name="billing_phone_number">
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
                    <div class="form-input small medium-textarea">
                      <textarea id="billing-details" name="billing_details"
                                placeholder="¿Alguna cosa más que añadir? ..."></textarea>
                    </div>
                    <!-- /FORM INPUT -->
                  </div>
                  <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->
              </form>
              <!-- /FORM -->

              <button class="button medium secondary" form="contactForm">Enviar</button>
            </div>
            <!-- WIDGET BOX CONTENT -->
          </div>
          <!-- /TAB BOX ITEM -->

          <!-- TAB BOX ITEM -->
          <div class="tab-box-item">
            <!-- USER PREVIEW -->
            <div class="user-preview">
              <!-- USER PREVIEW COVER -->
              <figure class="user-preview-cover liquid">
                <img src="img/cover/08.jpg" alt="cover-08">
              </figure>
              <!-- /USER PREVIEW COVER -->

              <!-- USER PREVIEW INFO -->
              <div class="user-preview-info">
                <!-- TAG STICKER -->
                <div class="tag-sticker">
                  <!-- TAG STICKER ICON -->
                  <svg class="tag-sticker-icon icon-private">
                    <use xlink:href="#svg-private"></use>
                  </svg>
                  <!-- /TAG STICKER ICON -->
                </div>
                <!-- /TAG STICKER -->

                <!-- USER SHORT DESCRIPTION -->
                <div class="user-short-description">
                  <!-- USER SHORT DESCRIPTION AVATAR -->
                  <a class="user-short-description-avatar user-avatar medium no-stats">
                    <!-- USER AVATAR BORDER -->
                    <div class="user-avatar-border">
                      <!-- HEXAGON -->
                      <div class="hexagon-120-130"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BORDER -->

                    <!-- USER AVATAR CONTENT -->
                    <div class="user-avatar-content">
                      <!-- HEXAGON -->
                      <div class="hexagon-image-100-110"
                           data-src="https://cdn.supercell.com/supercell.com/210524064556/supercell.com/files/supercell_logo_white_on_black.jpg"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR CONTENT -->
                  </a>
                  <!-- /USER SHORT DESCRIPTION AVATAR -->

                  <!-- USER SHORT DESCRIPTION TITLE -->
                  <p class="user-short-description-title">Supercell</p>
                  <!-- /USER SHORT DESCRIPTION TITLE -->

                  <!-- USER SHORT DESCRIPTION TEXT -->
                  <p class="user-short-description-text">Links de contacto</p>
                  <!-- /USER SHORT DESCRIPTION TEXT -->
                </div>
                <!-- /USER SHORT DESCRIPTION -->

                <!-- USER STATS -->
                <div class="user-stats">
                  <!-- USER STAT -->
                  <div class="user-stat">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">Brawl Stars</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">Juego añadido</p>
                    <!-- /USER STAT TEXT -->
                  </div>
                  <!-- /USER STAT -->

                  <!-- USER STAT -->
                  <div class="user-stat">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">Clash Royale</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">Juego añadido</p>
                    <!-- /USER STAT TEXT -->
                  </div>
                  <!-- /USER STAT -->

                  <!-- USER STAT -->
                  <div class="user-stat">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">Clash of Clans</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">Juego añadido</p>
                    <!-- /USER STAT TEXT -->
                  </div>
                  <!-- /USER STAT -->

                  <!-- USER STAT -->
                  <div class="user-stat">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">Hay Day</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">No añadido</p>
                    <!-- /USER STAT TEXT -->
                  </div>
                  <!-- /USER STAT -->

                  <!-- USER STAT -->
                  <div class="user-stat">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">Boom Beach</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">No añadido</p>
                    <!-- /USER STAT TEXT -->
                  </div>
                  <!-- /USER STAT -->
                </div>
                <!-- /USER STATS -->


                <!-- USER PREVIEW ACTIONS -->
                <div class="user-preview-actions">
                  <!-- BUTTON -->
                  <p class="button secondary full">
                    <!-- BUTTON ICON -->
                    <svg class="button-icon icon-join-group">
                      <use xlink:href="#svg-join-group"></use>
                    </svg>
                    <!-- /BUTTON ICON -->
                    Contacto Supercell
                  </p>
                  <!-- /BUTTON -->
                  <!-- BUTTON -->
                  <p class="button btn-info full">
                    Juegos
                  </p>
                  <!-- /BUTTON -->
                  <!-- BUTTON -->
                  <p class="button bg-success full">
                    <!-- BUTTON ICON -->
                    <svg class="button-icon icon-join-group">
                      <use xlink:href="#svg-join-group"></use>
                    </svg>
                    <!-- /BUTTON ICON -->
                    Pedir juego
                  </p>
                  <!-- /BUTTON -->
                </div>
                <!-- /USER PREVIEW ACTIONS -->
              </div>
              <!-- /USER PREVIEW INFO -->
            </div>
            <!-- /USER PREVIEW -->
          </div>
          <!-- /TAB BOX ITEM -->
        </div>
        <!-- /TAB BOX ITEMS -->

      </div>
      <!-- /TAB BOX -->
    </div>
    <!-- /CONTENT GRID -->

    <!-- POPUP BOX -->
    <div class="popup-box mid popup-selectTag">
      <!-- POPUP CLOSE BUTTON -->
      <div class="popup-close-button popup-selectTag-trigger">
        <!-- POPUP CLOSE BUTTON ICON -->
        <svg class="popup-close-button-icon icon-cross">
          <use xlink:href="#svg-cross"></use>
        </svg>
        <!-- /POPUP CLOSE BUTTON ICON -->
      </div>
      <!-- /POPUP CLOSE BUTTON -->

      <!-- POPUP BOX BODY -->
      <div class="popup-box-body">

        <!-- POPUP BOX CONTENT -->
        <div class="popup-box-content">
          <!-- WIDGET BOX -->
          <div class="widget-box">
            <!-- WIDGET BOX TITLE -->
            <p class="widget-box-title">Añade un juego a este perfil.</p>
            <!-- /WIDGET BOX TITLE -->

            <!-- WIDGET BOX CONTENT -->
            <div class="widget-box-content">
              <!-- FORM -->
              <form id="secondForm" @submit.prevent="sendUserData" class="form">
                <!-- FORM ROW -->
                <div class="form-row">
                  <!-- FORM ITEM -->
                  <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-select">
                      <label for="id-game">Selecciona juego.</label>
                      <select v-model="selectedGame" id="id-game">
                        <option v-show="game != 'brawl' && this.gameExtra_1 != 'brawl' && this.gameExtra_2 != 'brawl'">
                          Brawl Stars
                        </option>
                        <option
                            v-show="game != 'royale' && this.gameExtra_1 != 'royale' && this.gameExtra_2 != 'royale'">
                          Clash Royale
                        </option>
                        <option v-show="game != 'clash' && this.gameExtra_1 != 'clash' && this.gameExtra_2 != 'clash'">
                          Clash of Clans
                        </option>
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
                      <label for="usertag">{{ this.selectedGame }}</label>
                      <input v-model="userTagName" type="text" id="usertag" name="usertag">
                    </div>
                    <!-- /FORM INPUT -->
                  </div>
                  <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->
              </form>
              <!-- /FORM -->
            </div>
            <!-- WIDGET BOX CONTENT -->
          </div>
          <!-- /WIDGET BOX -->
        </div>
        <!-- /POPUP BOX CONTENT -->

        <!-- POPUP BOX SIDEBAR -->
        <div class="popup-box-sidebar">
          <!-- POPUP BOX SIDEBAR FOOTER -->
          <!-- WIDGET BOX TITLE -->
          <p class="popup-box-title">Información</p>
          <div class="popup-box-sidebar-footer">

            <div class="widget-box-text">
              <p>- Puedes añadir un juego utilizando el <b>tag de tu perfil</b> o bien, puedes introducir el <b>tag de
                otro jugador</b>.</p>
            </div>
            <div class="widget-box-text">
              <p>- Para buscar a un jugador del juego principal, utiliza la barra de la navegación.</p>
            </div>

            <!-- BUTTON -->
            <button form="secondForm" class="button secondary full popup-manage-group-trigger popup-selectTag-trigger"
                    style="margin-top: 10px">¡Añadir juego!
            </button>
            <!-- /BUTTON -->
          </div>

          <!-- /WIDGET BOX TITLE -->
          <!-- /POPUP BOX SIDEBAR FOOTER -->
        </div>
        <!-- /POPUP BOX SIDEBAR -->
      </div>
      <!-- /POPUP BOX BODY -->
    </div>
    <!-- /POPUP BOX -->
  </div>
</template>

<script>
import axios from "axios";
import mainData from "./games/mainData.js"
import dataBrawl from "./games/dataBrawl.js";
import dataRoyale from "./games/dataRoyale.js";
import dataClash from "./games/dataClash.js";

export default {
  name: "componentContent",
  data() {
    return {
      settingsTag: '',
      settingsAddGames: true,
      settingsInputAddGame: false,
      showPanelGame_1: false,
      showPanelGame_2: false,
      game: '...',
      gameExtra_1: '...',
      gameExtra_2: '...',
      mainData: '...',
      panelData_1: '...',
      panelData_2: '...',
      contentData: '...',
      panelContentData_1: '...',
      panelContentData_2: '...',
      userTagName: '',
      selectedGame: ''
    }
  },
  methods: {
    settingsAddGame(value) {
      if (this.settingsTag != '') {
        console.log("")
      } else {
        this.settingsAddGames = value
        this.settingsInputAddGame = !value
      }
    },
    changePanelGame_1(showPanel) {
      this.showPanelGame_1 = !showPanel
    },
    changePanelGame_2(showPanel) {
      this.showPanelGame_2 = !showPanel
    },
    sendUserData() {
      if (this.userTagName != "") {
        switch (this.selectedGame) {

          case "Brawl Stars":
            axios('/link-api/brawl/' + this.userTagName).then(response => {

              if (response.data.tag != undefined) {
                if (this.panelData_1 === '...') {
                  document.cookie = "gameExtra_1=" + 'brawl.' + this.userTagName
                  this.panelData_1 = mainData.brawlModel

                  let brawlData = dataBrawl
                  this.panelContentData_1 = brawlData(response.data)
                  this.gameExtra_1 = 'brawl'


                  this.changePanelGame_1(this.showPanelGame_1)
                } else {
                  document.cookie = "gameExtra_2=" + 'brawl.' + this.userTagName
                  this.panelData_2 = mainData.brawlModel

                  let brawlData = dataBrawl
                  this.panelContentData_2 = brawlData(response.data)
                  this.gameExtra_2 = 'brawl'

                  this.changePanelGame_2(this.showPanelGame_2)

                }

              } else {

              }
            })

            break

          case "Clash Royale":
            axios('/link-api/royale/' + this.userTagName).then(response => {

              if (response.data.tag != undefined) {
                if (this.panelData_1 === '...') {
                  document.cookie = "gameExtra_1=" + 'royale.' + this.userTagName
                  this.panelData_1 = mainData.royaleModel

                  let royaleData = dataRoyale
                  this.panelContentData_1 = royaleData(response.data)
                  this.gameExtra_1 = 'royale'

                  this.changePanelGame_1(this.showPanelGame_1)
                } else {
                  document.cookie = "gameExtra_2=" + 'royale.' + this.userTagName
                  this.panelData_2 = mainData.royaleModel

                  let royaleData = dataRoyale
                  this.panelContentData_2 = royaleData(response.data)
                  this.gameExtra_2 = 'royale'

                  this.changePanelGame_2(this.showPanelGame_2)

                }

              } else {

              }
            })
            break

          case "Clash of Clans":
            axios('/link-api/clash/' + this.userTagName).then(response => {

              if (response.data.tag != undefined) {
                if (this.panelData_1 === '...') {
                  document.cookie = "gameExtra_1=" + 'clash.' + this.userTagName
                  this.panelData_1 = mainData.clashModel

                  let clashData = dataClash
                  this.panelContentData_1 = clashData(response.data)
                  this.gameExtra_1 = 'clash'

                  this.changePanelGame_1(this.showPanelGame_1)
                } else {
                  document.cookie = "gameExtra_2=" + 'clash.' + this.userTagName
                  this.panelData_2 = mainData.clashModel

                  let clashData = dataClash
                  this.panelContentData_2 = clashData(response.data)
                  this.gameExtra_2 = 'clash'

                  this.changePanelGame_2(this.showPanelGame_2)

                }

              } else {

              }
            })

            break
        }
      }
    },
    resetSession() {
      document.cookie = 'tag=;'
      document.cookie = 'game=;'

      window.location.reload();
    },
    destroyPanel(nPanel) {
      console.log(nPanel)
      if (nPanel != 2) {
        this.changePanelGame_1(true)
        this.panelData_1 = '...'
      } else {
        this.changePanelGame_2(true)
        this.panelData_2 = '...'
      }
    }
  },
  mounted() {

    const cookieTag = getCookie("tag");
    const cookieGame = getCookie("game");

    this.game = cookieGame

    if (cookieTag != "" && cookieGame != "") {
      axios(`/link-api/${cookieGame}/${cookieTag}`).then(response => {
        if (response.data.tag == '') {
          console.log("No encontrado.")
        } else {
          switch (cookieGame) {
            case 'brawl':
              this.mainData = mainData.brawlModel

              let brawlData = dataBrawl
              this.contentData = brawlData(response.data)
              break
            case 'royale':
              this.mainData = mainData.royaleModel

              let royaleData = dataRoyale
              this.contentData = royaleData(response.data)
              break
            case 'clash':
              this.mainData = mainData.clashModel

              let clashData = dataClash
              this.contentData = clashData(response.data)
              break
          }
          return response.data.tag
        }
      })

    }

    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return "" + c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
}
</script>

<style scoped>

</style>