<template>
  <div class="d-flex">
    <v-navigation-drawer
      v-if="!hideSidebar"
      :app="app"
      :mini-variant="miniSidebar && isMobile"
      mini-variant-width="124"
      :permanent="miniSidebar"
      clipped
      width="300"
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
        permanent
        clipped
        right
        width="380"
      >
        <slot name="aside"></slot>
      </v-navigation-drawer>
    </transition>
  </div>
</template>

<style scoped>
  /* Medium and bigger */
  @media screen and (min-width: 1264px)  {
    .has-aside {
      padding-right: 397px !important;
    }
  }

  /* Medium and smaller */
  @media screen and (max-width: 1264px)  {
    >>> .v-navigation-drawer--mini-variant {
      padding-right: 0;
    }
  }

  /* Small and smaller */
  @media screen and (max-width: 960px)  {
    >>> main.v-content {
      padding-bottom: 72px !important;
      padding-left: 0 !important;
    }

    >>> .v-navigation-drawer--mini-variant {
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100% !important;
      height: 72px !important;
      top: auto !important;
    }

    >>> .v-navigation-drawer__content {
      overflow: hidden;
    }

    >>> .v-navigation-drawer--mini-variant .v-list {
      display: flex;
    }

    >>> .v-navigation-drawer--right {
      left: 0px;
      position: fixed;
      top: 0px;
      visibility: visible;
      width: 100% !important;
      transform: translateY(0px) !important;
    }

    .slide-enter, .slide-leave-to {
      transform: translateY(100vh) !important;
    }

    .slide-enter-to, .slide-leave {
      transform: translateY(0);
    }
  }
</style>

<script>
export default {
  name: 'LayoutTriplet',
  data: () => ({
    sidebar: true,
    windowWidth: 0,
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
