document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq__question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            answer.classList.toggle("faq__answer--visible");

            question.classList.toggle("faq__question--active");
        });
    });
});

