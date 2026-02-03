const DoorsStorage = {
    init() {
        if (!localStorage.getItem('doors_fs')) {
            const initialFS = [
                { name: 'Welcome.txt', content: 'Welcome to Doors XP! A cozy browser OS.', type: 'file' },
                { name: 'System', type: 'folder' }
            ];
            localStorage.setItem('doors_fs', JSON.stringify(initialFS));
        }
        if (localStorage.getItem('doors_bg') === null) {
            localStorage.setItem('doors_bg', 'linear-gradient(to bottom, #639ece, #ffffff)');
        }
    },
    getFile(name) {
        const fs = JSON.parse(localStorage.getItem('doors_fs'));
        return fs.find(f => f.name === name);
    },
    saveFile(name, content) {
        let fs = JSON.parse(localStorage.getItem('doors_fs'));
        const index = fs.findIndex(f => f.name === name);
        if (index > -1) fs[index].content = content;
        else fs.push({ name, content, type: 'file' });
        localStorage.setItem('doors_fs', JSON.stringify(fs));
    }
};
DoorsStorage.init();
