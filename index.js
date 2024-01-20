const faqBtns = document.querySelectorAll(".faq-ques");

faqBtns.forEach(()=>{
    btn.addEventListener("click",(elem)=>{
        elem.nextElementSibling.classList.toggle("active");

    })
})