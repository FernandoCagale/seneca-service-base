'use strict';

require('dotenv').load({silent: true});

const Seneca = require('seneca');

Seneca({
    tag: 'base'
  }).use('consul-registry', {
    host: process.env.ADDR || '127.0.0.1'
  }).use('seneca-mesh', {
    isbase: true,
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  }).ready(function () {
    console.log('base', this.id);
  });
