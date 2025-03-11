'use client'
import "./Quiz.css"


import { useState } from "react";

function Quiz() {

    const [p1,alteraP1] = useState(0)
    const [p2,alteraP2] = useState(0)
    const [p3,alteraP3] = useState(0)
    const [p4,alteraP4] = useState("")
    const [total,alteratotal] = useState(0) 

    const [selecionado, alteraselecionado] = useState(["","","",""])
    


    function calculaPontos(){
        
        if(p4 == "Toy Story"){
            alteratotal(p1+p2+p3+1)
        }else{
            alteratotal(p1+p2+p3)
        }

    }
    

    


    




    return (  
        

        <div>
            <h1>Quiz Conradito</h1>
            <p>Assina-le a opcao correta</p>

            <hr/>

            <h2>Qual a cor do cavalo branco de Napoleao</h2>
            <label><input name="p1" type="radio" onChange={()=> alteraP1(0)}/> Preto</label>
            <br/>
            <label><input name="p1" type="radio" onChange={()=> alteraP1(0)}/> Azul</label>
            <br/>
            <label><input name="p1" type="radio" onChange={()=> alteraP1(0)}/> Branco</label>
            <br/>
            <label><input name="p1" type="radio" onChange={()=> alteraP1(1)}/> Transparente</label>
            <hr/>

            <hr/>

            <h2>Qual a melhor letra</h2>
            <label><input name="p2" type="radio" onChange={()=> alteraP2(0)}/> A</label>
            <br/>
            <label><input name="p2" type="radio" onChange={()=> alteraP2(0)}/> B</label>
            <br/>
            <label><input name="p2" type="radio" onChange={()=> alteraP2(0)}/> C</label>
            <br/>
            <label><input name="p2" type="radio" onChange={()=> alteraP2(1)}/> T</label>
            <hr/>

            <h2>Quanto é dos + 2?</h2>
            
                <p className={selecionado[0]} onClick={()=> {alteraP3(1); alteraselecionado(["selecionado","","",""])}}>2</p>
                <p className={selecionado[1]} onClick={()=> {alteraP3(0); alteraselecionado(["","selecionado","",""])}}>0</p>
                <p className={selecionado[2]} onClick={()=> {alteraP3(0); alteraselecionado(["","","selecionado",""])}}>aaaaaa</p>
                <p className={selecionado[3]} onClick={()=> {alteraP3(0); alteraselecionado(["","","","selecionado"])}}>sim</p>
                
          

           <h2>Qual o melhor anime do mundo</h2>

           
           <input onChange={(e)=> alteraP4(e.target.value)}>
           </input>


           <hr/>
        

            <button onClick={()=> calculaPontos()} >Enviar respostas</button>
            <p>Total de Pontos: {total} </p>


            




            
        

        </div>

        

    );
}

export default Quiz;