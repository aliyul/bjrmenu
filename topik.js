 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingMenuKons = {
"https://www.betonjayareadymix.com/p/produk-konstruksi.html": "Produk Konstruksi",
  "https://www.betonjayareadymix.com/p/produk-interior.html": "Produk Interior",
  //"https://www.betonjayareadymix.com/p/produk-kitchen-set.html": "Produk Kitchen Set",
  "https://www.betonjayareadymix.com/p/material-konstruksi.html": "Material Konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi.html": "Jasa Konstruksi",
  //"https://www.betonjayareadymix.com/p/jasa-interior.html": "Jasa Interior",
  "https://www.betonjayareadymix.com/p/jasa-desain-interior.html": "Jasa Desain Interior",
  "https://www.betonjayareadymix.com/p/hubungi-kami.html": "Hubungi Kami",
  "https://www.betonjayareadymix.com/p/portofolio.html": "Portofolio",
  "https://www.betonjayareadymix.com/p/disclaimer.html": "Disclaimer",
  "https://www.betonjayareadymix.com/p/privacy-policy.html": "Privacy Policy",
  "https://www.betonjayareadymix.com/p/terms-of-service.html": "Terms Of Service",
  "https://www.betonjayareadymix.com/p/useful-links.html": "Useful Links",
  "https://www.betonjayareadymix.com/p/about.html": "About",
  "https://www.betonjayareadymix.com/p/sitemap.html": "Sitemap"

	
};
const urlMappingMenuKonsUtama = {
"https://www.betonjayareadymix.com/p/produk-konstruksi.html": "Produk Konstruksi",
  "https://www.betonjayareadymix.com/p/produk-interior.html": "Produk Interior",
  //"https://www.betonjayareadymix.com/p/produk-kitchen-set.html": "Produk Kitchen Set",
  "https://www.betonjayareadymix.com/p/material-konstruksi.html": "Material Konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi.html": "Jasa Konstruksi",
  //"https://www.betonjayareadymix.com/p/jasa-interior.html": "Jasa Interior",
  "https://www.betonjayareadymix.com/p/jasa-desain-interior.html": "Jasa Desain Interior"
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

	/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

     // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else {
        console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
      }
    }
	  
    // --- validasi URL terdaftar ---
    if (!urlMappingMenuKonsUtama[cleanUrlTopikKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlTopikKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-01-28T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected Topik: ${cleanUrlTopikKons}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

    // --- pastikan detect-evergreen.js selesai dimuat ---
    await loadEvergreenScript();
    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlTopikKons);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlTopikKons} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();

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
	removeCondition('ProdukInFur');
         removeCondition('MaterialKons');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
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

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMenuKons[cleanUrlTopikKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": urlMappingMenuKons[cleanUrlTopikKons],
                   "item": cleanUrlTopikKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
