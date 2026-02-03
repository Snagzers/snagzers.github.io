const DoorsStorage = {
    init() {
        // Default Files
        if (!localStorage.getItem('doors_fs')) {
            const initialFS = [
                { name: 'Welcome.txt', content: 'Welcome to Doors XP! It feels cozy here.', type: 'file' },
                { name: 'ReadMe.txt', content: 'This OS runs entirely in your browser.', type: 'file' },
                { name: 'System', type: 'folder' }
            ];
            localStorage.setItem('doors_fs', JSON.stringify(initialFS));
        }
        // Default Settings
        if (localStorage.getItem('doors_bg') === null) {
            localStorage.setItem('doors_bg', 'linear-gradient(to bottom, #639ece 0%, #ffffff 100%)');
        }
        if (localStorage.getItem('doors_sounds') === null) {
            localStorage.setItem('doors_sounds', 'on');
        }
    },
    getFS() {
        return JSON.parse(localStorage.getItem('doors_fs'));
    },
    saveFile(name, content) {
        let fs = this.getFS();
        const index = fs.findIndex(f => f.name === name);
        if (index > -1) {
            fs[index].content = content;
        } else {
            fs.push({ name, content, type: 'file' });
        }
        localStorage.setItem('doors_fs', JSON.stringify(fs));
    }
};
DoorsStorage.init();
