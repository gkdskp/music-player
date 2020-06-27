<template>
  <b-sidebar class="sidenav" id="navbar" width="8vw" visible no-header no-close-on-esc no-close-on-route-change>
    <b-nav vertical class="w-100" pills>
      <b-nav-item to="/album" active-class="active">
        <ion-icon name="albums-sharp"></ion-icon> Albums
      </b-nav-item>
      <b-nav-item to="/songs" active-class="active">
        <ion-icon name="musical-note-sharp"></ion-icon>Songs
      </b-nav-item>
      <b-nav-item to="/artists" active-class="active">
        <ion-icon name="person-sharp"></ion-icon>Artists
      </b-nav-item>
    </b-nav>
  </b-sidebar>
</template>

<script>
import { BSidebar, BNav, BNavItem } from "bootstrap-vue";

export default {
  name: "NavBar",

  components: {
    "b-sidebar": BSidebar,
    "b-nav": BNav,
    "b-nav-item": BNavItem
  },
};
</script>

<style scoped>
#navbar ul {
  margin-top: 60px;
}

ion-icon {
  padding-right: 15px;
}
</style>
