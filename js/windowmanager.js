const WindowManager = {
    zIndex: 100,
    
    createWindow(id, title, contentHTML) {
        if (document.getElementById(`win-${id}`)) {
            this.bringToFront(document.getElementById(`win-${id}`));
            return;
        }

        const win = document.createElement('div');
        win.id = `win-${id}`;
        win.className = 'window';
        win.style.zIndex = ++this.zIndex;
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
        win.onmousedown = () => this.bringToFront(win);
        
        return win;
    },

    bringToFront(win) {
        win.style.zIndex = ++this.zIndex;
    },

    makeDraggable(win) {
        const header = win.querySelector('.window-header');
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        header.onmousedown = (e) => {
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
