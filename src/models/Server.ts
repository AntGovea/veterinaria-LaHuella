import express, { Application, Request,Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import rolRoutes from "../routes/routesRoles";
import path from "path";

dotenv.config();

class Server {
  private app: Application;
  private port: string;

  private apiPaths = {
    roles: "roles",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    //definimos las rutas
    this.middlewares();
    this.routes();
  }

  routes() {
    
    // this.app.use(`/`, (req:Request,res:Response)=>{
      
    //   res.send('../public/index.js')
    // });
    this.app.use(`${process.env.BASEURL}/${this.apiPaths.roles}`, rolRoutes);
  }

  middlewares() {
    //cors
    this.app.use(cors());
    //json
    this.app.use(express.json());
    //morgan
    this.app.use(morgan("dev"));
    //carpeta publica
    this.app.use( express.static('public'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
