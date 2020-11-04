module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/../node_modules/bootstrap/scss/_functions.scss";
          @import "@/../node_modules/bootstrap/scss/_variables.scss";
          @import "@/../node_modules/bootstrap/scss/_mixins.scss";
        `,
      },
    },
  },
};
