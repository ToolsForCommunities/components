<template>
  <v-btn
    x-large
    text
    class="font-weight-bold"
    :class="{
      'primary lighten-5 primary--text': active,
      'grey--text text--darken-2': !active,
      'rounded-pill justify-start':  isLarge,
      'rounded flex-column justify-center py-10':  isSmall,
    }"
  >
    <v-icon
      v-if="icon"
      left
      size="24"
      class="ml-1 mr-4"
      :class="{
        'mb-1': isSmall,
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

.flex-column >>> .v-btn__content {
  flex-direction: column;
}
</style>

<script>
// import LayoutTriplet from '@/components/layout/Triplet.vue';

export default {
  name: 'NavigationButton',
  // components: {
  //   LayoutTriplet,
  // },
  props: {
    size: {
      type: String,
      default: () => 'large',
      validator: (value) => (['large', 'small', 'tab'].indexOf(value) !== -1),
    },
    icon: {
      type: String,
      default: () => 'mdi-home',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isLarge() {
      // return this.size === 'large' || MAS ANCHO QUE 1264px;
      return this.size === 'large';
    },
    isSmall() {
      // return this.size === 'large' || ENTRE 960 y 1264px;
      return this.size === 'small';
    },
    iconState() {
      return this.active ? this.icon : `${this.icon}-outline`
    },
  },
};
</script>
