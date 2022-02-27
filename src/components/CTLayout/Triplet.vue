<template>
  <div class="d-flex ct-layout-triplet">
    <v-navigation-drawer
      v-if="!hideSidebar"
      :app="app"
      :mini-variant="miniSidebar && isMobile"
      mini-variant-width="88"
      :permanent="miniSidebar"
      clipped
      width="289"
      class="sidebar"
    >
      <slot name="sidebar"></slot>
    </v-navigation-drawer>

    <v-main :class="{ 'has-aside': !hideAside }">
      <slot name="content" />
    </v-main>

    <transition name="slide">
      <v-navigation-drawer
        v-if="!hideAside"
        :app="app"
        :mini-variant="miniSidebar && isMobile"
        mini-variant-width="360"
        permanent
        clipped
        right
        width="375"
        class="aside"
      >
        <slot name="aside"></slot>
      </v-navigation-drawer>
    </transition>
  </div>
</template>

<style scoped>
  /* Medium and bigger */
/*  @media screen and (min-width: 1264px)  {
    .ct-layout-triplet .has-aside {
      padding-right: 397px !important;
    }
  }*/

  /* Medium and smaller */
  @media screen and (max-width: 1264px)  {
    .ct-layout-triplet >>> .v-navigation-drawer--mini-variant {
      padding-right: 0;
    }
  }

  /* Small and smaller */
  @media screen and (max-width: 960px)  {
    .ct-layout-triplet >>> main.v-content {
      padding-bottom: 72px !important;
      padding-left: 0 !important;
    }

    .ct-layout-triplet >>> .sidebar.v-navigation-drawer--mini-variant {
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100% !important;
      height: 52px !important;
      top: auto !important;
    }

    .ct-layout-triplet >>> .v-navigation-drawer__content {
      overflow: hidden;
    }

    .ct-layout-triplet >>> .sidebar.v-navigation-drawer--mini-variant .v-list {
      display: flex;
    }

    .ct-layout-triplet >>> .v-navigation-drawer--right {
      left: 0px;
      position: fixed;
      top: 0px;
      visibility: visible;
      width: 100% !important;
      transform: translateY(0px) !important;
    }

    .ct-layout-triplet >>> .v-navigation-drawer--mini-variant.aside .v-list-item > :not(:first-child) {
      height: auto;
      width: auto;
      position: static !important;
    }

    .slide-enter, .slide-leave-to {
      /*transform: translateY(100vh) !important;*/
      transform: translateX(0);
    }

    .slide-enter-to, .slide-leave {
      /*transform: translateY(0);*/
      transform: translateX(100vh) !important;
    }
  }
</style>

<script>
export default {
  name: 'CTLayoutTriplet',
  data: () => ({
    sidebar: true,
    windowWidth: 961,
    // windowWidth: 0,
  }),
  props: {
    app: {
      type: Boolean,
      default: false,
    },
    miniSidebar: {
      type: Boolean,
      default: false,
    },
    hideSidebar: {
      type: Boolean,
      default: false,
    },
    hideAside: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 1264;
    },
  },
  mounted() {
    if (typeof window !== "undefined") {
      this.windowWidth = window.innerWidth;
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      });
    }
  },
};
</script>
