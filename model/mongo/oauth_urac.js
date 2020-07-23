'use strict';

/**
 * @license
 * Copyright SOAJS All Rights Reserved.
 *
 * Use of this source code is governed by an Apache license that can be
 * found in the LICENSE file at the root of this repository
 */

const colName = 'oauth_urac';
const core = require('soajs');
const Mongo = core.mongo;

let indexing = {};

function Oauth_urac(service, options, mongoCore) {
  let __self = this;

  if (mongoCore) {
    __self.mongoCore = mongoCore;
  }
  if (!__self.mongoCore) {
    if (options && options.dbConfig) {
      console.log('options.dbConfig');
      console.log(JSON.stringify(options.dbConfig));
      __self.mongoCore = new Mongo(options.dbConfig);
    } else {
      let registry = service.registry.get();
      console.log('registry.coreDB.provision');
      console.log(JSON.stringify(registry.coreDB.provision));
      __self.mongoCore = new Mongo(registry.coreDB.provision);
    }

    let index = 'default';
    if (options && options.index) {
      index = options.index;
    }
    if (indexing && !indexing[index]) {
      indexing[index] = true;

      service.log.debug('Oauth: Indexes for ' + index + ' Updated!');
    }
  }
}

Oauth_urac.prototype.getUser = function (data, cb) {
  let __self = this;

  if (!data || !data.username) {
    let error = new Error('(username is required.');
    return cb(error, null);
  }

  let condition = {
    userId: data.username,
  };

  __self.mongoCore.findOne(colName, condition, null, null, (err, record) => {
    return cb(err, record);
  });
};

Oauth_urac.prototype.validateId = function (id, cb) {
  let __self = this;

  if (!id) {
    let error = new Error('id is required.');
    return cb(error, null);
  }

  try {
    id = __self.mongoCore.ObjectId(id);
    return cb(null, id);
  } catch (e) {
    return cb(e, null);
  }
};

Oauth_urac.prototype.closeConnection = function () {
  let __self = this;
  __self.mongoCore.closeDb();
  __self.mongoCore.closeDb();
};

module.exports = Oauth_urac;
