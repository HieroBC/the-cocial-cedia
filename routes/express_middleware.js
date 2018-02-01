
/** This files purpose is to organize all get and post routes individually
 *  and group them together to have one require inside the app.js file
 *  and all the proxied requires for each individual route file will go here.
 */

module.exports = [
    //get
     require('./get/search')
    ,require('./get/index')
    ,require('./get/home')
    ,require('./get/options')

    //post
    ,require('./post/createaccount')
    ,require('./post/login')
]
