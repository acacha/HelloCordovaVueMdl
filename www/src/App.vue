<template>
  <div id="app">
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout-drawer mdl-layout--fixed-header">
      <main-header></main-header>
      <side-menu></side-menu>
      <main class="mdl-layout__content mdl-color--grey-100">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import MainHeader from './components/Header.vue'

export default {
  components: {
    SideMenu,
    MainHeader
  }
}
</script>

<style>

</style>
