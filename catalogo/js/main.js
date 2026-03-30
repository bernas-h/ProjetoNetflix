import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('catalogo main.js carregado');
        const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
    } catch (err) {
        console.error('Erro em catalogo/js/main.js', err);
        const container = document.getElementById('main-content');
        if (container) {
            const errDiv = document.createElement('div');
            errDiv.style.color = 'red';
            errDiv.style.padding = '20px';
            errDiv.textContent = 'Ocorreu um erro ao carregar o catálogo. Veja o console para detalhes.';
            container.appendChild(errDiv);
        }
    }
});
