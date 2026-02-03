const NotepadApp = {
    open(fileName = 'Untitled.txt') {
        const file = DoorsStorage.getFile(fileName) || { content: '' };
        const content = `
            <textarea id="notepad-text">${file.content}</textarea>
            <div class="notepad-footer">
                <button onclick="NotepadApp.save('${fileName}')">Save</button>
            </div>
        `;
        WindowManager.createWindow('notepad', 'Notepad - ' + fileName, content);
    },
    save(fileName) {
        const text = document.getElementById('notepad-text').value;
        DoorsStorage.saveFile(fileName, text);
        alert('File saved to LocalStorage!');
    }
};
