<template>
  <v-container
    class="text-center">
    <div
      v-bind:key="index"
      v-for="(player, index) in this.$store.state.players">
      <div
        v-if="(index === nowCheckPlayer) && !nowCheck">
        <p>{{ player.nickname }} の役職</p>
        <v-btn
          class="primary"
          v-on:click="nowCheck = !nowCheck">
          確認する
        </v-btn>
      </div>
      <div
        v-if="(index === nowCheckPlayer) && nowCheck">
        <p>あなたは {{ player.role.name }} です。</p>
        <v-btn
          class="primary"
          v-on:click="nowCheck = !nowCheck; ++nowCheckPlayer">
          次の人へ
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'check-roles',
  data () {
    return {
      nowCheckPlayer: 0,
      nowCheck: false
    }
  },
  methods: {
    decideRoles () {
      var n = this.$store.state.players.length
      var randnums = [...Array(n)].map((_, i) => i)
      while (n) {
        var i = Math.floor(Math.random() * n)
        var tmp = randnums[--n]
        randnums[n] = randnums[i]
        randnums[i] = tmp
      }

      for (i = 0; i < this.$store.state.players.length; ++i) {
        this.$store.commit('editPlayer', {
          index: i,
          player: {
            nickname: this.$store.state.players[i].nickname,
            role: this.$store.state.roles_master[randnums[i]]
          }
        })
      }
    }
  },
  created () {
    this.decideRoles()
  }
}
</script>
