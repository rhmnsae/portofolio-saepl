/* ========================================
   Portfolio Website - Saepul Rohman
   JavaScript Interactivity + i18n
   ======================================== */

// ===== Internationalization (i18n) =====
const translations = {
    en: {
        // Nav
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',
        nav_experience: 'Experience',

        // Experience
        exp_tag: 'Work Experience',
        exp_title: 'My Career Journey',
        exp_present: 'Present',
        exp_intern: 'Internship',
        exp_parttime: 'Part-time',
        badge_intern: 'Internship',
        exp1_task1: 'Created and managed social media accounts (Twitter, Instagram, YouTube) for scraping purposes.',
        exp1_task2: 'Uploaded accounts to database, created documentation, and handled account issues (VPN, OTP, banned).',
        exp2_task1: 'Managed daily operations and ensured data accuracy and reliability.',
        exp2_task2: 'Handled data requests and resolved data-related issues efficiently.',
        exp2_task3: 'Collaborated with cross-functional stakeholders to gather, clarify, and communicate data requirements.',
        exp3_task1: 'Performed network maintenance, troubleshooting, device installation, and technical support.',
        exp3_task2: 'Developed warehouse application and tenant attendance application.',
        exp3_task3: 'Created banners, social media content, and character designs.',
        exp4_title: 'Phone & Computer Technician',
        exp4_task1: 'Serviced Android and iPhone devices, including software and hardware troubleshooting.',
        exp4_task2: 'Handled Android system modifications such as rooting, custom ROM installation, TWRP, bootloader unlocking, and iPhone bypass.',
        exp4_task3: 'Performed computer and laptop repair and maintenance, including OS installation and device troubleshooting.',
        exp5_title: 'Internet Café Operator',
        exp5_task1: 'Managed internet café operations and daily income–expense recording.',
        exp5_task2: 'Performed installation, configuration, and hardware/software troubleshooting on client and server computers.',
        exp5_task3: 'Maintained LAN network, monitored internet connectivity, and configured basic router settings to ensure network stability.',

        // Hero
        hero_greeting: "Hello, I'm",
        hero_iam: "I'm a",
        hero_desc: 'IT Support Enthusiast | Hardware, Software & Network Troubleshooting',
        hero_btn_portfolio: 'View Portfolio',
        hero_btn_contact: 'Contact Me',
        hero_stat_exp: 'Years Experience',
        hero_stat_company: 'Companies',
        hero_stat_projects: 'Projects Done',
        hero_scroll: 'Scroll down',

        // About
        about_tag: 'About Me',
        about_title: 'Get to Know Me',
        about_subtitle: 'IT Support Enthusiast | Hardware, Software & Network Troubleshooting',
        about_text_1: 'Bachelor of Informatics Engineering graduate from <strong>Adhirajasa Reswara Sanjaya University</strong> with strong interest and capabilities in IT Support. Experienced in data management, device maintenance, and basic system & network troubleshooting through part-time and internship roles.',
        about_text_2: 'Skilled in software–hardware installation, network connectivity checks, and office IT device maintenance. Detail-oriented, responsible, and highly motivated to support efficient and stable IT operations.',
        about_exp_text: 'Years<br>Experience',
        about_location_label: 'Location',
        about_location_value: 'Bandung, West Java',
        about_edu_label: 'Education',
        about_edu_value: 'Bachelor of Informatics Engineering',
        about_univ_label: 'University',


        // Skills
        skills_tag: 'Skills',
        skills_title: 'Skills & Technologies',
        skills_cat_prog: 'Programming & Web',
        skills_cat_office: 'Office & Productivity',
        soft_problem: 'Problem Solving',
        soft_team: 'Teamwork',
        soft_fast: 'Fast Learner',
        soft_adaptive: 'Adaptive',
        soft_critical: 'Critical Thinking',
        soft_detail: 'Attention to Detail',

        // Portfolio
        portfolio_title: 'My Recent Projects',
        filter_all: 'All',
        proj1_title: 'Automatic Trash Bin',
        proj1_desc: 'IoT-based automatic trash bin using ultrasonic sensor to detect objects and servo motor to open the lid automatically.',
        proj2_title: 'oprekHP Website',
        proj2_desc: 'Website for phone and computer service business, providing information about repair services, pricing, and contact.',
        proj3_title: 'HarsaEdu - LMS App',
        proj3_desc: 'Learning Management System mobile application with class packages, subscriptions, recommendations, and notification features.',
        proj4_title: 'Sentiment Analysis - Twitter',
        proj4_desc: 'AI-powered website for analyzing Twitter social media sentiment using machine learning models.',
        proj5_title: 'Data MBG Website',
        proj5_desc: 'Web application for recording data of babies, pregnant women, and breastfeeding mothers who receive MBG (Makanan Bergizi Gratis).',

        proj6_title: 'Anilist Website',
        proj6_desc: 'Web application to view anime release schedules, featuring data fetched directly from the MyAnimeList API (Jikan API).',

        proj7_title: 'Bluetooth Remote Car',
        proj7_desc: 'Bluetooth-controlled remote car using Arduino and HC-05 module, operated via smartphone application.',

        // Education
        edu_tag: 'Education',
        edu_title: 'Education History',
        edu_degree: 'Bachelor of Informatics Engineering',
        edu_badge: 'Bachelor',
        cert_title: 'Complete Mobile Engineer Career with Flutter',
        cert_badge: 'Bootcamp',

        // Contact
        contact_tag: 'Contact',
        contact_title: "Let's Connect",
        contact_subtitle: "Don't hesitate to reach out",
        contact_text: "I'm always open to new opportunities, collaborations, or just discussing about technology. Feel free to contact me!",
        contact_phone: 'Phone',
        contact_location_value: 'Bandung, West Java, Indonesia',
        form_name: 'Full Name',
        form_name_ph: 'Enter your name',
        form_email_ph: 'Enter your email',
        form_subject: 'Subject',
        form_subject_ph: 'Message subject',
        form_message: 'Message',
        form_message_ph: 'Write your message...',
        form_send: 'Send Message',
        form_sent: 'Message Sent!',

        // Footer
        footer_desc: 'IT Support Enthusiast | Hardware, Software & Network Troubleshooting',

        // Typing titles
        typing_titles: [
            'IT Support Enthusiast',
            'Web Developer',
            'Data Quality Assurance',
            'Mobile Developer',
            'Problem Solver'
        ]
    },
    id: {
        // Nav
        nav_home: 'Beranda',
        nav_about: 'Tentang',
        nav_skills: 'Keahlian',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Kontak',
        nav_experience: 'Pengalaman',

        // Experience
        exp_tag: 'Pengalaman Kerja',
        exp_title: 'Perjalanan Karir Saya',
        exp_present: 'Sekarang',
        exp_intern: 'Magang',
        exp_parttime: 'Paruh Waktu',
        badge_intern: 'Magang',
        exp1_task1: 'Membuat dan mengelola akun media sosial (Twitter, Instagram, YouTube) untuk keperluan scraping.',
        exp1_task2: 'Mengunggah akun ke database, membuat dokumentasi, dan menangani masalah akun (VPN, OTP, banned).',
        exp2_task1: 'Mengelola operasional harian dan memastikan akurasi serta keandalan data.',
        exp2_task2: 'Menangani permintaan data dan menyelesaikan masalah terkait data secara efisien.',
        exp2_task3: 'Berkolaborasi dengan pemangku kepentingan lintas fungsi untuk mengumpulkan, mengklarifikasi, dan mengkomunikasikan kebutuhan data.',
        exp3_task1: 'Melakukan pemeliharaan jaringan, troubleshooting, instalasi perangkat, dan dukungan teknis.',
        exp3_task2: 'Mengembangkan aplikasi gudang dan aplikasi absensi tenant.',
        exp3_task3: 'Membuat banner, konten media sosial, dan desain karakter.',
        exp4_title: 'Teknisi Handphone & Komputer',
        exp4_task1: 'Melakukan servis perangkat Android dan iPhone, termasuk troubleshooting software maupun hardware.',
        exp4_task2: 'Menangani modifikasi sistem Android seperti rooting, instalasi custom ROM, TWRP, dan unlock bootloader, serta bypass iPhone.',
        exp4_task3: 'Melakukan perbaikan dan maintenance komputer serta laptop, termasuk instalasi sistem operasi dan troubleshooting perangkat.',
        exp5_title: 'Operator Warnet',
        exp5_task1: 'Mengelola operasional warnet serta pencatatan pemasukan dan pengeluaran harian.',
        exp5_task2: 'Melakukan instalasi, konfigurasi, dan troubleshooting hardware maupun software pada komputer client dan server.',
        exp5_task3: 'Melakukan maintenance jaringan LAN, monitoring koneksi internet, serta konfigurasi dasar router untuk memastikan jaringan tetap stabil.',

        // Hero
        hero_greeting: 'Halo, saya',
        hero_iam: 'Saya seorang',
        hero_desc: 'Antusias IT Support | Troubleshooting Hardware, Software & Jaringan',
        hero_btn_portfolio: 'Lihat Portfolio',
        hero_btn_contact: 'Hubungi Saya',
        hero_stat_exp: 'Tahun Pengalaman',
        hero_stat_company: 'Perusahaan',
        hero_stat_projects: 'Proyek Selesai',
        hero_scroll: 'Gulir ke bawah',

        // About
        about_tag: 'Tentang Saya',
        about_title: 'Mengenal Lebih Dekat',
        about_subtitle: 'Antusias IT Support | Troubleshooting Hardware, Software & Jaringan',
        about_text_1: 'Lulusan S1 Teknik Informatika <strong>Universitas Adhirajasa Reswara Sanjaya</strong> dengan minat dan kemampuan di bidang IT Support. Memiliki pengalaman part-time dan magang dalam pengelolaan data, perawatan perangkat, serta troubleshooting sistem dan jaringan dasar.',
        about_text_2: 'Terampil dalam instalasi software–hardware, pengecekan konektivitas jaringan, dan pemeliharaan perangkat IT kantor. Memiliki ketelitian, tanggung jawab, serta motivasi tinggi untuk mendukung operasional IT agar berjalan efisien dan stabil.',
        about_exp_text: 'Tahun<br>Pengalaman',
        about_location_label: 'Lokasi',
        about_location_value: 'Bandung, Jawa Barat',
        about_edu_label: 'Pendidikan',
        about_edu_value: 'S1 Teknik Informatika',
        about_univ_label: 'Universitas',


        // Skills
        skills_tag: 'Keahlian',
        skills_title: 'Kemampuan & Teknologi',
        skills_cat_prog: 'Pemrograman & Web',
        skills_cat_office: 'Office & Produktivitas',
        soft_problem: 'Pemecahan Masalah',
        soft_team: 'Kerja Sama Tim',
        soft_fast: 'Cepat Belajar',
        soft_adaptive: 'Adaptif',
        soft_critical: 'Berpikir Kritis',
        soft_detail: 'Ketelitian',

        // Portfolio
        portfolio_title: 'Proyek Terbaru Saya',
        filter_all: 'Semua',
        proj1_title: 'Tempat Sampah Otomatis',
        proj1_desc: 'Tempat sampah otomatis berbasis IoT menggunakan sensor ultrasonik untuk mendeteksi objek dan motor servo untuk membuka tutup secara otomatis.',
        proj2_title: 'Website oprekHP',
        proj2_desc: 'Website untuk jasa servis handphone dan komputer, menyediakan informasi layanan perbaikan, harga, dan kontak.',
        proj3_title: 'HarsaEdu - Aplikasi LMS',
        proj3_desc: 'Aplikasi mobile Learning Management System dengan fitur paket kelas, berlangganan, rekomendasi, dan notifikasi.',
        proj4_title: 'Analisis Sentimen - Twitter',
        proj4_desc: 'Website AI untuk menganalisis sentimen media sosial Twitter menggunakan model machine learning.',
        proj5_title: 'Website Data MBG',
        proj5_desc: 'Aplikasi web untuk mendata bayi, ibu hamil, dan ibu menyusui yang mendapat MBG (Makanan Bergizi Gratis).',

        proj6_title: 'Website Anilist',
        proj6_desc: 'Aplikasi web untuk melihat jadwal rilis anime, mengambil data langsung dari API MyAnimeList (Jikan API).',

        proj7_title: 'Mobil Remote Bluetooth',
        proj7_desc: 'Mobil remote yang dikendalikan melalui Bluetooth menggunakan Arduino dan modul HC-05, dioperasikan via aplikasi smartphone.',

        // Education
        edu_tag: 'Pendidikan',
        edu_title: 'Riwayat Pendidikan',
        edu_degree: 'S1 Teknik Informatika',
        edu_badge: 'Sarjana',
        cert_title: 'Complete Mobile Engineer Career with Flutter',
        cert_badge: 'Bootcamp',

        // Contact
        contact_tag: 'Kontak',
        contact_title: 'Mari Terhubung',
        contact_subtitle: 'Jangan ragu untuk menghubungi saya',
        contact_text: 'Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berdiskusi tentang teknologi. Silakan hubungi saya!',
        contact_phone: 'Telepon',
        contact_location_value: 'Bandung, Jawa Barat, Indonesia',
        form_name: 'Nama Lengkap',
        form_name_ph: 'Masukkan nama Anda',
        form_email_ph: 'Masukkan email Anda',
        form_subject: 'Subjek',
        form_subject_ph: 'Subjek pesan',
        form_message: 'Pesan',
        form_message_ph: 'Tulis pesan Anda...',
        form_send: 'Kirim Pesan',
        form_sent: 'Pesan Terkirim!',

        // Footer
        footer_desc: 'Antusias IT Support | Troubleshooting Hardware, Software & Jaringan',
        footer_made: 'Dibuat dengan <i class="fas fa-heart"></i> di Bandung',

        // Typing titles
        typing_titles: [
            'IT Support Enthusiast',
            'Web Developer',
            'Data Quality Assurance',
            'Mobile Developer',
            'Problem Solver'
        ]
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;

    // Update text content elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update HTML content elements (for <strong>, <br>, <i> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Restart typing effect with new language titles
    // Check if it exists first (prevents crash on initial load when restoring language)
    if (typeof window.resetTyping === 'function') {
        window.resetTyping();
    }

    // Save preference
    localStorage.setItem('portfolio-lang', lang);
}

// ===== Auto-Reset: Force reload if page is stale (tab inactive 30+ min) =====
(function () {
    const STALE_THRESHOLD_MS = 30 * 60 * 1000; // 30 minutes
    let lastActiveTime = Date.now();

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            const elapsed = Date.now() - lastActiveTime;
            if (elapsed > STALE_THRESHOLD_MS) {
                // Guard: only reload once to prevent loop
                const key = 'portfolio-stale-reload';
                if (!sessionStorage.getItem(key)) {
                    sessionStorage.setItem(key, '1');
                    window.location.reload();
                } else {
                    sessionStorage.removeItem(key);
                }
            }
        } else {
            lastActiveTime = Date.now();
        }
    });
})();

// ===== Main App =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== Preloader =====
    const preloader = document.getElementById('preloader');

    function hidePreloaderAndInit() {
        preloader.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        initAnimations();
    }

    window.addEventListener('load', () => {
        setTimeout(hidePreloaderAndInit, 800);
    });

    // Fallback: ensure preloader always hides
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            hidePreloaderAndInit();
        }
    }, 3000);

    // ===== Language Switcher =====
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });

    // Restore saved language
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    }

    // ===== Custom Cursor =====
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            cursorRing.style.left = e.clientX + 'px';
            cursorRing.style.top = e.clientY + 'px';
        });

        const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .skill-category, .timeline-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });
    }

    // ===== Navbar =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        navToggle.classList.add('active');
        navMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closeSidebar() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNav();
        handleBackToTop();
    });

    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });

    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===== Typing Effect =====
    const typingText = document.getElementById('typingText');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout = null;
    let typingGeneration = 0; // Incremented on each reset to kill old instances

    function getTitles() {
        return translations[currentLang].typing_titles;
    }

    function typeEffect(generation) {
        // If a newer resetTyping() was called, this instance is stale — stop
        if (generation !== typingGeneration) return;

        const titles = getTitles();
        const currentTitle = titles[titleIndex % titles.length];
        let speed;

        if (!isDeleting) {
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentTitle.length) {
                isDeleting = true;
                speed = 2000;
            } else {
                speed = 80;
            }
        } else {
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                speed = 400;
            } else {
                speed = 40;
            }
        }

        typingTimeout = setTimeout(() => typeEffect(generation), speed);
    }

    function resetTyping() {
        // Increment generation to invalidate any running typeEffect instances
        typingGeneration++;
        if (typingTimeout) {
            clearTimeout(typingTimeout);
            typingTimeout = null;
        }
        titleIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typingText.textContent = '';
        // Capture current generation before async call
        const gen = typingGeneration;
        typeEffect(gen);
    }

    // Make resetTyping accessible globally for setLanguage()
    window.resetTyping = resetTyping;

    // Start typing (use resetTyping to ensure single instance)
    resetTyping();

    // ===== Particles Background =====
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        // Clear existing particles to prevent duplication on re-init
        while (particlesContainer.firstChild) {
            particlesContainer.removeChild(particlesContainer.firstChild);
        }

        const particleCount = window.innerWidth < 768 ? 30 : 60;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.3)' : 'rgba(6, 182, 212, 0.3)'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 8 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 4}s;
            `;
            particlesContainer.appendChild(particle);
        }

        if (!document.getElementById('particleStyles')) {
            const style = document.createElement('style');
            style.id = 'particleStyles';
            style.textContent = `
                @keyframes particleFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                    25% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * -40}px) scale(1.2); opacity: 0.6; }
                    50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * -60}px) scale(0.8); opacity: 0.4; }
                    75% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * -30}px) scale(1.1); opacity: 0.5; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    createParticles();

    // ===== Scroll Animations =====
    function initAnimations() {
        // Remove 'animated' class from elements to re-trigger animations
        // This ensures animations play correctly on BFCache restores
        document.querySelectorAll('[data-animate].animated').forEach(el => {
            el.classList.remove('animated');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, parseInt(delay));
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });

        // Re-run counter and skill bar animations (needed for BFCache restores)
        animateCounters();
        animateSkillBars();
    }

    // ===== Counter Animation =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');

        // Set final values immediately as fallback so they never show 0
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            counter.textContent = target;
        });

        // Then animate them when visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    let current = 0;
                    const increment = target / 40;
                    const duration = 60;

                    // Reset to 0 and animate up
                    entry.target.textContent = '0';

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            entry.target.textContent = Math.ceil(current);
                            setTimeout(updateCounter, duration);
                        } else {
                            entry.target.textContent = target;
                        }
                    };

                    setTimeout(updateCounter, 100);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ===== Skill Progress Bars =====
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        // Reset bars first so they re-animate on BFCache restore
        skillBars.forEach(bar => {
            bar.style.width = '0%';
        });

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // ===== Portfolio Filter =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(fadeStyle);

    // ===== Contact Form =====
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const mailtoLink = `mailto:saepulrohman3445@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailtoLink;

        const btn = contactForm.querySelector('.btn-submit');
        const originalHTML = btn.innerHTML;
        const t = translations[currentLang];
        btn.innerHTML = `<span>${t.form_sent}</span><i class="fas fa-check"></i>`;
        btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });

    // ===== Back to Top =====
    const backToTop = document.getElementById('backToTop');

    function handleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== Parallax =====
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-content');
        if (hero && window.scrollY < window.innerHeight) {
            hero.style.transform = `translateY(${window.scrollY * 0.15}px)`;
            hero.style.opacity = 1 - (window.scrollY / (window.innerHeight * 0.8));
        }
    });

    // ===== Tilt Effect =====
    if (window.matchMedia('(pointer: fine)').matches) {
        const tiltCards = document.querySelectorAll('.portfolio-card, .skill-category');

        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

});

// ===== Image Gallery =====
const galleryImages = [
    { src: 'image/analisis-sentiment/1-login.png', caption: 'Login Page' },
    { src: 'image/analisis-sentiment/2-register.png', caption: 'Register Page' },
    { src: 'image/analisis-sentiment/3-inputdata.png', caption: 'Input Data' },
    { src: 'image/analisis-sentiment/4-profilpengguna.png', caption: 'User Profile' },
    { src: 'image/analisis-sentiment/5-riwayat.png', caption: 'Analysis History' },
    { src: 'image/analisis-sentiment/6-hasilanalisis-dashboard.png', caption: 'Dashboard' },
    { src: 'image/analisis-sentiment/8-hasilanalisis-topik&hashtag.png', caption: 'Topics & Hashtags' },
    { src: 'image/analisis-sentiment/9-hasilanalisis-visualisasi.png', caption: 'Visualization' },
    { src: 'image/analisis-sentiment/10-hasilanalisis-analisiskata.png', caption: 'Word Analysis' },
    { src: 'image/analisis-sentiment/11-hasilanalisis-evaluasikebijakan.png', caption: 'Policy Evaluation' }
];

let currentSlide = 0;

function openGallery() {
    galleryImages.length = 0;
    gallerySentiment.forEach(img => galleryImages.push(img));
    currentSlide = 0;
    updateGallery();
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryModal').classList.remove('active');
    document.body.style.overflow = '';
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + galleryImages.length) % galleryImages.length;
    updateGallery();
}

function updateGallery() {
    const img = document.getElementById('galleryImage');
    const caption = document.getElementById('galleryCaption');
    const counter = document.getElementById('galleryCounter');

    img.style.opacity = '0';
    setTimeout(() => {
        img.src = galleryImages[currentSlide].src;
        img.alt = galleryImages[currentSlide].caption;
        caption.textContent = galleryImages[currentSlide].caption;
        counter.textContent = `${currentSlide + 1} / ${galleryImages.length}`;
        img.style.opacity = '1';
    }, 150);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

// IoT Gallery - Tempat Sampah Otomatis
const galleryIot1 = [
    { src: 'image/tempat-sampah-otomatis/1.jpeg', caption: 'Tempat Sampah Otomatis - Front View' },
    { src: 'image/tempat-sampah-otomatis/2.jpeg', caption: 'Tempat Sampah Otomatis - Detail' }
];

function openGalleryIot1() {
    galleryImages.length = 0;
    galleryIot1.forEach(img => galleryImages.push(img));
    currentSlide = 0;
    updateGallery();
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// IoT Gallery - Mobil Remote Bluetooth
const galleryIot2 = [
    { src: 'image/mobil-remote-bluetooth/1.jpeg', caption: 'Mobil Remote Bluetooth' }
];

function openGalleryIot2() {
    galleryImages.length = 0;
    galleryIot2.forEach(img => galleryImages.push(img));
    currentSlide = 0;
    updateGallery();
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Update openGallery to use Sentiment Analysis images
const gallerySentiment = [
    { src: 'image/analisis-sentiment/1-login.png', caption: 'Login Page' },
    { src: 'image/analisis-sentiment/2-register.png', caption: 'Register Page' },
    { src: 'image/analisis-sentiment/3-inputdata.png', caption: 'Input Data' },
    { src: 'image/analisis-sentiment/4-profilpengguna.png', caption: 'User Profile' },
    { src: 'image/analisis-sentiment/5-riwayat.png', caption: 'Analysis History' },
    { src: 'image/analisis-sentiment/6-hasilanalisis-dashboard.png', caption: 'Dashboard' },
    { src: 'image/analisis-sentiment/8-hasilanalisis-topik&hashtag.png', caption: 'Topics & Hashtags' },
    { src: 'image/analisis-sentiment/9-hasilanalisis-visualisasi.png', caption: 'Visualization' },
    { src: 'image/analisis-sentiment/10-hasilanalisis-analisiskata.png', caption: 'Word Analysis' },
    { src: 'image/analisis-sentiment/11-hasilanalisis-evaluasikebijakan.png', caption: 'Policy Evaluation' }
];

// Mobile Gallery - HarsaEdu
const galleryMobile = [
    { src: 'image/aplikasi-harsaedu/Login.jpg', caption: 'Login' },
    { src: 'image/aplikasi-harsaedu/Daftar.jpg', caption: 'Register' },
    { src: 'image/aplikasi-harsaedu/Home.png', caption: 'Home' },
    { src: 'image/aplikasi-harsaedu/Menu Kelas.jpg', caption: 'Class Menu' },
    { src: 'image/aplikasi-harsaedu/List Kategori.jpg', caption: 'Category List' },
    { src: 'image/aplikasi-harsaedu/List Kategori-Dropdown.jpg', caption: 'Category Dropdown' },
    { src: 'image/aplikasi-harsaedu/List Paket Berlangganan.jpg', caption: 'Subscription Packages' },
    { src: 'image/aplikasi-harsaedu/pembayaran.jpg', caption: 'Payment' },
    { src: 'image/aplikasi-harsaedu/Isi Rekomendasi Kelas.jpg', caption: 'Class Recommendations' },
    { src: 'image/aplikasi-harsaedu/Notifikasi.jpg', caption: 'Notifications' },
    { src: 'image/aplikasi-harsaedu/Profile belum berlangganan.jpg', caption: 'Profile (Unsubscribed)' },
    { src: 'image/aplikasi-harsaedu/Belum Berlangganan.jpg', caption: 'Not Yet Subscribed' }
];

function openGalleryMobile() {
    galleryImages.length = 0;
    galleryMobile.forEach(img => galleryImages.push(img));
    currentSlide = 0;
    updateGallery();
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
