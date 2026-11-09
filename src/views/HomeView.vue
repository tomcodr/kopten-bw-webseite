<template>
  <div class="home-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true">
        <img src="/images/hero/hero-gemeinde.jpg" alt="" />
      </div>
      <div class="hero-shade" aria-hidden="true"></div>

      <div class="wrap hero-grid">
        <div class="hero-text">
          <span class="eyebrow light">Koptisch-Orthodoxe Kirche</span>
          <h1>Koptisch-Orthodoxe Kirche <em>Baden-Württemberg</em></h1>
          <p class="hero-lead">
            Gottesdienste und Informationen unserer Gemeinden in Stuttgart, Ulm und Tuttlingen.
            Seien Sie herzlich willkommen.
          </p>
          <div class="hero-actions">
            <RouterLink class="btn btn-gold" to="/veranstaltungen">Gottesdienstzeiten <span>→</span></RouterLink>
            <a class="text-link light-link" href="https://kopten.de/kalender.html" target="_blank" rel="noopener noreferrer">Koptischer Kalender ↗</a>
          </div>
        </div>

        <aside class="hero-card" aria-label="Nächste Gottesdienste">
          <h2>Nächste Gottesdienste</h2>
          <div v-for="n in nextServices" :key="n.city" class="next-row">
            <div class="next-date"><b>{{ n.day }}</b><span>{{ n.month }}</span></div>
            <div class="next-info"><b>{{ n.city }}</b><span>{{ n.weekday }} · 09:30 Uhr</span></div>
          </div>
          <RouterLink class="text-link light-link" to="/veranstaltungen">Alle Termine →</RouterLink>
        </aside>
      </div>
      <span class="scroll-hint" aria-hidden="true"></span>
    </section>

    <!-- GOTTESDIENSTZEITEN -->
    <section class="times-section">
      <div class="wrap section reveal">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Gottesdienstzeiten</span>
            <h2>Wann wir <em>zusammenkommen</em></h2>
          </div>
          <p class="muted">Die Göttliche Liturgie feiern wir an drei Orten in Baden-Württemberg.</p>
        </div>
        <div class="times-list">
          <article v-for="c in churches" :key="c.city" class="time-row">
            <div class="time-day"><small>{{ c.rhythm }}</small><b>{{ c.day }}</b></div>
            <div class="time-clock">09:30 <small>UHR</small></div>
            <div class="time-church"><h3>{{ c.city }} · {{ c.saint }}</h3><p>{{ c.address }}</p></div>
            <a class="text-link" target="_blank" rel="noopener noreferrer" :href="c.route">Route ↗</a>
          </article>
        </div>
        <p class="schedule-note">Bitte beachten Sie mögliche Änderungen an Feiertagen. Aktuelle Termine finden Sie unter Gottesdienste &amp; Termine.</p>
      </div>
    </section>

    <!-- GEMEINDEN -->
    <section class="churches-section">
      <div class="wrap section">
        <div class="section-heading reveal">
          <div>
            <span class="eyebrow light">Unsere Gemeinden</span>
            <h2>Drei Orte, <em>ein Glaube</em></h2>
          </div>
          <p class="muted">Jede Gemeinde ist einem Heiligen anvertraut – dessen Ikone Sie hier sehen.</p>
        </div>
        <div class="church-grid">
          <article v-for="(c, i) in churches" :key="c.city" class="church-card reveal">
            <div class="church-visual">
              <span class="church-num">0{{ i + 1 }}</span>
              <IconImage :src="c.icon" :title="`Ikone · ${c.saint}`" ratio="3 / 5" size="800 × 1400 px" />
            </div>
            <div class="church-body">
              <span class="church-name">Koptisch-Orthodoxe Gemeinde</span>
              <h3>{{ c.city }}</h3>
              <p class="church-saint">{{ c.saint }}</p>
              <div class="church-meta"><b>{{ c.day }} · 09:30 Uhr</b>{{ c.address }}</div>
              <a class="text-link church-route" target="_blank" rel="noopener noreferrer" :href="c.route">Route planen ↗</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- KARTE (erst nach Klick laden – datenschutzfreundlich) -->
    <section class="map-section">
      <div class="wrap section reveal">
        <div class="map-layout">
          <div>
            <span class="eyebrow">Standorte</span>
            <h2 class="map-title">So finden Sie <em>zu uns</em></h2>
            <div class="map-tabs">
              <button
                v-for="(c, i) in churches"
                :key="c.city"
                type="button"
                class="map-tab"
                :class="{ active: activeMap === i }"
                @click="activeMap = i"
              >
                <b>{{ c.city }} · {{ c.saint }}</b>
                <span>{{ c.address }}</span>
              </button>
            </div>
            <a class="text-link" target="_blank" rel="noopener noreferrer" :href="churches[activeMap].route">In Google Maps öffnen ↗</a>
          </div>
          <div class="map-frame">
            <iframe
              v-if="mapLoaded"
              :key="activeMap"
              :src="mapSrc"
              title="Karte"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
            <div v-else class="map-consent">
              <span class="pin" aria-hidden="true">⌖</span>
              <p>Beim Laden der Karte werden Daten an Google übertragen. Möchten Sie die Karte anzeigen?</p>
              <button type="button" class="btn btn-dark" @click="mapLoaded = true">Karte laden</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BIBELVERS -->
    <section class="verse-band">
      <div class="wrap reveal">
        <div class="ornament" aria-hidden="true">✠</div>
        <blockquote>„Ich freute mich, als man mir sagte: Lasst uns zum Haus des Herrn gehen.“</blockquote>
        <small>Psalm 122,1</small>
      </div>
    </section>

    <!-- GALERIE -->
    <section class="gallery-preview">
      <div class="wrap section">
        <div class="section-heading reveal">
          <div>
            <span class="eyebrow">Einblicke</span>
            <h2>Unser Gemeindeleben <em>in Bildern</em></h2>
          </div>
          <RouterLink class="text-link" to="/galerie">Alle Bilder ansehen →</RouterLink>
        </div>
        <div class="preview-grid reveal">
          <RouterLink class="preview-photo photo-one" to="/galerie">
            <IconImage src="/images/churches/st-georg-interior.jpg" title="Kircheninnenraum" ratio="4 / 3" size="1600 × 1200 px" />
            <span>Unsere Kirchen</span>
          </RouterLink>
          <RouterLink class="preview-photo photo-two" to="/galerie">
            <IconImage src="/images/hero/hero-gemeinde.jpg" title="Altarraum" ratio="4 / 3" size="1600 × 1200 px" />
            <span>Glaube &amp; Tradition</span>
          </RouterLink>
          <RouterLink class="preview-photo photo-three" to="/galerie">
            <IconImage src="/images/gallery/gemeindefest.jpg" title="Gemeindefest" ratio="4 / 3" size="1600 × 1200 px" />
            <span>Gemeinschaft erleben</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-band">
      <div class="wrap cta-inner">
        <div>
          <h2>Besuchen Sie uns – <em>Sie sind willkommen.</em></h2>
          <p>Haben Sie Fragen zu den Gottesdiensten oder möchten Sie uns kennenlernen? Wir helfen Ihnen gerne weiter.</p>
        </div>
        <RouterLink class="btn btn-dark" to="/kontakt">Kontakt aufnehmen →</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import IconImage from '../components/IconImage.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const churches = [
  {
    city: 'Stuttgart', saint: 'St. Georg', rhythm: 'Jede Woche', day: 'Sonntag',
    address: 'Wurmlinger Str. 49, 70597 Stuttgart',
    icon: '/images/icons/st-georg.jpg',
    route: 'https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart',
    matches: (d) => d.getDay() === 0,
  },
  {
    city: 'Ulm', saint: 'St. Michael · Kreuzkirche', rhythm: 'Monatlich', day: '4. Samstag',
    address: 'Abt-Ulrich-Str. 2, 89079 Ulm',
    icon: '/images/icons/st-michael-ulm.jpg',
    route: 'https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm',
    matches: (d) => d.getDay() === 6 && Math.ceil(d.getDate() / 7) === 4,
  },
  {
    city: 'Tuttlingen', saint: 'St. Mina und Abraam', rhythm: 'Monatlich', day: '2. Samstag',
    address: 'Kolonie Str. 21, 78532 Tuttlingen',
    icon: '/images/icons/st-mina-abraam-tuttlingen.jpg',
    route: 'https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen',
    matches: (d) => d.getDay() === 6 && Math.ceil(d.getDate() / 7) === 2,
  },
]

// Nächster Termin je Gemeinde (Gottesdienst 09:30 Uhr – ab 12 Uhr zählt der heutige Tag nicht mehr)
function nextDate(rule) {
  const now = new Date()
  for (let i = 0; i < 70; i++) {
    if (i === 0 && now.getHours() >= 12) continue
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i)
    if (rule(d)) return d
  }
  return null
}

const nextServices = computed(() =>
  churches
    .map((c) => ({ city: c.city, date: nextDate(c.matches) }))
    .filter((n) => n.date)
    .sort((a, b) => a.date - b.date)
    .map((n) => ({
      city: n.city,
      day: n.date.getDate(),
      month: n.date.toLocaleDateString('de-DE', { month: 'short' }).replace('.', ''),
      weekday: n.date.toLocaleDateString('de-DE', { weekday: 'long' }),
    }))
)

const activeMap = ref(0)
const mapLoaded = ref(false)
const mapSrc = computed(
  () => `https://maps.google.com/maps?q=${encodeURIComponent(churches[activeMap.value].address)}&z=15&output=embed`
)
</script>
