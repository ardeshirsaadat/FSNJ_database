"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, Database = _a.Database, Username = _a.Username, Port = _a.Port, PostgresHost = _a.PostgresHost, Database_test = _a.Database_test, ENV = _a.ENV;
var client;
console.log(ENV);
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: PostgresHost,
        database: Database,
        user: Username,
        port: Number(Port)
    });
}
if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: PostgresHost,
        database: Database_test,
        user: Username,
        port: Number(Port)
    });
}
exports["default"] = client;
