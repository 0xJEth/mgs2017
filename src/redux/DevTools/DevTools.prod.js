import { createElement } from 'react'

export default function DevTools() {
  return createElement(
    'span',
    { style: { display: 'none' } },
    `Production Build v${process.env.APP_VERSION}`
  )
}
