(() => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) return;

    const btn = form.querySelector('.submit-btn');
    const originalText = btn.textContent;

    form.addEventListener('submit', () => {
        // Prepend service type to message so it shows in Google Sheet
        const serviceRadio = form.querySelector('input[name="service-type"]:checked');
        const messageField = form.querySelector('#message');
        if (serviceRadio && messageField) {
            const prefix = `[Service: ${serviceRadio.value}]\n\n`;
            if (!messageField.value.startsWith('[Service:')) {
                messageField.value = prefix + messageField.value;
            }
        }

        // UI feedback
        btn.textContent = 'Sending…';
        btn.disabled = true;

        status.className = 'form-status';
        status.textContent = 'Sending your message…';

        // Store follow-up data for thank-you page
        const contactMethod = form.querySelector('input[name="entry.162991437"]:checked')?.value || '';
        const serviceType = serviceRadio?.value || '';
        const name = form.querySelector('#name')?.value || '';

        sessionStorage.setItem(
            'contactFollowUp',
            JSON.stringify({ contactMethod, serviceType, name })
        );

        // Redirect after short delay
        setTimeout(() => {
            window.location.href = '/thank-you/';
        }, 900);
    });
})();
