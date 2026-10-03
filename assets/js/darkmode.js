// The initial theme is applied by an inline script in <head> to avoid a flash
const root = document.documentElement;

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const setMenuOpen = (open) => {
  mobileMenu?.classList.toggle('hidden', !open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};

menuToggle?.addEventListener('click', () => {
  setMenuOpen(mobileMenu?.classList.contains('hidden'));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});
