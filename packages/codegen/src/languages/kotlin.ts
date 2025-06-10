import {
  KotlinTargetLanguage,
  KotlinXRenderer,
  type RenderContext,
  getOptionValues,
  kotlinOptions
} from 'quicktype-core'
import {
  AcronymStyleOptions,
  acronymOption
} from 'quicktype-core/dist/support/Acronyms'

export class Kotlin extends KotlinTargetLanguage {
  protected override makeRenderer(
    renderContext: RenderContext,
    untypedOptionValues: Record<string, unknown>
  ): KotlinXRenderer {
    return new KotlinXRenderer(
      this,
      renderContext,
      getOptionValues(
        {
          ...kotlinOptions,
          acronymStyle: acronymOption(AcronymStyleOptions.Camel)
        },
        untypedOptionValues
      )
    )
  }
}
