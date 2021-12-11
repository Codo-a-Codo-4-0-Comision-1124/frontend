var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    posts: [],
  },
  methods: {
    retrieve: function () {
      var self = this;
      // Retrieve posts usando GET y Fetch
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          return response.json();
        }).then(function (json) {
          self.posts = json;
        });
    }
  }
})
