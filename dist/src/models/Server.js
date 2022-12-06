"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routesRoles_1 = __importDefault(require("../routes/routesRoles"));
const routesUsuarios_1 = __importDefault(require("../routes/routesUsuarios"));
const routerClientes_1 = __importDefault(require("../routes/routerClientes"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.apiPaths = {
            roles: "roles",
            usuarios: "usuarios",
            clientes: "clientes",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        //definimos las rutas
        this.middlewares();
        this.routes();
    }
    routes() {
        // this.app.use(`/`, (req:Request,res:Response)=>{
        //   res.send('../public/index.js')
        // });
        this.app.use(`${process.env.BASEURL}/${this.apiPaths.roles}`, routesRoles_1.default);
        this.app.use(`${process.env.BASEURL}/${this.apiPaths.usuarios}`, routesUsuarios_1.default);
        this.app.use(`${process.env.BASEURL}/${this.apiPaths.usuarios}`, routerClientes_1.default);
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //json
        this.app.use(express_1.default.json());
        //morgan
        this.app.use((0, morgan_1.default)("dev"));
        //carpeta publica
        this.app.use(express_1.default.static("public"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map