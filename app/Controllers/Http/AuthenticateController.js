'use strict'

class AuthenticateController {
    /**
     * 
     * @param {*} param0 
     */
    async getRegisterPage ({ view }) {
      
        return view.render('register')
    }
    /**
     * 
     * @param {*} param0 
     */
    async getLoginPage ({ view }) {
      
        return view.render('login')
    }
}

module.exports = AuthenticateController
