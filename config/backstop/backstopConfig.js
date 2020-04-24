'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/path-to-the-solution/',
  // referenceUrl: 'https://mate-academy.github.io/layout_solutions' + '/catalog/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  // fileNameTemplate: '{scenarioLabel}_{viewportLabel}', if you have several viewports
  viewports: [
    // {
    //   name: '1024px',
    //   width: 1024,
    //   height: 768,
    // },
    // {
    //   name: '1200px',
    //   width: 1200,
    //   height: 768,
    // },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document', // the name of the element to test
      selectors: ['document'],
    }
  ],
};

module.exports = config;
