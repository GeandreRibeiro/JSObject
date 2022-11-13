class Produto
{
    constructor() {

        this.id = 0;
        this.nome = "";
        this.valor = 0;

    }

    adicionar(){
        alert('Vamos adicionar um produto!');
    }

    excluir(){
        alert("Item deletado");
    }

    alterar(){
        alert("Item alterado");
    }


}

var produto = new Produto();
