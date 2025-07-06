import { type AssetKey, getAsset } from 'node:sea'

export function getAssetContent(key: AssetKey) {
  return getAsset(key, 'utf-8')
}
