document.addEventListener('DOMContentLoaded', () => {
  // ── Question Data ──────────────────────────────────────────────
  const questions = [
    {
      type: 'mc',
      category: '§1. Chức năng Hệ QTCSDL',
      text: 'Hệ quản trị cơ sở dữ liệu (Hệ QTCSDL) bao gồm mấy nhóm chức năng chính?',
      options: ['2 nhóm', '3 nhóm', '4 nhóm', '5 nhóm'],
      correct: 1,
      explain: 'Hệ QTCSDL gồm 3 nhóm chức năng chính: (1) Định nghĩa dữ liệu, (2) Cập nhật và truy xuất dữ liệu, (3) Bảo mật và an toàn CSDL.'
    },
    {
      type: 'tf',
      category: '§3. Kiến trúc CSDL tập trung',
      text: '"Hệ CSDL mà CSDL được lưu trữ tập trung trên một máy tính được gọi là hệ cơ sở dữ liệu tập trung."',
      correct: true,
      explain: 'Đây là định nghĩa chính xác của hệ CSDL tập trung theo sách giáo khoa.'
    },
    {
      type: 'multi',
      category: '§2. Thành phần Hệ CSDL',
      text: 'Một hệ cơ sở dữ liệu (Hệ CSDL) bao gồm những thành phần nào? Chọn tất cả đáp án đúng.',
      options: ['Cơ sở dữ liệu (CSDL)', 'Hệ quản trị CSDL (Hệ QTCSDL)', 'Phần mềm ứng dụng CSDL', 'Hệ điều hành Windows', 'Mạng Internet'],
      correct: [0, 1, 2],
      explain: 'Một hệ CSDL hoàn chỉnh gồm đúng 3 thành phần: CSDL, Hệ QTCSDL, và các phần mềm ứng dụng CSDL.'
    },
    {
      type: 'mc',
      category: '§2. Mô hình Khách - Chủ (Client-Server)',
      text: 'Trong mô hình Khách – Chủ (Client – Server), thành phần "Khách" (Client) có nhiệm vụ chính là gì?',
      options: [
        'Lưu trữ và quản lý toàn bộ CSDL',
        'Tổ chức giao diện, tiếp nhận yêu cầu từ người dùng và gửi đến phần Chủ',
        'Xử lý dữ liệu và trả kết quả cuối cùng',
        'Sao lưu và phục hồi dữ liệu khi có sự cố'
      ],
      correct: 1,
      explain: 'Phần Khách (Client) tổ chức giao diện tương tác với người dùng, tiếp nhận yêu cầu, gửi đến phần Chủ để xử lý, rồi nhận và hiển thị kết quả.'
    },
    {
      type: 'fill',
      category: '§2. Phần mềm ứng dụng CSDL',
      text: 'Điền vào chỗ trống: "Phần mềm ứng dụng CSDL là phần mềm được xây dựng tương tác với hệ _______ nhằm hỗ trợ người dùng khai thác thông tin từ CSDL."',
      correct: ['QTCSDL', 'qtcsdl', 'Qtcsdl', 'quản trị CSDL', 'quản trị cơ sở dữ liệu'],
      explain: 'Phần mềm ứng dụng CSDL tương tác với hệ QTCSDL để khai thác thông tin theo các yêu cầu xác định.'
    },
    {
      type: 'mc',
      category: '§3. Hệ CSDL phân tán',
      text: 'Công ty ABC có trụ sở chính tại Hà Nội và các chi nhánh tại Đà Nẵng, TP.HCM, Cần Thơ. Mỗi nơi có CSDL cục bộ và hệ QTCSDL riêng, liên kết qua mạng máy tính. Đây là loại hệ CSDL nào?',
      options: ['Hệ CSDL tập trung', 'Hệ CSDL phân tán', 'Hệ CSDL đám mây', 'Máy chủ tệp (File Server)'],
      correct: 1,
      explain: 'Dữ liệu phân tán trên nhiều trạm (Hà Nội, Đà Nẵng, TP.HCM, Cần Thơ), mỗi trạm có CSDL cục bộ và hệ QTCSDL riêng → đây chính là hệ CSDL phân tán.'
    },
    {
      type: 'tf',
      category: '§3. Ứng dụng Cục bộ & Toàn cục',
      text: '"Ứng dụng cục bộ là ứng dụng chạy tại một trạm và sử dụng dữ liệu từ nhiều trạm khác nhau trong mạng."',
      correct: false,
      explain: 'Sai! Ứng dụng cục bộ CHỈ sử dụng dữ liệu của chính trạm đó. Ứng dụng toàn cục (phân tán) mới sử dụng dữ liệu từ ít nhất 2 trạm.'
    },
    {
      type: 'multi',
      category: '§3. Ưu điểm CSDL phân tán',
      text: 'Chọn TẤT CẢ các ưu điểm của hệ CSDL phân tán so với hệ CSDL tập trung:',
      options: [
        'Dễ dàng mở rộng, bổ sung trạm mới',
        'Tính sẵn sàng và độ tin cậy cao',
        'Chi phí đầu tư và duy trì thấp',
        'Tối ưu hiệu năng truy xuất diện rộng',
        'Thiết kế và triển khai đơn giản'
      ],
      correct: [0, 1, 3],
      explain: 'Hệ CSDL phân tán có 3 ưu điểm vượt trội: dễ mở rộng, tin cậy cao, hiệu năng diện rộng tốt. Chi phí cao và thiết kế phức tạp là NHƯỢC ĐIỂM.'
    },
    {
      type: 'mc',
      category: '§1. Bảo mật & An toàn CSDL',
      text: 'Nhóm chức năng nào của hệ QTCSDL đảm nhiệm việc phân quyền truy cập, bảo vệ dữ liệu và sao lưu dự phòng?',
      options: [
        'Nhóm định nghĩa dữ liệu',
        'Nhóm cập nhật và truy xuất dữ liệu',
        'Nhóm bảo mật và an toàn CSDL',
        'Nhóm giao diện lập trình ứng dụng'
      ],
      correct: 2,
      explain: 'Nhóm chức năng bảo mật và an toàn CSDL cung cấp phân quyền truy cập, bảo vệ dữ liệu, sao lưu dự phòng (backup) và phục hồi khi có sự cố.'
    },
    {
      type: 'mc',
      category: '§3. CSDL một người dùng',
      text: 'Hệ CSDL tập trung một người dùng trên một máy (ví dụ: Microsoft Access) có đặc điểm gì đặc biệt về vai trò người dùng?',
      options: [
        'Cần đội ngũ quản trị viên chuyên nghiệp riêng biệt',
        'Người dùng vừa thiết kế, tạo lập, bảo trì CSDL, vừa viết ứng dụng, vừa là người dùng cuối',
        'Bắt buộc phải có kết nối mạng Internet để hoạt động',
        'Chỉ cho phép đọc dữ liệu, không thể chỉnh sửa hay xóa'
      ],
      correct: 1,
      explain: 'Trong hệ CSDL tập trung một người dùng (như Access), người dùng tích hợp cả 3 vai trò: thiết kế/tạo lập/bảo trì CSDL, viết phần mềm ứng dụng, và khai thác thông tin.'
    }
  ];

  // ── Type labels ────────────────────────────────────────────────
  const typeLabels = {
    mc: 'TRẮC NGHIỆM ABCD',
    tf: 'ĐÚNG / SAI',
    multi: 'CHỌN NHIỀU ĐÁP ÁN',
    fill: 'ĐIỀN TỪ KHUYẾT'
  };

  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  // ── Game State ─────────────────────────────────────────────────
  let game = {
    current: 0,
    lives: 3,
    xp: 0,
    combo: 1,
    maxCombo: 1,
    correct: 0,
    answers: [],
    isLocked: false
  };

  // ── DOM References ─────────────────────────────────────────────
  const el = {
    startScreen:    document.getElementById('qg-start'),
    playScreen:     document.getElementById('qg-play'),
    resultScreen:   document.getElementById('qg-result'),
    feedbackOverlay:document.getElementById('qg-feedback'),
    btnStart:       document.getElementById('btn-start-game'),
    hud:            document.getElementById('game-hud'),
    hudHearts:      document.getElementById('hud-hearts'),
    hudQNum:        document.getElementById('hud-qnum'),
    hudProgressFill:document.getElementById('hud-progress-fill'),
    hudXP:          document.getElementById('hud-xp'),
    hudCombo:       document.getElementById('hud-combo'),
    qCategory:      document.getElementById('q-category'),
    qTypeBadge:     document.getElementById('q-type-badge'),
    qText:          document.getElementById('q-text'),
    qOptions:       document.getElementById('q-options'),
    btnSubmitMulti: document.getElementById('btn-submit-multi'),
    feedbackIcon:   document.getElementById('feedback-icon'),
    feedbackTitle:  document.getElementById('feedback-title'),
    feedbackXP:     document.getElementById('feedback-xp'),
    feedbackExplain:document.getElementById('feedback-explain'),
    btnNextQ:       document.getElementById('btn-next-q'),
    resultGrade:    document.getElementById('result-grade'),
    resultGradeLabel:document.getElementById('result-grade-label'),
    resultXPFinal:  document.getElementById('result-xp-final'),
    resultCorrect:  document.getElementById('result-correct'),
    resultHearts:   document.getElementById('result-hearts'),
    resultCombo:    document.getElementById('result-combo'),
    btnRetry:       document.getElementById('btn-retry')
  };

  // ── Event Listeners ────────────────────────────────────────────
  el.btnStart.addEventListener('click', startGame);
  el.btnNextQ.addEventListener('click', nextQuestion);
  el.btnRetry.addEventListener('click', resetGame);

  // ── Core Functions ─────────────────────────────────────────────

  function startGame() {
    el.startScreen.classList.remove('active');
    el.playScreen.classList.add('active');
    el.hud.classList.add('active');
    showQuestion(0);
  }

  function showQuestion(index) {
    game.current = index;
    game.isLocked = false;
    const q = questions[index];

    // Update badges
    el.qCategory.textContent = q.category;
    el.qTypeBadge.textContent = typeLabels[q.type];

    // Update question text
    el.qText.textContent = q.text;

    // Clear options container
    el.qOptions.innerHTML = '';
    el.btnSubmitMulti.style.display = 'none';
    el.btnSubmitMulti.onclick = null;

    // Render by type
    switch (q.type) {
      case 'mc':   renderMC(q);    break;
      case 'tf':   renderTF(q);    break;
      case 'multi':renderMulti(q); break;
      case 'fill': renderFill(q);  break;
    }

    // Animate question area in
    const qArea = document.querySelector('.qg-question-area');
    if (qArea) {
      qArea.classList.remove('animate-in');
      void qArea.offsetWidth;
      qArea.classList.add('animate-in');
    }

    updateHUD();
  }

  // ── Render: Multiple Choice ────────────────────────────────────
  function renderMC(q) {
    const grid = document.createElement('div');
    grid.className = 'qg-mc-grid';

    q.options.forEach((opt, i) => {
      const card = document.createElement('button');
      card.className = 'qg-mc-card';
      card.setAttribute('data-index', i);

      const cornerTL = document.createElement('span');
      cornerTL.className = 'qg-card-hud-corner top-left';
      const cornerBR = document.createElement('span');
      cornerBR.className = 'qg-card-hud-corner bottom-right';

      const letter = document.createElement('span');
      letter.className = 'qg-mc-letter';
      letter.textContent = optionLetters[i];

      const text = document.createElement('span');
      text.className = 'qg-mc-text';
      text.textContent = opt;

      card.appendChild(cornerTL);
      card.appendChild(cornerBR);
      card.appendChild(letter);
      card.appendChild(text);

      card.addEventListener('click', () => {
        if (game.isLocked) return;
        game.isLocked = true;

        card.classList.add('selected');

        const isCorrect = (i === q.correct);

        if (isCorrect) {
          card.classList.add('correct');
        } else {
          card.classList.add('wrong');
          // Highlight correct card
          const correctCard = grid.querySelector(`[data-index="${q.correct}"]`);
          if (correctCard) correctCard.classList.add('correct');
        }

        // Disable all cards
        grid.querySelectorAll('.qg-mc-card').forEach(c => c.disabled = true);

        setTimeout(() => processAnswer(isCorrect, q), 600);
      });

      grid.appendChild(card);
    });

    el.qOptions.appendChild(grid);
  }

  // ── Render: True / False ───────────────────────────────────────
  function renderTF(q) {
    const grid = document.createElement('div');
    grid.className = 'qg-tf-grid';

    const btnTrue = document.createElement('button');
    btnTrue.className = 'qg-tf-btn qg-tf-true';
    btnTrue.innerHTML = `
      <div class="qg-tf-inner">
        <span class="qg-tf-icon">✓</span>
        <span class="qg-tf-label">ĐÚNG</span>
        <span class="qg-tf-sub">TRUE</span>
      </div>
    `;

    const btnFalse = document.createElement('button');
    btnFalse.className = 'qg-tf-btn qg-tf-false';
    btnFalse.innerHTML = `
      <div class="qg-tf-inner">
        <span class="qg-tf-icon">✕</span>
        <span class="qg-tf-label">SAI</span>
        <span class="qg-tf-sub">FALSE</span>
      </div>
    `;

    function handleTF(value, clickedBtn) {
      if (game.isLocked) return;
      game.isLocked = true;

      clickedBtn.classList.add('selected');
      const isCorrect = (value === q.correct);

      if (isCorrect) {
        clickedBtn.classList.add('correct');
      } else {
        clickedBtn.classList.add('wrong');
        // Highlight correct button
        const correctBtn = q.correct ? btnTrue : btnFalse;
        correctBtn.classList.add('correct');
      }

      btnTrue.disabled = true;
      btnFalse.disabled = true;

      setTimeout(() => processAnswer(isCorrect, q), 600);
    }

    btnTrue.addEventListener('click', () => handleTF(true, btnTrue));
    btnFalse.addEventListener('click', () => handleTF(false, btnFalse));

    grid.appendChild(btnTrue);
    grid.appendChild(btnFalse);
    el.qOptions.appendChild(grid);
  }

  // ── Render: Multi-Select ───────────────────────────────────────
  function renderMulti(q) {
    const list = document.createElement('div');
    list.className = 'qg-multi-list';

    q.options.forEach((opt, i) => {
      const item = document.createElement('label');
      item.className = 'qg-multi-item';
      item.setAttribute('data-index', i);

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'qg-multi-checkbox';
      checkbox.value = i;

      const box = document.createElement('span');
      box.className = 'qg-multi-box';
      box.innerHTML = `<svg class="qg-multi-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`;

      const text = document.createElement('span');
      text.className = 'qg-multi-text';
      text.textContent = opt;

      checkbox.addEventListener('change', () => {
        item.classList.toggle('checked', checkbox.checked);
      });

      item.appendChild(checkbox);
      item.appendChild(box);
      item.appendChild(text);
      list.appendChild(item);
    });

    el.qOptions.appendChild(list);

    // Show submit button
    el.btnSubmitMulti.style.display = 'inline-flex';
    el.btnSubmitMulti.disabled = false;
    el.btnSubmitMulti.innerHTML = '<span class="btn-check-icon">✓</span><span>XÁC NHẬN</span>';
    el.btnSubmitMulti.onclick = () => {
      if (game.isLocked) return;
      game.isLocked = true;

      const checked = [];
      list.querySelectorAll('.qg-multi-checkbox:checked').forEach(cb => {
        checked.push(parseInt(cb.value));
      });

      const sortedChecked = [...checked].sort((a, b) => a - b);
      const sortedCorrect = [...q.correct].sort((a, b) => a - b);
      const isCorrect = JSON.stringify(sortedChecked) === JSON.stringify(sortedCorrect);

      // Highlight correct and wrong items
      list.querySelectorAll('.qg-multi-item').forEach(item => {
        const idx = parseInt(item.getAttribute('data-index'));
        const isItemCorrect = q.correct.includes(idx);
        const isItemChecked = checked.includes(idx);

        if (isItemCorrect) {
          item.classList.add('correct');
        }
        if (isItemChecked && !isItemCorrect) {
          item.classList.add('wrong');
        }

        // Disable checkbox
        item.querySelector('.qg-multi-checkbox').disabled = true;
      });

      el.btnSubmitMulti.disabled = true;

      setTimeout(() => processAnswer(isCorrect, q), 600);
    };
  }

  // ── Render: Fill-in-the-Blank ──────────────────────────────────
  function renderFill(q) {
    const wrapper = document.createElement('div');
    wrapper.className = 'qg-fill-wrapper';

    const promptBar = document.createElement('div');
    promptBar.className = 'qg-fill-prompt-bar';
    promptBar.innerHTML = '<span class="qg-fill-term-symbol">&gt;_</span>';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'qg-fill-input';
    input.placeholder = 'Gõ câu trả lời vào đây...';
    input.autocomplete = 'off';
    input.spellcheck = false;

    promptBar.appendChild(input);
    wrapper.appendChild(promptBar);
    el.qOptions.appendChild(wrapper);

    // Show submit button
    el.btnSubmitMulti.style.display = 'inline-flex';
    el.btnSubmitMulti.disabled = false;
    el.btnSubmitMulti.innerHTML = '<span class="btn-check-icon">✓</span><span>XÁC NHẬN</span>';
    el.btnSubmitMulti.onclick = () => {
      if (game.isLocked) return;
      const val = input.value.trim();
      if (!val) {
        input.focus();
        return;
      }

      game.isLocked = true;

      const isCorrect = q.correct.some(
        ans => ans.trim().toLowerCase() === val.toLowerCase()
      );

      if (isCorrect) {
        input.classList.add('correct');
      } else {
        input.classList.add('wrong');
        // Show one correct answer
        const hint = document.createElement('div');
        hint.className = 'qg-fill-correct-hint';
        hint.innerHTML = '<span class="hint-icon">✓</span> Đáp án chính xác: <strong>' + q.correct[0] + '</strong>';
        wrapper.appendChild(hint);
      }

      input.disabled = true;
      el.btnSubmitMulti.disabled = true;

      setTimeout(() => processAnswer(isCorrect, q), 600);
    };

    // Allow Enter key to submit
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        el.btnSubmitMulti.click();
      }
    });

    setTimeout(() => input.focus(), 100);
  }

  // ── Check & Process Answer ─────────────────────────────────────
  function processAnswer(isCorrect, q) {
    let xpGained = 0;

    if (isCorrect) {
      xpGained = 100 * game.combo;
      game.xp += xpGained;
      game.correct++;
      game.combo++;
      if (game.combo > 5) game.combo = 5;
      if (game.combo > game.maxCombo) game.maxCombo = game.combo;
    } else {
      game.lives--;
      game.combo = 1;
    }

    game.answers.push({
      index: game.current,
      correct: isCorrect,
      xpGained: xpGained
    });

    updateHUD();

    // Animate heart loss
    if (!isCorrect) {
      const hearts = el.hudHearts.querySelectorAll('.qg-heart');
      const lostHeart = hearts[game.lives]; // the one that just got lost
      if (lostHeart) {
        lostHeart.classList.add('shake');
        setTimeout(() => lostHeart.classList.remove('shake'), 500);
      }
    }

    // Animate XP pulse
    if (isCorrect) {
      el.hudXP.classList.add('pulse');
      setTimeout(() => el.hudXP.classList.remove('pulse'), 500);
    }

    showFeedback(isCorrect, q, xpGained);
  }

  // ── Feedback Overlay ───────────────────────────────────────────
  function showFeedback(isCorrect, q, xpGained) {
    if (isCorrect) {
      el.feedbackIcon.innerHTML = '<span class="qg-fb-icon correct">✓</span>';
      el.feedbackTitle.textContent = 'CHÍNH XÁC!';
      el.feedbackTitle.className = 'qg-feedback-title correct';
      el.feedbackXP.textContent = '+' + xpGained + ' XP';
      el.feedbackXP.className = 'qg-feedback-xp correct';
    } else {
      el.feedbackIcon.innerHTML = '<span class="qg-fb-icon wrong">✕</span>';
      el.feedbackTitle.textContent = 'SAI RỒI!';
      el.feedbackTitle.className = 'qg-feedback-title wrong';
      el.feedbackXP.textContent = '+0 XP';
      el.feedbackXP.className = 'qg-feedback-xp wrong';
    }

    // Combo indicator within feedback
    if (isCorrect && game.combo > 1) {
      const comboText = '🔥'.repeat(Math.min(game.combo - 1, 5)) + ' COMBO x' + game.combo;
      el.feedbackXP.textContent += '  •  ' + comboText;
    }

    el.feedbackExplain.textContent = q.explain;

    // Button text
    if (game.current < questions.length - 1) {
      el.btnNextQ.textContent = 'TIẾP TỤC';
    } else {
      el.btnNextQ.textContent = 'XEM KẾT QUẢ';
    }

    el.feedbackOverlay.classList.add('active');
  }

  // ── Next Question / Results ────────────────────────────────────
  function nextQuestion() {
    el.feedbackOverlay.classList.remove('active');

    if (game.current < questions.length - 1) {
      showQuestion(game.current + 1);
    } else {
      showResults();
    }
  }

  // ── Results Screen ─────────────────────────────────────────────
  function showResults() {
    el.playScreen.classList.remove('active');
    el.hud.classList.remove('active');
    el.resultScreen.classList.add('active');

    // Calculate grade
    const xp = game.xp;
    let grade, gradeLabel, gradeClass;

    if (xp >= 900)      { grade = 'S'; gradeLabel = 'XUẤT SẮC';      gradeClass = 'grade-s'; }
    else if (xp >= 700) { grade = 'A'; gradeLabel = 'GIỎI';          gradeClass = 'grade-a'; }
    else if (xp >= 500) { grade = 'B'; gradeLabel = 'KHÁ';           gradeClass = 'grade-b'; }
    else if (xp >= 300) { grade = 'C'; gradeLabel = 'TRUNG BÌNH';    gradeClass = 'grade-c'; }
    else if (xp >= 100) { grade = 'D'; gradeLabel = 'YẾU';           gradeClass = 'grade-d'; }
    else                { grade = 'F'; gradeLabel = 'CHƯA ĐẠT';      gradeClass = 'grade-f'; }

    el.resultGrade.textContent = grade;
    el.resultGrade.className = 'qg-result-grade ' + gradeClass;
    el.resultGradeLabel.textContent = gradeLabel;
    el.resultGradeLabel.className = 'qg-result-grade-label ' + gradeClass;

    el.resultXPFinal.textContent = game.xp;
    el.resultCorrect.textContent = game.correct + ' / ' + questions.length;
    el.resultHearts.textContent = Math.max(game.lives, 0) + ' / 3';
    el.resultCombo.textContent = 'x' + game.maxCombo;
  }

  // ── Update HUD ─────────────────────────────────────────────────
  function updateHUD() {
    // Hearts
    let heartsHTML = '';
    for (let i = 0; i < 3; i++) {
      if (i < game.lives) {
        heartsHTML += '<span class="qg-heart active">♥</span>';
      } else {
        heartsHTML += '<span class="qg-heart lost">♥</span>';
      }
    }
    el.hudHearts.innerHTML = heartsHTML;

    // Question number
    el.hudQNum.textContent = 'Câu ' + (game.current + 1) + ' / ' + questions.length;

    // Progress bar
    const progress = ((game.current + 1) / questions.length) * 100;
    el.hudProgressFill.style.width = progress + '%';

    // XP
    el.hudXP.textContent = game.xp + ' XP';

    // Combo
    if (game.combo > 1) {
      const fires = '🔥'.repeat(Math.min(game.combo - 1, 4));
      el.hudCombo.textContent = fires + ' x' + game.combo;
      el.hudCombo.classList.add('active');
    } else {
      el.hudCombo.textContent = 'x1';
      el.hudCombo.classList.remove('active');
    }
  }

  // ── Reset Game ─────────────────────────────────────────────────
  function resetGame() {
    game = {
      current: 0,
      lives: 3,
      xp: 0,
      combo: 1,
      maxCombo: 1,
      correct: 0,
      answers: [],
      isLocked: false
    };

    // Reset submit button state
    el.btnSubmitMulti.disabled = false;
    el.btnSubmitMulti.style.display = 'none';

    el.resultScreen.classList.remove('active');
    el.playScreen.classList.remove('active');
    el.hud.classList.remove('active');
    el.feedbackOverlay.classList.remove('active');
    el.startScreen.classList.add('active');
  }
});
