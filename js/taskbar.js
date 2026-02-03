document.getElementById('start-button').onclick = (e) => {
    e.stopPropagation();
    document.getElementById('start-menu').classList.toggle('hidden');
};

document.addEventListener('click', () => {
    document.getElementById('start-menu').classList.add('hidden');
});

// Clock update
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.getHours().toString().padStart(2, '0') + ":" + 
                                               now.getMinutes().toString().padStart(2, '0');
}, 1000);

// Menu item clicks
document.querySelectorAll('.menu-item').forEach(item => {
    item.onclick = () => {
        const app = item.getAttribute('data-app');
        if(app === 'notepad') NotepadApp.open();
        if(app === 'terminal') TerminalApp.open();
        if(app === 'explorer') ExplorerApp.open();
        if(app === 'settings') SettingsApp.open();
    };
});

document.getElementById('shutdown-btn').onclick = () => location.reload();
