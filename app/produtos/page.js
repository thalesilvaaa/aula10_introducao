import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos() {
    return ( 

        <div>
            <Menu/>

            <h1>Produtos</h1>
            <p>Bem-vindo a pagina de produtos</p>

            <hr/>

            
            
            <Produto nome="Maça" preco="5" desconto="10" disponivel={true}/>
            <Produto nome="Pera" preco="15"/>
            <Produto nome="Uva" preco="10" desconto="10"/>



            
        
            

            
           




        </div>

        


     );
}

export default Produtos;