<template>
<img alt="Vue logo" href="https://ibb.co/9qdtC6P">
<HelloWorld msg="Welcome to vno!"/>
</template>

<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <p>
    For a guide and preview of our OSLabs repo<br>
    check out 
    <a href="https://github.com/oslabs-beta/vno" target="_blank" rel="noopener">vue-cli documentation</a>.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li><a href="https://github.com/jgrubb16/vnocli" target="_blank" rel="noopener">babel</a></li>
  </ul>
</div>
</template>
<script>
import HelloVno from './components/HelloVno.vue'

export default {
  name: 'App',
  components: {
    HelloVno
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #79D0B2;
  margin-top: 60px;
}
</style>