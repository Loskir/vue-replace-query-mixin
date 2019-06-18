const updateQuery = require('update-query')

module.exports = {
  methods: {
    replaceQuery(data) {
      this.$router
        && this.$route
        && this.$router.replace(updateQuery(this.$route.fullPath, data))
    }
  }
}