document.write(`
    <!-- 追従バナー -->
    <div class="top-alert-bar">
        <span> 移住の準備・手続きはこちら！</span>
        <a href="index.html#consult" class="btn-banner">診断ナビ</a>
        <a href="application.html" class="btn-banner">各種申請</a>
    </div>

    <!-- ヘッダー -->
    <header>
        <h1 class="site-title"><a href="index.html" style="color:var(--fugu-blue);">SHIMONOSEKI LIFE</a></h1>
        <nav>
            <ul>
                <li><a href="index.html#support" class="puku-hover">SUPPORT</a></li>
                <li><a href="index.html#faq" class="puku-hover">FAQ</a></li>
                <li><a href="application.html">各種申請</a></li>
                <li><a href="index.html#consult" class="puku-hover" style="color: var(--fugu-fin);"><img src="2.png" alt="せきまる" class="seki-icon seki-sway">診断ナビ</a></li>
            </ul>
        </nav>
    </header>

    <!-- トップへ戻るボタン -->
    <div id="pageTopBtn" class="page-top-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">
        
    </div>
`);

// 🌟 スクロールを感知してボタンを出し入れする仕組み
window.addEventListener('scroll', () => {
    const btn = document.getElementById('pageTopBtn');
    if (!btn) return;
    
    // 上から300px以上スクロールしたらボタンを表示（.showクラスを追加）
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});
// 🌟 ページの一番下にコピーライト（フッター）を自動追加する仕組み
window.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <footer class="site-footer">
            &copy; 下関市 共創イノベーション課
        </footer>
    `;
    // 全てのコンテンツが終わった後（bodyタグの閉じる直前）にフッターを差し込む
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});