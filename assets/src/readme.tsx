import '@oyasaiserver/lib/shims/preact'
import { repository } from '@oyasaiserver/lib/repository'

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
    <h3 align='center'>{repository.name}</h3>
    <p align='center'>{repository.description}</p>
  </>
)
