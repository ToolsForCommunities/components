<template>
  <v-container class="main-container pink lighten-4" :fluid="isSmall">
      <!-- app -->
    <LayoutTriplet
      mini-sidebar
      :hide-aside="hideAside"
    >
      <div slot="sidebar">
        <slot name="sidebar" />
      </div>

      <div slot="content">
        {{ windowWidth }} - {{ isSmall }}
        <slot name="content" />
      </div>

      <div slot="aside">
        <slot name="aside" />
      </div>
    </LayoutTriplet>
  </v-container>
</template>

<style scoped>
  .container.main-container {
    min-height: 100vh;
    padding: 0;
  }

  /* Medium and bigger */
  @media screen and (min-width: 960px)  {
    >>> .v-navigation-drawer {
      height: 100vh !important;
      position: sticky;
    }

    /*.container.main-container {
      max-width: 960px;
    }
    */
  }

  /* Large and bigger */
  @media screen and (min-width: 1260px)  {
    .container.main-container {
      max-width: 1296px;
    }
  }

/* Default container width values:
  1785px
  1185px
  900px
*/

</style>

<script>
import LayoutTriplet from '@/components/layout/Triplet.vue';

export default {
  name: 'LayoutMain',
  components: {
    LayoutTriplet,
  },
  data: () => ({
    sidebar: true,
    windowWidth: 0,
  }),
  props: {
    hideAside: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSmall() {
      return this.windowWidth <= 960;
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
