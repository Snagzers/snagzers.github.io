// explorer.js
const ExplorerApp = {
    open() {
        const files = DoorsStorage.getFS();
        let fileList = files.map(f => `
            <div class="menu-item" onclick="NotepadApp.open('${f.name}')" style="cursor:pointer; padding:5px;">
                ${f.type === 'folder' ? '📁' : '📄'} ${f.name}
            </div>
        `).join('');

        WindowManager.createWindow('explorer', 'My Doors', `
            <div style="padding:10px; background:white; height:100%; flex-grow:1;">
                <strong>Files in LocalStorage:</strong>
                <hr>
                ${fileList}
            </div>
        `);
    }
};
