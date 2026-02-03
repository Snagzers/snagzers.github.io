window.onload = () => {
    const boot = document.getElementById('boot-screen');
    const desktop = document.getElementById('desktop');

    // Synthetic Cozy Startup Sound
    const playStartupSound = () => {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 2);
    };

    setTimeout(() => {
        boot.classList.add('hidden');
        desktop.classList.remove('hidden');
        document.body.style.background = localStorage.getItem('doors_bg');
        if(localStorage.getItem('doors_sounds') !== 'off') playStartupSound();
    }, 3500);
};
