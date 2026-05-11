async function carregarFeedbacks(){

    const resposta = await fetch('/api/feedbacks')

    const feedbacks = await resposta.json()

    const lista = document.getElementById('lista-feedbacks')

    lista.innerHTML = ''

    feedbacks.forEach((item, index) => {

        lista.innerHTML += `
        
            <div class="card">

                <h3>${item.nome}</h3>

                <p>${item.feedback}</p>

                <button class="btn-remover" onclick="removerFeedback(${index})">Remover</button>

            </div>
        
        `
    })

}

async function removerFeedback(index) {
    if (confirm('Tem certeza que deseja remover este feedback?')) {
        const resposta = await fetch(`/api/feedbacks/${index}`, {
            method: 'POST'
        })
        if (resposta.ok) {
            carregarFeedbacks()
        }
    }
}

carregarFeedbacks()
