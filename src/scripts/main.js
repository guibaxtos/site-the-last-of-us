document.addEventListener("DOMContentLoaded", () => { //Garante que o programa só seja executado depois que o conteúdo HTML for carregado
    const faqQuestions = document.querySelectorAll(".faq__question"); //Seleciona todos os elementos da página que possuem a classe .faq__question

    faqQuestions.forEach((question) => { //Adiciona lógica individualmente a cada pergunta
        question.addEventListener("click", () => { //Quando o usuário clicar na pergunta, o código dentro da função será executado
            const answer = question.nextElementSibling; //Usa o nextElementSibling para pegar o elemento logo abaixo da pergunta no DOM

            answer.classList.toggle("faq__answer--visible");
            //Altera as classes CSS no elemento correspondente
            question.classList.toggle("faq__question--active");
        });
    });
});

// => substitui a palavra-chave function

