<template>
  <div id="app">
        <Layout>
          <vHeader></vHeader>
          <router-view/>
          <vFooter></vFooter>
        </Layout>
  </div>
</template>

<script>
    import vHeader from '@/components/Header';
    import vFooter from '@/components/Footer';
export default {
  name: 'App',
  components:{
    vHeader,vFooter
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
