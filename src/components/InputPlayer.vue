<template>
  <!-- v-text-field
    :label="'player ' + (index + 1)"
    v-model="player_name"
    append-outer-icon="mdi-delete"
    filled
    v-on:click:append-outer="deletePlayer" / -->
  <v-text-field
    :label="'player ' + (index + 1)"
    v-model="player_name"
    filled />
</template>

<script>
export default {
  name: 'input-player',
  props: {
    index: Number,
    nickname: String
  },
  methods: {
    deletePlayer () {
      this.$store.commit('deletePlayer', {
        index: this.index
      })
    }
  },
  computed: {
    player_name: {
      get () {
        return this.nickname
      },
      set (s) {
        this.$store.commit('editPlayer', {
          index: this.index,
          player: {
            nickname: s
          }
        })
      }
    }
  }
}
</script>
