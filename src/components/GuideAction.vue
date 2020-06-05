<template>
  <div class="guide-action">
    <h1>Action</h1>
    <!-- <button v-on:click="incrementCount">Increment!</button>
    <button v-on:click="incrementCountAsync">incrementCountAsync!</button>
    <button v-on:click="incrementAsyncReceiveObj({amount: 3})">incrementAsyncReceiveObj + 3</button> -->

    <button v-on:click="increment">Increment!</button>
    <button v-on:click="incrementAsyncReceiveObj({amount: 3})">incrementAsyncReceiveObj + 3</button>
    <button v-on:click="add">Increment!</button>
    <button v-on:click="actionA">actionA!</button>
    <button v-on:click="actionB">actionB!</button>
  </div>
</template>

<script>
// promiseについて
// https://qiita.com/Yametaro/items/0d29df53d9ac2a779595?utm_source=Qiita%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9&utm_campaign=61f4015394-Qiita_newsletter_412_05_27_2020&utm_medium=email&utm_term=0_e44feaa081-61f4015394-33255609#promiseasyncawait%E3%81%A8%E3%81%AF
// Async/Awaitについて
// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

import { mapActions } from 'vuex'

export default {
  name: 'GuideAction',
  methods: {
    // incrementCount () {
    //   this.$store.dispatch('increment')
    // },
    // incrementCountAsync () {
    //   this.$store.dispatch('incrementAsync')
    // },
    // incrementAsyncReceiveObj (payload) {
    //   // ペイロードを使ってディスパッチする
    //   //this.$store.dispatch('incrementAsyncReceiveObj', payload)
    //   // オブジェクトを使ってディスパッチする
    //   this.$store.dispatch({
    //     type: 'incrementAsyncReceiveObj', ...payload
    //   })
    // }
    // mapActionsを利用した書き方
    ...mapActions([
      'increment', // `this.increment()` を `this.$store.dispatch('increment')` にマッピングする
      // `mapActions` もペイロードをサポートする:
      'incrementAsyncReceiveObj' // `this.incrementAsyncReceiveObj(payload)` を `this.$store.dispatch('incrementBy', payload)` にマッピングする
    ]),
    ...mapActions({
      add: 'increment' // `this.add()` を `this.$store.dispatch('increment')` にマッピングする
    }),
    actionA () {
      this.$store.dispatch('actionA').then(() => {
        console.log('終わりました！')
      })
    },
    actionB () {
      this.$store.dispatch('actionB')
    }
  }
}
</script>