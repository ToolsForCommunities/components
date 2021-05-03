<template>
  <v-btn
    :block="block"
    :disabled="disabled"
    :loading="loading"
    :text="text"
    :outlined="!(contained || text)"
    :color="color || 'primary'"
  >
    <v-icon
      v-if="icon"
      size="14"
      class="mr-2"
    >
      {{ icon }}
    </v-icon>
    <slot />
  </v-btn>
</template>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>

<script>
  export default {
    name: 'CTButton',
    props: {
      block: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      contained: {
        type: Boolean,
        default: false,
      },
      text: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: 'primary',
      },
      icon: {
        type: String,
        default: '',
      },
    },
  }
</script>
