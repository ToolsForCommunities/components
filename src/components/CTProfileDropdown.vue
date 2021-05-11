<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item
        v-bind="attrs"
        v-on="on"
      >
        <v-list-item-avatar>
          <v-img
            alt="avatar"
            :src="pic"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ name }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'CTProfileDropdown',
  props: {
    pic: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
