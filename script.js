// Alternador simples de tema (dark/light) com persistência em localStorage
(function(){
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement; // <html>
  const storageKey = 'theme-mode';

  function applyTheme(theme){
    if(theme === 'light'){
      root.classList.add('light');
      toggle.textContent = '☀️';
    } else {
      root.classList.remove('light');
      toggle.textContent = '🌙';
    }
  }

  // inicializa a partir do localStorage ou preferencia do sistema
  const saved = localStorage.getItem(storageKey);
  if(saved){
    applyTheme(saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
  }

  toggle.addEventListener('click', function(){
    const isLight = root.classList.contains('light');
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  });
})();
