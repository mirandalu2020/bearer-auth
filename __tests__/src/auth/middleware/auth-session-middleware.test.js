'use strict';

const bearer = require('../../../../src/auth/middleware/bearer.js');
const { db, users } = require('../../../../src/auth/models/index.js');
const jwt = require('jsonwebtoken');

let userInfo = {
  admin: { username: 'admin', password: 'password' },
};

// Pre-load our database with fake users
beforeAll(async () => {
  await db.sync();
  await users.create(userInfo.admin);
});
afterAll(async () => {
  await db.drop();
});

xdescribe('testing if session token expires', () => {

    it('fails a login for a user (admin) with an expired token', () => {
      req.headers = {
        authorization: 'Bearer thisisabadtoken',
        date: Date.now()
      };

      return bearer(req, res, next)
        .then(() => {
          expect(next).not.toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(403);
        });

    });
  })
