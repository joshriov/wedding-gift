
const copyButtons = document.querySelectorAll('.copy-btn');
const toast = document.getElementById('toast');

copyButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const accountNumber = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(accountNumber);

      toast.textContent = 'Nomor rekening berhasil disalin!';
      toast.classList.add('show');

      const originalText = button.textContent;
      button.textContent = 'BERHASIL DISALIN ✓';

      setTimeout(() => {
        toast.classList.remove('show');
        button.textContent = originalText;
      }, 2000);

    } catch (error) {
      toast.textContent = 'Gagal menyalin. Silakan salin manual.';
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }
  });
});