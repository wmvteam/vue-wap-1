<template>
    <div class="main">
       <titlerefresher />
            <router-view></router-view>
       <showtip :msg="codeMsg"/>
    </div>
</template>

<script>
import showtip from './components/showtip'
import titlerefresher from './components/titlerefresher'

export default {
  computed: {
    codeMsg() {
      return this.$store.getters.codeMsg
    }
  },
  components: {
    showtip,
    titlerefresher
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/rem';

.main {
    max-width: rem(750);
    margin: 0 auto;
    background-color:#fff;
}
</style>
