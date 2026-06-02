/* Lightweight product image lightbox
   - Click any image with class "product-image" or attribute "data-product-image" to open
   - Supports using data-large attribute for high-res image if present
*/
(function() {
    function ensureModal() {
        if (document.getElementById('image-modal-overlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'image-modal-overlay';
        Object.assign(overlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            cursor: 'zoom-out'
        });

        const img = document.createElement('img');
        img.id = 'image-modal-img';
        Object.assign(img.style, {
            maxWidth: '92%',
            maxHeight: '92%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            borderRadius: '6px',
            transition: 'transform 200ms ease'
        });

        overlay.appendChild(img);
        overlay.addEventListener('click', function() { overlay.style.display = 'none';
            img.src = ''; });
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { overlay.style.display = 'none';
                img.src = ''; } });
        document.body.appendChild(overlay);
    }

    function openLightbox(src) {
        ensureModal();
        const overlay = document.getElementById('image-modal-overlay');
        const img = document.getElementById('image-modal-img');
        img.src = src;
        overlay.style.display = 'flex';
    }

    // Delegated click handler for images injected dynamically
    document.addEventListener('click', function(e) {
        const el = e.target;
        if (!(el instanceof HTMLImageElement)) return;
        if (el.classList.contains('product-image') || el.hasAttribute('data-product-image')) {
            e.preventDefault();
            const highRes = el.getAttribute('data-large') || el.getAttribute('data-src') || el.src;
            openLightbox(highRes);
        }
    }, false);

    // Optional: add pointer cursor for matching images
    function styleExisting() {
        document.querySelectorAll('img.product-image, img[data-product-image]').forEach(img => {
            img.style.cursor = 'zoom-in';
        });
    }

    // Observe DOM for new images and apply cursor style
    const mo = new MutationObserver(function() { styleExisting(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    // Initial run
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', styleExisting);
    else styleExisting();

})();