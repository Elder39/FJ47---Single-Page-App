(function (ctr) {
    'use strict';
    
    /* Formulário Novo Cartao */

    $('.novoCartao').submit(function (event) {

        event.preventDefault();

        const campoTexto = $('.novoCartao-conteudo');
        const texto = campoTexto.val().trim().replace(/\n/g, '<br>');
        const cor = '';

        ctr.adicionaCartao(texto, cor);

        campoTexto.val('');
        campoTexto.focus();

    });

})(cartaoController);