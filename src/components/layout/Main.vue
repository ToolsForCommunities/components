<template>
  <v-container class="main-container">
    <LayoutTriplet
      mini-sidebar
      :hide-aside="hideAside"
    >
      <div slot="sidebar">
        <slot name="sidebar" />
      </div>

      <div slot="content">
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

  /* Small and XS */
  @media screen and (max-width: 960px)  {
    .container.main-container {
      max-width: 100%;
    }
    
  }

  /* Medium and bigger */
  @media screen and (min-width: 960px)  {
    >>> .v-navigation-drawer {
      height: 100vh !important;
      position: sticky;
    }
  }

  /* Large and bigger */
  @media screen and (min-width: 1260px)  {
    .container.main-container {
      max-width: 1296px;
    }
  }
</style>

<script>
import LayoutTriplet from '@/components/layout/Triplet.vue';

export default {
  name: 'LayoutMain',
  components: {
    LayoutTriplet,
  },
  props: {
    hideAside: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
