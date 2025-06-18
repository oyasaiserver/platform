import {
  description,
  homepage,
  repository as repositoryUrl
} from '../../../package.json'
import { ensure } from './utils.ts'

const prefix = 'github:'

const [organization, name] = repositoryUrl.replace(prefix, '').split('/')

export const repository = {
  organization: ensure(organization),
  name: ensure(name),
  description,
  homepage
} as const
