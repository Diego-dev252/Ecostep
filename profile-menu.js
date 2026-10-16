import { supabase } from './supabase.js';

const trigger = document.getElementById('profileToggle');
const panel = document.getElementById('profilePanel');
const signOutButton = document.getElementById('profileSignout');
const loginLink = document.getElementById('profileLogin');
const editLink = document.getElementById('profileEditLink');

if (trigger && panel) {
  const closePanel = () => {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  };

  trigger.addEventListener('click', () => {
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !trigger.contains(event.target)) closePanel();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      closePanel();
      trigger.focus();
    }
  });
}

try {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;

  if (user) {
    const displayName = user.user_metadata?.nome || user.user_metadata?.full_name || 'Minha conta';
    const name = document.getElementById('profileName');
    const email = document.getElementById('profileEmail');
    if (name) name.textContent = displayName;
    if (email) email.textContent = user.email || '';

    if (loginLink) loginLink.hidden = true;
    if (editLink) editLink.hidden = false;
    if (signOutButton) signOutButton.hidden = false;
  }
} catch (error) {
  // The compact menu remains usable with its guest state if the network is unavailable.
  console.warn('Não foi possível carregar os dados do perfil:', error);
}

signOutButton?.addEventListener('click', async () => {
  signOutButton.disabled = true;
  signOutButton.textContent = 'Saindo…';
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    window.location.assign('index.html');
  } catch (error) {
    console.error('Falha ao sair da conta:', error);
    signOutButton.disabled = false;
    signOutButton.textContent = 'Tentar sair novamente';
  }
});
