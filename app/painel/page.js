'use client'
import "./painel.css"
import { useState } from "react";



function Painel() {
    const [usuario,alterausuario] = useState("")
    const [senha,alterasenha] = useState("")

    const [mostraErro, alteramostraErro] = useState(false)
    const [mostraAcerto, alteramostraAcerto] = useState(false)
     
    function validarUsuario(){
        if(usuario=="thales" && senha=="123"){
            alteramostraAcerto(true)
            alteramostraErro(false)
        }else if (usuario=="" && senha==""){
            alteramostraErro(false)
            alteramostraAcerto(false)
        }else  {
            alteramostraAcerto(false)
            alteramostraErro(true)
        }
        
        
    }



    return (  
        <div>
                <h1>Painel administrativo</h1>

                <label>
                    Digite Usuario
                    <input onChange={(e)=> alterausuario(e.target.value)}/>

                </label>
                <br/>

                <label>
                    Digite a Senha:
                    <input onChange={(e)=> alterasenha(e.target.value)}/>
 
                </label>
                <br/>

                <button onClick={()=> validarUsuario()}>Entrar</button>
                {/* Operador Ternario */}

                {
                    mostraErro==true?
                        <div className="erro">
                            <p>Usuario ou senha errado</p>
                        </div>
                    : 
                        <div></div>
                }
                {
                    mostraAcerto==true?
                        <div className="acerto">
                            <p>Usuario certo</p>
                        </div>
                    : 
                        <div></div>
                }
                        
                
                
                

        </div>
    );
}

export default Painel ;