# soajs.oauth
[![Build Status](https://travis-ci.org/soajs/soajs.oauth.svg?branch=master)](https://travis-ci.org/soajs/soajs.oauth)
[![Coverage Status](https://coveralls.io/repos/soajs/soajs.oauth/badge.png)](https://coveralls.io/r/soajs/soajs.oauth)
[![Known Vulnerabilities](https://snyk.io/test/github/soajs/soajs.oauth/badge.svg)](https://snyk.io/test/github/soajs/soajs.oauth)

SOAJS oAuth is a service that integrates with [oAuth 2.0](http://www.oauth.org).
The service simply validates, refreshes and kills access tokens generated via oAuth 2.0.

SOAJS oAuth is used to protect other services from public access.
Protected services are only accessible if the access_token generated by oAuth is provided as a parameter.

### Environment variables

ENV Variable | Description | Default | Example
--- | ----- | :---: | ---
SOAJS_SERVICE_MODEL | The model | mongo | other models can be implemented aka oracle, postgresql


### Complete Documentation
More information is available on SOAJS website under the section for [oAuth](https://soajsorg.atlassian.net/wiki/spaces/OAUT).

### License
*Copyright SOAJS All Rights Reserved.*

Use of this source code is governed by an Apache license that can be found in the LICENSE file at the root of this repository.
