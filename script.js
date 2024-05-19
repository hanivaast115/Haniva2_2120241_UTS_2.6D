document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit biasa
    
    // Ambil nilai dari input
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    
    // Hitung hasil penjumlahan
    const sum = number1 + number2;
    
    // Tampilkan hasil
    document.getElementById('result').textContent = 'Hasil: ' + sum;
});
