<template>
  <div class="vuex-guide">
    <GuideState/>
    <GuideGetter/>
    <GuideMutation/>
    <GuideAction/>
  </div>
</template>

<script>
// @ is an alias to /src
import GuideState from '@/components/GuideState.vue'
import GuideGetter from '@/components/GuideGetter.vue'
import GuideMutation from '@/components/GuideMutation.vue'
import GuideAction from '@/components/GuideAction.vue'

export default {
  name: 'VuexGuide',
  components: {
    GuideState,
    GuideGetter,
    GuideMutation,
    GuideAction
  }
}
</script>
