const WindowManager = {
    zIndex: 100,

    createWindow(id, title, contentHTML) {
        // If window exists, bring to front
        const existing = document.getElementById(`win-${id}`);
        if (existing) {
            this.bringToFront(existing);
            return existing;
        }

        const win = document.createElement('div');
        win.id = `win-${id}`;
        win.className = 'window';
        win.style.zIndex = ++this.zIndex;
        // Start windows at a staggered offset
        win.style.top = (100 + (this.zIndex % 10) * 20) + 'px';
        win.style.left = (100 + (this.zIndex % 10) * 20) + 'px';

        win.innerHTML = `
            <div class="window-header">
                <span class="title">${title}</span>
                <div class="controls">
                    <button class="min-btn">_</button>
                    <button class="close-btn">X</button>
                </div>
            </div>
            <div class="window-body">${contentHTML}</div>
        `;

        document.getElementById('window-layer').appendChild(win);
        this.makeDraggable(win);

        win.querySelector('.close-btn').onclick = () => win.remove();
        win.querySelector('.min-btn').onclick = () => win.style.display = 'none';
        win.onmousedown = () => this.bringToFront(win);

        return win;
    },

    bringToFront(win) {
        win.style.display = 'flex';
        win.style.zIndex = ++this.zIndex;
    },

    makeDraggable(win) {
        const header = win.querySelector('.window-header');
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        header.onmousedown = (e) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = () => {
                document.onmouseup = null;
                document.onmousemove = null;
            };
            document.onmousemove = (e) => {
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                win.style.top = (win.offsetTop - pos2) + "px";
                win.style.left = (win.offsetLeft - pos1) + "px";
            };
        };
    }
};
