// settings.js
const SettingsApp = {
    open() {
        WindowManager.createWindow('settings', 'Control Panel', `
            <div style="padding:15px;">
                <h3>Display</h3>
                <button onclick="SettingsApp.setBG('classic')">XP Blue</button>
                <button onclick="SettingsApp.setBG('sunset')">Cozy Sunset</button>
                <hr>
                <h3>Sound</h3>
                <button onclick="SettingsApp.toggleSound()">Toggle Mute</button>
            </div>
        `);
    },
    setBG(theme) {
        const bg = theme === 'classic' ? 'linear-gradient(to bottom, #639ece 0%, #ffffff 100%)' : 'linear-gradient(to bottom, #ff7e5f, #feb47b)';
        localStorage.setItem('doors_bg', bg);
        document.getElementById('desktop').style.background = bg;
    },
    toggleSound() {
        const current = localStorage.getItem('doors_sounds');
        localStorage.setItem('doors_sounds', current === 'on' ? 'off' : 'on');
        alert('Sound set to: ' + localStorage.getItem('doors_sounds'));
    }
};
