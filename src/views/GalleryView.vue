<template>
  <section class="page-hero"><div class="wrap"><span class="eyebrow light">EINBLICKE & ERINNERUNGEN</span><h1>Unsere <em>Galerie</em></h1><p>Bilder aus unserem Gemeindeleben, unserer Tradition und unseren gemeinsamen Festen.</p><div class="image-note">Hintergrund später: <b>hero-gemeinde.jpg</b> · Ratio 16:9 · 2400 × 1350 px</div></div></section>
  <section class="wrap section">
    <div v-if="loading" class="notice">Galerie wird geladen …</div>
    <div v-else-if="error" class="notice">{{ error }}</div>
    <div class="gallery-grid">
      <figure v-for="item in images" :key="item.id"><img :src="item.url" :alt="item.title || 'Einblick in das Gemeindeleben'" loading="lazy"><figcaption>{{ item.title || 'Aus unserem Gemeindeleben' }}</figcaption></figure>
      <figure v-for="item in placeholders" :key="item.file" class="gallery-placeholder">
        <IconImage :src="item.src" :title="item.caption" :ratio="item.ratio" :size="item.size" />
        <figcaption>{{ item.caption }} · {{ item.file }}</figcaption>
      </figure>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import IconImage from '../components/IconImage.vue'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db, firebaseConfigured } from '../firebase'
const images = ref([])
const loading = ref(true)
const error = ref('')
function hideMissingImage(event) { event.target.closest('figure')?.remove() }
const placeholders = [
  { title: 'ST. MARKUS', file: 'st-markus.jpg', src: '/images/gallery/st-markus.jpg', ratio: '4:3', size: '1200 × 900 px', caption: 'Kirche St. Markus' },
  { title: 'ST. GEORG', file: 'st-georg-interior.jpg', src: '/images/churches/st-georg-interior.jpg', ratio: '4:3', size: '1200 × 900 px', caption: 'Kirche St. Georg' },
  { title: 'ST. MICHAEL · ULM', file: 'st-michael-ulm.jpg', src: '/images/churches/st-michael-ulm.jpg', ratio: '4:3', size: '1200 × 900 px', caption: 'Kirche St. Michael in Ulm' },
  { title: 'ST. MINA · TUTTLINGEN', file: 'st-mina-tuttlingen.jpg', src: '/images/churches/st-mina-tuttlingen.jpg', ratio: '4:3', size: '1200 × 900 px', caption: 'St. Mina und Abraam' },
  { title: 'GEMEINDEFEST', file: 'gemeindefest.jpg', src: '/images/gallery/gemeindefest.jpg', ratio: '4:3', size: '1200 × 900 px', caption: 'Gemeindefest' },
  { title: 'OSTERN', file: 'ostern.jpg', src: '/images/gallery/ostern.jpg', ratio: '4:3', size: '1200 × 900 px', caption: 'Osterfeier' },
]
onMounted(async () => {
  try {
    if (firebaseConfigured && db) {
      const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'))
      images.value = (await getDocs(q)).docs.map(d => ({ id: d.id, ...d.data() }))
    }
  } catch (e) {
    error.value = 'Die Online-Galerie ist momentan nicht erreichbar. Die Bild-Platzhalter bleiben sichtbar.'
  } finally {
    loading.value = false
  }
})
</script>
