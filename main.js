var Vue = require('vue')

new Vue({
  el: "#app",
  data: {
    firstName: "jeff",
    lastName: "storner",
    isShow: true
  },
  methods: {
    submit: function() {
      alert("hello.");
    }
  }
})
