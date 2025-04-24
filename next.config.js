const { default: styled } = require("styled-components");

// next.config.js
module.exports = {
  exportPathMap: function (defaultPathMap) {
    return {
      '/': { page: '/' },
    };
  },
  compiler: {
    styledComponents: true,
  }
};
