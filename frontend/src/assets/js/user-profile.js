document.addEventListener('DOMContentLoaded', function () {
    const changePasswordBtn = document.getElementById('change-password-btn');
    const cancelPasswordChangeBtn = document.getElementById('cancel-password-change-btn');

    const passwordStaticView = document.getElementById('password-static-view');
    const passwordChangeForm = document.getElementById('password-change-form');


    changePasswordBtn.addEventListener('click', function () {
        passwordStaticView.style.display = 'none';
        passwordChangeForm.style.display = 'block';
    });

    cancelPasswordChangeBtn.addEventListener('click', function () {
        passwordChangeForm.style.display = 'none';
        passwordStaticView.style.display = 'flex';
    });
});
