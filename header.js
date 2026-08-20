// 1. ヘッダーのHTMLを出力する
document.write(`
<header class="site-header">
    <div class="header-inner">
        <!-- ロゴ -->
        <a href="index.html" class="logo" style="text-decoration: none; font-weight: bold; font-size: 1.5rem; color: #00b4d8;">
            SHIMONOSEKI LIFE
        </a>

        <!-- スマホ用ハンバーガーボタン（三本線） -->
        <div class="hamburger" id="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <!-- ナビゲーションメニュー -->
        <nav class="header-nav" id="header-nav">
            <a href="area.html">AREA</a>
            <a href="data.html">DATA</a>
            <a href="support.html">SUPPORT</a>
            <a href="faq.html">FAQ</a>
            <a href="shinsei.html">各種申請</a>
            
            <!-- 診断ナビボタン -->
            <a href="chatbot.html" class="btn-shindan" style="display: inline-flex; align-items: center; gap: 5px;">
                <img src="2.png" alt="フグ" style="height: 20px;"> 診断ナビ
            </a>
        </nav>
    </div>
</header>
`);

// 2. ハンバーガーボタンをクリックしたときの動作（開閉アクション）
// HTMLが画面に描画された直後に動くように setTimeout を使います
setTimeout(() => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const headerNav = document.getElementById('header-nav');

    if (hamburgerBtn && headerNav) {
        hamburgerBtn.addEventListener('click', () => {
            // ボタンとメニューに 'active' というクラスを付け外しする
            hamburgerBtn.classList.toggle('active');
            headerNav.classList.toggle('active');
        });
    }
}, 100);