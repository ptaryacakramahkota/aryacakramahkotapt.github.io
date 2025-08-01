// Fungsi untuk menampilkan produk berdasarkan kategori yang dipilih
function showProducts(category) {
    // Menyembunyikan semua produk
    const allProducts = document.querySelectorAll('.produk-item');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    // Menampilkan produk berdasarkan kategori yang dipilih
    const selectedCategoryProducts = document.querySelectorAll(`.${category}`);
    selectedCategoryProducts.forEach(product => {
        product.style.display = 'block';
    });
}

// Default, menampilkan semua produk saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    showProducts('valve');
});
