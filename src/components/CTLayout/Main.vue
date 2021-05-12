<template>
  <v-container class="main-container">
    <CTLayoutTriplet
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
    </CTLayoutTriplet>
  </v-container>
</template>

<style scoped>
  .container.main-container {
    min-height: 100vh;
    padding: 0;
  }

  >>> .v-main {
    padding: 0 !important;
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

    >>> .v-main {
      max-width: calc(100% - 380px - 124px);
    }
  }

  /* Large and bigger */
  @media screen and (min-width: 1260px)  {
    >>> .v-main {
      max-width: calc(100% - 380px - 300px) !important;
    }

    .container.main-container {
      max-width: 1296px;
    }
  }
</style>

<script>
import CTLayoutTriplet from '@/components/CTLayout/Triplet.vue';

export default {
  name: 'CTLayoutMain',
  components: {
    CTLayoutTriplet,
  },
  props: {
    hideAside: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
