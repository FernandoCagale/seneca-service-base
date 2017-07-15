'use strict';

require('dotenv').load({silent: true});

const seneca = require('seneca')({base: 'api-base'});
const consul = require('seneca-consul-registry');
const mesh = require('seneca-mesh');

const opts = {
  mesh: {
    isbase: true,
    listen: [{
      pin: 'role:mesh,base:true'
    }],
    discover: {
      guess: {
        active: false
      },
      multicast: {
        active: false
      },
      registry: {
        active: true
      }
    }
  },
  consul: {
    host: process.env.CONSUL_ADDR || '127.0.0.1'
  }
};

seneca.use(consul, opts.consul);
seneca.use(mesh, opts.mesh);
