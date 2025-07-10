import { z } from 'zod'

export const nodeSeaConfig = z
  .object({
    main: z
      .string()
      .describe('Absolute path to the bundled main JavaScript file.'),
    output: z
      .string()
      .describe(
        'Absolute path where the generated .blob file will be written.'
      ),
    disableExperimentalSEAWarning: z
      .boolean()
      .describe('Disables the experimental SEA warning if true.')
      .default(false),
    useSnapshot: z
      .boolean()
      .describe('If true, enables V8 snapshotting.')
      .default(false),
    useCodeCache: z
      .boolean()
      .describe('If true, enables V8 code caching.')
      .default(false),
    assets: z
      .record(z.string())
      .describe('Optional map of asset keys to absolute paths.')
      .optional()
  })
  .strict() satisfies z.ZodType<NodeSeaConfig>

export interface NodeSeaConfig {
  /**
   * Absolute path to the bundled main JavaScript file.
   */
  main: string
  /**
   * Absolute path where the generated .blob file will be written.
   */
  output: string
  /**
   * Disables the experimental SEA warning if true.
   */
  disableExperimentalSEAWarning?: boolean
  /**
   * If true, enables V8 snapshotting.
   */
  useSnapshot?: boolean
  /**
   * If true, enables V8 code caching.
   */
  useCodeCache?: boolean
  /**
   * Optional map of asset keys to absolute paths.
   */
  assets?: {
    [k: string]: string
  }
}
