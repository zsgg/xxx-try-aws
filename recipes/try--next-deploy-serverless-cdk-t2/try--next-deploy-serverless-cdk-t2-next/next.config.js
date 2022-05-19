const fs = require('fs');
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  return {
    experimental: {
      emotion: true,
    },
  };
};
