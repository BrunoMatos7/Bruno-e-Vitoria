document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const conteudo = document.getElementById('conteudo');
    const body = document.body;

    // ⚠️ ATENÇÃO: Substitua 'nossafoto.jpg' pelo nome real da sua foto de fundo
    const FOTO_BACKGROUND_URL = 'nossafoto.jpg'; 
    
    envelope.addEventListener('click', () => {
        // 1. ANIMAÇÃO DE ENVELOPE FECHADO -> ABERTO
        envelope.classList.add('envelope-aberto');

        // 2. MUDA O FUNDO DO BODY para a foto e ajusta o preenchimento
        body.style.backgroundImage = `url('${FOTO_BACKGROUND_URL}')`;
        
        // Aplica as regras para PREENCHER A TELA INTEIRA (sem lacunas)
        body.style.backgroundSize = 'cover';        
        body.style.backgroundRepeat = 'no-repeat';
        
        // Define o ponto de foco (Ajuste para 'center top' se o foco estiver na parte superior)
        body.style.backgroundPosition = 'center top'; 
        
        // Remove a cor sólida azul para que a imagem apareça
        body.style.backgroundColor = 'transparent'; 

        // 3. Espera a animação do envelope sumir (500ms) e mostra o conteúdo
        setTimeout(() => {
            envelope.style.display = 'none'; 
            conteudo.classList.add('conteudo-visivel');
        }, 500); 
    });
});