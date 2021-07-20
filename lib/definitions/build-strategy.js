/*
 *
 *  Copyright 2016-2017 Red Hat, Inc, and individual contributors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

'use strict';

const logger = require('../common-log')();

// Default docker image for web-apps
const DEFAULT_WEB_APP_DOCKER_IMAGE = 'nodeshift/ubi8-s2i-web-app';
// Adding in the DOCKER build strategy
// TODO:  Create a basic Dockerfile for the user if there isn't one in their repo
//        How is this really different from using s2i?
//        I guess it allows the user to specify a different Node image to use that isn't a s2i image
//        We could re-use the `dockerImage` and `dockerTag` flags
//        And default the node image to be the community image and the tag to be lts?
// TODO:  Add "replace Dockerfile FROM image"
//        Add custom Dockerfile path
//        Add custom Docker build arguements
//        https://docs.openshift.com/container-platform/4.4/builds/build-strategies.html#builds-strategy-docker-build_build-strategies

// https://docs.openshift.com/online/rest_api/openshift_v1.html#v1-buildstrategy
module.exports = (options) => {
  logger.info(`Using the ${options.buildStrategy} Build Strategy`);

  const env = options.buildEnv || [];

  const strategy = {};
  strategy.type = options.buildStrategy;

  if (options.buildStrategy === 'Source') {
    // Setting appropriate docker image if web-app flag is set
    options.dockerImage = options.webApp ? DEFAULT_WEB_APP_DOCKER_IMAGE : options.dockerImage;

    // Just doing the source strategy
    logger.info(`Using s2i image ${options.dockerImage} with tag ${options.imageTag}`);
    const dockerImageName = `${options.dockerImage}:${options.imageTag}`;

    strategy.sourceStrategy = {
      env: env,
      from: {
        kind: 'DockerImage',
        name: dockerImageName
      },
      incremental: options.incremental,
      forcePull: options.forcePull
    };
  } else {
    // This is the Docker build strategy
    strategy.dockerStrategy = {
      dockerfilePath: 'Dockerfile',
      env: env,
      forcePull: options.forcePull
    };
  }

  return strategy;
};
