/* Muda o layout de exibicao (UX) */

(function () {

    function mudaLayout() {
        const adicionouClasse = mural.classList.toggle('mural--linhas');
        if (adicionouClasse) {
            this.textContent = 'Blocos';
        } else {
            this.textContent = 'Linhas';
        }
    }

    const botao = document.querySelector('#botaoMudaLayout');
    const mural = document.querySelector('.mural');
    botao.addEventListener('click', mudaLayout);

})();