document.addEventListener('DOMContentLoaded', () => {

    // --- Faculty Details Data ---
    const facultyDetails = {
        sharia: {
            title: "كلية الشريعة والدراسات الإسلامية",
            description: "تُعنى بدراسة العلوم الشرعية والقانونية وفق منهج علمي أكاديمي، لتأهيل طلبة قادرين على الفهم العميق للشريعة والقانون.",
            departments: ["قسم الشريعة", "قسم الدراسات الإسلامية", "قسم القانون"],
            careers: ["القضاء والمحاماة", "الاستشارات القانونية والشرعية", "التدريس الأكاديمي", "العمل في المؤسسات الدينية"]
        },
        ayat: {
            title: "كلية آيات للقرآن وعلومه",
            description: "كلية متخصصة في علوم القرآن الكريم، تهدف إلى تخريج جيل حافظ لكتاب الله وملم بتفسيره وعلومه وقراءاته.",
            departments: ["قسم علوم القرآن", "قسم التفسير وعلومه", "قسم القراءات"],
            careers: ["تدريس القرآن الكريم وعلومه", "العمل في المراكز البحثية القرآنية", "الإمامة والخطابة", "الدعوة والإرشاد"]
        },
        education: {
            title: "كلية العلوم التربوية والنفسية",
            description: "تهدف إلى إعداد كوادر تربوية متخصصة في التعليم والإدارة التربوية، مزودة بأحدث النظريات في علم النفس وطرق التدريس.",
            departments: ["قسم المناهج وطرائق التدريس", "قسم علم النفس التربوي", "قسم الإرشاد النفسي"],
            careers: ["التدريس في المدارس والمعاهد", "الإرشاد النفسي المدرسي", "تطوير المناهج التعليمية", "العمل في مراكز التوجيه والإرشاد"]
        },
        computer: {
            title: "كلية هندسة الحاسوب",
            description: "تركز على تزويد الطلبة بمهارات تقنية حديثة في هندسة الحاسوب والبرمجيات لمواكبة التطور التكنولوجي المتسارع.",
            departments: ["قسم هندسة الحاسوب"],
            careers: ["مهندس برمجيات", "مهندس نظم حاسوبية", "مطور تطبيقات", "مدير مشاريع تقنية"]
        },
        arabic: {
            title: "كلية اللغة العربية",
            description: "تهتم بدراسة اللغة العربية وآدابها والنقد الأدبي للحفاظ على التراث اللغوي وتعزيز الهوية الثقافية.",
            departments: ["قسم اللغة العربية", "قسم الأدب والنقد"],
            careers: ["التدريس", "التحرير والتدقيق اللغوي", "الصحافة والإعلام", "العمل في المجامع اللغوية"]
        },
        economics: {
            title: "كلية الاقتصاد والعلوم الإدارية",
            description: "تُعنى بإعداد متخصصين في المجالات الاقتصادية والإدارية والمحاسبية، قادرين على تحليل الأسواق وإدارة المؤسسات بكفاءة.",
            departments: ["قسم الاقتصاد", "قسم الإدارة", "قسم المحاسبة"],
            careers: ["محاسب قانوني", "مدير إداري", "محلل اقتصادي", "العمل في البنوك والمؤسسات المالية"]
        },
        institute: {
            title: "المعهد التقني الهندسي",
            description: "معهد متخصص يوفر برامج تقنية تطبيقية تهدف إلى تأهيل الكوادر الفنية القادرة على تلبية احتياجات سوق العمل التقني.",
            departments: ["قسم الهندسة الإلكترونية", "قسم الشبكات", "قسم الصيانة التقنية"],
            careers: ["فني إلكترونيات", "مدير شبكات", "فني صيانة حاسوب وأجهزة", "الدعم الفني"]
        }
    };

    // --- Modal Logic ---
    const facultyModal = document.getElementById('facultyModal');
    const closeFacultyModalBtn = document.getElementById('closeFacultyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const detailButtons = document.querySelectorAll('.details-btn');

    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            const data = facultyDetails[id];

            if (data) {
                modalTitle.textContent = data.title;
                modalContent.innerHTML = `
                    <div class="modal-section">
                        <h4>نبذة عن الكلية</h4>
                        <p>${data.description}</p>
                    </div>
                    <div class="modal-section">
                        <h4>الأقسام الأكاديمية</h4>
                        <ul class="modal-list">
                            ${data.departments.map(dept => `<li>${dept}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="modal-section">
                        <h4>مجالات العمل المستقبلية</h4>
                        <ul class="modal-list">
                            ${data.careers.map(job => `<li>${job}</li>`).join('')}
                        </ul>
                    </div>
                `;
                facultyModal.classList.add('open');
            }
        });
    });

    if (closeFacultyModalBtn) {
        closeFacultyModalBtn.addEventListener('click', () => {
            facultyModal.classList.remove('open');
        });
    }

    if (facultyModal) {
        facultyModal.addEventListener('click', (e) => {
            if (e.target === facultyModal) {
                facultyModal.classList.remove('open');
            }
        });
    }

    // --- Existing Logic (Menu, Scroll, Animation, Counters, Lightbox) ---

    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // ✅ NEW: Close menu when clicking any link inside it
        const navAnchors = navLinks.querySelectorAll('a');
        navAnchors.forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // ✅ NEW: Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const clickedInsideMenu = navLinks.contains(e.target);
            const clickedMenuBtn = menuBtn.contains(e.target);

            if (!clickedInsideMenu && !clickedMenuBtn) {
                navLinks.classList.remove('active');
            }
        });
    }

    // 2. Sticky Navbar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // 3. Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 120;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // 4. Staggered Card Animation
    const cardsGrid = document.getElementById('cardsGrid');
    const cards = document.querySelectorAll('.card');

    const animateCards = () => {
        if (!cardsGrid) return;

        const gridTop = cardsGrid.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (gridTop < windowHeight - 100) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 150);
            });
        }
    };

    // 6. Counters Animation (Moved up to define 'started')
    const counters = document.querySelectorAll('.stat-number');
    let started = false;

    function startCount(el) {
        let goal = Number(el.dataset.target || 0);
        let count = setInterval(() => {
            let current = parseInt(el.textContent) || 0;
            let increment = Math.ceil(goal / 100);

            if (current < goal) {
                el.textContent = current + increment;
            } else {
                el.textContent = goal;
                clearInterval(count);
            }
        }, 20);
    }

    window.addEventListener('scroll', () => {
        revealOnScroll();
        animateCards();

        // Counters check (✅ safe check if stats section exists)
        const statsSection = document.querySelector('.stats');
        if (statsSection && window.scrollY >= statsSection.offsetTop - 600 && !started) {
            counters.forEach((num) => startCount(num));
            started = true;
        }
    });

    revealOnScroll(); // Initial Check

    // 5. Accordion Logic
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            accordions.forEach(item => {
                if (item !== this) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                }
            });

            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // 7. Lightbox for Gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.getElementById('closeLightbox');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img || !lightbox || !lightboxImg) return;

            lightbox.style.display = 'flex';
            setTimeout(() => lightbox.classList.add('show'), 10);
            lightboxImg.src = img.src;
        });
    });

    const closeLightboxFunc = () => {
        if (!lightbox) return;

        lightbox.classList.remove('show');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightboxFunc);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightboxFunc();
            }
        });
    }
});
