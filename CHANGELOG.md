# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [8.3.1](https://www.github.com/nodeshift/nodeshift/compare/v8.3.0...v8.3.1) (2021-07-19)


### Bug Fixes

* upgrade documentation from 13.1.1 to 13.2.5 ([#571](https://www.github.com/nodeshift/nodeshift/issues/571)) ([5d4b5d6](https://www.github.com/nodeshift/nodeshift/commit/5d4b5d69cd22fdf35bd84ce833032bc1dced4b03))

## [8.3.0](https://www.github.com/nodeshift/nodeshift/compare/v8.2.1...v8.3.0) (2021-07-17)


### Features

* **api:** add a getNodeshiftConfig method ([1e34a8d](https://www.github.com/nodeshift/nodeshift/commit/1e34a8d5fedd04d93a2d7fc8bcdac211fc4e6bdd))

### [8.2.1](https://www.github.com/nodeshift/nodeshift/compare/v8.2.0...v8.2.1) (2021-07-13)


### Bug Fixes

* Adding package-support.json to the files array ([#566](https://www.github.com/nodeshift/nodeshift/issues/566)) ([dfb6c37](https://www.github.com/nodeshift/nodeshift/commit/dfb6c37232079dfcdcc630e8687b45cc6f5a3c13))

## [8.2.0](https://www.github.com/nodeshift/nodeshift/compare/v8.1.1...v8.2.0) (2021-05-07)


### Features

* add exposeHost option ([#558](https://www.github.com/nodeshift/nodeshift/issues/558)) ([497f8d3](https://www.github.com/nodeshift/nodeshift/commit/497f8d3a0a985fcaf63f04115bcc5532162d48f1))


### Bug Fixes

* upgrade standard-version from 9.1.0 to 9.1.1 ([#550](https://www.github.com/nodeshift/nodeshift/issues/550)) ([b684a2a](https://www.github.com/nodeshift/nodeshift/commit/b684a2a403e261f3742daafbf6cd23940d1fd47c))

### [8.1.1](https://www.github.com/nodeshift/nodeshift/compare/v8.1.0...v8.1.1) (2021-03-05)


### Bug Fixes

* dockerImage was undefined. ([#548](https://www.github.com/nodeshift/nodeshift/issues/548)) ([e3da626](https://www.github.com/nodeshift/nodeshift/commit/e3da6268ac113050529019e283de0d5d929a1d13))
* upgrade eslint-plugin-promise from 4.2.1 to 4.3.1 ([#547](https://www.github.com/nodeshift/nodeshift/issues/547)) ([f352aff](https://www.github.com/nodeshift/nodeshift/commit/f352affccb6533e1354d30bbe61783efd7bdd90e))

## [8.1.0](https://www.github.com/nodeshift/nodeshift/compare/v8.0.1...v8.1.0) (2021-02-24)


### Features

* nodeshift login/logout ([#545](https://www.github.com/nodeshift/nodeshift/issues/545)) ([f197389](https://www.github.com/nodeshift/nodeshift/commit/f197389717bbd13a765a6c7b67a1d093154f22e9))
* **enricher:** Adds the rh-metering flag for adding Red Hat Runtimes metering to your application. ([#543](https://www.github.com/nodeshift/nodeshift/issues/543)) ([0486d33](https://www.github.com/nodeshift/nodeshift/commit/0486d33dd6acfaa6753429a2ee33fcfab6741a06))


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([#546](https://www.github.com/nodeshift/nodeshift/issues/546)) ([509f0a5](https://www.github.com/nodeshift/nodeshift/commit/509f0a548e75c8ae6edd597b7d07a631426c6efd))
* upgrade sinon from 9.2.3 to 9.2.4 ([#541](https://www.github.com/nodeshift/nodeshift/issues/541)) ([089809e](https://www.github.com/nodeshift/nodeshift/commit/089809e0fe7c8b95be1c6334175dd87b937075b6))

### [8.0.1](https://www.github.com/nodeshift/nodeshift/compare/v8.0.0...v8.0.1) (2021-02-12)


### Bug Fixes

* **config:** Allow scoped applications in the package name. ([#539](https://www.github.com/nodeshift/nodeshift/issues/539)) ([0e4a5db](https://www.github.com/nodeshift/nodeshift/commit/0e4a5db9941468dc88afc75c88d463ed7c7ef8df)), closes [#538](https://www.github.com/nodeshift/nodeshift/issues/538)

## [8.0.0](https://www.github.com/nodeshift/nodeshift/compare/v7.5.0...v8.0.0) (2021-02-01)


### ⚠ BREAKING CHANGES

* This updates the default builder image to use Node 14 instead of Node 10

### Features

* Default to Node 14 for the build image ([#536](https://www.github.com/nodeshift/nodeshift/issues/536)) ([76b6420](https://www.github.com/nodeshift/nodeshift/commit/76b6420503dc74f1e5944586cf39cf90cc620bbc))


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([#531](https://www.github.com/nodeshift/nodeshift/issues/531)) ([4cfdc8f](https://www.github.com/nodeshift/nodeshift/commit/4cfdc8f03099341b8f873dd4e1c6ecda48db8522))
* upgrade sinon from 9.2.2 to 9.2.3 ([#534](https://www.github.com/nodeshift/nodeshift/issues/534)) ([dc77ebc](https://www.github.com/nodeshift/nodeshift/commit/dc77ebc3fabe9ad53aef6debe43a9d9a6f1bb872))
* upgrade standard-version from 9.0.0 to 9.1.0 ([#532](https://www.github.com/nodeshift/nodeshift/issues/532)) ([7e46c89](https://www.github.com/nodeshift/nodeshift/commit/7e46c8977a250241edb3bc1074662b5e16da907b))
* upgrade tar from 6.0.5 to 6.1.0 ([#535](https://www.github.com/nodeshift/nodeshift/issues/535)) ([f600596](https://www.github.com/nodeshift/nodeshift/commit/f60059631e55f89931813d72849344b91b11b269))

## [7.5.0](https://www.github.com/nodeshift/nodeshift/compare/v7.4.0...v7.5.0) (2021-01-13)


### Features

*  add a token flag to pass in an auth token for API calls ([#529](https://www.github.com/nodeshift/nodeshift/issues/529)) ([4093fe0](https://www.github.com/nodeshift/nodeshift/commit/4093fe03588504aac8fcbee7acabb2c796ff632a))
* deprecate apiServer and replace with server ([#527](https://www.github.com/nodeshift/nodeshift/issues/527)) ([e80e1d9](https://www.github.com/nodeshift/nodeshift/commit/e80e1d91d01b57850dafdb6a7d9d8e42a0f3807b))

## [7.4.0](https://www.github.com/nodeshift/nodeshift/compare/v7.3.0...v7.4.0) (2021-01-08)


### Features

* Use passed in credentials to deploy instead of getting the local kube config ([#524](https://www.github.com/nodeshift/nodeshift/issues/524)) ([7612ef8](https://www.github.com/nodeshift/nodeshift/commit/7612ef8b447210065a0b23a3b733e0aabade2e3e))

## [7.3.0](https://www.github.com/nodeshift/nodeshift/compare/v7.2.1...v7.3.0) (2021-01-04)


### Features

* Add the ability to deploy a node app to Kubernetes(Minikube) ([3e03c00](https://www.github.com/nodeshift/nodeshift/commit/3e03c002f9d6221d800b702c3190f0b6870ccf2e))


### Bug Fixes

* upgrade cross-env from 7.0.2 to 7.0.3 ([#519](https://www.github.com/nodeshift/nodeshift/issues/519)) ([1ce7f1f](https://www.github.com/nodeshift/nodeshift/commit/1ce7f1fbb9f4211fa16b79738aefa0345c2c77f2))
* upgrade js-yaml from 3.14.0 to 3.14.1 ([#521](https://www.github.com/nodeshift/nodeshift/issues/521)) ([8564710](https://www.github.com/nodeshift/nodeshift/commit/85647107863009a523728ac43ba5b9d1d4b02221))
* upgrade sinon from 9.2.1 to 9.2.2 ([#522](https://www.github.com/nodeshift/nodeshift/issues/522)) ([3873041](https://www.github.com/nodeshift/nodeshift/commit/38730419160ab2a5904d9fc2d2014371a630ac6d))
* upgrade yargs from 16.1.1 to 16.2.0 ([#520](https://www.github.com/nodeshift/nodeshift/issues/520)) ([0a2dc42](https://www.github.com/nodeshift/nodeshift/commit/0a2dc423e18626f8b4a9788e3a047e99fa4bda0d))
* **build:** Adding the configuration for coveralls ([#516](https://www.github.com/nodeshift/nodeshift/issues/516)) ([74dbf89](https://www.github.com/nodeshift/nodeshift/commit/74dbf899fbb296553dae539be56db0a23ee0c719))
* upgrade yargs from 16.1.0 to 16.1.1 ([#511](https://www.github.com/nodeshift/nodeshift/issues/511)) ([28a8408](https://www.github.com/nodeshift/nodeshift/commit/28a8408d49e12515ea1ce46c20f5fc7a3afe9a17))

### [7.2.1](https://www.github.com/nodeshift/nodeshift/compare/v7.2.0...v7.2.1) (2020-12-01)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([#506](https://www.github.com/nodeshift/nodeshift/issues/506)) ([7e3ffdb](https://www.github.com/nodeshift/nodeshift/commit/7e3ffdb6a1401f1945b868f1a62ab5124224f50c))
* upgrade documentation from 13.0.2 to 13.1.0 ([#505](https://www.github.com/nodeshift/nodeshift/issues/505)) ([8a80bda](https://www.github.com/nodeshift/nodeshift/commit/8a80bdaf0797cf6f74a42d9825b85aacbf55288e))
* upgrade eslint-plugin-import from 2.22.0 to 2.22.1 ([#499](https://www.github.com/nodeshift/nodeshift/issues/499)) ([e8714d9](https://www.github.com/nodeshift/nodeshift/commit/e8714d95ab4df9eb7f95a1d4a378f8a7a5e5b765))
* upgrade eslint-plugin-standard from 4.0.1 to 4.0.2 ([#504](https://www.github.com/nodeshift/nodeshift/issues/504)) ([8902b01](https://www.github.com/nodeshift/nodeshift/commit/8902b0143653138555094a39889918ee36cb614a))
* upgrade eslint-plugin-standard from 4.0.2 to 4.1.0 ([#509](https://www.github.com/nodeshift/nodeshift/issues/509)) ([f47fa95](https://www.github.com/nodeshift/nodeshift/commit/f47fa9515ae4a409ead90ff5b9588f12625dd6ec))
* upgrade sinon from 9.0.3 to 9.1.0 ([#501](https://www.github.com/nodeshift/nodeshift/issues/501)) ([dc3bf1a](https://www.github.com/nodeshift/nodeshift/commit/dc3bf1a32d2deb153783d911e74b48f85b8ab40c))
* upgrade sinon from 9.1.0 to 9.2.0 ([#502](https://www.github.com/nodeshift/nodeshift/issues/502)) ([5ad111e](https://www.github.com/nodeshift/nodeshift/commit/5ad111e56a07938db112d60980824fad2e88223c))
* upgrade sinon from 9.2.0 to 9.2.1 ([#508](https://www.github.com/nodeshift/nodeshift/issues/508)) ([94b3ed1](https://www.github.com/nodeshift/nodeshift/commit/94b3ed174c11790a4c450d046934d6705eb1ba92))
* upgrade yargs from 16.0.0 to 16.1.0 ([#507](https://www.github.com/nodeshift/nodeshift/issues/507)) ([a95cb44](https://www.github.com/nodeshift/nodeshift/commit/a95cb44ed1e21f7066b9c79d22325734f04bd13b))

## [7.2.0](https://github.com/nodeshift/nodeshift/compare/v7.1.0...v7.2.0) (2020-09-14)


### Features

* Define a subdirectory below .nodeshift/ that indicates where Openshift resources are stored ([#493](https://github.com/nodeshift/nodeshift/issues/493)) ([ed269ea](https://github.com/nodeshift/nodeshift/commit/ed269ea38aea9e9726bdbbf9a53c8b113561a2e7))


### Bug Fixes

* fix typo in CLI option ([3bc2ac6](https://github.com/nodeshift/nodeshift/commit/3bc2ac6a9bfd34d2d1d61cdb704246b33282b109))
* package.json & package-lock.json to reduce vulnerabilities ([#485](https://github.com/nodeshift/nodeshift/issues/485)) ([c249a8f](https://github.com/nodeshift/nodeshift/commit/c249a8f6a378882c6aa1be5bd3dc17da7c578e2a))
* package.json & package-lock.json to reduce vulnerabilities ([#486](https://github.com/nodeshift/nodeshift/issues/486)) ([80f85bc](https://github.com/nodeshift/nodeshift/commit/80f85bc600813cf86b66051eed1e8bdc862b27b3))
* upgrade sinon from 9.0.2 to 9.0.3 ([#489](https://github.com/nodeshift/nodeshift/issues/489)) ([c565b23](https://github.com/nodeshift/nodeshift/commit/c565b23d615338c187c5adc70294958c54c48385))
* upgrade standard-version from 8.0.1 to 8.0.2 ([#482](https://github.com/nodeshift/nodeshift/issues/482)) ([82c962c](https://github.com/nodeshift/nodeshift/commit/82c962c00f5cfd7030be5f71116ffe21b4f07b2f))
* upgrade tar from 6.0.2 to 6.0.5 ([#492](https://github.com/nodeshift/nodeshift/issues/492)) ([14a3b1f](https://github.com/nodeshift/nodeshift/commit/14a3b1f6a0b6177fed38eeda2a86fb195f9d88f1))
* upgrade yargs from 15.4.0 to 15.4.1 ([#487](https://github.com/nodeshift/nodeshift/issues/487)) ([2744f85](https://github.com/nodeshift/nodeshift/commit/2744f8558377eb42385866edd6c318805bdc9a20))

## [7.1.0](https://github.com/nodeshift/nodeshift/compare/v7.0.0...v7.1.0) (2020-07-29)


### Features

* Nodeshift should be able to use a Deployment type ([#478](https://github.com/nodeshift/nodeshift/issues/478)) ([816b0a3](https://github.com/nodeshift/nodeshift/commit/816b0a39b0c5c85746aaf478cc93ea6941da559b))

## [7.0.0](https://github.com/nodeshift/nodeshift/compare/v6.2.0...v7.0.0) (2020-07-02)


### Features

* **knative:** Each deploy should create a new revision. ([#467](https://github.com/nodeshift/nodeshift/issues/467)) ([3ba9cb0](https://github.com/nodeshift/nodeshift/commit/3ba9cb0592417ac067dd072ff34d30cd45cb111a))
* **project-archiver:** Adding .gitignore ([#463](https://github.com/nodeshift/nodeshift/issues/463)) ([3f7d48d](https://github.com/nodeshift/nodeshift/commit/3f7d48d2661a34fd5c46f3d2c26f1532f16d6de4))


### Bug Fixes

* upgrade js-yaml from 3.13.1 to 3.14.0 ([#461](https://github.com/nodeshift/nodeshift/issues/461)) ([afc4cb3](https://github.com/nodeshift/nodeshift/commit/afc4cb3153c3326e60d17f0111d3751d5d80518d))

## [6.2.0](https://github.com/nodeshift/nodeshift/compare/v6.1.0...v6.2.0) (2020-06-05)


### Features

* Knative Serving Deployment ([#454](https://github.com/nodeshift/nodeshift/issues/454)) ([88eed5d](https://github.com/nodeshift/nodeshift/commit/88eed5d3ee0870036c34ff30b62862704f284eeb))

## [6.1.0](https://github.com/nodeshift/nodeshift/compare/v6.0.2...v6.1.0) (2020-05-13)


### Features

* **build-strategy:** Add Docker build strategy ([#442](https://github.com/nodeshift/nodeshift/issues/442)) ([384690f](https://github.com/nodeshift/nodeshift/commit/384690f1c6395b27dbfb131f2841c3c418848881))


### Bug Fixes

* upgrade documentation from 12.1.4 to 12.2.0 ([#438](https://github.com/nodeshift/nodeshift/issues/438)) ([a6820a1](https://github.com/nodeshift/nodeshift/commit/a6820a1e529e9e88549379ec0f59dddfa03107d9))
* upgrade eslint-plugin-node from 11.0.0 to 11.1.0 ([#437](https://github.com/nodeshift/nodeshift/issues/437)) ([591646e](https://github.com/nodeshift/nodeshift/commit/591646e1ce170ca0c630c832c9e57abdb6289d67))

### [6.0.2](https://github.com/nodeshift/nodeshift/compare/v6.0.1...v6.0.2) (2020-04-13)


### Features

* Replacing rimraf with custom module ([#413](https://github.com/nodeshift/nodeshift/issues/413)) ([9351d45](https://github.com/nodeshift/nodeshift/commit/9351d4527cd1688ef5b349ca711425c37f0e0cce))


### Bug Fixes

* update and pin the openshift-rest-client version to 4.0.1 ([#435](https://github.com/nodeshift/nodeshift/issues/435)) ([e09d2be](https://github.com/nodeshift/nodeshift/commit/e09d2be07c6a7cf97d4fcf9eb4a9682ec7a8d9e7))
* upgrade cross-env from 7.0.0 to 7.0.1 ([#428](https://github.com/nodeshift/nodeshift/issues/428)) ([56de6c6](https://github.com/nodeshift/nodeshift/commit/56de6c65c3dc1d5c143fbf5c763a29b99148e6a8))
* upgrade nock from 12.0.0 to 12.0.2 ([#427](https://github.com/nodeshift/nodeshift/issues/427)) ([8097b9d](https://github.com/nodeshift/nodeshift/commit/8097b9d38141898f046e655e1746c383c902992f))
* upgrade tape from 4.13.0 to 4.13.2 ([#429](https://github.com/nodeshift/nodeshift/issues/429)) ([f064833](https://github.com/nodeshift/nodeshift/commit/f064833f04fb2efb37b1fb49714a214a3db82e04))
* upgrade yargs from 15.1.0 to 15.2.0 ([#426](https://github.com/nodeshift/nodeshift/issues/426)) ([fefb21e](https://github.com/nodeshift/nodeshift/commit/fefb21eacfd012d0babee1e16b56447b5fe0e1be))

### [6.0.1](https://github.com/nodeshift/nodeshift/compare/v6.0.0...v6.0.1) (2020-02-19)


### Bug Fixes

* promisifying the newest release of mkdirp breaks mkdirp. ([#412](https://github.com/nodeshift/nodeshift/issues/412)) ([94a22f2](https://github.com/nodeshift/nodeshift/commit/94a22f28ac2d823e85c7d3b6cb1b4c32ea2bb166)), closes [#411](https://github.com/nodeshift/nodeshift/issues/411)

## [6.0.0](https://github.com/nodeshift/nodeshift/compare/v5.0.0...v6.0.0) (2020-02-17)


### ⚠ BREAKING CHANGES

* removal of Node 8 support

* Engine parameter targets node 10+ ([#406](https://github.com/nodeshift/nodeshift/issues/406)) ([c820b80](https://github.com/nodeshift/nodeshift/commit/c820b80de0650a3c1dbf0d6e8098c20cd4bb198b))

## [5.0.0](https://github.com/nodeshift/nodeshift/compare/v4.2.0...v5.0.0) (2020-01-22)


### ⚠ BREAKING CHANGES

* The api for the openshift rest client has changed slightly, but there should be no nodeshift api changes

While this doesn't have to be a semver-major release, there might be some unexpected bugs.  One known issue, is we are no longer passing a custom config to the rest client.  If this removal causes issues we can work on a way to put it back in

### Features

* pass in a non-default configLocation. ([#400](https://github.com/nodeshift/nodeshift/issues/400)) ([f1bd1b3](https://github.com/nodeshift/nodeshift/commit/f1bd1b3cba5e64cbfd8356f842f1c16e42f2e036)), closes [#341](https://github.com/nodeshift/nodeshift/issues/341) [#373](https://github.com/nodeshift/nodeshift/issues/373)
* remove deprecation warnings from openshift rest client ([#398](https://github.com/nodeshift/nodeshift/issues/398)) ([2b97f49](https://github.com/nodeshift/nodeshift/commit/2b97f491eaf252ed0166eb1cf6f6067d081a66c9)), closes [#377](https://github.com/nodeshift/nodeshift/issues/377)

## [4.2.0](https://github.com/nodeshift/nodeshift/compare/v4.1.0...v4.2.0) (2020-01-13)


### Features

* Adding web-app flag ([#395](https://github.com/nodeshift/nodeshift/issues/395)) ([d1d0c14](https://github.com/nodeshift/nodeshift/commit/d1d0c1429b12e3a00ad2cf754ec14639ff79e581))

## [4.1.0](https://github.com/nodeshift/nodeshift/compare/v4.0.0...v4.1.0) (2019-11-18)


### Features

* **enricher:** add runtime labels to resources. ([#380](https://github.com/nodeshift/nodeshift/issues/380)) ([1028af2](https://github.com/nodeshift/nodeshift/commit/1028af2c5776a54023d9e1ddca17f90b86c923ec)), closes [#374](https://github.com/nodeshift/nodeshift/issues/374)

## [4.0.0](https://github.com/nodeshift/nodeshift/compare/v3.1.1...v4.0.0) (2019-11-04)


### ⚠ BREAKING CHANGES

* Changing the base s2i images

This removes the deprecated nodeshift/centos7-s2i-nodejs images and replaces then with the UBI based Node images from Red Hat Software Collections

### src

* using ubi7/nodejs-10 as default image ([#372](https://github.com/nodeshift/nodeshift/issues/372)) ([0bc82bd](https://github.com/nodeshift/nodeshift/commit/0bc82bdf18a6bc0bb7195a95093bf91cd0c48294))

### [3.1.1](https://github.com/nodeshift/nodeshift/compare/v3.1.0...v3.1.1) (2019-08-19)

## [3.1.0](https://github.com/nodeshift/nodeshift/compare/v3.0.1...v3.1.0) (2019-08-19)


### Bug Fixes

* some typos in code and comments ([#330](https://github.com/nodeshift/nodeshift/issues/330)) ([b510e9d](https://github.com/nodeshift/nodeshift/commit/b510e9d))


### Features

* change the output Image Stream name and tag ([#347](https://github.com/nodeshift/nodeshift/issues/347)) ([3faa599](https://github.com/nodeshift/nodeshift/commit/3faa599)), closes [#337](https://github.com/nodeshift/nodeshift/issues/337)

## [3.0.1](https://github.com/nodeshift/nodeshift/compare/v3.0.0...v3.0.1) (2019-04-24)



# [3.0.0](https://github.com/nodeshift/nodeshift/compare/v2.1.1...v3.0.0) (2019-04-12)


* remove the string version of the namespace flag (#299) ([5674b89](https://github.com/nodeshift/nodeshift/commit/5674b89)), closes [#299](https://github.com/nodeshift/nodeshift/issues/299) [#282](https://github.com/nodeshift/nodeshift/issues/282)


### Bug Fixes

* build.recreate should also check the string version of true/false ([#297](https://github.com/nodeshift/nodeshift/issues/297)) ([140b13a](https://github.com/nodeshift/nodeshift/commit/140b13a)), closes [#295](https://github.com/nodeshift/nodeshift/issues/295)
* load the projectLocation not relative to the nodeshift-config.js file ([#302](https://github.com/nodeshift/nodeshift/issues/302)) ([eaf0046](https://github.com/nodeshift/nodeshift/commit/eaf0046)), closes [#301](https://github.com/nodeshift/nodeshift/issues/301)
* when the projectLocation flag is used and no file property in the package.json, use the correct location ([58e340a](https://github.com/nodeshift/nodeshift/commit/58e340a)), closes [#303](https://github.com/nodeshift/nodeshift/issues/303)


### Features

* BREAKING CHANGE: remove the nodeVersion flag. ([#298](https://github.com/nodeshift/nodeshift/issues/298)) ([1c104ff](https://github.com/nodeshift/nodeshift/commit/1c104ff)), closes [#281](https://github.com/nodeshift/nodeshift/issues/281)
* Remove Watch command ([#296](https://github.com/nodeshift/nodeshift/issues/296)) ([fa79166](https://github.com/nodeshift/nodeshift/commit/fa79166)), closes [#280](https://github.com/nodeshift/nodeshift/issues/280)
* Update to latest Openshift Rest Client ([#293](https://github.com/nodeshift/nodeshift/issues/293)) ([e73db9c](https://github.com/nodeshift/nodeshift/commit/e73db9c))


### BREAKING CHANGES

* Slight Refactor

* Updating the Openshift Rest Client to 2.1.0, which has a new API

* Removing strictSSL and tryServiceAccount flags since the updated openshift rest client doesn't need them.

* Removes the openshift config loader, which is no longer used
* remove the string option for namespace creation.  This has been deprecated and it is now time to remove it
* This removes the watch command

This feature was just wrapping the `oc rsync` command, which nodeshift probably shouldn't be doing.  It is better to just use that command instead



<a name="2.1.1"></a>
## [2.1.1](https://github.com/nodeshift/nodeshift/compare/v2.1.0...v2.1.1) (2019-02-04)


### Bug Fixes

* namespace.name spelling/parsing error ([#283](https://github.com/nodeshift/nodeshift/issues/283)) ([afb2a64](https://github.com/nodeshift/nodeshift/commit/afb2a64))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/nodeshift/nodeshift/compare/v2.0.1...v2.1.0) (2019-02-01)


### Bug Fixes

* add the --no-perm=true option to the oc rsync command ([#277](https://github.com/nodeshift/nodeshift/issues/277)) ([b4695c6](https://github.com/nodeshift/nodeshift/commit/b4695c6)), closes [#274](https://github.com/nodeshift/nodeshift/issues/274)


### Features

* Create a namespace/project if one doesn't exist when using the --namespace flag ([#275](https://github.com/nodeshift/nodeshift/issues/275)) ([202d71b](https://github.com/nodeshift/nodeshift/commit/202d71b)), closes [#235](https://github.com/nodeshift/nodeshift/issues/235)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/nodeshift/nodeshift/compare/v2.0.0...v2.0.1) (2018-12-12)


### Bug Fixes

* deployment enricher should also look for DeploymentConfig kind ([6a2c162](https://github.com/nodeshift/nodeshift/commit/6a2c162)), closes [#271](https://github.com/nodeshift/nodeshift/issues/271)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/nodeshift/nodeshift/compare/v1.12.0...v2.0.0) (2018-11-07)


### Features

* update references of bucharest-gold to use the nodeshift namespace ([#269](https://github.com/nodeshift/nodeshift/issues/269)) ([6092108](https://github.com/nodeshift/nodeshift/commit/6092108)), closes [#268](https://github.com/nodeshift/nodeshift/issues/268)


### BREAKING CHANGES

* this now uses the nodeshift/centos7-s2i-nodejs image by default. This should be a semver major change.



<a name="1.12.0"></a>
# [1.12.0](https://github.com/nodeshift/nodeshift/compare/v1.11.0...v1.12.0) (2018-08-15)


### Features

* add the imageTag flag. ([#258](https://github.com/nodeshift/nodeshift/issues/258)) ([399081e](https://github.com/nodeshift/nodeshift/commit/399081e)), closes [#256](https://github.com/nodeshift/nodeshift/issues/256)



<a name="1.11.0"></a>
# [1.11.0](https://github.com/nodeshift/nodeshift/compare/v1.10.0...v1.11.0) (2018-07-24)


### Features

* create/update/remove a config map if there is one in the .nodeshift directory. ([#255](https://github.com/nodeshift/nodeshift/issues/255)) ([f6f96c7](https://github.com/nodeshift/nodeshift/commit/f6f96c7)), closes [#203](https://github.com/nodeshift/nodeshift/issues/203)



<a name="1.10.0"></a>
# [1.10.0](https://github.com/nodeshift/nodeshift/compare/v1.9.1...v1.10.0) (2018-07-19)


### Features

* add a flag, --build.incremental, that turns on incremental builds. ([#254](https://github.com/nodeshift/nodeshift/issues/254)) ([68be3dc](https://github.com/nodeshift/nodeshift/commit/68be3dc)), closes [#253](https://github.com/nodeshift/nodeshift/issues/253)



<a name="1.9.1"></a>
## [1.9.1](https://github.com/nodeshift/nodeshift/compare/v1.9.0...v1.9.1) (2018-07-03)


### Bug Fixes

* **health-check enricher:** don't fail if there is no dependencies prop in the package.json ([#250](https://github.com/nodeshift/nodeshift/issues/250)) ([96789c1](https://github.com/nodeshift/nodeshift/commit/96789c1)), closes [#249](https://github.com/nodeshift/nodeshift/issues/249)



<a name="1.9.0"></a>
# [1.9.0](https://github.com/nodeshift/nodeshift/compare/v1.8.1...v1.9.0) (2018-06-07)


### Bug Fixes

* travis-ci should use npm install instead of npm ci ([#242](https://github.com/nodeshift/nodeshift/issues/242)) ([938ec7d](https://github.com/nodeshift/nodeshift/commit/938ec7d))


### Features

* add the namespace flag ([#234](https://github.com/nodeshift/nodeshift/issues/234)) ([13e5316](https://github.com/nodeshift/nodeshift/commit/13e5316)), closes [#233](https://github.com/nodeshift/nodeshift/issues/233)
* **ingress:** create an Ingress if there is one in the .nodeshift directory ([#244](https://github.com/nodeshift/nodeshift/issues/244)) ([f98cad4](https://github.com/nodeshift/nodeshift/commit/f98cad4)), closes [#238](https://github.com/nodeshift/nodeshift/issues/238)



<a name="1.8.1"></a>
## [1.8.1](https://github.com/nodeshift/nodeshift/compare/v1.8.0...v1.8.1) (2018-05-25)


### Bug Fixes

* **README:** remove the section talking about default environment variables being added to the DeploymentConfig ([14cfb74](https://github.com/nodeshift/nodeshift/commit/14cfb74)), closes [#231](https://github.com/nodeshift/nodeshift/issues/231)



<a name="1.8.0"></a>
# [1.8.0](https://github.com/nodeshift/nodeshift/compare/v1.7.3...v1.8.0) (2018-05-25)


### Features

* add the --deploy.env flag ([#226](https://github.com/nodeshift/nodeshift/issues/226)) ([74c482c](https://github.com/nodeshift/nodeshift/commit/74c482c)), closes [#223](https://github.com/nodeshift/nodeshift/issues/223)



<a name="1.7.3"></a>
## [1.7.3](https://github.com/nodeshift/nodeshift/compare/v1.7.2...v1.7.3) (2018-05-21)


### Bug Fixes

* **package:** update request to version 2.87.0 ([#224](https://github.com/nodeshift/nodeshift/issues/224)) ([2af9b47](https://github.com/nodeshift/nodeshift/commit/2af9b47))



<a name="1.7.2"></a>
## [1.7.2](https://github.com/nodeshift/nodeshift/compare/v1.7.1...v1.7.2) (2018-05-14)


### Bug Fixes

* add a name (http) to the service port ([#218](https://github.com/nodeshift/nodeshift/issues/218)) ([c599dc0](https://github.com/nodeshift/nodeshift/commit/c599dc0))
* remove the hardcoded 8080 for ports. ([bd3f10b](https://github.com/nodeshift/nodeshift/commit/bd3f10b)), closes [#216](https://github.com/nodeshift/nodeshift/issues/216)
* update openshift-rest-client and request for security vulnerability.  https://nodesecurity.io/advisories/606 ([#220](https://github.com/nodeshift/nodeshift/issues/220)) ([95cf4c9](https://github.com/nodeshift/nodeshift/commit/95cf4c9))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/nodeshift/nodeshift/compare/v1.7.0...v1.7.1) (2018-04-10)


### Bug Fixes

* **config:** add package name sanitisation ([#212](https://github.com/nodeshift/nodeshift/issues/212)) ([1c18b2a](https://github.com/nodeshift/nodeshift/commit/1c18b2a)), closes [#211](https://github.com/nodeshift/nodeshift/issues/211)



<a name="1.7.0"></a>
# [1.7.0](https://github.com/nodeshift/nodeshift/compare/v1.6.0...v1.7.0) (2018-04-02)


### Features

* **build.env:** add a --build.env flag to specify build config environment variables ([0a43536](https://github.com/nodeshift/nodeshift/commit/0a43536)), closes [#208](https://github.com/nodeshift/nodeshift/issues/208)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/nodeshift/nodeshift/compare/v1.5.1...v1.6.0) (2018-03-22)


### Features

* Add an `--expose` flag which when true will create a default route and expose the default service ([6e06ec6](https://github.com/nodeshift/nodeshift/commit/6e06ec6))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/nodeshift/nodeshift/compare/v1.5.0...v1.5.1) (2018-03-15)


### Bug Fixes

* **archiver:** fix for source archiver when no files property is found in the package.json ([3c856e8](https://github.com/nodeshift/nodeshift/commit/3c856e8)), closes [#200](https://github.com/nodeshift/nodeshift/issues/200)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/nodeshift/nodeshift/compare/v1.4.1...v1.5.0) (2018-03-12)


### Features

* **config-loader:** expose the configLocation options for the openshift-config-loader. ([#198](https://github.com/nodeshift/nodeshift/issues/198)) ([7462ead](https://github.com/nodeshift/nodeshift/commit/7462ead)), closes [#197](https://github.com/nodeshift/nodeshift/issues/197)



<a name="1.4.1"></a>
## [1.4.1](https://github.com/nodeshift/nodeshift/compare/v1.4.0...v1.4.1) (2018-03-02)


### Bug Fixes

* **nodeshift:** No longer check and emit a warning for non-standard Node versions. ([fa0c44e](https://github.com/nodeshift/nodeshift/commit/fa0c44e)), closes [#194](https://github.com/nodeshift/nodeshift/issues/194)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/nodeshift/nodeshift/compare/v1.3.3...v1.4.0) (2018-02-21)


### Features

* undeploy: Add an option that, when true, will also remove builds, buildConfigs and Imagestreams ([#190](https://github.com/nodeshift/nodeshift/issues/190))([aebb5a1](https://github.com/nodeshift/nodeshift/commit/aebb5a1626f861e0143807d133ce8dc5b3ab767a))


<a name="1.3.3"></a>
## [1.3.3](https://github.com/nodeshift/nodeshift/compare/v1.3.2...v1.3.3) (2018-02-19)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/nodeshift/nodeshift/compare/v1.3.1...v1.3.2) (2018-02-13)


### Bug Fixes

* projectLocation should be set correctly. ([#189](https://github.com/nodeshift/nodeshift/issues/189)) ([4e061a9](https://github.com/nodeshift/nodeshift/commit/4e061a9)), closes [#188](https://github.com/nodeshift/nodeshift/issues/188)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/nodeshift/nodeshift/compare/v1.3.0...v1.3.1) (2018-02-12)


### Bug Fixes

* **nodeshift-config:** allow config properties to overwritten with new rest client update ([#187](https://github.com/nodeshift/nodeshift/issues/187)) ([9587efb](https://github.com/nodeshift/nodeshift/commit/9587efb))

* **route-spec** update route spec definition to not overwrite the spec:to:name property if one is specified. ([#185](https://github.com/nodeshift/nodeshift/pull/185)) fixes [#184](https://github.com/nodeshift/nodeshift/issues/184)



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
