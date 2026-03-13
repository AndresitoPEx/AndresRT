document.addEventListener('DOMContentLoaded', () => {
    const extras = document.querySelector('.academic__extras');
    const trigger = document.querySelector('.academic__extras__title');
    const panel = document.querySelector('.academic__cert-grid');

    if (!extras || !trigger || !panel) {
        return;
    }

    const panelId = panel.id || 'certificaciones-lista';
    panel.id = panelId;

    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-controls', panelId);

    const setExpanded = (expanded) => {
        trigger.setAttribute('aria-expanded', String(expanded));
        extras.classList.toggle('is-certs-collapsed', !expanded);
    };

    setExpanded(true);

    const toggleExpanded = () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        setExpanded(!expanded);
    };

    trigger.addEventListener('click', toggleExpanded);

    trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }
        event.preventDefault();
        toggleExpanded();
    });
});
