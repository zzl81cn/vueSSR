<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>zzl81cn</h2>
    <ul>
      <li><a href="http://www.google.com">google</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'zzl81cn',
  data () {
    return {
      msg: 'Oh, yeah!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
