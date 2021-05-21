<template>
  <!-- CONTENT GRID -->
  <div class="content-grid">
    <!-- SECTION BANNER -->
    <div class="section-banner">
      <!-- SECTION BANNER ICON -->
      <img class="section-banner-icon" src="img/banner/overview-icon.png" alt="overview-icon">
      <!-- /SECTION BANNER ICON -->

      <!-- SECTION BANNER TITLE -->
      <p class="section-banner-title">{{this.name}}</p>
      <!-- /SECTION BANNER TITLE -->

      <!-- SECTION BANNER TEXT -->
      <p class="section-banner-text">{{'#' + this.tag}}</p>
      <!-- /SECTION BANNER TEXT -->
    </div>
    <!-- /SECTION BANNER -->

    <!-- SECTION HEADER -->
    <div class="section-header">
      <!-- SECTION HEADER INFO -->
      <div class="section-header-info">
        <!-- SECTION PRETITLE -->
        <p class="section-pretitle">Overview</p>
        <!-- /SECTION PRETITLE -->

        <!-- SECTION TITLE -->
        <h2 class="section-title">My Profile</h2>
        <!-- /SECTION TITLE -->
      </div>
      <!-- /SECTION HEADER INFO -->
    </div>
    <!-- /SECTION HEADER -->

    <!-- GRID -->
    <div class="grid grid-3-3-3 centered">
      <!-- PROFILE STATS -->
      <div class="profile-stats fixed-height" style="height: 435px">
        <!-- PROFILE STATS COVER -->
        <div class="profile-stats-cover">
          <!-- PROFILE STATS COVER TITLE -->
          <p class="profile-stats-cover-title">¡Bienvenid@!</p>
          <!-- /PROFILE STATS COVER TITLE -->

          <!-- PROFILE STATS COVER TEXT -->
          <p class="profile-stats-cover-text">{{this.name}}</p>
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
              <div class="hexagon-image-82-90" data-src="img/avatar/01.jpg"></div>
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
              <p class="user-avatar-badge-text">{{this.expLevel}}</p>
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
              <p class="featured-stat-title">{{this.expPoints}}</p>
              <!-- /FEATURED STAT TITLE -->

              <!-- FEATURED STAT SUBTITLE -->
              <p class="featured-stat-subtitle">Puntos</p>
              <!-- /FEATURED STAT SUBTITLE -->

              <!-- FEATURED STAT TEXT -->
              <p class="featured-stat-text">Media mensual</p>
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
              <p class="featured-stat-title">{{this.expLevel}}</p>
              <!-- /FEATURED STAT TITLE -->

              <!-- FEATURED STAT SUBTITLE -->
              <p class="featured-stat-subtitle">Nivel</p>
              <!-- /FEATURED STAT SUBTITLE -->

              <!-- FEATURED STAT TEXT -->
              <p class="featured-stat-text">Media mensual</p>
              <!-- /FEATURED STAT TEXT -->
            </div>
            <!-- /FEATURED STAT -->
          </div>
          <!-- /FEATURED STAT LIST -->
        </div>
        <!-- /PROFILE STATS INFO -->
      </div>
      <!-- /PROFILE STATS -->

      <div class="grid grid-1-2 centered">
        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big secondary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">{{this.threeVictories}}</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Victorias 3vs3</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">5.3%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->

        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big primary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">{{ this.soloVictories }}</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Victorias Solo</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">4.7%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->
      </div>

      <div class="grid grid-1-2 centered">
        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big secondary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">{{ this.duoVictories }}</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Victorias Duo</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">5.3%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->

        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big primary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">{{ this.isQualifiedFromChampionshipChallenge ? 'Cualificado' : 'No'}}</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Champions brawl</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">4.7%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->
      </div>

      <!-- WIDGET BOX -->
      <div class="widget-box">
        <!-- WIDGET BOX CONTROLS -->
        <div class="widget-box-controls">
          <!-- SLIDER CONTROLS -->
          <div id="badge-stat-slider-controls" class="slider-controls">
            <!-- SLIDER CONTROL -->
            <div class="slider-control left">
              <!-- SLIDER CONTROL ICON -->
              <svg class="slider-control-icon icon-small-arrow">
                <use xlink:href="#svg-small-arrow"></use>
              </svg>
              <!-- /SLIDER CONTROL ICON -->
            </div>
            <!-- /SLIDER CONTROL -->

            <!-- SLIDER CONTROL -->
            <div class="slider-control right">
              <!-- SLIDER CONTROL ICON -->
              <svg class="slider-control-icon icon-small-arrow">
                <use xlink:href="#svg-small-arrow"></use>
              </svg>
              <!-- /SLIDER CONTROL ICON -->
            </div>
            <!-- /SLIDER CONTROL -->
          </div>
          <!-- /SLIDER CONTROLS -->
        </div>
        <!-- /WIDGET BOX CONTROLS -->

        <!-- WIDGET BOX TITLE -->
        <p class="widget-box-title">Brawlers más usados</p>
        <!-- /WIDGET BOX TITLE -->

        <!-- WIDGET BOX CONTENT -->
        <div class="widget-box-content">
          <!-- WIDGET BOX CONTENT SLIDER -->
          <div id="badge-stat-slider-items" class="widget-box-content-slider">
            <!-- WIDGET BOX CONTENT SLIDER ITEM -->
            <div class="widget-box-content-slider-item">
              <!-- BADGE ITEM STAT -->
              <div class="badge-item-stat void">
                <!-- TEXT STICKER -->
                <p class="text-sticker">
                  <!-- TEXT STICKER ICON -->
                  <svg class="text-sticker-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- TEXT STICKER ICON -->
                  20 Exp
                </p>
                <!-- /TEXT STICKER -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/uexp-b.png" alt="badge-uexp-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Universe Explorer</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Joined and posted on 20 different groups</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat medium">
                  <!-- PROGRESS STAT BAR -->
                  <div id="badge-uexp" class="progress-stat-bar"></div>
                  <!-- /PROGRESS STAT BAR -->

                  <!-- BAR PROGRESS WRAP -->
                  <div class="bar-progress-wrap">
                    <!-- BAR PROGRESS INFO -->
                    <p class="bar-progress-info negative center"><span class="bar-progress-text no-space"></span></p>
                    <!-- /BAR PROGRESS INFO -->
                  </div>
                  <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
              </div>
              <!-- /BADGE ITEM STAT -->
            </div>
            <!-- /WIDGET BOX CONTENT SLIDER ITEM -->

            <!-- WIDGET BOX CONTENT SLIDER ITEM -->
            <div class="widget-box-content-slider-item">
              <!-- BADGE ITEM STAT -->
              <div class="badge-item-stat void">
                <!-- TEXT STICKER -->
                <p class="text-sticker">
                  <!-- TEXT STICKER ICON -->
                  <svg class="text-sticker-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- TEXT STICKER ICON -->
                  40 Exp
                </p>
                <!-- /TEXT STICKER -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/verifieds-b.png" alt="badge-verifieds-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Verified Streamer</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Has linked a stream that was verified by the staff</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat medium">
                  <!-- PROGRESS STAT BAR -->
                  <div id="badge-verifieds" class="progress-stat-bar"></div>
                  <!-- /PROGRESS STAT BAR -->

                  <!-- BAR PROGRESS WRAP -->
                  <div class="bar-progress-wrap">
                    <!-- BAR PROGRESS INFO -->
                    <p class="bar-progress-info negative center"><span class="bar-progress-text no-space"></span></p>
                    <!-- /BAR PROGRESS INFO -->
                  </div>
                  <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
              </div>
              <!-- /BADGE ITEM STAT -->
            </div>
            <!-- /WIDGET BOX CONTENT SLIDER ITEM -->

            <!-- WIDGET BOX CONTENT SLIDER ITEM -->
            <div class="widget-box-content-slider-item">
              <!-- BADGE ITEM STAT -->
              <div class="badge-item-stat void">
                <!-- TEXT STICKER -->
                <p class="text-sticker">
                  <!-- TEXT STICKER ICON -->
                  <svg class="text-sticker-icon icon-plus-small">
                    <use xlink:href="#svg-plus-small"></use>
                  </svg>
                  <!-- TEXT STICKER ICON -->
                  40 Exp
                </p>
                <!-- /TEXT STICKER -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/qconq-b.png" alt="badge-qconq-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Quest Conqueror</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Succesfully completed at least 10 quests at 100%</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat medium">
                  <!-- PROGRESS STAT BAR -->
                  <div id="badge-qconq" class="progress-stat-bar"></div>
                  <!-- /PROGRESS STAT BAR -->

                  <!-- BAR PROGRESS WRAP -->
                  <div class="bar-progress-wrap">
                    <!-- BAR PROGRESS INFO -->
                    <p class="bar-progress-info negative center"><span class="bar-progress-text no-space"></span></p>
                    <!-- /BAR PROGRESS INFO -->
                  </div>
                  <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
              </div>
              <!-- /BADGE ITEM STAT -->
            </div>
            <!-- /WIDGET BOX CONTENT SLIDER ITEM -->
          </div>
          <!-- /WIDGET BOX CONTENT SLIDER -->
        </div>
        <!-- /WIDGET BOX CONTENT -->
      </div>
      <!-- /WIDGET BOX -->
    </div>
    <!-- /GRID -->

    <!-- SECTION HEADER -->
    <div class="section-header">
      <!-- SECTION HEADER INFO -->
      <div class="section-header-info">
        <!-- SECTION PRETITLE -->
        <p class="section-pretitle">Overview</p>
        <!-- /SECTION PRETITLE -->

        <!-- SECTION TITLE -->
        <h2 class="section-title">My Profile</h2>
        <!-- /SECTION TITLE -->
      </div>
      <!-- /SECTION HEADER INFO -->
    </div>
    <!-- /SECTION HEADER -->

    <!-- GRID -->
    <div class="grid">

      <!-- GRID -->
      <div class="grid grid-3-3-3-3 centered">
        <!-- ACCOUNT STAT BOX -->
        <div class="account-stat-box account-stat-active-users">
          <!-- ACCOUNT STAT BOX ICON WRAP -->
          <div class="account-stat-box-icon-wrap">
            <!-- ACCOUNT STAT BOX ICON -->
            <svg class="account-stat-box-icon icon-friend">
              <use xlink:href="#svg-friend"></use>
            </svg>
            <!-- /ACCOUNT STAT BOX ICON -->
          </div>
          <!-- /ACCOUNT STAT BOX ICON WRAP -->

          <!-- ACCOUNT STAT BOX TITLE -->
          <p class="account-stat-box-title">71</p>
          <!-- /ACCOUNT STAT BOX TITLE -->

          <!-- ACCOUNT STAT BOX SUBTITLE -->
          <p class="account-stat-box-subtitle">Active Users</p>
          <!-- /ACCOUNT STAT BOX SUBTITLE -->

          <!-- ACCOUNT STAT BOX TEXT -->
          <p class="account-stat-box-text">Amount of active users visiting your account at this moment</p>
          <!-- /ACCOUNT STAT BOX TEXT -->
        </div>
        <!-- /ACCOUNT STAT BOX -->

        <!-- ACCOUNT STAT BOX -->
        <div class="account-stat-box account-stat-visits">
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
          <p class="account-stat-box-text">Times old or new members visited any of your acount pages this
            month</p>
          <!-- /ACCOUNT STAT BOX TEXT -->
        </div>
        <!-- /ACCOUNT STAT BOX -->

        <!-- ACCOUNT STAT BOX -->
        <div class="account-stat-box account-stat-session-duration">
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
        <div class="account-stat-box account-stat-returning-visitors">
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
      <div class="grid grid-3-3-3 centered">
        <!-- EARNING STAT BOX -->
        <div class="earning-stat-box">
          <!-- EARNING STAT BOX INFO -->
          <div class="earning-stat-box-info">
            <!-- EARNING STAT BOX ICON WRAP -->
            <div class="earning-stat-box-icon-wrap stat-item">
              <!-- EARNING STAT BOX ICON -->
              <svg class="earning-stat-box-icon icon-item">
                <use xlink:href="#svg-item"></use>
              </svg>
              <!-- /EARNING STAT BOX ICON -->
            </div>
            <!-- /EARNING STAT BOX ICON WRAP -->

            <!-- EARNING STAT BOX TITLE -->
            <p class="earning-stat-box-title">298</p>
            <!-- /EARNING STAT BOX TITLE -->

            <!-- EARNING STAT BOX TEXT -->
            <p class="earning-stat-box-text">Total Items Sold</p>
            <!-- /EARNING STAT BOX TEXT -->
          </div>
          <!-- /EARNING STAT BOX INFO -->
        </div>
        <!-- /EARNING STAT BOX -->

        <!-- EARNING STAT BOX -->
        <div class="earning-stat-box">
          <!-- EARNING STAT BOX INFO -->
          <div class="earning-stat-box-info">
            <!-- EARNING STAT BOX ICON WRAP -->
            <div class="earning-stat-box-icon-wrap stat-earning">
              <!-- EARNING STAT BOX ICON -->
              <svg class="earning-stat-box-icon icon-earnings">
                <use xlink:href="#svg-earnings"></use>
              </svg>
              <!-- /EARNING STAT BOX ICON -->
            </div>
            <!-- /EARNING STAT BOX ICON WRAP -->

            <!-- EARNING STAT BOX TITLE -->
            <p class="earning-stat-box-title">1.925 <span class="currency">U$D</span></p>
            <!-- /EARNING STAT BOX TITLE -->

            <!-- EARNING STAT BOX TEXT -->
            <p class="earning-stat-box-text">Total Earnings</p>
            <!-- /EARNING STAT BOX TEXT -->
          </div>
          <!-- /EARNING STAT BOX INFO -->
        </div>
        <!-- /EARNING STAT BOX -->

        <!-- EARNING STAT BOX -->
        <div class="earning-stat-box">
          <!-- EARNING STAT BOX INFO -->
          <div class="earning-stat-box-info">
            <!-- EARNING STAT BOX ICON WRAP -->
            <div class="earning-stat-box-icon-wrap stat-revenue">
              <!-- EARNING STAT BOX ICON -->
              <svg class="earning-stat-box-icon icon-revenue">
                <use xlink:href="#svg-revenue"></use>
              </svg>
              <!-- /EARNING STAT BOX ICON -->
            </div>
            <!-- /EARNING STAT BOX ICON WRAP -->

            <!-- EARNING STAT BOX TITLE -->
            <p class="earning-stat-box-title">2.203 <span class="currency">U$D</span></p>
            <!-- /EARNING STAT BOX TITLE -->

            <!-- EARNING STAT BOX TEXT -->
            <p class="earning-stat-box-text">Total Revenue</p>
            <!-- /EARNING STAT BOX TEXT -->
          </div>
          <!-- /EARNING STAT BOX INFO -->
        </div>
        <!-- /EARNING STAT BOX -->

        <!-- EARNING STAT BOX -->
        <div class="earning-stat-box">
          <!-- EARNING STAT BOX INFO -->
          <div class="earning-stat-box-info">
            <!-- EARNING STAT BOX ICON WRAP -->
            <div class="earning-stat-box-icon-wrap stat-revenue">
              <!-- EARNING STAT BOX ICON -->
              <svg class="earning-stat-box-icon icon-revenue">
                <use xlink:href="#svg-revenue"></use>
              </svg>
              <!-- /EARNING STAT BOX ICON -->
            </div>
            <!-- /EARNING STAT BOX ICON WRAP -->

            <!-- EARNING STAT BOX TITLE -->
            <p class="earning-stat-box-title">2.203 <span class="currency">U$D</span></p>
            <!-- /EARNING STAT BOX TITLE -->

            <!-- EARNING STAT BOX TEXT -->
            <p class="earning-stat-box-text">Total Revenue</p>
            <!-- /EARNING STAT BOX TEXT -->
          </div>
          <!-- /EARNING STAT BOX INFO -->
        </div>
        <!-- /EARNING STAT BOX -->
      </div>
      <!-- /GRID -->

    </div>
    <!-- /GRID -->

    <!-- SECTION HEADER -->
    <div class="section-header">
      <!-- SECTION HEADER INFO -->
      <div class="section-header-info">
        <!-- SECTION PRETITLE -->
        <p class="section-pretitle">Overview</p>
        <!-- /SECTION PRETITLE -->

        <!-- SECTION TITLE -->
        <h2 class="section-title">Account Analytics</h2>
        <!-- /SECTION TITLE -->
      </div>
      <!-- /SECTION HEADER INFO -->
    </div>
    <!-- /SECTION HEADER -->

    <!-- GRID -->
    <div class="grid">
      <!-- GRID -->
      <div class="grid grid-3-3-3-3 centered">
        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big secondary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">33</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Post Engagements</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">5.3%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->

        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big primary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">126</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Profile Views</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">4.7%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->

        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big secondary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">33</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Post Engagements</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">5.3%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->

        <!-- STATS DECORATION -->
        <div class="stats-decoration v2 big primary">
          <!-- STATS DECORATION TITLE -->
          <p class="stats-decoration-title">126</p>
          <!-- /STATS DECORATION TITLE -->

          <!-- STATS DECORATION SUBTITLE -->
          <p class="stats-decoration-subtitle">Profile Views</p>
          <!-- /STATS DECORATION SUBTITLE -->

          <!-- STATS DECORATION TEXT -->
          <p class="stats-decoration-text">Today</p>
          <!-- /STATS DECORATION TEXT -->

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
            <p class="percentage-diff-text">4.7%</p>
            <!-- /PERCENTAGE DIFF TEXT -->
          </div>
          <!-- /PERCENTAGE DIFF -->
        </div>
        <!-- /STATS DECORATION -->
      </div>
      <!-- /GRID -->

      <!-- GRID -->
      <div class="grid grid-3-3-3-3 centered">
        <!-- STATS BOX -->
        <div class="stats-box small stat-profile-views">
          <!-- STATS BOX VALUE WRAP -->
          <div class="stats-box-value-wrap">
            <!-- STATS BOX VALUE -->
            <p class="stats-box-value">87.365</p>
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
          <p class="stats-box-title">Profile Views</p>
          <!-- /STATS BOX TITLE -->

          <!-- STATS BOX TEXT -->
          <p class="stats-box-text">In the last month</p>
          <!-- /STATS BOX TEXT -->
        </div>
        <!-- /STATS BOX -->

        <!-- STATS BOX -->
        <div class="stats-box small stat-posts-created">
          <!-- STATS BOX VALUE WRAP -->
          <div class="stats-box-value-wrap">
            <!-- STATS BOX VALUE -->
            <p class="stats-box-value">294</p>
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
          <p class="stats-box-title">Posts Created</p>
          <!-- /STATS BOX TITLE -->

          <!-- STATS BOX TEXT -->
          <p class="stats-box-text">In the last month</p>
          <!-- /STATS BOX TEXT -->
        </div>
        <!-- /STATS BOX -->

        <!-- STATS BOX -->
        <div class="stats-box small stat-reactions-received">
          <!-- STATS BOX VALUE WRAP -->
          <div class="stats-box-value-wrap">
            <!-- STATS BOX VALUE -->
            <p class="stats-box-value">2.560</p>
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
          <p class="stats-box-title">Reactions Received</p>
          <!-- /STATS BOX TITLE -->

          <!-- STATS BOX TEXT -->
          <p class="stats-box-text">In the last month</p>
          <!-- /STATS BOX TEXT -->
        </div>
        <!-- /STATS BOX -->

        <!-- STATS BOX -->
        <div class="stats-box small stat-comments-received">
          <!-- STATS BOX VALUE WRAP -->
          <div class="stats-box-value-wrap">
            <!-- STATS BOX VALUE -->
            <p class="stats-box-value">947</p>
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
          <p class="stats-box-title">Comments Received</p>
          <!-- /STATS BOX TITLE -->

          <!-- STATS BOX TEXT -->
          <p class="stats-box-text">In the last month</p>
          <!-- /STATS BOX TEXT -->
        </div>
        <!-- /STATS BOX -->
      </div>
      <!-- /GRID -->
    </div>
    <!-- /GRID -->

    <!-- SECTION HEADER -->
    <div class="section-header">
      <!-- SECTION HEADER INFO -->
      <div class="section-header-info">
        <!-- SECTION PRETITLE -->
        <p class="section-pretitle">Overview</p>
        <!-- /SECTION PRETITLE -->

        <!-- SECTION TITLE -->
        <h2 class="section-title">Account Analytics</h2>
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
            <img class="achievement-box-image" src="img/badge/caffeinated-b.png" alt="badge-caffeinated-b">
            <!-- /ACHIEVEMENT BOX IMAGE -->

            <!-- ACHIEVEMENT BOX INFO -->
            <div class="achievement-box-info">
              <!-- ACHIEVEMENT BOX TITLE -->
              <p class="achievement-box-title">Last Badge Unlocked</p>
              <!-- /ACHIEVEMENT BOX TITLE -->

              <!-- ACHIEVEMENT BOX TEXT -->
              <p class="achievement-box-text"><span class="bold">Caffeinated</span> 2 days ago</p>
              <!-- /ACHIEVEMENT BOX TEXT -->
            </div>
            <!-- /ACHIEVEMENT BOX INFO -->
          </div>
          <!-- /ACHIEVEMENT BOX INFO WRAP -->

          <!-- BUTTON -->
          <a class="button white-solid" href="badges.html">Browse All</a>
          <!-- /BUTTON -->
        </div>
        <!-- /ACHIEVEMENT BOX -->

        <!-- ACHIEVEMENT BOX -->
        <div class="achievement-box primary">
          <!-- ACHIEVEMENT BOX INFO WRAP -->
          <div class="achievement-box-info-wrap">
            <!-- ACHIEVEMENT BOX IMAGE -->
            <img class="achievement-box-image" src="img/quest/completedq-l.png" alt="quest-completedq-l">
            <!-- /ACHIEVEMENT BOX IMAGE -->

            <!-- ACHIEVEMENT BOX INFO -->
            <div class="achievement-box-info">
              <!-- ACHIEVEMENT BOX TITLE -->
              <p class="achievement-box-title">Last Completed Quest</p>
              <!-- /ACHIEVEMENT BOX TITLE -->

              <!-- ACHIEVEMENT BOX TEXT -->
              <p class="achievement-box-text"><span class="bold">Nothing to Hide</span> 7 hours ago</p>
              <!-- /ACHIEVEMENT BOX TEXT -->
            </div>
            <!-- /ACHIEVEMENT BOX INFO -->
          </div>
          <!-- /ACHIEVEMENT BOX INFO WRAP -->

          <!-- BUTTON -->
          <a class="button white-solid" href="quests.html">Browse All</a>
          <!-- /BUTTON -->
        </div>
        <!-- /ACHIEVEMENT BOX -->
      </div>
      <!-- /GRID -->

      <!-- GRID -->
      <div class="grid grid-3-9 stretched">
        <!-- GRID COLUMN -->
        <div class="grid-column">
          <!-- WIDGET BOX -->
          <div class="widget-box">
            <!-- WIDGET BOX ACTIONS -->
            <div class="widget-box-actions">
              <!-- WIDGET BOX ACTION -->
              <div class="widget-box-action">
                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">Engagements</p>
                <!-- /WIDGET BOX TITLE -->
              </div>
              <!-- /WIDGET BOX ACTION -->
            </div>
            <!-- /WIDGET BOX ACTIONS -->

            <!-- WIDGET BOX CONTENT -->
            <div class="widget-box-content">
              <!-- PROGRESS ARC WRAP -->
              <div class="progress-arc-wrap">
                <!-- PROGRESS ARC -->
                <div class="progress-arc">
                  <canvas id="engagements-chart"></canvas>
                </div>
                <!-- PROGRESS ARC -->

                <!-- PROGRESS ARC INFO -->
                <div class="progress-arc-info">
                  <!-- PROGRESS ARC TITLE -->
                  <p class="progress-arc-title">28.8K</p>
                  <!-- /PROGRESS ARC TITLE -->

                  <!-- PROGRESS ARC TEXT -->
                  <p class="progress-arc-text">Engagements</p>
                  <!-- /PROGRESS ARC TEXT -->
                </div>
                <!-- /PROGRESS ARC INFO -->
              </div>
              <!-- /PROGRESS ARC WRAP -->

              <!-- USER STATS -->
              <div class="user-stats reference">
                <!-- USER STAT -->
                <div class="user-stat big">
                  <!-- REFERENCE BULLET -->
                  <div class="reference-bullet secondary"></div>
                  <!-- /REFERENCE BULLET -->

                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">18.3K</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">reactions</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                  <!-- REFERENCE BULLET -->
                  <div class="reference-bullet primary"></div>
                  <!-- /REFERENCE BULLET -->

                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">5.2K</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">comments</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->
              </div>
              <!-- /USER STATS -->

              <!-- USER STATS -->
              <div class="user-stats reference">
                <!-- USER STAT -->
                <div class="user-stat big">
                  <!-- REFERENCE BULLET -->
                  <div class="reference-bullet blue"></div>
                  <!-- /REFERENCE BULLET -->

                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">1.4K</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">shares</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                  <!-- REFERENCE BULLET -->
                  <div class="reference-bullet light-blue"></div>
                  <!-- /REFERENCE BULLET -->

                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">3.9K</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">replies</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->
              </div>
              <!-- /USER STATS -->
            </div>
            <!-- WIDGET BOX CONTENT -->
          </div>
          <!-- /WIDGET BOX -->
        </div>
        <!-- /GRID COLUMN -->

        <!-- GRID COLUMN -->
        <div class="grid-column">
          <!-- WIDGET BOX -->
          <div class="widget-box">
            <!-- WIDGET BOX ACTIONS -->
            <div class="widget-box-actions">
              <!-- WIDGET BOX ACTION -->
              <div class="widget-box-action">
                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">Earnings Report</p>
                <!-- /WIDGET BOX TITLE -->
              </div>
              <!-- /WIDGET BOX ACTION -->

              <!-- WIDGET BOX ACTION -->
              <div class="widget-box-action">
                <!-- FORM SELECT -->
                <div class="form-select v2">
                  <select id="earnings-report-date" name="earnings_report_date">
                    <option value="0">November 2019</option>
                    <option value="1">December 2019</option>
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
      </div>
      <!-- /GRID -->
    </div>
    <!-- /GRID -->
  </div>
  <!-- /CONTENT GRID -->
</template>

<script>
import axios from "axios";

export default {
  name: "componentContent",
  data() {
    return {
      tag: '',
      name: '',
      trophies: 0,
      highestTrophies: 0,
      expLevel: 0,
      expPoints: 0,
      isQualifiedFromChampionshipChallenge: false,
      threeVictories: 0,
      soloVictories: 0,
      duoVictories: 0,
      clubID: '',
      clubName: '',
      createdAt: '',
      updateAt: ''
    }
  },
  mounted() {
    let params = new URLSearchParams(location.search);
    axios('/link-api/' + params.get('tag')).then(response => {
      this.tag = response.data.tag
      this.name = response.data.name
      this.trophies = response.data.trophies
      this.highestTrophies = response.data.highestTrophies
      this.expLevel = response.data.expLevel
      this.expPoints = response.data.expPoints
      this.isQualifiedFromChampionshipChallenge = response.data.isQualifiedFromChampionshipChallenge
      this.threeVictories = response.data['3vs3Victories']
      this.soloVictories = response.data.soloVictories
      this.duoVictories = response.data.duoVictories
      this.clubID = response.data.club['tag']
      this.clubName = response.data.club['name']

      this.createdAt = response.data.createdAt
      this.updateAt = response.data.updateAt
    });
  }
}
</script>

<style scoped>

</style>