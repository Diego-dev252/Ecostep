-- The site no longer reads or writes public.usuarios; signup data lives in Auth user metadata.
-- Remove API access so the unused profile table cannot expose personal data.
drop policy if exists "usuarios_select_own" on public.usuarios;
drop policy if exists "usuarios_insert_own" on public.usuarios;
revoke all privileges on table public.usuarios from anon, authenticated;
