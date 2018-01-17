(function (ctr) {
    'use strict';
    /* Botao Sync */
    const usuario = 'brun_dutra@hotmail.com';
    $('#sync').click(function () {

        $('#sync').removeClass('botaoSync--sincronizado');
        $('#sync').addClass('botaoSync--esperando');

        let cartoes = [];

        $('.cartao').each(function () {

            let cartao = {};
            cartao.conteudo = $(this).find('.cartao-conteudo').html();
            cartoes.push(cartao);
        });

        //cartoes.reverse();
        const mural = { usuario, cartoes };

        $.ajax({
            url: 'https://ceep.herokuapp.com/cartoes/salvar',
            method: 'POST',
            data: mural,
            success: function (res) {
                $('#sync').addClass('botaoSync--sincronizado');
                console.log(res.quantidade + ' cartoes salvos em ' + res.usuario);
            },
            error: function () {
                $('#sync').addClass('botaoSync--deuRuim');
                console.log('Nao foi possivel salvar o mural');
            },
            complete: function () {
                $('#sync').removeClass('botaoSync--esperando');
            }
        });
    });

    /* Carregar cartoes ao iniciar */

    $.getJSON('https://ceep.herokuapp.com/cartoes/carregar?callback=?', { usuario }, function (res) {
        res.cartoes.reverse().forEach(function (cartao) {
            ctr.adicionaCartao(cartao.conteudo, '');
        });
    }
    );

})(cartaoController);