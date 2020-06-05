<template>
  <div class="guide-mutation">
    <h1>Mutation</h1>
    <!-- <button v-on:click="incrementCount">Increment!</button>
    <button v-on:click="incrementCountSendArg(2)">Increment + 2</button>
    <button v-on:click="incrementCountSendObj({amount: 3})">Increment + 3</button> -->

    <button v-on:click="increment">Increment</button>
    <button v-on:click="incrementReceiveArg(2)">Increment + 2</button>
    <button v-on:click="add({amount: 3})">Increment + 3</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

// ミューテーションは同期的でなければならない
// Vuex では全てのミューテーションは同期的に行うという作法になっている
export default {
  name: 'GuideMutation',
  methods: {
    // incrementCount () {
    //   this.$store.commit('increment')
    // },
    // incrementCountSendArg (n) {
    //   this.$store.commit('incrementReceiveArg', n)
    // },
    // ほとんどの場合、ペイロードはオブジェクトにすべきです。
    // そうすることで複数のフィールドを含められるようになり、またミューテーションがより記述的に記録されるようになります
    incrementCountSendObj (payload) {
      // this.$store.commit('incrementReceiveObj', payload)
      // オブジェクトスタイルでコミットするとき、オブジェクト全体がペイロードとしてミューテーションハンドラに渡される。
      this.$store.commit({type: 'incrementReceiveObj', ...payload})
    },
    // mapMutationsを利用
    ...mapMutations([
      'increment', // `this.increment()` を `this.$store.commit('increment')` にマッピングする
      // mapMutations はペイロードサポートする:
      'incrementReceiveArg' // `this.incrementReceiveArg(n)` を `this.$store.commit('incrementReceiveArg', n)` にマッピングする
    ]),
    ...mapMutations({
      add: 'incrementReceiveObj' // `this.add(obj)` を `this.$store.commit('incrementReceiveObj', obj)` にマッピングする
    })
  }
}
</script>