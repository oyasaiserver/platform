import '@oyasaiserver/lib/shims/preact'
import { github } from '@oyasaiserver/lib/github'

declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes {
      align?: 'center' | 'left' | 'right'
    }
  }
}

export const readme = (
  <>
    <p align='center'>
      <img
        src='https://avatars.githubusercontent.com/oyasaiserver'
        height='96'
        alt='icon'
      />
    </p>
    <h3 align='center'>{github.repository}</h3>
    <p align='center'>{github.description}</p>
  </>
)
