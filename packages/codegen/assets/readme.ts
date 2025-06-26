import {
  description,
  name,
  organization
} from '@oyasaiserver/config/repository.json' with { type: 'json' }

// language=tsx
export const readme = `
  <p align='center'>
    <img
      src='https://avatars.githubusercontent.com/${organization}'
      height='96'
      alt='icon'
    />
  </p>
  <h3 align='center'>${name}</h3>
  <p align='center'>${description}</p>
`
