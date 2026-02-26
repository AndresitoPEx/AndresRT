document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('summary-modal');
    if (!modal) return;

    const dialog = modal.querySelector('.summary-modal__dialog');
    const openTriggers = document.querySelectorAll('[data-summary-open]');
    const closeTriggers = modal.querySelectorAll('[data-summary-close]');
    let lastFocusedElement = null;

    function getFocusableElements() {
        return Array.from(
            dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        ).filter((el) => !el.hasAttribute('disabled'));
    }

    function openModal() {
        if (modal.classList.contains('is-open')) return;

        lastFocusedElement = document.activeElement;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('summary-modal-open');

        const focusable = getFocusableElements();
        if (focusable.length > 0) {
            focusable[0].focus();
        } else {
            dialog.focus();
        }
    }

    function closeModal() {
        if (!modal.classList.contains('is-open')) return;

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('summary-modal-open');

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    openTriggers.forEach((trigger) => {
        trigger.addEventListener('click', openModal);
    });

    closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function(event) {
        if (!modal.classList.contains('is-open')) return;

        if (event.key === 'Escape') {
            closeModal();
            return;
        }

        if (event.key !== 'Tab') return;

        const focusable = getFocusableElements();
        if (focusable.length === 0) return;

        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
        }
    });
});
