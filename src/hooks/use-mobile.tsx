import * as React from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: 1024px)")
    const onChange = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < 1024)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
