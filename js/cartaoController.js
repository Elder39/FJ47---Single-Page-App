const cartaoController = (function () {
    //'use strict';

    let contador = $('.cartao').length;

    /* Remove um cartao ao clique do botao */

    function removeCartao() {
        /* Template String */
        const cartao = document.querySelector(`#cartao_${this.dataset.ref}`);
        cartao.classList.add('cartao--some');
        /* Arrow Function */
        setTimeout(() => {
            cartao.remove();
            $(document).trigger('precisoSincronizar');
        }, 700);



    }

    /* Decide o tamanho do texto  */

    function decideTipoCartao(texto) {
        let tipoCartao = 'cartao--textoPequeno';

        const quebras = texto.split('<br>').length;
        const totalDeLetras = texto.replace(/<br>/g, ' ').length;
        let tamMaior = ' ';

        texto
            .replace(/<br>/g, ' ')
            .split(' ')
            .forEach(palavra => { if (palavra.length > tamMaior.length) tamMaior = palavra; })

        if (tamMaior.length < 9 && quebras < 5 && totalDeLetras < 53) {
            tipoCartao = 'cartao--textoGrande';
        } else if (tamMaior.length < 12 && quebras < 6 && totalDeLetras < 75) {
            tipoCartao = 'cartao--textoMedio';
        }

        return tipoCartao;
    }

    /* Adiciona um Cartao */

    function adicionaCartao(texto, cor) {
        let contador = $('.cartao').length;

        if (texto) {
            contador++;
            const botao = $('<button>')
                .addClass('opcoesDoCartao-remove')
                .text('Remover')
                .click(removeCartao)
                .attr('data-ref', contador);

            const paragrafo = $('<p>')
                .on('input', editaCartao)
                .on('paste', event => event.preventDefault())
                .attr('contenteditable', 'true')
                .addClass('cartao-conteudo')
                .html(texto);

            const opcoesDoCartao = $('<div>')
                .addClass('opcoesDoCartao')
                .append(botao);


            const cartao = $('<div>')
                .addClass('cartao')
                .attr('id', `cartao_${contador}`)
                .addClass(decideTipoCartao(texto));

            if (cor) {
                cartao.css('background', cor);
            }
            cartao.append(paragrafo)
                .append(opcoesDoCartao)
                .prependTo('.mural');

            console.log('Cartao Adicionado com sucesso!');

        }
    }

    /* Adiciona a funcao remove cartao a todos os botoes */

    const botoes = document.querySelectorAll('.opcoesDoCartao-remove');
    for (botaoCartao of botoes) {
        botaoCartao.addEventListener('click', removeCartao);
    }

    /* Editar cartao  */
    var timer = 0;
    function editaCartao() {
        const paragrafo = $(this);
        clearTimeout(timer);

        timer = setTimeout(() => {
            $(document).trigger('precisoSincronizar');
            const tipo = decideTipoCartao(paragrafo.html());
            paragrafo
                .closest('.cartao')
                .removeClass('cartao--textoPequeno cartao--textoMedio cartao--textoGrande')
                .addClass(tipo);
        }, 2000);
    }
    return { adicionaCartao, removeCartao };
})();
