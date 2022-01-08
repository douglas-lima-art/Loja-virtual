
function comprar(){ /*  função comprar sendo chamada pelo botão comprar.   */
    var cartao = document.getElementById('cartaocredito') /*   objeto com id cartaocredito do input para inserção do numero de cartao de credito sendo atribuida a variavel cartao  */
    var cpf = document.getElementById('CPF') /*  objeto com id CPF para inserção do cpf do titular do cartão de credito sendo atribuida a variavel cpf   */
    var cod = document.getElementById('CVV') /*   objeto com id CVV para inserção do codigo de segurança do cartao sendo atribuido a variavel cod  */
    var datacart = document.getElementById('data') /*  objeto com id data para inserção da data de validade do cartao sendo atribuido a variavel datacart   */
    var msg = document.getElementById('res') /*   objeto com id res, utilizado para saida da mensagem na tela, sendo atrivuida a variavel msg  */

    if(cartao.value.length === 0 || cpf.value.length === 0 || cod.value.length === 0 || datacart.value.length === 0 ) {
        window.alert('Verifique os dados e tente novamente !! ') /*  testanto a condição if, se algum dos campos dos dados estiver vazio, sera exibida uma mensagem de erro na tela, se forem preenchidos sera exibido uma mensagem de sucesso.   */
    } else {
        msg.innerHTML = ` Compra Efetuada com sucesso !!  ` /*  mensagem de sucesso exibida na tela, apos a validação dos dados.     */
    }
}

