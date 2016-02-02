<template>
  <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"
       v-bind:class="{ 'is-visible': visible}">
    <header class="demo-drawer-header">
      <img src="img/user.jpg" class="demo-avatar">
      <div class="demo-avatar-dropdown">
        <span>hello@example.com</span>
        <div class="mdl-layout-spacer"></div>
        <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i class="material-icons" role="presentation">arrow_drop_down</i>
          <span class="visuallyhidden">Accounts</span>
        </button>
        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
          <li class="mdl-menu__item">hello@example.com</li>
          <li class="mdl-menu__item">info@example.com</li>
          <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
        </ul>
      </div>
    </header>
    <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
      <a class="mdl-navigation__link" v-link="{ path: '/home' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
      <a class="mdl-navigation__link" v-link="{ path: '/hello' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Hello</a>
      <a class="mdl-navigation__link" v-link="{ path: '/dashboard' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Dashboard</a>
      <a class="mdl-navigation__link" v-link="{ path: '/forum' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
      <a class="mdl-navigation__link" v-link="{ path: '/cordova' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Cordova</a>
      <a class="mdl-navigation__link" v-link="{ path: '/promos' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
      <a class="mdl-navigation__link" v-link="{ path: '/shopping' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
      <a class="mdl-navigation__link" v-link="{ path: 'people' }"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
      <a class="mdl-navigation__link" href="#"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>TEST</a>
      <div class="mdl-layout-spacer"></div>
      <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style>

</style>
