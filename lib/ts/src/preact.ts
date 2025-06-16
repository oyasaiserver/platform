import { renderToString as preactRenderToString } from 'preact-render-to-string'
import type { ReactElement } from 'preact/compat'

export function renderToString(component: ReactElement) {
  return preactRenderToString(component)
}

export type { ReactElement } from 'preact/compat'
