/** This file's purpose is to share the same expressApp instance across the entire
 *  solution, so that there is easier to share the same app object instance between files
 */

var express = require('express');
var app = express();

module.exports = app;