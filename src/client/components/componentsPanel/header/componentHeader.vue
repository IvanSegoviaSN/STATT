<template>
  <!-- HEADER -->
  <header class="header">
    <!-- HEADER ACTIONS -->
    <div class="header-actions">
      <!-- HEADER BRAND -->
      <div class="header-brand">
        <!-- LOGO -->
        <div class="logo">
          <!-- ICON LOGO VIKINGER -->
          <svg class="icon-logo-vikinger small">
            <use xlink:href="#svg-logo-vikinger"></use>
          </svg>
          <!-- /ICON LOGO VIKINGER -->
        </div>
        <!-- /LOGO -->

        <!-- HEADER BRAND TEXT -->
        <h1 class="header-brand-text">STATT</h1>
        <!-- /HEADER BRAND TEXT -->
      </div>
      <!-- /HEADER BRAND -->
    </div>
    <!-- /HEADER ACTIONS -->

    <!-- HEADER ACTIONS -->
    <div class="header-actions">

      <!-- MOBILEMENU TRIGGER -->
      <div class="mobilemenu-trigger navigation-widget-mobile-trigger">
        <!-- BURGER ICON -->
        <div class="burger-icon inverted">
          <!-- BURGER ICON BAR -->
          <div class="burger-icon-bar"></div>
          <!-- /BURGER ICON BAR -->

          <!-- BURGER ICON BAR -->
          <div class="burger-icon-bar"></div>
          <!-- /BURGER ICON BAR -->

          <!-- BURGER ICON BAR -->
          <div class="burger-icon-bar"></div>
          <!-- /BURGER ICON BAR -->
        </div>
        <!-- /BURGER ICON -->
      </div>
      <!-- /MOBILEMENU TRIGGER -->

      <!-- NAVIGATION -->
      <nav class="navigation">
        <!-- MENU MAIN -->
        <ul class="menu-main">
          <!-- MENU MAIN ITEM -->
          <li class="menu-main-item">
            <!-- MENU MAIN ITEM LINK -->
            <a class="menu-main-item-link"><router-link to="/">Inicio</router-link></a>
            <!-- /MENU MAIN ITEM LINK -->
          </li>
          <!-- /MENU MAIN ITEM -->

          <!-- MENU MAIN ITEM -->
          <li class="menu-main-item">
            <!-- MENU MAIN ITEM LINK -->
            <a class="menu-main-item-link" href="#">Juegos</a>
            <!-- /MENU MAIN ITEM LINK -->
          </li>
          <!-- /MENU MAIN ITEM -->

          <!-- MENU MAIN ITEM -->
          <li class="menu-main-item">
            <!-- MENU MAIN ITEM LINK -->
            <a class="menu-main-item-link" @click="removeCookies">Faqs</a>
            <!-- /MENU MAIN ITEM LINK -->
          </li>
          <!-- /MENU MAIN ITEM -->

          <!-- MENU MAIN ITEM -->
          <li class="menu-main-item">
            <!-- MENU MAIN ITEM LINK -->
            <a class="menu-main-item-link"><router-link to="/about">Contacto</router-link></a>
            <!-- /MENU MAIN ITEM LINK -->
          </li>
          <!-- /MENU MAIN ITEM -->
        </ul>
        <!-- /MENU MAIN -->
      </nav>
      <!-- /NAVIGATION -->
    </div>
    <!-- /HEADER ACTIONS -->

    <!-- HEADER ACTIONS -->
    <div class="header-actions search-bar">
      <!-- INTERACTIVE INPUT -->
      <div class="interactive-input dark">
        <input type="text" id="search-main" name="search_main" placeholder="Consultar usuario">
        <!-- INTERACTIVE INPUT ICON WRAP -->
        <div class="interactive-input-icon-wrap">
          <!-- INTERACTIVE INPUT ICON -->
          <svg class="interactive-input-icon icon-magnifying-glass">
            <use xlink:href="#svg-magnifying-glass"></use>
          </svg>
          <!-- /INTERACTIVE INPUT ICON -->
        </div>
        <!-- /INTERACTIVE INPUT ICON WRAP -->

        <!-- INTERACTIVE INPUT ACTION -->
        <div class="interactive-input-action">
          <!-- INTERACTIVE INPUT ACTION ICON -->
          <svg class="interactive-input-action-icon icon-cross-thin">
            <use xlink:href="#svg-cross-thin"></use>
          </svg>
          <!-- /INTERACTIVE INPUT ACTION ICON -->
        </div>
        <!-- /INTERACTIVE INPUT ACTION -->
      </div>
      <!-- /INTERACTIVE INPUT -->

      <!-- DROPDOWN BOX -->
      <div class="dropdown-box padding-bottom-small header-search-dropdown">
        <!-- DROPDOWN BOX CATEGORY -->
        <div class="dropdown-box-category">
          <!-- DROPDOWN BOX CATEGORY TITLE -->
          <p class="dropdown-box-category-title">Members</p>
          <!-- /DROPDOWN BOX CATEGORY TITLE -->
        </div>
        <!-- /DROPDOWN BOX CATEGORY -->

        <!-- DROPDOWN BOX LIST -->
        <div class="dropdown-box-list small no-scroll">
          <!-- DROPDOWN BOX LIST ITEM -->
          <a class="dropdown-box-list-item" href="profile-timeline.html">
            <!-- USER STATUS -->
            <div class="user-status notification">
              <!-- USER STATUS AVATAR -->
              <div class="user-status-avatar">
                <!-- USER AVATAR -->
                <div class="user-avatar small no-outline">
                  <!-- USER AVATAR CONTENT -->
                  <div class="user-avatar-content">
                    <!-- HEXAGON -->
                    <div class="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR CONTENT -->

                  <!-- USER AVATAR PROGRESS -->
                  <div class="user-avatar-progress">
                    <!-- HEXAGON -->
                    <div class="hexagon-progress-40-44"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-border-40-44"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div class="hexagon-22-24"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE BORDER -->

                    <!-- USER AVATAR BADGE CONTENT -->
                    <div class="user-avatar-badge-content">
                      <!-- HEXAGON -->
                      <div class="hexagon-dark-16-18"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE CONTENT -->

                    <!-- USER AVATAR BADGE TEXT -->
                    <p class="user-avatar-badge-text">12</p>
                    <!-- /USER AVATAR BADGE TEXT -->
                  </div>
                  <!-- /USER AVATAR BADGE -->
                </div>
                <!-- /USER AVATAR -->
              </div>
              <!-- /USER STATUS AVATAR -->

              <!-- USER STATUS TITLE -->
              <p class="user-status-title"><span class="bold">Neko Bebop</span></p>
              <!-- /USER STATUS TITLE -->

              <!-- USER STATUS TEXT -->
              <p class="user-status-text">1 friends in common</p>
              <!-- /USER STATUS TEXT -->

              <!-- USER STATUS ICON -->
              <div class="user-status-icon">
                <!-- ICON FRIEND -->
                <svg class="icon-friend">
                  <use xlink:href="#svg-friend"></use>
                </svg>
                <!-- /ICON FRIEND -->
              </div>
              <!-- /USER STATUS ICON -->
            </div>
            <!-- /USER STATUS -->
          </a>
          <!-- /DROPDOWN BOX LIST ITEM -->

          <!-- DROPDOWN BOX LIST ITEM -->
          <a class="dropdown-box-list-item" href="profile-timeline.html">
            <!-- USER STATUS -->
            <div class="user-status notification">
              <!-- USER STATUS AVATAR -->
              <div class="user-status-avatar">
                <!-- USER AVATAR -->
                <div class="user-avatar small no-outline">
                  <!-- USER AVATAR CONTENT -->
                  <div class="user-avatar-content">
                    <!-- HEXAGON -->
                    <div class="hexagon-image-30-32" data-src="img/avatar/15.jpg"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR CONTENT -->

                  <!-- USER AVATAR PROGRESS -->
                  <div class="user-avatar-progress">
                    <!-- HEXAGON -->
                    <div class="hexagon-progress-40-44"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div class="hexagon-border-40-44"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div class="hexagon-22-24"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE BORDER -->

                    <!-- USER AVATAR BADGE CONTENT -->
                    <div class="user-avatar-badge-content">
                      <!-- HEXAGON -->
                      <div class="hexagon-dark-16-18"></div>
                      <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BADGE CONTENT -->

                    <!-- USER AVATAR BADGE TEXT -->
                    <p class="user-avatar-badge-text">7</p>
                    <!-- /USER AVATAR BADGE TEXT -->
                  </div>
                  <!-- /USER AVATAR BADGE -->
                </div>
                <!-- /USER AVATAR -->
              </div>
              <!-- /USER STATUS AVATAR -->

              <!-- USER STATUS TITLE -->
              <p class="user-status-title"><span class="bold">Tim Rogers</span></p>
              <!-- /USER STATUS TITLE -->

              <!-- USER STATUS TEXT -->
              <p class="user-status-text">4 friends in common</p>
              <!-- /USER STATUS TEXT -->

              <!-- USER STATUS ICON -->
              <div class="user-status-icon">
                <!-- ICON FRIEND -->
                <svg class="icon-friend">
                  <use xlink:href="#svg-friend"></use>
                </svg>
                <!-- /ICON FRIEND -->
              </div>
              <!-- /USER STATUS ICON -->
            </div>
            <!-- /USER STATUS -->
          </a>
          <!-- /DROPDOWN BOX LIST ITEM -->
        </div>
        <!-- /DROPDOWN BOX LIST -->

        <!-- DROPDOWN BOX CATEGORY -->
        <div class="dropdown-box-category">
          <!-- DROPDOWN BOX CATEGORY TITLE -->
          <p class="dropdown-box-category-title">Groups</p>
          <!-- /DROPDOWN BOX CATEGORY TITLE -->
        </div>
        <!-- /DROPDOWN BOX CATEGORY -->

        <!-- DROPDOWN BOX LIST -->
        <div class="dropdown-box-list small no-scroll">
          <!-- DROPDOWN BOX LIST ITEM -->
          <a class="dropdown-box-list-item" href="group-timeline.html">
            <!-- USER STATUS -->
            <div class="user-status notification">
              <!-- USER STATUS AVATAR -->
              <div class="user-status-avatar">
                <!-- USER AVATAR -->
                <div class="user-avatar small no-border">
                  <!-- USER AVATAR CONTENT -->
                  <div class="user-avatar-content">
                    <!-- HEXAGON -->
                    <div class="hexagon-image-40-44" data-src="img/avatar/24.jpg"></div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR CONTENT -->
                </div>
                <!-- /USER AVATAR -->
              </div>
              <!-- /USER STATUS AVATAR -->

              <!-- USER STATUS TITLE -->
              <p class="user-status-title"><span class="bold">Cosplayers of the World</span></p>
              <!-- /USER STATUS TITLE -->

              <!-- USER STATUS TEXT -->
              <p class="user-status-text">139 members</p>
              <!-- /USER STATUS TEXT -->

              <!-- USER STATUS ICON -->
              <div class="user-status-icon">
                <!-- ICON GROUP -->
                <svg class="icon-group">
                  <use xlink:href="#svg-group"></use>
                </svg>
                <!-- /ICON GROUP -->
              </div>
              <!-- /USER STATUS ICON -->
            </div>
            <!-- /USER STATUS -->
          </a>
          <!-- /DROPDOWN BOX LIST ITEM -->
        </div>
        <!-- /DROPDOWN BOX LIST -->

        <!-- DROPDOWN BOX CATEGORY -->
        <div class="dropdown-box-category">
          <!-- DROPDOWN BOX CATEGORY TITLE -->
          <p class="dropdown-box-category-title">Marketplace</p>
          <!-- /DROPDOWN BOX CATEGORY TITLE -->
        </div>
        <!-- /DROPDOWN BOX CATEGORY -->

        <!-- DROPDOWN BOX LIST -->
        <div class="dropdown-box-list small no-scroll">
          <!-- DROPDOWN BOX LIST ITEM -->
          <a class="dropdown-box-list-item" href="marketplace-product.html">
            <!-- USER STATUS -->
            <div class="user-status no-padding-top">
              <!-- USER STATUS AVATAR -->
              <div class="user-status-avatar">
                <!-- PICTURE -->
                <figure class="picture small round liquid">
                  <img src="img/marketplace/items/07.jpg" alt="item-07">
                </figure>
                <!-- /PICTURE -->
              </div>
              <!-- /USER STATUS AVATAR -->

              <!-- USER STATUS TITLE -->
              <p class="user-status-title"><span class="bold">Mercenaries White Frame</span></p>
              <!-- /USER STATUS TITLE -->

              <!-- USER STATUS TEXT -->
              <p class="user-status-text">By Neko Bebop</p>
              <!-- /USER STATUS TEXT -->

              <!-- USER STATUS ICON -->
              <div class="user-status-icon">
                <!-- ICON MARKETPLACE -->
                <svg class="icon-marketplace">
                  <use xlink:href="#svg-marketplace"></use>
                </svg>
                <!-- /ICON MARKETPLACE -->
              </div>
              <!-- /USER STATUS ICON -->
            </div>
            <!-- /USER STATUS -->
          </a>
          <!-- /DROPDOWN BOX LIST ITEM -->
        </div>
        <!-- /DROPDOWN BOX LIST -->
      </div>
      <!-- /DROPDOWN BOX -->
    </div>
    <!-- /HEADER ACTIONS -->

    <!-- HEADER ACTIONS -->
    <div class="header-actions">
      <!-- ACTION LIST -->
      <div class="action-list dark">
        <!-- ACTION LIST ITEM WRAP -->
        <div class="action-list-item-wrap">
          <!-- ACTION LIST ITEM -->
          <div class="action-list-item header-dropdown-trigger">
            <!-- ACTION LIST ITEM ICON -->
            <svg class="action-list-item-icon icon-shopping-bag">
              <use xlink:href="#svg-shopping-bag"></use>
            </svg>
            <!-- /ACTION LIST ITEM ICON -->
          </div>
          <!-- /ACTION LIST ITEM -->

          <!-- DROPDOWN BOX -->
          <div class="dropdown-box no-padding-bottom header-dropdown">
            <!-- DROPDOWN BOX HEADER -->
            <div class="dropdown-box-header">
              <!-- DROPDOWN BOX HEADER TITLE -->
              <p class="dropdown-box-header-title">Shopping Cart <span class="highlighted">3</span></p>
              <!-- /DROPDOWN BOX HEADER TITLE -->
            </div>
            <!-- /DROPDOWN BOX HEADER -->

            <!-- DROPDOWN BOX LIST -->
            <div class="dropdown-box-list scroll-small no-hover" data-simplebar>
              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- CART ITEM PREVIEW -->
                <div class="cart-item-preview">
                  <!-- CART ITEM PREVIEW IMAGE -->
                  <a class="cart-item-preview-image" href="marketplace-product.html">
                    <!-- PICTURE -->
                    <figure class="picture medium round liquid">
                      <img src="img/marketplace/items/01.jpg" alt="item-01">
                    </figure>
                    <!-- /PICTURE -->
                  </a>
                  <!-- /CART ITEM PREVIEW IMAGE -->

                  <!-- CART ITEM PREVIEW TITLE -->
                  <p class="cart-item-preview-title"><a href="marketplace-product.html">Twitch Stream UI Pack</a></p>
                  <!-- /CART ITEM PREVIEW TITLE -->

                  <!-- CART ITEM PREVIEW TEXT -->
                  <p class="cart-item-preview-text">Regular License</p>
                  <!-- /CART ITEM PREVIEW TEXT -->

                  <!-- CART ITEM PREVIEW PRICE -->
                  <p class="cart-item-preview-price"><span class="highlighted">$</span> 12.00 x 1</p>
                  <!-- /CART ITEM PREVIEW PRICE -->

                  <!-- CART ITEM PREVIEW ACTION -->
                  <div class="cart-item-preview-action">
                    <!-- ICON DELETE -->
                    <svg class="icon-delete">
                      <use xlink:href="#svg-delete"></use>
                    </svg>
                    <!-- /ICON DELETE -->
                  </div>
                  <!-- /CART ITEM PREVIEW ACTION -->
                </div>
                <!-- /CART ITEM PREVIEW -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->

              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- CART ITEM PREVIEW -->
                <div class="cart-item-preview">
                  <!-- CART ITEM PREVIEW IMAGE -->
                  <a class="cart-item-preview-image" href="marketplace-product.html">
                    <!-- PICTURE -->
                    <figure class="picture medium round liquid">
                      <img src="img/marketplace/items/11.jpg" alt="item-11">
                    </figure>
                    <!-- /PICTURE -->
                  </a>
                  <!-- /CART ITEM PREVIEW IMAGE -->

                  <!-- CART ITEM PREVIEW TITLE -->
                  <p class="cart-item-preview-title"><a href="marketplace-product.html">Gaming Coin Badges Pack</a></p>
                  <!-- /CART ITEM PREVIEW TITLE -->

                  <!-- CART ITEM PREVIEW TEXT -->
                  <p class="cart-item-preview-text">Regular License</p>
                  <!-- /CART ITEM PREVIEW TEXT -->

                  <!-- CART ITEM PREVIEW PRICE -->
                  <p class="cart-item-preview-price"><span class="highlighted">$</span> 6.00 x 1</p>
                  <!-- /CART ITEM PREVIEW PRICE -->

                  <!-- CART ITEM PREVIEW ACTION -->
                  <div class="cart-item-preview-action">
                    <!-- ICON DELETE -->
                    <svg class="icon-delete">
                      <use xlink:href="#svg-delete"></use>
                    </svg>
                    <!-- /ICON DELETE -->
                  </div>
                  <!-- /CART ITEM PREVIEW ACTION -->
                </div>
                <!-- /CART ITEM PREVIEW -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->

              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- CART ITEM PREVIEW -->
                <div class="cart-item-preview">
                  <!-- CART ITEM PREVIEW IMAGE -->
                  <a class="cart-item-preview-image" href="marketplace-product.html">
                    <!-- PICTURE -->
                    <figure class="picture medium round liquid">
                      <img src="img/marketplace/items/10.jpg" alt="item-10">
                    </figure>
                    <!-- /PICTURE -->
                  </a>
                  <!-- /CART ITEM PREVIEW IMAGE -->

                  <!-- CART ITEM PREVIEW TITLE -->
                  <p class="cart-item-preview-title"><a href="marketplace-product.html">Twitch Stream UI Pack</a></p>
                  <!-- /CART ITEM PREVIEW TITLE -->

                  <!-- CART ITEM PREVIEW TEXT -->
                  <p class="cart-item-preview-text">Regular License</p>
                  <!-- /CART ITEM PREVIEW TEXT -->

                  <!-- CART ITEM PREVIEW PRICE -->
                  <p class="cart-item-preview-price"><span class="highlighted">$</span> 26.00 x 1</p>
                  <!-- /CART ITEM PREVIEW PRICE -->

                  <!-- CART ITEM PREVIEW ACTION -->
                  <div class="cart-item-preview-action">
                    <!-- ICON DELETE -->
                    <svg class="icon-delete">
                      <use xlink:href="#svg-delete"></use>
                    </svg>
                    <!-- /ICON DELETE -->
                  </div>
                  <!-- /CART ITEM PREVIEW ACTION -->
                </div>
                <!-- /CART ITEM PREVIEW -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->

              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- CART ITEM PREVIEW -->
                <div class="cart-item-preview">
                  <!-- CART ITEM PREVIEW IMAGE -->
                  <a class="cart-item-preview-image" href="marketplace-product.html">
                    <!-- PICTURE -->
                    <figure class="picture medium round liquid">
                      <img src="img/marketplace/items/04.jpg" alt="item-04">
                    </figure>
                    <!-- /PICTURE -->
                  </a>
                  <!-- /CART ITEM PREVIEW IMAGE -->

                  <!-- CART ITEM PREVIEW TITLE -->
                  <p class="cart-item-preview-title"><a href="marketplace-product.html">Generic Joystick Pack</a></p>
                  <!-- /CART ITEM PREVIEW TITLE -->

                  <!-- CART ITEM PREVIEW TEXT -->
                  <p class="cart-item-preview-text">Regular License</p>
                  <!-- /CART ITEM PREVIEW TEXT -->

                  <!-- CART ITEM PREVIEW PRICE -->
                  <p class="cart-item-preview-price"><span class="highlighted">$</span> 16.00 x 1</p>
                  <!-- /CART ITEM PREVIEW PRICE -->

                  <!-- CART ITEM PREVIEW ACTION -->
                  <div class="cart-item-preview-action">
                    <!-- ICON DELETE -->
                    <svg class="icon-delete">
                      <use xlink:href="#svg-delete"></use>
                    </svg>
                    <!-- /ICON DELETE -->
                  </div>
                  <!-- /CART ITEM PREVIEW ACTION -->
                </div>
                <!-- /CART ITEM PREVIEW -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->
            </div>
            <!-- /DROPDOWN BOX LIST -->

            <!-- CART PREVIEW TOTAL -->
            <div class="cart-preview-total">
              <!-- CART PREVIEW TOTAL TITLE -->
              <p class="cart-preview-total-title">Total:</p>
              <!-- /CART PREVIEW TOTAL TITLE -->

              <!-- CART PREVIEW TOTAL TEXT -->
              <p class="cart-preview-total-text"><span class="highlighted">$</span> 60.00</p>
              <!-- /CART PREVIEW TOTAL TEXT -->
            </div>
            <!-- /CART PREVIEW TOTAL -->

            <!-- DROPDOWN BOX ACTIONS -->
            <div class="dropdown-box-actions">
              <!-- DROPDOWN BOX ACTION -->
              <div class="dropdown-box-action">
                <!-- BUTTON -->
                <a class="button secondary" href="marketplace-cart.html">Shopping Cart</a>
                <!-- /BUTTON -->
              </div>
              <!-- /DROPDOWN BOX ACTION -->

              <!-- DROPDOWN BOX ACTION -->
              <div class="dropdown-box-action">
                <!-- BUTTON -->
                <a class="button primary" href="marketplace-checkout.html">Go to Checkout</a>
                <!-- /BUTTON -->
              </div>
              <!-- /DROPDOWN BOX ACTION -->
            </div>
            <!-- /DROPDOWN BOX ACTIONS -->
          </div>
          <!-- /DROPDOWN BOX -->
        </div>
        <!-- /ACTION LIST ITEM WRAP -->

        <!-- ACTION LIST ITEM WRAP -->
        <div class="action-list-item-wrap">
          <!-- ACTION LIST ITEM -->
          <div class="action-list-item header-dropdown-trigger">
            <!-- ACTION LIST ITEM ICON -->
            <svg class="action-list-item-icon icon-friend">
              <use xlink:href="#svg-friend"></use>
            </svg>
            <!-- /ACTION LIST ITEM ICON -->
          </div>
          <!-- /ACTION LIST ITEM -->

          <!-- DROPDOWN BOX -->
          <div class="dropdown-box header-dropdown">
            <!-- DROPDOWN BOX HEADER -->
            <div class="dropdown-box-header">
              <!-- DROPDOWN BOX HEADER TITLE -->
              <p class="dropdown-box-header-title">Friend Requests</p>
              <!-- /DROPDOWN BOX HEADER TITLE -->

              <!-- DROPDOWN BOX HEADER ACTIONS -->
              <div class="dropdown-box-header-actions">
                <!-- DROPDOWN BOX HEADER ACTION -->
                <p class="dropdown-box-header-action">Find Friends</p>
                <!-- /DROPDOWN BOX HEADER ACTION -->

                <!-- DROPDOWN BOX HEADER ACTION -->
                <p class="dropdown-box-header-action">Settings</p>
                <!-- /DROPDOWN BOX HEADER ACTION -->
              </div>
              <!-- /DROPDOWN BOX HEADER ACTIONS -->
            </div>
            <!-- /DROPDOWN BOX HEADER -->

            <!-- DROPDOWN BOX LIST -->
            <div class="dropdown-box-list no-hover" data-simplebar>
              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- USER STATUS -->
                <div class="user-status request">
                  <!-- USER STATUS AVATAR -->
                  <a class="user-status-avatar" href="profile-timeline.html">
                    <!-- USER AVATAR -->
                    <div class="user-avatar small no-outline">
                      <!-- USER AVATAR CONTENT -->
                      <div class="user-avatar-content">
                        <!-- HEXAGON -->
                        <div class="hexagon-image-30-32" data-src="img/avatar/16.jpg"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR CONTENT -->

                      <!-- USER AVATAR PROGRESS -->
                      <div class="user-avatar-progress">
                        <!-- HEXAGON -->
                        <div class="hexagon-progress-40-44"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR PROGRESS -->

                      <!-- USER AVATAR PROGRESS BORDER -->
                      <div class="user-avatar-progress-border">
                        <!-- HEXAGON -->
                        <div class="hexagon-border-40-44"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR PROGRESS BORDER -->

                      <!-- USER AVATAR BADGE -->
                      <div class="user-avatar-badge">
                        <!-- USER AVATAR BADGE BORDER -->
                        <div class="user-avatar-badge-border">
                          <!-- HEXAGON -->
                          <div class="hexagon-22-24"></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE BORDER -->

                        <!-- USER AVATAR BADGE CONTENT -->
                        <div class="user-avatar-badge-content">
                          <!-- HEXAGON -->
                          <div class="hexagon-dark-16-18"></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE CONTENT -->

                        <!-- USER AVATAR BADGE TEXT -->
                        <p class="user-avatar-badge-text">14</p>
                        <!-- /USER AVATAR BADGE TEXT -->
                      </div>
                      <!-- /USER AVATAR BADGE -->
                    </div>
                    <!-- /USER AVATAR -->
                  </a>
                  <!-- /USER STATUS AVATAR -->

                  <!-- USER STATUS TITLE -->
                  <p class="user-status-title"><a class="bold" href="profile-timeline.html">Ginny Danvers</a></p>
                  <!-- /USER STATUS TITLE -->

                  <!-- USER STATUS TEXT -->
                  <p class="user-status-text">6 friends in common</p>
                  <!-- /USER STATUS TEXT -->

                  <!-- ACTION REQUEST LIST -->
                  <div class="action-request-list">
                    <!-- ACTION REQUEST -->
                    <div class="action-request accept">
                      <!-- ACTION REQUEST ICON -->
                      <svg class="action-request-icon icon-add-friend">
                        <use xlink:href="#svg-add-friend"></use>
                      </svg>
                      <!-- /ACTION REQUEST ICON -->
                    </div>
                    <!-- /ACTION REQUEST -->

                    <!-- ACTION REQUEST -->
                    <div class="action-request decline">
                      <!-- ACTION REQUEST ICON -->
                      <svg class="action-request-icon icon-remove-friend">
                        <use xlink:href="#svg-remove-friend"></use>
                      </svg>
                      <!-- /ACTION REQUEST ICON -->
                    </div>
                    <!-- /ACTION REQUEST -->
                  </div>
                  <!-- ACTION REQUEST LIST -->
                </div>
                <!-- /USER STATUS -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->

              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- USER STATUS -->
                <div class="user-status request">
                  <!-- USER STATUS AVATAR -->
                  <a class="user-status-avatar" href="profile-timeline.html">
                    <!-- USER AVATAR -->
                    <div class="user-avatar small no-outline">
                      <!-- USER AVATAR CONTENT -->
                      <div class="user-avatar-content">
                        <!-- HEXAGON -->
                        <div class="hexagon-image-30-32" data-src="img/avatar/14.jpg"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR CONTENT -->

                      <!-- USER AVATAR PROGRESS -->
                      <div class="user-avatar-progress">
                        <!-- HEXAGON -->
                        <div class="hexagon-progress-40-44"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR PROGRESS -->

                      <!-- USER AVATAR PROGRESS BORDER -->
                      <div class="user-avatar-progress-border">
                        <!-- HEXAGON -->
                        <div class="hexagon-border-40-44"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR PROGRESS BORDER -->

                      <!-- USER AVATAR BADGE -->
                      <div class="user-avatar-badge">
                        <!-- USER AVATAR BADGE BORDER -->
                        <div class="user-avatar-badge-border">
                          <!-- HEXAGON -->
                          <div class="hexagon-22-24"></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE BORDER -->

                        <!-- USER AVATAR BADGE CONTENT -->
                        <div class="user-avatar-badge-content">
                          <!-- HEXAGON -->
                          <div class="hexagon-dark-16-18"></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE CONTENT -->

                        <!-- USER AVATAR BADGE TEXT -->
                        <p class="user-avatar-badge-text">3</p>
                        <!-- /USER AVATAR BADGE TEXT -->
                      </div>
                      <!-- /USER AVATAR BADGE -->
                    </div>
                    <!-- /USER AVATAR -->
                  </a>
                  <!-- /USER STATUS AVATAR -->

                  <!-- USER STATUS TITLE -->
                  <p class="user-status-title"><a class="bold" href="profile-timeline.html">Paul Lang</a></p>
                  <!-- /USER STATUS TITLE -->

                  <!-- USER STATUS TEXT -->
                  <p class="user-status-text">2 friends in common</p>
                  <!-- /USER STATUS TEXT -->

                  <!-- ACTION REQUEST LIST -->
                  <div class="action-request-list">
                    <!-- ACTION REQUEST -->
                    <div class="action-request accept">
                      <!-- ACTION REQUEST ICON -->
                      <svg class="action-request-icon icon-add-friend">
                        <use xlink:href="#svg-add-friend"></use>
                      </svg>
                      <!-- /ACTION REQUEST ICON -->
                    </div>
                    <!-- /ACTION REQUEST -->

                    <!-- ACTION REQUEST -->
                    <div class="action-request decline">
                      <!-- ACTION REQUEST ICON -->
                      <svg class="action-request-icon icon-remove-friend">
                        <use xlink:href="#svg-remove-friend"></use>
                      </svg>
                      <!-- /ACTION REQUEST ICON -->
                    </div>
                    <!-- /ACTION REQUEST -->
                  </div>
                  <!-- ACTION REQUEST LIST -->
                </div>
                <!-- /USER STATUS -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->

              <!-- DROPDOWN BOX LIST ITEM -->
              <div class="dropdown-box-list-item">
                <!-- USER STATUS -->
                <div class="user-status request">
                  <!-- USER STATUS AVATAR -->
                  <a class="user-status-avatar" href="profile-timeline.html">
                    <!-- USER AVATAR -->
                    <div class="user-avatar small no-outline">
                      <!-- USER AVATAR CONTENT -->
                      <div class="user-avatar-content">
                        <!-- HEXAGON -->
                        <div class="hexagon-image-30-32" data-src="img/avatar/11.jpg"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR CONTENT -->

                      <!-- USER AVATAR PROGRESS -->
                      <div class="user-avatar-progress">
                        <!-- HEXAGON -->
                        <div class="hexagon-progress-40-44"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR PROGRESS -->

                      <!-- USER AVATAR PROGRESS BORDER -->
                      <div class="user-avatar-progress-border">
                        <!-- HEXAGON -->
                        <div class="hexagon-border-40-44"></div>
                        <!-- /HEXAGON -->
                      </div>
                      <!-- /USER AVATAR PROGRESS BORDER -->

                      <!-- USER AVATAR BADGE -->
                      <div class="user-avatar-badge">
                        <!-- USER AVATAR BADGE BORDER -->
                        <div class="user-avatar-badge-border">
                          <!-- HEXAGON -->
                          <div class="hexagon-22-24"></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE BORDER -->

                        <!-- USER AVATAR BADGE CONTENT -->
                        <div class="user-avatar-badge-content">
                          <!-- HEXAGON -->
                          <div class="hexagon-dark-16-18"></div>
                          <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE CONTENT -->

                        <!-- USER AVATAR BADGE TEXT -->
                        <p class="user-avatar-badge-text">9</p>
                        <!-- /USER AVATAR BADGE TEXT -->
                      </div>
                      <!-- /USER AVATAR BADGE -->
                    </div>
                    <!-- /USER AVATAR -->
                  </a>
                  <!-- /USER STATUS AVATAR -->

                  <!-- USER STATUS TITLE -->
                  <p class="user-status-title"><a class="bold" href="profile-timeline.html">Cassie May</a></p>
                  <!-- /USER STATUS TITLE -->

                  <!-- USER STATUS TEXT -->
                  <p class="user-status-text">4 friends in common</p>
                  <!-- /USER STATUS TEXT -->

                  <!-- ACTION REQUEST LIST -->
                  <div class="action-request-list">
                    <!-- ACTION REQUEST -->
                    <div class="action-request accept">
                      <!-- ACTION REQUEST ICON -->
                      <svg class="action-request-icon icon-add-friend">
                        <use xlink:href="#svg-add-friend"></use>
                      </svg>
                      <!-- /ACTION REQUEST ICON -->
                    </div>
                    <!-- /ACTION REQUEST -->

                    <!-- ACTION REQUEST -->
                    <div class="action-request decline">
                      <!-- ACTION REQUEST ICON -->
                      <svg class="action-request-icon icon-remove-friend">
                        <use xlink:href="#svg-remove-friend"></use>
                      </svg>
                      <!-- /ACTION REQUEST ICON -->
                    </div>
                    <!-- /ACTION REQUEST -->
                  </div>
                  <!-- ACTION REQUEST LIST -->
                </div>
                <!-- /USER STATUS -->
              </div>
              <!-- /DROPDOWN BOX LIST ITEM -->
            </div>
            <!-- /DROPDOWN BOX LIST -->

            <!-- DROPDOWN BOX BUTTON -->
            <a class="dropdown-box-button secondary" href="hub-profile-requests.html">View all Requests</a>
            <!-- /DROPDOWN BOX BUTTON -->
          </div>
          <!-- /DROPDOWN BOX -->
        </div>
        <!-- /ACTION LIST ITEM WRAP -->
      </div>
      <!-- /ACTION LIST -->
    </div>
    <!-- /HEADER ACTIONS -->
  </header>
  <!-- /HEADER -->
</template>

<script>
export default {
  name: "componentHeader",
  data() {
    return {
      change: true
    }
  },
  methods: {
    removeCookies() {
      document.cookie = 'tag=;';
      window.location.reload()
    },
    changeBoolean() {
      if (this.change) {
        this.change = false;
      } else {
        this.change = true;
      }
    }
  },
  watch: {
    change() {
      this.$emit('changePanel', this.change)
    }
  }
}
</script>

<style scoped>

</style>