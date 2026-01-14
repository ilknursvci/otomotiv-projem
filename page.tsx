'use client'; // Bu sayfanın tıklama ve hafıza (useState) gibi canlı özellikler içerdiğini belirtir.

import { useState } from 'react'; // React'ın hafıza (durum tutma) özelliğini projeye dahil ediyoruz.

export default function Sayfam() {
  // --- 1. HAFIZA (STATE) TANIMLAMA ---
  // sayi: Mevcut kilometreyi tutar. setSayi: Kilometreyi değiştiren kumandadır.
  const [sayi, setSayi] = useState(0);

  return (
    // --- 2. DIŞ ARKA PLAN ---
    // Tüm ekranı kaplayan koyu lacivert zemin.
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '20px' }}>
      
      {/* --- 3. ANA PANEL KARTI --- */}
      <div style={{ 
        backgroundColor: '#1e293b', // Kartın iç rengi
        color: 'white',             // Genel yazı rengi
        padding: '30px', 
        borderRadius: '20px',       // Yuvarlatılmış köşeler
        maxWidth: '400px',          // Kartın genişlik sınırı
        margin: '50px auto',        // Sayfanın ortasına hizala
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)', // Gölge efekti
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        
        {/* Başlık Kısmı */}
        <h1 style={{ fontSize: '14px', color: '#94a3b8', letterSpacing: '2px' }}>ARAÇ PANELİ</h1>
        
        {/* --- 4. DİNAMİK KİLOMETRE GÖSTERGESİ --- */}
        <div style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          margin: '20px 0',
          // EĞER sayi 10.000'den büyükse rengi KIRMIZI yap, DEĞİLSE YEŞİL yap:
          color: sayi > 10000 ? '#f87171' : '#4ade80' 
        }}>
          {/* .toLocaleString() sayıyı 10.000 şeklinde noktalı gösterir */}
          {sayi.toLocaleString()} 
          <span style={{ fontSize: '20px', marginLeft: '5px', color: '#64748b' }}>KM</span>
        </div>

        {/* --- 5. DURUM MESAJI --- */}
        <p style={{ marginBottom: '30px', fontWeight: '500' }}>
          {/* Şartlı yazı: Sayı durumuna göre mesaj değişir */}
          {sayi > 10000 ? "⚠️ SERVİS ZAMANI GELDİ!" : "✅ SİSTEM DURUMU NORMAL"}
        </p>

        {/* --- 6. KONTROL DÜĞMELERİ --- */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          
          {/* Artırma Düğmesi: Mevcut sayıya 2000 ekler */}
          <button 
            onClick={() => setSayi(sayi + 2000)} 
            style={{ 
              padding: '12px 20px', borderRadius: '10px', border: 'none', 
              backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer', fontWeight: 'bold' 
            }}
          >
            Sürüş Yap
          </button>

          {/* Sıfırlama Düğmesi: Sayıyı tekrar 0 yapar */}
          <button 
            onClick={() => setSayi(0)} 
            style={{ 
              padding: '12px 20px', borderRadius: '10px', border: 'none', 
              backgroundColor: '#475569', color: 'white', cursor: 'pointer' 
            }}
          >
            Sıfırla
          </button>

        </div>
      </div>

    </div>
  );
}