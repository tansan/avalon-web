<template>
  <v-container
    class="text-center">
    <p>
      Please input player's nickname!
    </p>
    <div
      v-bind:key="index"
      v-for="(player, index) in this.$store.state.players">
      <InputPlayer
        v-bind:index="index"
        v-bind:nickname="player.nickname" />
    </div>
    <!-- div
      class="my-2">
      <v-btn
        class="primary"
        v-on:click="addPlayer">
        Add player
      </v-btn>
    </div -->
    <div
      class="my-2">
      <v-btn
        class="primary"
        to="/check-roles">
        Start Game!
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import InputPlayer from '@/components/InputPlayer'

export default {
  name: 'input-players',
  components: {
    InputPlayer
  },
  methods: {
    addPlayer () {
      this.$store.commit('addPlayer')
    }
  }
}
</script>
