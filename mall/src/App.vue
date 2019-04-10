<template>
  <div id="app" class="g-container">
   <div class="g-view-container">
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
   </div>
    <div class="g-footer-container">
      <v-tarbar></v-tarbar>
    </div>
  </div>
</template>

<script>
  import CTarbar from 'components/tabbar';
  export default {
    name: 'App',
    components: {
      'v-tarbar': CTarbar
    }
  };
</script>
<style lang="scss" scoped>

</style>
