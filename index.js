const faqItems = document.querySelectorAll(".faq-item");

for(item of faqItems){
    item.addEventListener("click",()=>{
        let ques = document.querySelector(".faq-ques");
        let ans = document.querySelector(".faq-ans");

        ques.children[1].classList.toggle("rotate");
        ans.classList.toggle("active");
    })
}