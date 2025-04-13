 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingMenuKons = {
"https://www.betonjayareadymix.com/p/produk-konstruksi.html": "Produk Konstruksi",
  "https://www.betonjayareadymix.com/p/produk-interior-furniture.html": "Produk Interior Furniture",
  "https://www.betonjayareadymix.com/p/material-konstruksi.html": "Material Konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi.html": "Jasa Konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-interior.html": "Jasa Interior",
  "https://www.betonjayareadymix.com/p/hubungi-kami.html": "Hubungi Kami",
  "https://www.betonjayareadymix.com/p/disclaimer.html": "Disclaimer",
  "https://www.betonjayareadymix.com/p/privacy-policy.html": "Privacy Policy",
  "https://www.betonjayareadymix.com/p/terms-of-service.html": "Terms Of Service",
  "https://www.betonjayareadymix.com/p/useful-links.html": "Useful Links",
  "https://www.betonjayareadymix.com/p/about.html": "About",
  "https://www.betonjayareadymix.com/p/sitemap.html": "Sitemap"

	
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsTopikKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsTopikKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsTopikKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsTopikKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsTopikKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlTopikKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var MenuKons = document.getElementById("MenuKons");
    if (!MenuKons) {
        console.error("elemen Id MenuKons kondisi terhapus");
        return;
    }
     
     var pageNameMenuKons = document.getElementById("pageNameMenuKons");
    

     // Default untuk menyembunyikan elemen
     pageNameMenuKons.textContent = "";

    if (urlMappingMenuKons[cleanUrlTopikKons]) {
        restoreCondition('MenuKons');
        //restoreCondition('JasaChippingBeton');
           // hapus elemen id DIV Lain
         removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsFinishing');
	removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
	    
        pageNameMenuKons.textContent = urlMappingMenuKons[cleanUrlTopikKons];
    }

   });
