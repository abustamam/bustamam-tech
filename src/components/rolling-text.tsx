import * as React from 'react'

export interface RollingTextProps {
  prefix: string
  words: string[]
  interval?: number
  className?: string
}

export function RollingText({
  prefix,
  words,
  interval = 1000,
  className = '',
}: RollingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [displayIndex, setDisplayIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate the maximum width needed for all words
  // MUST be called before any conditional returns to follow Rules of Hooks
  const maxWordLength = React.useMemo(() => {
    if (words.length === 0) return 0
    return Math.max(...words.map(word => word.length))
  }, [words])

  // Use a larger minWidth based on the longest word, with some padding
  const containerWidth = React.useMemo(() => {
    // Estimate: roughly 0.6em per character for large fonts, plus padding
    const estimatedWidth = maxWordLength * 0.6
    return `${Math.max(estimatedWidth, 8)}em`
  }, [maxWordLength])

  React.useEffect(() => {
    if (words.length === 0 || !mounted) return

    const timer = setInterval(() => {
      setIsAnimating(true)
      const nextIndex = (displayIndex + 1) % words.length
      setCurrentIndex(nextIndex)
      
      setTimeout(() => {
        setDisplayIndex(nextIndex)
        setIsAnimating(false)
      }, 600)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval, mounted, displayIndex])

  if (words.length === 0) {
    return <span className={className}>{prefix}</span>
  }

  const currentWord = words[displayIndex]
  const nextWord = words[currentIndex]

  if (!mounted) {
    return (
      <span className={className}>
        {prefix} {currentWord}
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center justify-center mb-0 ${className}`}>
      {prefix && <span>{prefix}</span>}
      <span className={`relative inline-block ${prefix ? 'ml-1' : ''}`} style={{ verticalAlign: 'baseline' }}>
        <span
          ref={containerRef}
          className="relative inline-block overflow-hidden"
          style={{
            height: '1em',
            lineHeight: '1em',
            minWidth: containerWidth,
            width: containerWidth,
            verticalAlign: 'baseline',
            textAlign: 'center',
          }}
        >
          <span
            key={currentWord}
            className="absolute top-0 left-1/2 whitespace-nowrap block"
            style={{
              transform: isAnimating 
                ? 'translate(-50%, -100%)' 
                : 'translate(-50%, 0)',
              opacity: isAnimating ? 0 : 1,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {currentWord}
          </span>
          {isAnimating && (
            <span
              className="absolute top-0 left-1/2 whitespace-nowrap block"
              style={{
                transform: 'translate(-50%, 0)',
                opacity: 1,
                animation: 'rollIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              }}
            >
              {nextWord}
            </span>
          )}
        </span>
      </span>
    </span>
  )
}

