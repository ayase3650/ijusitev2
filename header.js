// 1. ヘッダーとトップへ戻るボタンのHTMLを出力する
document.write(`
<!-- ＝＝＝ 固定・追従用ラッパー ＝＝＝ -->
<div id="header-wrapper" class="header-wrapper">
    <!-- オレンジのトップバナー -->
    <div class="top-banner">
        <span>移住の準備・手続きはこちら！</span>
        <a href="index.html#chatbot" class="top-banner-btn">診断ナビ</a>
        <a href="application.html" class="top-banner-btn">各種申請</a>
    </div>

    <!-- 白いカプセルヘッダー -->
    <header class="site-header">
        <div class="header-inner">
            <!-- ロゴ -->
            <a href="index.html" class="logo" style="text-decoration: none; font-weight: bold; font-size: 1.5rem; color: #00b4d8;">
                SHIMONOSEKI LIFE
            </a>

            <!-- スマホ用ハンバーガーボタン -->
            <div class="hamburger" id="hamburger-btn">
                <span></span><span></span><span></span>
            </div>

            <!-- ナビゲーションメニュー -->
            <nav class="header-nav" id="header-nav">
                <a href="area.html">AREA</a>
                <a href="data.html">DATA</a>
                <a href="index.html#support">SUPPORT</a>
                <a href="faq.html">FAQ</a>
                <a href="application.html">各種申請</a>
                
                <a href="index.html#chatbot" class="btn-shindan" style="display: inline-flex; align-items: center; gap: 5px;">
                    <img src="2.png" alt="フグ" style="height: 20px;"> 診断ナビ
                </a>
            </nav>
        </div>
    </header>
</div>

<!-- ＝＝＝ トップへ戻るボタン ＝＝＝ -->
<div id="page-top-btn" class="page-top-btn">
    <span style="font-weight: 900; font-size: 1.5rem;">↑</span>
</div>
`);

// 2. 各種アクションの設定
setTimeout(() => {
    // 【A】ハンバーガーメニューの開閉
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const headerNav = document.getElementById('header-nav');

    if (hamburgerBtn && headerNav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            headerNav.classList.toggle('active');
        });
    }

    // 【B】スクロール検知（バナーを隠す ＆ トップへ戻るボタンを出す）
    const headerWrapper = document.getElementById('header-wrapper');
    const pageTopBtn = document.getElementById('page-top-btn');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // トップへ戻るボタンの表示・非表示（300px以上スクロールしたら出す）
        if (currentScrollY > 300) {
            pageTopBtn.classList.add('show');
        } else {
            pageTopBtn.classList.remove('show');
        }

        // 下にスクロールしたらヘッダーを隠し、上にスクロールしたら出す
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            headerWrapper.classList.add('is-hidden');
        } else {
            headerWrapper.classList.remove('is-hidden');
        }
        lastScrollY = currentScrollY;
    });

    // トップへ戻るボタンのクリック処理
    if (pageTopBtn) {
        pageTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 【C】HTMLを編集しなくてもジャンプできるように、自動で目印(ID)を付ける魔法
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
        const supportSection = document.querySelector('.support-section');
        if (supportSection && !supportSection.id) supportSection.id = 'support';
        
        const chatbotSection = document.querySelector('.bot-first-section');
        if (chatbotSection && !chatbotSection.id) chatbotSection.id = 'chatbot';
    }

}, 100);