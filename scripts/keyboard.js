// ARROW KEYS 

document.addEventListener('keydown', e => {
    if (e.code.startsWith('Arrow')) {
        switch (e.code) {
            case 'ArrowLeft':
                prevFn(e);
                break;
            case 'ArrowRight':
                nextFn(e);
                break;
        }
    }
});

// ESCAPE KEY

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        e.preventDefault();
        closeFn();
    }
});