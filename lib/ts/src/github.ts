import { description, homepage, repository } from '../../../package.json'
import { ensure } from './utils.ts'

const prefix = 'github:'

const [organization, name] = repository.replace(prefix, '').split('/')

export const github = {
  organization: ensure(organization),
  repository: ensure(name),
  description,
  homepage
} as const
