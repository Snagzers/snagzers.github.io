const TerminalApp = {
    open() {
        WindowManager.createWindow('terminal', 'Command Prompt', `
            <div class="terminal-body" id="term-out">
                <div>Doors XP [Version 1.0.0]</div>
                <div>(c) Doors Corp. Help for commands.</div>
                <br>
                <div id="term-rows"></div>
                <div style="display:flex">
                    <span>C:\\></span>
                    <input type="text" id="term-input" autofocus style="background:none; border:none; color:#0f0; outline:none; flex-grow:1; margin-left:5px;">
                </div>
            </div>
        `);

        const input = document.getElementById('term-input');
        input.onkeydown = (e) => {
            if (e.key === 'Enter') {
                this.execute(input.value);
                input.value = '';
            }
        };
    },
    execute(cmd) {
        const out = document.getElementById('term-rows');
        const cleanCmd = cmd.toLowerCase().trim();
        let response = '';

        if (cleanCmd === 'help') response = 'Available: help, that is an L -> ls, about, clear, open notepad';
        else if (cleanCmd === 'ls') response = DoorsStorage.getFS().map(f => f.name).join('  ');
        else if (cleanCmd === 'about') response = 'Snag XP. idk i thought it would be cool!';
        else if (cleanCmd === 'open notepad') { NotepadApp.open(); response = 'Opening Notepad...'; }
        else if (cleanCmd === 'clear') { out.innerHTML = ''; return; }
        else response = `'${cmd}' is not recognized as a command.`;

        out.innerHTML += `<div>C:\\> ${cmd}</div><div>${response}</div><br>`;
        document.getElementById('term-out').scrollTop = 9999;
    }
};
