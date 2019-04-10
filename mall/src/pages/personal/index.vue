<template>
    <div class="personal">
      <header class="g-header-container">
        <per-header></per-header>
      </header>
      <me-scroll class="scroll">
        <per-banner/>
        <per-indent/>
        <per-assets/>
        <per-sundry/>
      </me-scroll>
    </div>
</template>

<script>
  import perHeader from './header';
  import perBanner from './banner';
  import perIndent from './indent';
  import perAssets from './assets';
  import perSundry from './sundry';
  import meScroll from 'base/scroll';
  export default {
    name: 'index',
    components: {
      perHeader,
      perBanner,
      perIndent,
      perAssets,
      perSundry,
      meScroll
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.personal{
  padding-top: 50px;
  height: 100%;
}
</style>
