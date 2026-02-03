const apps = [
    { name: 'My Doors', icon: '📁', id: 'explorer' },
    { name: 'Notepad', icon: '📝', id: 'notepad' },
    { name: 'Terminal', icon: '💻', id: 'terminal' },
    { name: 'Settings', icon: '⚙️', id: 'settings' }
];

const desktopIcons = document.getElementById('desktop-icons');

apps.forEach(app => {
    const div = document.createElement('div');
    div.className = 'desktop-icon';
    div.innerHTML = `<div class="icon">${app.icon}</div><span>${app.name}</span>`;
    div.ondblclick = () => {
        if(app.id === 'notepad') NotepadApp.open();
        if(app.id === 'terminal') TerminalApp.open();
        if(app.id === 'explorer') ExplorerApp.open();
        if(app.id === 'settings') SettingsApp.open();
    };
    desktopIcons.appendChild(div);
});
