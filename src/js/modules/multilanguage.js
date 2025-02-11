function multiLanguage(){
    let langs = document.querySelector('.nav__lang');
    let link = document.querySelectorAll('.nav__btn');
    let headerLink = document.querySelector('.link__text');
    let leftTitle = document.querySelector('.left__title');
    let leftText = document.querySelector('.left__text');
    let rightTitleFirst = document.querySelector('.title__first');
    let rightTextFirst = document.querySelector('.text__first');
    let rightTitleSecond = document.querySelector('.title__second');
    let rightTextSecond = document.querySelector('.text__second');
    let rightTitleThird = document.querySelector('.title__third');
    let rightTextThird = document.querySelector('.text__third');
    let reachTitle = document.querySelector('.reach__title');
    let firstName = document.querySelector('.first-name');
    let lastName = document.querySelector('.last-name');



    link.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            let activeLink = langs.querySelector('.active');
            if (activeLink) {
                activeLink.classList.remove("active");
            }
    
            let target = e.target.closest('.nav__btn');
        if (target) {
            target.classList.add("active");
        }
        
        let attr = el.getAttribute("language");
        headerLink.textContent = data[attr].linkText;
        //Shape
        leftTitle.textContent = data[attr].shape.leftTitle;
        leftText.textContent = data[attr].shape.leftText;
        rightTitleFirst.textContent = data[attr].shape.rightTitleFirst;
        rightTextFirst.textContent = data[attr].shape.rightTextFirst;
        rightTitleSecond.textContent = data[attr].shape.rightTitleSecond;
        rightTextSecond.textContent = data[attr].shape.rightTextSecond;
        rightTitleThird.textContent = data[attr].shape.rightTitleThird;
        rightTextThird.textContent = data[attr].shape.rightTextThird;
        //Reach
        reachTitle.textContent = data[attr].reach.title;
        firstName.textContent = data[attr].reach.firstName;
        lastName.textContent = data[attr].reach.lastName;
        })
    })

    let data = {
        english:{
            linkText: "Contact us",

        shape:{
            leftTitle: "Shape your brand’s  future",
            leftText: "Tell us about your goals and schedule a free consultation. <br/> Fill out the form and take the first step toward <br> transforming your business.",
            rightTitleFirst: "Looking to captivate your audience with <br> stunning visuals?",
            rightTextFirst: "Our team specializes in creating aesthetically pleasing branding assets, including custom website designs and marketing materials. Whether it’s a sleek website or a compelling brand story, we’ll ensure your business leaves a lasting impression.",
            rightTitleSecond:"Stay ahead in your industry with <br> innovative digital solutions.",
            rightTextSecond:"We’ll help you establish your authority by designing professional webinar platforms, dynamic branding, and impactful promotional materials. Share your expertise with the world and gain new customers while enhancing your online presence.",
            rightTitleThird: "Is your brand in need of a fresh start?",
            rightTextThird: "Let us redefine your vision with a comprehensive strategy. From crafting a bold, modern brand identity to building a user-friendly website, we’ll provide all the tools you need to stand out in the digital space and achieve your goals.",
        },

        reach:{
            title: "Reach us",
            firstName:"First name",
            errorMsgFirst: "Enter a valid name",
            lastName:"Last name",
            errorMsgSecond: "Enter a valid last name",
            email: "Email",
            errorMsgThird: "Enter a valid email",
            phone: "Phone",
            message: "Message",
            formTitle: "I am interested in",
            branding: "Branding | Rebranding",
            commerce: "E-commerce",
            corporate: "Corporate website",
            landing: "Landing page",
            formTextFirst: "What is your estimated budget for this project?",
            budget01: "$1,000",
            budget02: "$1,000 - $2,000",
            budget03: "$2,000 - $3,000",
            budget04: "$5,000 or more",
            formTextSecond: "When would you like your product to be finished?",
            asap: "ASAP",
            month01: "1-3 month",
            month02: "2-4 month",
            formBtn: "Submit",
        }
        },
        polish: {
            linkText: "Skontaktuj się",
        
            shape:{
                leftTitle: "Ukształtuj przyszłość swojej marki",
                leftText: "Opowiedz nam o swoich celach i umów się na darmową konsultację. Wypełnij formularz i zrób pierwszy krok w kierunku transformacji swojego biznesu.",
                rightTitleFirst: "Chcesz zachwycić swoją publiczność oszałamiającymi wizualizacjami?",
                rightTextFirst: "Nasz zespół specjalizuje się w tworzeniu estetycznych materiałów brandingowych, w tym niestandardowych projektów stron internetowych i materiałów marketingowych. Niezależnie od tego, czy chodzi o elegancką stronę internetową, czy przekonującą historię marki, zadbamy o to, by Twój biznes pozostawił niezatarte wrażenie.",
                rightTitleSecond:"Pozostań na czele swojej branży dzięki innowacyjnym rozwiązaniom cyfrowym.",
                rightTextSecond:"Pomożemy Ci zbudować autorytet, projektując profesjonalne platformy webinarowe, dynamiczny branding i skuteczne materiały promocyjne. Podziel się swoją wiedzą ze światem, zdobywaj nowych klientów i wzmacniaj swoją obecność online.",
                rightTitleThird: "Czy Twoja marka potrzebuje nowego startu?",
                rightTextThird: "Pozwól nam zdefiniować Twoją wizję dzięki kompleksowej strategii. Od stworzenia odważnej, nowoczesnej tożsamości marki po budowę przyjaznej dla użytkownika strony internetowej – zapewnimy wszystkie narzędzia potrzebne, by wyróżnić się w cyfrowej przestrzeni i osiągnąć swoje cele.",
            },
    
            reach:{
                title: "Skontaktuj się z nami",
                firstName:"Imię",
                errorMsgFirst: "Enter a valid name",
                lastName:"Nazwisko",
                errorMsgSecond: "Enter a valid last name",
                email: "Email",
                errorMsgThird: "Enter a valid email",
                phone: "Numer telefonu",
                message: "Wiadomość",
                formTitle: "Jestem zainteresowany/a:",
                branding: "Branding | Rebranding",
                commerce: "E-commerce",
                corporate: "Stroną internetową dla firmy",
                landing: "Stroną docelową (Landing Page)",
                formTextFirst: "Jaki jest Twój szacunkowy budżet na ten projekt?",
                budget01: "$1,000",
                budget02: "$1,000 - $2,000",
                budget03: "$2,000 - $3,000",
                budget04: "$5,000 lub więcej",
                formTextSecond: "Kiedy chciałbyś/chciałabyś, aby Twój produkt był gotowy?",
                asap: "Jak najszybciej (ASAP)",
                month01: "1-3 miesiące",
                month02: "2-4 miesiące",
                formBtn: "Prześlij",
            }
        }
    }
}

export default multiLanguage;