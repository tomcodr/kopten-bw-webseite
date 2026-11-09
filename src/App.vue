<template>
  <div class="site-shell">
    <header class="header">
      <div class="wrap nav-wrap">
        <RouterLink
          to="/"
          class="brand"
          aria-label="Koptisch-Orthodoxe Kirche Baden-Württemberg – Startseite"
          @click="closeMenu"
        >
          <img
            src="/images/logo/logo1.png"
            alt="Ikone des heiligen Georg"
            class="brand-logo"
            width="81"
            height="58"
          />
          <span class="brand-text">
            <b>KOPTEN <span class="brand-accent">BW</span></b>
            <small>Koptisch-Orthodoxe Kirche</small>
          </span>
        </RouterLink>

        <div class="header-actions">
          <RouterLink class="header-link" to="/veranstaltungen">Gottesdienste</RouterLink>
          <RouterLink class="header-link" to="/kontakt">Kontakt</RouterLink>

          <button
            class="menu-toggle"
            type="button"
            :aria-expanded="menuOpen"
            aria-controls="main-navigation"
            aria-label="Menü öffnen"
            @click="openMenu"
          >
            <span class="menu-label">Menü</span>
            <span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Vollbild-Menü -->
    <div
      id="main-navigation"
      class="menu-overlay"
      :class="{ open: menuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Hauptnavigation"
      :aria-hidden="!menuOpen"
    >
      <div class="wrap">
        <div class="menu-top">
          <RouterLink to="/" class="brand" @click="closeMenu">
            <img src="/images/logo/logo1.png" alt="" class="brand-logo" width="81" height="58" />
            <span class="brand-text">
              <b>KOPTEN <span class="brand-accent">BW</span></b>
            </span>
          </RouterLink>
          <button ref="closeBtn" class="menu-close" type="button" @click="closeMenu">
            Schließen <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div class="menu-body">
          <nav class="menu-main" aria-label="Seiten">
            <RouterLink to="/" @click="closeMenu"><small>01</small> Startseite</RouterLink>
            <RouterLink to="/veranstaltungen" @click="closeMenu"><small>02</small> Gottesdienste &amp; Termine</RouterLink>
            <RouterLink to="/galerie" @click="closeMenu"><small>03</small> Galerie</RouterLink>
            <RouterLink to="/kontakt" @click="closeMenu"><small>04</small> Kontakt</RouterLink>
          </nav>

          <aside class="menu-side">
            <h3>Unsere Gemeinden</h3>
            <RouterLink class="menu-church" to="/veranstaltungen" @click="closeMenu">
              <b>Stuttgart · St. Georg</b><span>Jeden Sonntag · 09:30 Uhr</span>
            </RouterLink>
            <RouterLink class="menu-church" to="/veranstaltungen" @click="closeMenu">
              <b>Ulm · St. Michael</b><span>Jeden 4. Samstag · 09:30 Uhr</span>
            </RouterLink>
            <RouterLink class="menu-church" to="/veranstaltungen" @click="closeMenu">
              <b>Tuttlingen · St. Mina &amp; Abraam</b><span>Jeden 2. Samstag · 09:30 Uhr</span>
            </RouterLink>
            <div class="menu-contact">
              Wurmlinger Str. 49 · 70597 Stuttgart
              <a href="tel:+49711604252">0711 604252</a>
              <a href="mailto:info@st-georg.com">info@st-georg.com</a>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="wrap footer-grid">
        <div class="footer-about">
          <RouterLink to="/" class="footer-brand">
            <img src="/images/logo/logo1.png" alt="" width="90" height="64" />
            <span>KOPTEN <span>BW</span></span>
          </RouterLink>
          <p>
            Eine lebendige Glaubensgemeinschaft in Baden-Württemberg.
            Wir freuen uns, Sie willkommen zu heißen.
          </p>
        </div>

        <div class="footer-links">
          <h3>Entdecken</h3>
          <RouterLink to="/">Startseite</RouterLink>
          <RouterLink to="/veranstaltungen">Gottesdienste &amp; Termine</RouterLink>
          <RouterLink to="/galerie">Galerie</RouterLink>
          <RouterLink to="/kontakt">Kontakt</RouterLink>
        </div>

        <div class="footer-contact">
          <h3>Kontakt &amp; Besuch</h3>
          <p>
            St. Georg Koptisch-Orthodoxe Kirche<br />
            Wurmlinger Str. 49<br />
            70597 Stuttgart
          </p>
          <a href="tel:+49711604252">0711 604252</a>
          <a href="mailto:info@st-georg.com">info@st-georg.com</a>
        </div>
      </div>

      <div class="wrap footer-bottom">
        <span>© {{ new Date().getFullYear() }} Koptisch-Orthodoxe Kirche Baden-Württemberg</span>
        <RouterLink to="/admin">Administration</RouterLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const menuOpen = ref(false)
const closeBtn = ref(null)

function openMenu() {
  menuOpen.value = true
  nextTick(() => closeBtn.value?.focus())
}

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function handleKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
