function Produto(attr) {



    return ( 
        <div style={{margin: 10, border:"3px solid red",width:100,padding:10}}>
        <h2>{attr.nome}</h2>
        {
            attr.desconto != null &&
                    <p><strong> {attr.desconto}% OFF</strong></p>

        }
        
        <p>{attr.preco}</p>
        
        {
            attr.disponivel == true ?
                    <button>comprar</button>
            :
             
            <p><strong>indisponivel</strong></p>
        }
        
        <p>{attr.preco}</p>

       
        </div>
     



     );




}

export default Produto;