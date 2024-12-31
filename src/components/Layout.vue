<script setup>
    import { Home, About, Templates, Testimonials, FAQ, Contact, Information } from '@/views';  
    import { onMounted, onUnmounted } from 'vue';

    onMounted(() => {
    const sections = document.querySelectorAll('.display');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
        const top = window.scrollY;

        sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
            link.classList.remove('active');
            });
            document
            .querySelector(`header nav a[href*="${id}"]`)
            .classList.add('active');
        }
        });
    };
    /* STICKY BEHAVIOR */
    //sticky nav test
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll down - hide the navbar
        navbar.style.top = "-80px"; // Adjust this value depending on the height of your navbar
    } else {
        // Scroll up - show the navbar
        navbar.style.top = "0";
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
    /* BG-CHANGE BEHAVIOR */
    let nav = document.querySelector(".nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("new-bg");
      }else {
        nav.classList.remove("new-bg");
      }
    }
    /*  */
    window.addEventListener('scroll', handleScroll);

    // Clean up on component unmount
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
    });
 
</script>

<template>

<div>
    <header class="header-nav nav" id="navbar">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <a href="" class="logo">
            <router-link to="">Gemstone Sites</router-link>
        </a>
        <input type="checkbox" name="" id="check"/>

        <label for="check" class="icons">
            <i class='bx bx-menu' id="menu-icon"></i>
            <i class='bx bx-x' id="close-icon"></i>
        </label>

        <nav class="navbar">
            <router-link class="active" to="#home">Home</router-link>
            <router-link to="#about">About</router-link>
            <router-link to="#information">Information</router-link>
            <router-link to="#templates">Templates</router-link>
            <router-link to="#testimonials">Testimonials</router-link>
            <router-link to="#faqs">FAQs</router-link>
            <router-link to="#contact">Contact</router-link>
        </nav>
    </header>
    <!--Dynamic  Content -->
    <main>
        <Home class="display" id="home" intro="Crafting Beautiful Websites  One Gem At A Time." motto="Explore our range of templates, find the perfect match, and start for your business." />
        <About class="display" id="about" />
        <Information class="display" id="information"/>
        <Templates class="display" id="templates"/>
        <Testimonials class="display" id="testimonials"/>
        <FAQ class="display" id="faqs"/>
        <Contact class="display" id="contact" />
    </main>
    <!-- End -->

    <footer>
            <div class="container">
                <div class="wrapper">
                    <div class="footer-card">
                        <h1 class="link-head" >Essential Links</h1>
                        <router-link to="#home">Home</router-link>
                        <router-link to="#about">About</router-link>
                        <router-link to="#contact">Contact</router-link>
                    </div>
                    <div class="footer-card">
                        <h1 class="link-head" >Quick Links</h1>
                        <router-link to="#templates">Templates</router-link>
                        <router-link to="#faqs">FAQs</router-link>
                        <router-link to="#information">Information</router-link>
                        <router-link to="#testimonials">Testimonials</router-link>
                    </div>

<!--                     <div class="footer-card">
                        <h1 class="link-head" >Policy Links</h1>
                        <a href="" class="link">Privacy Policy</a>
                        <a href="" class="link">Terms of Service</a>
                        <a href="" class="link">Refund Policy</a>
                    </div> -->

                    <div class="footer-card">
                        <h1 class="link-head" >Social Media Links</h1>
                        <a target="_blank" href="https://wa.me/+2349134438269" class="link">Whatsapp</a>
                        <a target="_blank" href="https://www.instagram.com/quantoxt" class="link">Instagram</a>
                    </div>
                </div>
                <div>
                    <p>© 2025 Gemstone Sites. All rights reserved.</p>
                    <p>Empowering businesses with exceptional websites tailored to your needs.</p>
                </div>
            </div>
    </footer>
</div>

</template>

<style scoped>
.nav.new-bg{
    @apply  max-w-full bg-zinc-800
}
.header-nav{
    z-index: 10;
    max-width: 1570px;
    @apply fixed right-0 top-0 left-0 w-full px-8 py-12 sm:py-4 bg-zinc-900 flex items-center justify-between mx-auto
}
.icons{
    right: 5%;
    @apply absolute text-white cursor-pointer hidden text-4xl
}
.header-nav .logo{
    background: var(--gradient);
    transition: .2s;
    @apply bg-clip-text text-transparent font-medium no-underline relative text-3xl
}
.logo:hover{
    transform: translateY(-3px);
}
.navbar a{
    transition: .15s;
    @apply text-white font-medium text-xl no-underline p-2 mx-1 px-1 rounded-xl relative inline-flex items-center justify-center 
}
.navbar a::before{
    content: '';
    background: var(--gradient);
    height: 3px;
    top: 85%;
    transition: width .3s ease-in-out;

    @apply w-0 absolute
}
.navbar a:hover::before{
    width: 100%;
}
.navbar .active::before{
    content: '';
    background: var(--gradient);
    width: 100%;
    height: 3px;
    top: 85%;
    transition: width .3s ease-in-out;

    @apply absolute
}
#check{
    @apply hidden
}
@media (max-width:992px){
    .header-nav{
/*         padding: 1.3rem 5%;
 */        @apply py-5 px-2
    }
}
@media(max-width:768px){
    .icons{
        @apply inline-flex
    } 
    #check:checked~.icons #menu-icon{
        @apply hidden
    }
    .icons #close-icon{
        @apply hidden
    }
    #check:checked~.icons #close-icon{
        @apply block
    }
    .navbar{
        backdrop-filter: blur(50px);
        box-shadow: .2rem .5rem rgba(0, 0, 0, .1);
        transition: .3s ease;
        @apply flex justify-center items-center flex-col absolute top-full left-0 w-full h-0 bg-black overflow-hidden
    }
    #check:checked~.navbar{
        @apply h-max
    }

    .navbar a{
        transform: translateY(-50px);
        transition: .3s ease;
        @apply py-2 m-0 block text-xl text-center opacity-0
    }
    #check:checked~.navbar a{
        transform: translateY(0);
        opacity: 1;
        transition-delay: calc(.09s * var(--i));
    }
}
/* Footer */
footer{
    @apply p-8 h-max bg-none border-t-2 border-slate-700 flex flex-col justify-center items-center
}
.container{
    @apply flex-col
}
.wrapper{
    @apply flex-row justify-evenly
}
.footer-card{
    *{
        @apply text-slate-100
    }
    h1{
        @apply text-3xl
    }
    a{
        @apply text-xl text-slate-400
    }
    a:hover{
        @apply text-white
    }
    @apply w-full flex items-center justify-center gap-3 flex-col max-w-80
}
p{
    @apply text-white
}
</style>
