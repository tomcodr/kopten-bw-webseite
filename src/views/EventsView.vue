<template>
  <section class="page-hero"><div class="wrap"><span class="eyebrow light">GEMEINSAM FEIERN & BETEN</span><h1>Gottesdienste & <em>Kirchenjahr</em></h1><p>Gottesdienstzeiten unserer Gemeinden und eine Auswahl wichtiger koptischer Festtage.</p></div></section>
  <section class="wrap section reveal"><div class="section-heading"><div><span class="eyebrow">REGELMÄSSIGE GOTTESDIENSTE</span><h2>Unsere <em>Gemeinden</em></h2></div></div>
    <div class="event-list"><article v-for="e in events" :key="e.city" class="event-row"><div class="event-symbol">✦</div><div class="event-main"><h3>{{e.city}}</h3><p>{{e.church}}</p><span>{{e.address}}</span></div><div class="event-time"><b>{{e.day}}</b><span>{{e.time}}</span></div><a class="text-link" target="_blank" rel="noreferrer" :href="e.map">Route ↗</a></article></div>
  </section>
  <section class="calendar-section section reveal"><div class="wrap"><div class="section-heading"><div><span class="eyebrow">DAS KIRCHENJAHR</span><h2>Koptischer <em>Kalender 2026</em></h2><p class="muted">Ikonen und Platzhalter für wichtige Feste. Termine bitte vor Veröffentlichung mit dem offiziellen Kalender abgleichen.</p></div><a class="btn btn-dark" href="https://kopten.de/kalender.html" target="_blank" rel="noopener noreferrer">Offiziellen Kalender öffnen ↗</a></div>
    <div class="calendar-grid"><article v-for="feast in feasts" :key="feast.file" class="feast-card"><IconImage :src="`/images/icons/${feast.file}`" :title="feast.title" :ratio="'3 / 4'" size="900 × 1200 px"/><div class="feast-info"><span class="feast-date">{{feast.date}}</span><h3>{{feast.title}}</h3><p>{{feast.note}}</p></div></article></div>
    <p class="calendar-source">Kalenderquelle und weitere Festtage: <a href="https://kopten.de/kalender.html" target="_blank" rel="noopener noreferrer">kopten.de/kalender.html ↗</a></p>
  </div></section>
  <section class="wrap section reveal"><div class="info-panel"><span class="eyebrow">HINWEIS</span><h3>Änderungen an Feiertagen</h3><p>Gottesdienstzeiten können an kirchlichen Feiertagen und während der Fastenzeit abweichen. Bitte prüfe aktuelle Hinweise direkt bei der Gemeinde.</p><RouterLink class="btn btn-dark" to="/kontakt">Kontakt aufnehmen →</RouterLink></div></section>
</template>
<script setup>
import IconImage from '../components/IconImage.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
const events=[
{city:'Stuttgart',church:'St. Georg Koptisch-Orthodoxe Kirche',address:'Wurmlinger Str. 49, 70597 Stuttgart',day:'Jeden Sonntag',time:'09:30 Uhr',map:'https://maps.google.com/?q=Wurmlinger+Strasse+49+70597+Stuttgart'},
{city:'Ulm',church:'St. Michael – zu Gast in der Kreuzkirche',address:'Abt-Ulrich-Str. 2, 89079 Ulm',day:'Jeder 4. Samstag im Monat',time:'09:30 Uhr',map:'https://maps.google.com/?q=Abt-Ulrich-Str+2+Ulm'},
{city:'Tuttlingen',church:'St. Mina und Abraam Koptisch-Orthodoxe Kirche',address:'Kolonie Str. 21, 78532 Tuttlingen',day:'Jeder 2. Samstag im Monat',time:'09:30 Uhr',map:'https://maps.google.com/?q=Kolonie+Strasse+21+Tuttlingen'}]
const feasts=[
{date:'7. Januar',title:'Geburt Christi',file:'geburt-christi.jpg',note:'Weihnachten nach dem koptischen Kalender'},
{date:'19. Januar',title:'Taufe Christi',file:'taufe-christi.jpg',note:'Epiphanie / Theophanie'},
{date:'Februar–April',title:'Große Fastenzeit',file:'fastenzeit.jpg',note:'Zeit der Vorbereitung auf Pascha'},
{date:'5. April',title:'Palmsonntag',file:'einzug-jerusalem.jpg',note:'Einzug Christi in Jerusalem'},
{date:'10. April',title:'Karfreitag',file:'kreuzigung.jpg',note:'Kreuzigung Christi'},
{date:'12. April',title:'Auferstehung Christi',file:'auferstehung.jpg',note:'Pascha / Ostern 2026'},
{date:'19. April',title:'Thomas-Sonntag',file:'thomas-sonntag.jpg',note:'Der Apostel Thomas begegnet dem Auferstandenen'},
{date:'21. Mai',title:'Christi Himmelfahrt',file:'himmelfahrt.jpg',note:'Himmelfahrt des Herrn'},
{date:'31. Mai',title:'Pfingsten',file:'pfingsten.jpg',note:'Herabkunft des Heiligen Geistes'},
{date:'12. Juli',title:'Petrus und Paulus',file:'apostel-petrus-paulus.jpg',note:'Fest der heiligen Apostel'},
{date:'19. August',title:'Verklärung Christi',file:'verklaerung-christi.jpg',note:'Christus auf dem Berg Tabor'},
{date:'11. September',title:'Neyrouz',file:'neyrouz.jpg',note:'Koptisches Neujahr und Märtyrer'},
{date:'November–Januar',title:'Weihnachtsfasten',file:'weihnachtsfasten.jpg',note:'Vorbereitung auf das Fest der Geburt Christi'}]
</script>
