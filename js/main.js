const $tabBtns = document.querySelectorAll('.tab-btn');
const $tabContents = document.querySelectorAll('.tab-content');

$tabBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    $tabBtns.forEach((btn) => btn.classList.remove('active'));
    $tabContents.forEach((content) => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});
