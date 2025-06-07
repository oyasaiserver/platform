import { Biome, type Configuration, Distribution } from '@biomejs/js-api'
import config from '../../../biome.json'

const biome = await Biome.create({
  distribution: Distribution.NODE
})

biome.applyConfiguration(config as Configuration)

export function format(code: string, path: string): string {
  const { content } = biome.formatContent(code, {
    filePath: path
  })
  return content
}
