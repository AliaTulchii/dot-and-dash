function btnOvserver(){
document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector(".hero__btn");
    const heroSection = document.querySelector(".hero__content");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                button.classList.add("hero__btn-fixed");
            } else {
                button.classList.remove("hero__btn-fixed");
            }
        },
        { root: null, threshold: 0 }
    );

    observer.observe(heroSection);
})
}

export default btnOvserver;