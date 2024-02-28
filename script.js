const languageToggle = document.getElementById('language-toggle');
const contentContainer = document.getElementById('content');

let currentLanguage = 'italiano';

const content = {
    italiano: {
        ivrea: 'Ivrea è una città situata nella provincia di Torino...',
        salisburgo: 'Salisburgo è una città in Austria famosa per...',
        buttonLabel: 'Cambia lingua'
    },
    tedesco: {
        ivrea: 'Ivrea ist eine Stadt in der Provinz Turin...',
        salisburgo: 'Salzburg ist eine Stadt in Österreich berühmt für...',
        buttonLabel: 'Sprache ändern'
    }
};

function renderContent(language) {
    const { ivrea, salisburgo, buttonLabel } = content[language];
    contentContainer.innerHTML = `
        <h2>${ivrea}</h2>
        <p>${salisburgo}</p>
    `;
    languageToggle.textContent = buttonLabel;
}

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'italiano' ? 'tedesco' : 'italiano';
    renderContent(currentLanguage);
});
