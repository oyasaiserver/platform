import { $ as zx$ } from 'zx'

const sha = (await zx$`git rev-parse --short HEAD`).text().trim()

console.log(sha)

// ssh into onprem & run npx
