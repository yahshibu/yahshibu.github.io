const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Initialize theme based on localStorage or system preference
if (localStorage.theme === 'dark' ||
   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.classList.add('dark');
}

toggle?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
});
