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

const nodeshiftConfig = require('../lib/nodeshift-config');

const resourceGoal = require('../lib/goals/resource');
const buildGoal = require('../lib/goals/build');
const applyResources = require('../lib/apply-resources');
const undeployGoal = require('../lib/goals/undeploy');

module.exports = async function run (options) {
  try {
    const config = await nodeshiftConfig(options);
    const response = {};
    if (options.cmd === 'resource' || options.cmd === 'deploy' || options.cmd === 'apply-resource') {
      const enrichedResources = await resourceGoal(config);
      response.resources = enrichedResources;
      if (options.cmd === 'deploy' || options.cmd === 'apply-resource') {
        response.appliedResources = await applyResources(config, enrichedResources);
      }
    }

    if (options.cmd === 'deploy' || options.cmd === 'build') {
      response.build = await buildGoal(config);
    }

    if (options.cmd === 'undeploy') {
      response.undeploy = undeployGoal(config);
    }

    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};
