document.addEventListener("DOMContentLoaded", () => {

    // =======================================================
    // 0. CON TRỎ CHUỘT AURA GLOW & HOVER TƯƠNG TÁC
    const cursor = document.getElementById('cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.16;
        cursorY += (mouseY - cursorY) * 0.16;

        if (cursor) {
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveSelector = 'button, a, .bai12-box, .thanh-vien-item, .member-card, .design-by, .robot-puller, .req-card, .tinh-nang-card, .tong-quan-card, .q2-hud-card, .hud-reveal-btn, .feature-card';
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelector)) {
            document.body.classList.add('hover-active');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelector)) {
            document.body.classList.remove('hover-active');
        }
    });

    // =======================================================
    // 1. CHUYỂN ĐỘNG CHỮ KHI CUỘN ĐẾN CÂU HỎI (WORD BY WORD)
    const wordByWordElements = document.querySelectorAll('.word-by-word');

    wordByWordElements.forEach(el => {
        const text = el.innerText.trim();
        const words = text.split(/\s+/);
        el.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    });

    function triggerWordAnimation(container) {
        const words = container.querySelectorAll('.word');
        words.forEach((word, index) => {
            word.classList.remove('show');
            setTimeout(() => {
                word.classList.add('show');
            }, 180 + index * 28);
        });
    }

    function resetWordAnimation(container) {
        const words = container.querySelectorAll('.word');
        words.forEach(word => word.classList.remove('show'));
    }

    // =======================================================
    // 2. TỰ ĐỘNG BẬT HIỆU ỨNG KHI CUỘN NỘI DUNG (SECTION OBSERVER)
    const slides = document.querySelectorAll('.slide');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                const wordContainers = entry.target.querySelectorAll('.word-by-word');
                wordContainers.forEach(container => triggerWordAnimation(container));
            } else {
                entry.target.classList.remove('active');

                const wordContainers = entry.target.querySelectorAll('.word-by-word');
                wordContainers.forEach(container => resetWordAnimation(container));

                // Khôi phục Robot khi người dùng cuộn ra ngoài slide khác rồi quay lại
                if (robotPuller && entry.target.contains(robotPuller)) {
                    isExecuting = false;
                    robotPuller.style.top = '50%';
                    robotPuller.style.left = '18vw';
                    robotPuller.style.opacity = '1';
                    robotPuller.style.pointerEvents = 'auto';
                    robotPuller.classList.remove('is-walking', 'is-pulling');
                    if (robotSpeech) {
                        const speechStrong = robotSpeech.querySelector('strong');
                        if (speechStrong) speechStrong.textContent = 'XEM KẾT QUẢ';
                        robotSpeech.style.opacity = '1';
                    }

                    cards.forEach(item => {
                        if (item.el) item.el.classList.remove('pulled');
                    });
                }
            }
        });
    }, { threshold: 0.2 });

    slides.forEach(slide => observer.observe(slide));

    // =======================================================
    // 3. ROBOT KÉO THẺ YÊU CẦU Ở SLIDE 3
    const robotPuller = document.getElementById('robot-puller');
    const robotSpeech = document.getElementById('robot-speech');
    const resultStage = document.getElementById('result-stage');
    
    const cards = [
        { el: document.getElementById('card-1'), rightApproach: '41vw', pullBackTo: '3.0vw' },
        { el: document.getElementById('card-2'), rightApproach: '44vw', pullBackTo: '6.0vw' },
        { el: document.getElementById('card-3'), rightApproach: '47vw', pullBackTo: '9.0vw' },
        { el: document.getElementById('card-4'), rightApproach: '50vw', pullBackTo: '12.0vw' }
    ];

    let isExecuting = false;

    if (robotPuller) {
        robotPuller.addEventListener('click', async () => {
            if (isExecuting) return;
            isExecuting = true;

            // Reset trạng thái nếu người dùng bấm lại trước đó
            const anyPulled = cards.some(c => c.el && c.el.classList.contains('pulled'));
            if (anyPulled) {
                cards.forEach(item => { if (item.el) item.el.classList.remove('pulled'); });
                await new Promise(r => setTimeout(r, 350));
            }

            if (robotSpeech) robotSpeech.style.opacity = '0';

            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

            // Vòng lặp kéo từng card đúng như cũ
            for (let i = 0; i < cards.length; i++) {
                const item = cards[i];
                if (!item.el) continue;

                const stageRect = resultStage ? resultStage.getBoundingClientRect() : { top: 0 };
                const cardRect = item.el.getBoundingClientRect();
                const cardCenterY = cardRect.top + cardRect.height / 2 - stageRect.top;

                robotPuller.classList.remove('is-pulling');
                robotPuller.classList.add('is-walking');
                robotPuller.style.top = `${cardCenterY}px`;
                robotPuller.style.left = item.rightApproach;
                await sleep(650);

                robotPuller.classList.remove('is-walking');
                robotPuller.classList.add('is-pulling');
                await sleep(150);

                item.el.classList.add('pulled');
                robotPuller.style.left = item.pullBackTo;
                await sleep(650);

                robotPuller.classList.remove('is-pulling');
                await sleep(150);
            }

            // === ĐOẠN ĐÃ SỬA: SỬ DỤNG DẠNG BƯỚC ĐI VỀ BÊN PHẢI VÀ MỜ DẦN BIẾN MẤT ===
            robotPuller.classList.add('is-walking');
            robotPuller.style.left = '100vw';
            robotPuller.style.opacity = '0';
            robotPuller.style.pointerEvents = 'none'; // Tránh việc click trúng khi đã ẩn
            await sleep(900);
            robotPuller.classList.remove('is-walking');

            isExecuting = false;
        });
    }
});

function toggleQ2Answer() {
    const ansBox = document.getElementById('q2-answer-output');
    const btn = document.getElementById('btn-reveal-ans-2');
    if (ansBox && btn) {
        ansBox.classList.toggle('show');
        btn.classList.toggle('active');
    }
}
