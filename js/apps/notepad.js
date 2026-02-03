const NotepadApp = {
    open(fileName = 'New Document.txt') {
        const file = DoorsStorage.getFS().find(f => f.name === fileName) || { content: '' };
        const win = WindowManager.createWindow('notepad', `Notepad - ${fileName}`, `
            <textarea id="notepad-text" style="width:100%; height:200px; flex-grow:1;">${file.content}</textarea>
            <div style="background:#eee; padding:5px; border-top:1px solid #ccc;">
                <button onclick="NotepadApp.save('${fileName}')">Save</button>
            </div>
        `);
    },
    save(name) {
        const content = document.getElementById('notepad-text').value;
        DoorsStorage.saveFile(name, content);
        alert('File saved to My Doors');
    }
};
