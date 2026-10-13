import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { safeUrl } from "../scripts/safe-markdown.mjs";

// Starlight renders several frontmatter fields as HTML. Accept only this text-only subset.
const text = z
  .string()
  .refine((value) => !/[<>]/.test(value), "HTML は使用できません");
const contentSchema = z
  .object({
    title: text.min(1),
    description: text.optional(),
    template: z.enum(["doc", "splash"]).optional(),
    pagefind: z.boolean().optional(),
    sidebar: z
      .object({
        order: z.number().optional(),
        label: text.optional(),
        hidden: z.boolean().optional(),
      })
      .strict()
      .optional(),
    hero: z
      .object({
        title: text.optional(),
        tagline: text.optional(),
        actions: z
          .array(
            z
              .object({
                text,
                link: z
                  .string()
                  .refine(safeUrl, "安全な URL を指定してください"),
                icon: z.enum(["right-arrow", "external"]).optional(),
                variant: z.enum(["primary", "secondary", "minimal"]).optional(),
              })
              .strict(),
          )
          .optional(),
      })
      .strict()
      .optional(),
  })
  .strict();

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: (context) => contentSchema.pipe(docsSchema()(context)),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
