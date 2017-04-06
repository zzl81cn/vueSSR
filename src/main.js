import Vue from 'vue'
import App from './App.vue'


console.log('===>')
console.log(App)
new Vue({
  el: '#app',
  render: h => h(App)
})
new Vue({
    el: '.app',
    render: h => h(App)
})

var data = App.data;
console.log(data().msg)
