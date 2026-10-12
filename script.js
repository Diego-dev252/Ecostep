/* ============================================================
   Ecostep - script compartilhado (animações + tema)
   ============================================================ */

// Animação de entrada: revela os elementos com a classe "reveal"
// conforme eles entram na viewport.
(function () {
    const elementos = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        elementos.forEach(el => el.classList.add('show'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => observer.observe(el));
})();

// Tema claro/escuro persistente
(function () {
    const toggleButton = document.getElementById('toggleTheme');
    if (!toggleButton) return;

    function aplicarTema(tema) {
        const escuro = tema === 'dark';
        document.body.classList.toggle('dark-theme', escuro);
        toggleButton.textContent = escuro ? '☀️' : '🌙';
        toggleButton.setAttribute('aria-label', escuro ? 'Ativar tema claro' : 'Ativar tema escuro');
    }

    aplicarTema(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

    toggleButton.addEventListener('click', function () {
        const novoTema = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        aplicarTema(novoTema);
        localStorage.setItem('theme', novoTema);
    });
})();
