-- Keep profile rows private and owned by the authenticated user.
drop policy if exists "Permitir leitura para todos" on public.usuarios;
drop policy if exists "Permitir inserir usuários autenticados" on public.usuarios;
drop policy if exists "Permitir insert usuarios autenticados" on public.usuarios;

create policy "usuarios_select_own"
  on public.usuarios for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "usuarios_insert_own"
  on public.usuarios for insert to authenticated
  with check ((select auth.uid()) = user_id);

revoke select on table public.usuarios from anon;
