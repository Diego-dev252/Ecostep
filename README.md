# Ecostep

O Ecostep é um projeto em desenvolvimento que explora o uso de tecnologia para incentivar práticas sustentáveis. Algumas funcionalidades, como autenticação de usuários, ainda estão passando por ajustes e podem apresentar problemas na versão atual.

## Páginas

- `index.html` — página inicial (missão, visão e valores)
- `store.html` — loja de produtos sustentáveis
- `cadastro.html` — criação de conta (Supabase Auth)
- `login.html` — autenticação (Supabase Auth)
- `inicio.html` — área logada (protegida por sessão; redireciona para o login se não houver sessão)

## Estrutura

- `style.css` — estilos compartilhados entre as páginas (layout, tema claro/escuro, animações)
- `script.js` — script compartilhado (animação de entrada e alternância de tema)
- `supabase.js` — cliente Supabase compartilhado (URL e chave anon)

## Como rodar

É só acessar o link: https://diego-dev252.github.io/Ecostep/.

## Autenticação

O login, cadastro e a área logada usam o Supabase Auth. A sessão é verificada em `inicio.html`; sem sessão ativa, o usuário é redirecionado para `login.html`.
