import { useContext, useEffect, useRef } from "react"
import { links } from "./Menu"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import { MenuContext } from "./App"

export default function Content() {
  const ref = useRef<HTMLDivElement>(null)
  const { setHash } = useContext(MenuContext)
  
  useEffect(() => {
    if(!ref.current) return
    const elements = ref.current.querySelectorAll('[id]')
    console.log(elements)
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if(entry.boundingClientRect.top > 0) return
      const el = entry.target as HTMLElement
      const elHash = `#${el.id}`
      const hashIndex = links.findIndex((link) => link.href === elHash)
      if(hashIndex === -1) return
      const nextHash = links[hashIndex+1].href
      setHash(nextHash)
      ref.current!.addEventListener('scrollend', () => {
        const maxScrollTop = ref.current!.scrollHeight - ref.current!.clientHeight
        if(ref.current!.scrollTop >= maxScrollTop) {
          setHash(links[links.length-1].href)
        } else if (ref.current!.scrollTop <= 0) {
          setHash(links[0].href)
        }
      })
    }, {
      root: ref.current,
      rootMargin: '10px',
      threshold: [0.5, 1]
    })
    elements.forEach((el) => observer.observe(el))
  }, [ref, setHash])

  return (
    <section id="content" ref={ref}>
      <About />
      <Experience />
      <Projects />
    </section>
  )
}