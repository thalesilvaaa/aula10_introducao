'use client'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Não se esqueça de importar o CSS necessário

export default function Contato() { 
    const [nome, alteraNome] = useState(""); // Estado para armazenar o nome
    const [mensagem, alteraMensagem] = useState(""); // Estado para armazenar a mensagem
    const erro = () => toast.error("Erro!");
    const sucesso = () => toast.success("Deu!"); //teste1234


    function enviaMensagem(e) {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário

        // Verifica se os campos estão vazios
        if (nome === "" || mensagem === "") {
            erro()
        } else {
            sucesso()
        }
    }

    return (
        <div>
            <h1>Página de Contato</h1>
            <p>Entre em contato conosco</p>
            <hr />

            <form onSubmit={enviaMensagem}> {/* O onSubmit agora chama a função enviaMensagem ao enviar o formulário */}
                <label>
                    Digite seu nome:
                    <input 
                        type="text" 
                        value={nome} // O valor do input é controlado pelo estado `nome`
                        onChange={(e) => alteraNome(e.target.value)} // Altera o estado `nome` conforme o usuário digita
                    />
                </label>
                <br />

                <label>
                    Digite sua mensagem:
                    <input 
                        type="text" 
                        value={mensagem} // O valor do input é controlado pelo estado `mensagem`
                        onChange={(e) => alteraMensagem(e.target.value)} // Altera o estado `mensagem` conforme o usuário digita
                    />
                </label>

                <br />
                
                <button type="submit">Enviar!</button> {/* O botão agora tem `type="submit"` para enviar o formulário */}
            </form>

            <ToastContainer /> {/* Componente que exibe as notificações */}
        </div>
    );
}
