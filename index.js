let numerosSelecionados = [];
        const precoPorNumero = 5;
        const inputValor = document.querySelector('.valor-container input');
        const botaoParticipar = document.querySelector('#botaoParticipar');
        const containerBotoes = document.getElementById('botao-container');

        function criarBotoes() {
            for (let i = 1; i <= 200; i++) {
                let botao = document.createElement('button');
                botao.innerText = i;
                botao.addEventListener('click', () => selecionarNumero(i, botao));
                containerBotoes.appendChild(botao);
            }
        }

        function selecionarNumero(numero, botao) {
            if (numerosSelecionados.includes(numero)) {
                numerosSelecionados = numerosSelecionados.filter(n => n !== numero);
                botao.style.backgroundColor = '#fafafa';
                botao.style.color = 'black';
            } else if (numerosSelecionados.length < 10) {
                numerosSelecionados.push(numero);
                botao.style.backgroundColor = '#ff5722';
                botao.style.color = 'white';
            } else {
                alert("Você só pode escolher até 10 números!");
            }
            atualizarValor();
        }

        function atualizarValor() {
            inputValor.value = numerosSelecionados.length * precoPorNumero;
        }

        botaoParticipar.addEventListener('click', () => {
            if (numerosSelecionados.length === 0) {
                alert("Escolha pelo menos um número antes de participar!");
                return;
            }

            window.location.href = `Pagamento.html?quantidade=${numerosSelecionados.length}&valor=${inputValor.value}`;
        });

        // Carrossel de imagens
        let currentImageIndex = 0;
        const totalImages = document.querySelectorAll('.carrossel-imagens img').length;
        const carrosselImagens = document.getElementById('carrossel-imagens');

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : totalImages - 1;
            atualizarCarrossel();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex < totalImages - 1) ? currentImageIndex + 1 : 0;
            atualizarCarrossel();
        });

        function atualizarCarrossel() {
            carrosselImagens.style.transform = `translateX(-${currentImageIndex * 100}%)`;
        }

        window.onload = () => {
            criarBotoes();
            atualizarCarrossel();
        };