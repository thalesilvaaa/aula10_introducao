'use client'

import "./Quiz.css"


import { useState } from "react";

function Quiz2() {

    const [p1,alteraP1] = useState(0)
    const [p2,alteraP2] = useState(0)
    const [p3,alteraP3] = useState(0)
    const [p4,alteraP4] = useState("")
    const [total,alteratotal] = useState(0) 


    const [mostraP1, alteramostraP1] = useState(true)
    const [mostraP2, alteramostraP2] = useState(false)




    const [selecionado, alteraselecionado] = useState(["","","",""])
    


    function calculaPontos(){

        let totalAtualizado= 0
        
        if(p4 == "Toy Story"){
            alteratotal(p1+p2+p3+1)
            alteratotal(totalAtualizado)
        }else{
            alteratotal(p1+p2+p3)
            alteratotal(totalAtualizado)
        }


        localStorage.setItem("total",totalAtualizado)

    }
    

    


    




    return (  
        

        <div>
            <h1>Quiz Conradito</h1>
            <p>Assina-le a opcao correta</p>

            <hr/>
            {

                mostraP2 == true &&
                <div>
                    <h2>Qual a cor do cavalo branco de Napoleao</h2>
                    <label><input name="p1" type="radio" onChange={()=>{alteraP1(1);alteramostraP2(true);alteramostraP1(false)} }/> Preto</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={()=>{alteraP1(0);alteramostraP2(true);alteramostraP1(false)} }/> Azul</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={()=>{alteraP1(0);alteramostraP2(true);alteramostraP1(false)} }/> Branco</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={()=>{alteraP1(0);alteramostraP2(true);alteramostraP1(false)} }/> Transparente</label>
                </div>
            
            }

            <hr/>

            <hr/>


            {
                mostraP1 == true &&
                <div>

                    
                                <h2>Qual a melhor letra</h2>
                                <label><input name="p2" type="radio" onChange={()=>{alteraP1(0)} }/> A</label>
                                <br/>
                                <label><input name="p2" type="radio" onChange={()=> alteraP2(0)}/> B</label>
                                <br/>
                                <label><input name="p2" type="radio" onChange={()=> alteraP2(0)}/> C</label>
                                <br/>
                                <label><input name="p2" type="radio" onChange={()=> alteraP2(1)}/> T</label>
                                <hr/>

                </div>
               


            }

           <button onClick={()=> calculaPontos()}>Enviar resposta</button>
            <p>total de pontos: {total}</p>            




            
        

        </div>

        

    );
}

export default Quiz2;