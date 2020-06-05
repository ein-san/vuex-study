<template>
  <div class="guide-getter">
    <h1>Getter</h1>
    <!-- <p>{{ doneTodosCount }}</p>
    <p>{{ doneTodos }}</p>
    <p>{{ getTodoById }}</p> -->
    <p>{{ doneCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GuideGetter',
  // 直接stateを参照するときはCounter.vueのようにstateを直接参照すれば良い
  // stateを加工して表示する際に、共通するものであれば親側でgettersを定義しておけば子で以下のように利用すると良い
  computed: {
    // doneTodosCount () {
    //   return this.$store.getters.doneTodosCount
    // },
    // doneTodos () {
    //   return this.$store.getters.doneTodos
    // },
    // getTodoById () {
    //   return this.$store.getters.getTodoById(2)
    // },
    // // mapGetters ヘルパーを使った書き方
    // // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
    // ...mapGetters([
    //   'doneTodos',
    //   'doneTodosCount'
    // ])
    // // ゲッターを異なる名前でマッピングさせたいときはオブジェクトを使う
    // // `this.doneCount` を `this.$store.getters.doneTodosCount` にマッピングさせる
    ...mapGetters({
      doneCount: 'doneTodosCount'
    })
  }
}
</script>