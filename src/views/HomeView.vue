<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="wrap hero-content">
        <span class="eyebrow light">KOPTISCH-ORTHODOXE KIRCHE</span>
        <h1>Koptisch-Orthodoxe Kirche <em>Baden-Württemberg</em></h1>
        <p>Gottesdienste und Informationen unserer Gemeinden in Stuttgart, Ulm und Tuttlingen.</p>
        <div class="hero-actions">
          <RouterLink class="btn btn-gold" to="/veranstaltungen">Gottesdienstzeiten <span>→</span></RouterLink>
          <a class="text-link light-link" href="https://kopten.de/kalender.html" target="_blank" rel="noopener noreferrer">Koptischer Kalender ↗</a>
        </div>
      </div>
    </section>

    <section class="services-section churches-section">
      <div class="wrap section">
        <div class="section-heading">
          <div><span class="eyebrow">GOTTESDIENSTE & GEMEINDEN</span><h2>Wir feiern gemeinsam <em>Gottesdienst</em></h2></div>
          <p class="church-intro">Hier finden Sie die Gottesdienstzeiten und Informationen zu unseren Gemeinden.</p>
        </div>
        <div class="service-grid">
          <article class="service-card church-card">
            <div class="church-card-heading">
              <div><span class="church-name">Koptisch-Orthodoxe Gemeinde</span><h3>Stuttgart</h3><p>St. Georg</p></div>
              <div class="saint-logo saint-george"><IconImage src="/images/icons/st-georg.jpg" title="Ikone · St. Georg" ratio="1 / 1" size="800 × 800 px" /></div>
            </div>
            <div class="service-meta">Gottesdienst <b>Sonntags · 09:30 Uhr</b></div>
            <small>Wurmlinger Str. 49, 70597 Stuttgart</small>
            <a class="church-route" target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart">Route planen ↗</a>
          </article>
          <article class="service-card church-card">
            <div class="church-card-heading">
              <div><span class="church-name">Koptisch-Orthodoxe Gemeinde</span><h3>Ulm</h3><p>St. Michael · Kreuzkirche</p></div>
              <div class="saint-logo"><IconImage src="/images/icons/st-michael-ulm.jpg" title="Ikone · St. Michael" ratio="1 / 1" size="800 × 800 px" /></div>
            </div>
            <div class="service-meta">Gottesdienst <b>Jeden 4. Samstag · 09:30 Uhr</b></div>
            <small>Abt-Ulrich-Str. 2, 89079 Ulm</small>
            <a class="church-route" target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm">Route planen ↗</a>
          </article>
          <article class="service-card church-card">
            <div class="church-card-heading">
              <div><span class="church-name">Koptisch-Orthodoxe Gemeinde</span><h3>Tuttlingen</h3><p>St. Mina und Abraam</p></div>
              <div class="saint-logo"><IconImage src="/images/icons/st-mina-abraam-tuttlingen.jpg" title="Ikonen · St. Mina & Abraam" ratio="1 / 1" size="800 × 800 px" /></div>
            </div>
            <div class="service-meta">Gottesdienst <b>Jeden 2. Samstag · 09:30 Uhr</b></div>
            <small>Kolonie Str. 21, 78532 Tuttlingen</small>
            <a class="church-route" target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen">Route planen ↗</a>
          </article>
        </div>
        <p class="schedule-note">Bitte beachten Sie mögliche Änderungen an Feiertagen. Aktuelle Termine finden Sie unter Gottesdienste &amp; Termine.</p>
      </div>
    </section>

    <section class="gallery-preview wrap section">
      <div class="section-heading">
        <div><span class="eyebrow">EINBLICKE</span><h2>Unser Gemeindeleben <em>in Bildern</em></h2></div>
        <RouterLink class="text-link" to="/galerie">Alle Bilder ansehen →</RouterLink>
      </div>
      <div class="preview-grid">
        <RouterLink class="preview-photo photo-one" to="/galerie"><IconImage src="/images/churches/st-georg-interior.jpg" title="Kircheninnenraum" ratio="4 / 3" size="1600 × 1200 px" /><span>Unsere Kirchen <small>/images/churches/st-georg-interior.jpg · 4:3</small></span></RouterLink>
        <RouterLink class="preview-photo photo-two" to="/galerie"><IconImage src="/images/gallery/gemeindefest.jpg" title="Gemeindefest" ratio="4 / 3" size="1600 × 1200 px" /><span>Gemeinschaft erleben <small>/images/gallery/gemeindefest.jpg · 4:3</small></span></RouterLink>
        <RouterLink class="preview-photo photo-three" to="/galerie"><IconImage src="/images/gallery/ostern.jpg" title="Glaube und Tradition" ratio="4 / 3" size="1600 × 1200 px" /><span>Glaube &amp; Tradition <small>/images/gallery/ostern.jpg · 4:3</small></span></RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import IconImage from '../components/IconImage.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>
