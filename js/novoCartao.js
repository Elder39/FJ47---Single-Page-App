(function () {

    /* Formulário Novo Cartao */

    $('.novoCartao').submit(function (event) {

        event.preventDefault();

        const campoTexto = $('.novoCartao-conteudo');
        const texto = campoTexto.val().trim().replace(/\n/g, '<br>');
        const cor = '';

        adicionaCartao(texto, cor);

        campoTexto.val('');
        campoTexto.focus();

    });

})();