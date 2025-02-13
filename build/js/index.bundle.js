!function(){"use strict";document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("form"),t=e.querySelectorAll("input, textarea"),r=document.getElementById("submit-btn"),n={"first-name":document.querySelector(".form__error-msg-first"),"last-name":document.querySelector(".form__error-msg-last"),email:document.querySelector(".form__error-msg-email")};function o(){let o=!0;Object.values(n).forEach((e=>{e&&(e.style.display="none")})),t.forEach((e=>{const t=e.name,r=e.type,i=e.value.trim();"text"!==r&&"textarea"!==r&&"email"!==r||""===i&&(n[t]&&(n[t].style.display="block"),o=!1),"email"===r&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||(n[t]&&(n[t].style.display="block"),o=!1)),"checkbox"===r&&e.required&&(e.checked||(o=!1))})),[...new Set([...t].filter((e=>"radio"===e.type)).map((e=>e.name)))].forEach((t=>{[...e.querySelectorAll(`input[name="${t}"]`)].some((e=>e.checked))||(o=!1)})),setTimeout((()=>{r.disabled=!o}),10)}t.forEach((e=>{e.addEventListener("input",o),"checkbox"!==e.type&&"radio"!==e.type||e.addEventListener("change",o)})),e.addEventListener("submit",(function(t){o(),r.disabled||(e.reset(),r.disabled=!0)})),r.disabled=!0})),function(){let e=document.querySelector(".nav__lang"),t=document.querySelectorAll(".nav__btn"),r=document.querySelector(".link__text"),n=document.querySelector(".left__title"),o=document.querySelector(".left__text"),i=document.querySelector(".title__first"),a=document.querySelector(".text__first"),s=document.querySelector(".title__second"),c=document.querySelector(".text__second"),l=document.querySelector(".title__third"),d=document.querySelector(".text__third"),m=document.querySelector(".reach__title"),u=document.querySelector(".first-name"),h=document.querySelector(".last-name"),y=document.querySelector(".form-phone"),g=document.querySelector(".form-message"),w=document.querySelector(".form__title"),b=document.querySelector(".branding"),p=document.querySelector(".commerce"),f=document.querySelector(".corporate"),z=document.querySelector(".landing"),x=document.querySelector(".text-first"),S=document.querySelector(".budget-fourth"),T=document.querySelector(".text-second"),j=document.querySelector(".asap"),k=document.querySelector(".month-first"),_=document.querySelector(".month-second"),q=document.querySelector(".form__btn");t.forEach((t=>{t.addEventListener("click",(v=>{v.preventDefault();let E=e.querySelector(".active");E&&E.classList.remove("active");let F=v.target.closest(".nav__btn");F&&F.classList.add("active");let $=t.getAttribute("language");r.textContent=C[$].linkText,n.textContent=C[$].shape.leftTitle,o.textContent=C[$].shape.leftText,i.textContent=C[$].shape.rightTitleFirst,a.textContent=C[$].shape.rightTextFirst,s.textContent=C[$].shape.rightTitleSecond,c.textContent=C[$].shape.rightTextSecond,l.textContent=C[$].shape.rightTitleThird,d.textContent=C[$].shape.rightTextThird,m.textContent=C[$].reach.title,u.textContent=C[$].reach.firstName,h.textContent=C[$].reach.lastName,y.textContent=C[$].reach.phone,g.textContent=C[$].reach.message,w.textContent=C[$].reach.formTitle,b.textContent=C[$].reach.branding,p.textContent=C[$].reach.commerce,f.textContent=C[$].reach.corporate,z.textContent=C[$].reach.landing,x.textContent=C[$].reach.formTextFirst,S.textContent=C[$].reach.budgetFourth,T.textContent=C[$].reach.formTextSecond,j.textContent=C[$].reach.asap,k.textContent=C[$].reach.monthFirst,_.textContent=C[$].reach.monthSecond,q.textContent=C[$].reach.formBtn}))}));let C={english:{linkText:"Contact us",shape:{leftTitle:"Shape your brand’s  future",leftText:"Tell us about your goals and schedule a free consultation. <br/> Fill out the form and take the first step toward <br> transforming your business.",rightTitleFirst:"Looking to captivate your audience with <br> stunning visuals?",rightTextFirst:"Our team specializes in creating aesthetically pleasing branding assets, including custom website designs and marketing materials. Whether it’s a sleek website or a compelling brand story, we’ll ensure your business leaves a lasting impression.",rightTitleSecond:"Stay ahead in your industry with <br> innovative digital solutions.",rightTextSecond:"We’ll help you establish your authority by designing professional webinar platforms, dynamic branding, and impactful promotional materials. Share your expertise with the world and gain new customers while enhancing your online presence.",rightTitleThird:"Is your brand in need of a fresh start?",rightTextThird:"Let us redefine your vision with a comprehensive strategy. From crafting a bold, modern brand identity to building a user-friendly website, we’ll provide all the tools you need to stand out in the digital space and achieve your goals."},reach:{title:"Reach us",firstName:"First name",errorMsgFirst:"Enter a valid name",lastName:"Last name",errorMsgSecond:"Enter a valid last name",email:"Email",errorMsgThird:"Enter a valid email",phone:"Phone",message:"Message",formTitle:"I am interested in",branding:"Branding | Rebranding",commerce:"E-commerce",corporate:"Corporate website",landing:"Landing page",formTextFirst:"What is your estimated budget for this project?",budget01:"$1,000",budget02:"$1,000 - $2,000",budget03:"$2,000 - $3,000",budgetFourth:"$5,000 or more",formTextSecond:"When would you like your product to be finished?",asap:"ASAP",monthFirst:"1-3 month",monthSecond:"2-4 month",formBtn:"Submit"}},polish:{linkText:"Skontaktuj się",shape:{leftTitle:"Ukształtuj przyszłość swojej marki",leftText:"Opowiedz nam o swoich celach i umów się na darmową konsultację. Wypełnij formularz i zrób pierwszy krok w kierunku transformacji swojego biznesu.",rightTitleFirst:"Chcesz zachwycić swoją publiczność oszałamiającymi wizualizacjami?",rightTextFirst:"Nasz zespół specjalizuje się w tworzeniu estetycznych materiałów brandingowych, w tym niestandardowych projektów stron internetowych i materiałów marketingowych. Niezależnie od tego, czy chodzi o elegancką stronę internetową, czy przekonującą historię marki, zadbamy o to, by Twój biznes pozostawił niezatarte wrażenie.",rightTitleSecond:"Pozostań na czele swojej branży dzięki innowacyjnym rozwiązaniom cyfrowym.",rightTextSecond:"Pomożemy Ci zbudować autorytet, projektując profesjonalne platformy webinarowe, dynamiczny branding i skuteczne materiały promocyjne. Podziel się swoją wiedzą ze światem, zdobywaj nowych klientów i wzmacniaj swoją obecność online.",rightTitleThird:"Czy Twoja marka potrzebuje nowego startu?",rightTextThird:"Pozwól nam zdefiniować Twoją wizję dzięki kompleksowej strategii. Od stworzenia odważnej, nowoczesnej tożsamości marki po budowę przyjaznej dla użytkownika strony internetowej – zapewnimy wszystkie narzędzia potrzebne, by wyróżnić się w cyfrowej przestrzeni i osiągnąć swoje cele."},reach:{title:"Skontaktuj się z nami",firstName:"Imię",errorMsgFirst:"Enter a valid name",lastName:"Nazwisko",errorMsgSecond:"Enter a valid last name",email:"Email",errorMsgThird:"Enter a valid email",phone:"Numer telefonu",message:"Wiadomość",formTitle:"Jestem zainteresowany/a:",branding:"Branding | Rebranding",commerce:"E-commerce",corporate:"Stroną internetową dla firmy",landing:"Stroną docelową (Landing Page)",formTextFirst:"Jaki jest Twój szacunkowy budżet na ten projekt?",budget01:"$1,000",budget02:"$1,000 - $2,000",budget03:"$2,000 - $3,000",budgetFourth:"$5,000 lub więcej",formTextSecond:"Kiedy chciałbyś/chciałabyś, aby Twój produkt był gotowy?",asap:"Jak najszybciej (ASAP)",monthFirst:"1-3 miesiące",monthSecond:"2-4 miesiące",formBtn:"Prześlij"}}}}()}();