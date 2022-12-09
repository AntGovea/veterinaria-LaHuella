"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSACTIONMYSQL = void 0;
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class TRANSACTIONMYSQL {
    constructor() {
        this.startTransaction = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `START TRANSACTION;`;
                let respuesta = yield execute.query(querySQL);
                return respuesta.validacion;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.rollBackTransaction = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `ROLLBACK;`;
                let respuesta = yield execute.query(querySQL);
                return respuesta.validacion;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.commit = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `COMMIT;`;
                let respuesta = yield execute.query(querySQL);
                return respuesta.validacion;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.TRANSACTIONMYSQL = TRANSACTIONMYSQL;
//# sourceMappingURL=StartTransaction.js.map