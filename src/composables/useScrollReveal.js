import { onMounted, onUnmounted } from 'vue'
export function useScrollReveal() {
  let observer
  onMounted(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible')); return
    }
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })
    nodes.forEach(node => observer.observe(node))
  })
  onUnmounted(() => observer?.disconnect())
}
