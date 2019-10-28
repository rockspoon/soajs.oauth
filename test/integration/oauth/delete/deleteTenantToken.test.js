

"use strict";
const assert = require('assert');
const requester = require('../../requester');
let core = require('soajs').core;
let validator = new core.validator.Validator();
let deleteTenantTokensSchema = require('../schemas/deleteTenantTokens');

describe("Testing delete tenant tokens API", () => {
	before(function (done) {
		done();
	});
	
	afterEach((done) => {
		console.log("=======================================");
		done();
	});
	
	it('Fails - tenant tokens not found', (done) => {
		let params = {
			qs:{
				access_token: '2179a61307af23e481ea60684086409a66755ecd'
			}
		};
		requester('/tokens/tenant/notFound', 'delete', params, (error, body) => {
			assert.ifError(error);
			assert.ok(body);
			assert.deepEqual(body.data, {ok: 1, n: 0});
			let check = validator.validate(body, deleteTenantTokensSchema);
			assert.deepEqual(check.valid, true);
			assert.deepEqual(check.errors, []);
			done();
		});
	});
	
	it('Success - tenant found and tokens deleted', (done) => {
		let params = {
			qs:{
				access_token: '2179a61307af23e481ea60684086409a66755ecd'
			}
		};
		
		let clientId = '5c0e74ba9acc3c5a84a51259';
		
		requester('/tokens/tenant/' + clientId, 'delete', params, (error, body) => {
			assert.ifError(error);
			assert.ok(body);
			let check = validator.validate(body, deleteTenantTokensSchema);
			assert.deepEqual(check.valid, true);
			assert.deepEqual(check.errors, []);
			done();
		});
	});
});




