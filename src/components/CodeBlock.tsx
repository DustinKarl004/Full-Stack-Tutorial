'use client'

import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-sql'

type CodeBlockProps = {
  code: string
  language: string
  fileName?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({ 
  code, 
  language, 
  fileName,
  showLineNumbers = true
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        const copyButton = document.querySelector('.copy-button') as HTMLButtonElement
        if (copyButton) {
          copyButton.textContent = 'Copied!'
          copyButton.disabled = true
          
          setTimeout(() => {
            copyButton.textContent = 'Copy'
            copyButton.disabled = false
          }, 2000)
        }
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        {fileName && (
          <span style={{ marginRight: 'auto' }}>{fileName}</span>
        )}
        <button 
          onClick={copyToClipboard} 
          className="copy-button"
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '0.8rem',
            opacity: 0.8,
            transition: 'opacity 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
        >
          Copy
        </button>
      </div>
      
      <pre className={showLineNumbers ? 'line-numbers' : ''}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  )
} 