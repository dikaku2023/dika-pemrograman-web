const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const kelamin = document.getElementById('kelamin').value;
    const alamat = document.getElementById('alamat').value;
    if (nama && umur && kelamin && alamat) {
        alert(`Terima kasih ${nama} anda telah melakukan registrasi`);
    } else {
        alert("Anda Belum Mengisi ! Harap mengisi semua form yang tersedia.");
    }
});
