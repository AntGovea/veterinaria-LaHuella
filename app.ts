// import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Server from './src/models/Server';
dotenv.config()

dotenv.config();

const server= new Server();


server.listen();