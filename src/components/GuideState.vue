<template>
  <div class="guide-state">
    <h1>State</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GuideState',
  data: function () {
    return {
      localCount: 5
    }
  },
  // //storeへのアクセス方法
  // // pattern1: this.$store.stateでアクセス。
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  //}
  // // pattern2: mapStateを利用。this.$store.stateを記載する必要がなくなり、短く書ける
  // https://vuex.vuejs.org/ja/guide/state.html
  // https://qiita.com/Statham/items/046649bff81c00ba275e
  // https://qiita.com/suin/items/7331905a45a8ff80d4dd
  computed: {
    ...mapState(['count'])
  }
  // computed: mapState({
  //   //this.$store.stateが実行された結果stateが返ってきている
  //   //mapState内のstateはthis.$store.stateが入っている
  //   count: state => state.count
  //   // 文字列を渡すことは、`state => state.count` と同じです
  //   countAlias: 'count'
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // })
}
</script>