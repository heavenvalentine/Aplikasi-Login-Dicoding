/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// membuat variabel untuk setiap elemen view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// untuk menyimpan variabel yang menyimpan info email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// menambahkan aksi klik pada button
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    // menambahkan nilai dari masing-masing input (email dan pass) ketika tombol ditekan
    const email = inputEmailElement.value; 
    const password = inputPasswordElement.value;

    //memastikan bahwa nilai email dan pass sesuai dengan nilai yang disimpan
    if (email == expectedEmail && password == expectedPassword)
    {
      // jika berhasil akan pindah ke home
      goToHome();
    }
    else 
    {
      // jika berhasil akan menampilkan input salah
      showPopUp();
    }
});
