<template>
  <v-btn
    x-large
    block
    text
    class="font-weight-bold"
    :class="{
      'primary lighten-5 primary--text': active,
      'grey--text text--darken-2': !active,
      'large-button rounded-pill justify-start':  isLarge,
      'small-button rounded flex-column justify-center px-0 py-10':  isSmall,
    }"
    v-resize="onResize"
  >
    <v-icon
      v-if="icon"
      left
      size="24"
      :class="{
        'ml-1 mr-4': isLarge,
        'mb-1 mx-0': isSmall,
        'material-icons-outlined': !active,
      }"
    >
      {{ iconState }}
    </v-icon>
    <slot />
  </v-btn>
</template>

<style scoped>
.v-btn {
  text-transform: none;
}

.small-button >>> .v-btn__content {
  flex-direction: column;
}
</style>

<script>
export default {
  name: 'NavigationButton',
  props: {
    size: {
      type: String,
      default: '',
      validator: (value) => (['large', 'small', 'tab', ''].indexOf(value) !== -1),
    },
    icon: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    windowWidth: 0,
  }),
  computed: {
    isLarge() {
      const thresholds = this.$vuetify.breakpoint.thresholds;
      return this.size === 'large' || this.windowWidth > thresholds.md;
    },
    isSmall() {
      const thresholds = this.$vuetify.breakpoint.thresholds;
      const isMd = this.windowWidth > thresholds.sm && this.windowWidth < thresholds.md;
      return this.size === 'small' || isMd;
    },
    isTab() {
      return this.size === 'tab' || this.$vuetify.breakpoint.smAndDown;
    },
    iconState() {
      return this.active ? this.icon : `${this.icon}-outline`
    },
  },
  methods: {
    onResize() {
      if (typeof window !== "undefined") {
        this.windowWidth = window.innerWidth;
      }
    },
  },
  created() {
    this.onResize();
  },
};
</script>
