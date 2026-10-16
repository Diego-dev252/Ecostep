-- Keep a fail-closed policy in place even if table privileges are granted later.
create policy "usuarios_api_disabled"
  on public.usuarios for all to anon, authenticated
  using (false)
  with check (false);
