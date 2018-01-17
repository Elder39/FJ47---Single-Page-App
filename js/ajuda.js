(function () {

    /* Botao de ajuda */

    $('#ajuda').click(function () {
        $.getJSON('https://ceep.herokuapp.com/cartoes/instrucoes', function (res) {
            res.instrucoes.forEach(cartao => {
                cartaoController.adicionaCartao(cartao.conteudo, cartao.cor);
            });
        });
        $('#ajuda').attr('disabled', 'true');
    });

})();