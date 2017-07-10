'use strict';

// https://docs.openshift.com/online/rest_api/openshift_v1.html#v1-route
const _ = require('lodash');

const objectMetadata = require('./definitions/object-metadata');

const baseRouteConfig = {
  apiVersion: 'v1',
  kind: 'Route',
  spec: {}
};

function createRoute (config, resource) {
  const routeConfig = _.merge({}, baseRouteConfig, resource);

  // Apply MetaData
  routeConfig.metadata = objectMetadata({
    name: config.projectName,
    labels: {
      project: config.projectName,
      version: config.projectVersion
    }
  });

  // TODO: apply resource spec
  return routeConfig;
}

module.exports = async function getRoutes (config, resource) {
  // First check to see if we already have a route created
  const route = await config.openshiftRestClient.routes.find(config.projectName);
  if (route.code === 404) {
    // There isn't a route yet, so we need to create one
    console.log('Creating New Route');
    return config.openshiftRestClient.routes.create(createRoute(config, resource));
  }

  console.log('Route found, just using it');
  return route;
};

// spec: {
  //   port: {
  //     targetPort: 8080
  //   },
  //   to: {
  //     kind: 'Service',
  //     name: 'nodejs-rest-http'
  //   }
  // }
