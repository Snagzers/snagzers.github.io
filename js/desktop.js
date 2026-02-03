// js/desktop.js

const desktopIcons = [
    { name: 'My Doors', icon: '📁', appId: 'explorer' },
    { name: 'Notepad', icon: '📝', appId: 'notepad' },
    { name: 'Terminal', icon: '💻', appId: 'terminal' },
    { name: 'Settings', icon: '⚙️', appId: 'settings' }
];

const container = document.getElementById('desktop-icons');

// Function to handle launching apps safely
function launchApp(appId) {
    switch(appId) {
        case 'explorer': ExplorerApp.open(); break;
        case 'notepad':  NotepadApp.open(); break;
        case 'terminal': TerminalApp.open(); break;
        case 'settings': SettingsApp.open(); break;
        default: console.warn("App not found:", appId);
    }
}

desktopIcons.forEach(app => {
    const div = document.createElement('div');
    div.className = 'desktop-icon';
    div.innerHTML = `
        <div class="icon">${app.icon}</div>
        <span>${app.name}</span>
    `;

    // Try a double-click first for that authentic XP feel
    div.addEventListener('dblclick', () => {
        launchApp(app.appId);
    });

    // Optional: Add touch support for mobile/tablets
    div.addEventListener('touchstart', (e) => {
        // Simple tap logic for touch devices
        launchApp(app.appId);
    });

    container.appendChild(div);
});
