// =============================================================
// Kutipan Al-Qur'an & Hadits — tema tahfidz / menghafal Al-Qur'an.
// Arab + terjemahan (Kemenag) + rujukan ayat/hadits.
// =============================================================

export type Scripture = {
  arabic: string;
  translation: string;
  reference: string; // rujukan yang ditampilkan
  source: string; // sumber/perawi
};

// Ayat pilihan tentang dimudahkannya & terjaganya Al-Qur'an.
export const AYAT: Scripture = {
  arabic: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',
  translation:
    'Dan sungguh, telah Kami mudahkan Al-Qur’an untuk peringatan, maka adakah orang yang mau mengambil pelajaran?',
  reference: 'QS. Al-Qamar [54]: 17',
  source: 'Al-Qur’an al-Karim',
};

// Ayat penjagaan Al-Qur'an (dipakai di halaman Profil).
export const AYAT_HIFDH: Scripture = {
  arabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
  translation:
    'Sesungguhnya Kamilah yang menurunkan Al-Qur’an, dan pasti Kami (pula) yang memeliharanya.',
  reference: 'QS. Al-Hijr [15]: 9',
  source: 'Al-Qur’an al-Karim',
};

// Hadits keutamaan belajar & mengajarkan Al-Qur'an.
export const HADITH: Scripture = {
  arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  translation:
    'Sebaik-baik kalian adalah orang yang belajar Al-Qur’an dan mengajarkannya.',
  reference: 'HR. Bukhari no. 5027',
  source: 'Dari Utsman bin ‘Affan رضي الله عنه',
};
