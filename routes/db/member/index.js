'use strict';

////////////////////////////////////////////////////////////
///// Router Entry Point for all Member related Routes /////
////////////////////////////////////////////////////////////

const registerMember      = require('express').Router()
const getMemberProfile    = require('express').Router()
const { verifyJWTToken }  = require('../../../utils/auth/verifyJwtToken')

require('./register')(registerMember)
require('./getProfile')(getMemberProfile)

const member = (router) => {
  // Enforce authentication on all /member related routes
  router.use(verifyJWTToken)

  /** @method POST */
  // api/db/member/register
  router.use('/register', registerMember)

  /** @method GET */
  // api/db/member/profile/network/:clientId
  router.use('/profile/network', getMemberProfile)
}

module.exports = member