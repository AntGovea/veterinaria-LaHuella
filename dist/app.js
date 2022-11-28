"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Express, Request, Response } from 'express';
const dotenv_1 = __importDefault(require("dotenv"));
const Server_1 = __importDefault(require("./src/models/Server"));
dotenv_1.default.config();
dotenv_1.default.config();
const server = new Server_1.default();
server.listen();
//# sourceMappingURL=app.js.map