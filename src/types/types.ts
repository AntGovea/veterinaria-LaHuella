import { Interface } from "readline";

export interface respuestaConexion{
    validacion:boolean,
    descripcion:string,
    data:[]
}


export interface responseServer{
    code:number,
    description:string,
    data:[]
}




export const HttpCodes={
    aceptacion:200,
    error:500,
    conflicto:409,
}


export const descriptions={
    aceptacion:'Consulta exitosa',
    error:'Error al ejecutar proceso',
    conflicto:'Conflicto en el proceso',


}




















