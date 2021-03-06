'use strict'

const { isMetric } = require('../test-validators')
const t = (module.exports = require('../tester').createServiceTester())

t.create('Security Rating')
  .get(
    '/security_rating/com.luckybox:luckybox.json?server=https://sonarcloud.io'
  )
  .expectBadge({
    label: 'security rating',
    message: isMetric,
    color: 'blue',
  })
