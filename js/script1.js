class Produto
{
    constructor() {

       this.id = 1;
        this.arrayProdutos = [];
        this.editid = null;
    }

    salvar(){
        let produto = this.lerDados();

        if(this.validarCampos(produto)){
            if(this.editid == null){
                this.adicionar(produto);
            }
            else{
                this.alterar(this.editid)
            }
            

        }

        this.cancelar();

        this.listarTabela();
    }

    adicionar(produto){
        produto.valor = parseFloat(produto.valor);
        this.arrayProdutos.push(produto);
        this.id ++;
    }

    listarTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acaoes = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;
            td_acaoes.innerText = '';

            td_acaoes.classList.add('center');

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute('onclick', `produto.preparaEdicao(${JSON.stringify(this.arrayProdutos[i])})`);
            
            let imgExclui = document.createElement('img');
            imgExclui.src = 'img/botao-apagar.png';
            imgExclui.setAttribute('onclick', `produto.deletar(${this.arrayProdutos[i].id})`);

            td_acaoes.appendChild(imgEdit);
            td_acaoes.appendChild(imgExclui);
            

        }

    }

    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
    }

    lerDados(){

        try {
            
            let produto = {};

            produto.id = this.id;
            produto.nomeProduto = document.getElementById('produto').value;

            produto.valor = document.getElementById('valor').value;

            return produto;

        } catch (error) {
            
        }


    }

    alterar(id){
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = document.getElementById('produto').value;
                this.arrayProdutos[i].valor = document.getElementById('valor').value;
            }
            
           
            this.listarTabela();
            document.getElementById('btnConfirma').innerText = 'Salvar';
            this.editid = null;
        }
    }

    preparaEdicao(dados){

        this.editid = dados.id;
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('valor').value = dados.valor;

        document.getElementById('btnConfirma').innerText = 'Atualizar';

    }


    validarCampos(produto){
        let msg = '';
        
        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto. \n';
        }

        if(produto.valor ==''){
            msg += 'Informe o valor para o produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    deletar(id){

        if(confirm(`Deseja realmente deletar o produto id ${id}`)){
            let tbody = document.getElementById("tbody");
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                
                if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
                
            }
        }
    }

}

var produto = new Produto();
