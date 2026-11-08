
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
            src="/images/logo/logo.png"
            alt="Ikone des heiligen Georg"
            class="brand-logo"
            width="54"
            height="64"
          />

          <span class="brand-text">
            <b>KOPTEN <span class="brand-accent">BW</span></b>
            <small>Koptisch-Orthodoxe Kirche</small>
          </span>
        </RouterLink>

        <button
          class="menu-toggle"
          :class="{ 'is-open': menuOpen }"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="main-navigation"
          :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
          @click="toggleMenu"
        >
          <span class="menu-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav
          id="main-navigation"
          class="main-nav"
          :class="{ open: menuOpen }"
          aria-label="Hauptnavigation"
        >
          <RouterLink to="/" @click="closeMenu">
            Startseite
          </RouterLink>

          <RouterLink to="/veranstaltungen" @click="closeMenu">
            Gottesdienste &amp; Termine
          </RouterLink>

          <RouterLink to="/galerie" @click="closeMenu">
            Galerie
          </RouterLink>

          <RouterLink to="/kontakt" @click="closeMenu">
            Kontakt
          </RouterLink>

        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="wrap footer-grid">
        <div class="footer-about">
          <RouterLink to="/" class="footer-brand">
            KOPTEN <span>BW</span>
          </RouterLink>
          <p>
            Eine lebendige Glaubensgemeinschaft in Baden-Württemberg.
            Wir freuen uns, Sie willkommen zu heißen.
          </p>
        </div>

        <div class="footer-links">
          <h3>Entdecken</h3>
          <RouterLink to="/">Startseite</RouterLink>
          <RouterLink to="/veranstaltungen">
            Gottesdienste &amp; Termine
          </RouterLink>
          <RouterLink to="/galerie">Galerie</RouterLink>
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
        <span>
          © {{ new Date().getFullYear() }}
          Koptisch-Orthodoxe Kirche Baden-Württemberg
        </span>
        <RouterLink to="/admin">Administration</RouterLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function handleResize() {
  if (window.innerWidth > 900) {
    closeMenu()
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
})
</script>
