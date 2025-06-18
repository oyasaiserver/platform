import type { ReactElement } from 'preact/compat'
import { renderToString as preactRenderToString } from 'preact-render-to-string'

export function renderToString(component: ReactElement) {
  return preactRenderToString(component)
}

export type { ReactElement } from 'preact/compat'
