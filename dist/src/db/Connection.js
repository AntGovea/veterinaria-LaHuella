"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const config_1 = require("../config");
var mysql = require('mysql2');
exports.pool = mysql.createPool({
    connectionLimit: 10,
    host: config_1.DB_HOST,
    user: config_1.DB_USER,
    port: config_1.DB_PORT,
    password: config_1.DB_PASSWORD,
    database: config_1.DB_NAME,
});
//# sourceMappingURL=Connection.js.map