async function carregarFeedbacks(){

    const resposta = await fetch('/api/feedbacks')

    const feedbacks = await resposta.json()

    const lista = document.getElementById('lista-feedbacks')

    feedbacks.forEach(item => {

        lista.innerHTML += `
        
            <div class="card">

                <h3>${item.nome}</h3>

                <p>${item.feedback}</p>

            </div>
        
        `
    })

}

carregarFeedbacks()
