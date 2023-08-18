        document.addEventListener("DOMContentLoaded", function () {
            const links = document.querySelectorAll("nav li a");
            const sections = document.querySelectorAll(".principal__container");

            function setActiveLink() {
                const scrollPosition = window.scrollY;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 10; 
                    const sectionId = section.getAttribute("id");
                    const correspondingLink = document.querySelector(`nav a[href="#${sectionId}"]`);

                    if (scrollPosition >= sectionTop) {
                        links.forEach(link => link.classList.remove("cor-ativado"));
                        correspondingLink.classList.add("cor-ativado");
                    }
                });
            }

            window.addEventListener("scroll", setActiveLink);
        });