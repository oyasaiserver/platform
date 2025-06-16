import '@oyasaiserver/lib/shims/react'
import { description, name } from '../../package.json'

declare module 'react' {
  interface HTMLAttributes<T> {
    align?: 'center' | 'left' | 'right'
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
    <h3 align='center'>{name}</h3>
    <p align='center'>{description}</p>
  </>
)
