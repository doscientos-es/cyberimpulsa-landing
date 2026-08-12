import { glob } from "astro/loaders";
import {
  type InferEntrySchema,
  defineCollection,
  type getCollection,
  z,
} from "astro:content";

const clients = defineCollection({
  loader: glob({ base: "./src/content/clients", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      client: z.string(),
      type: z.string(),
      tag: z.string(),
      metric: z.string(),
      metricLabel: z.string(),
      website: z.string().url().optional(),
      order: z.number().int().default(99),
      cover: image().optional(),
      logo: image().optional(),
      featured: z.boolean().default(true),
    }),
});

export type Client = InferEntrySchema<"clients">;
export type ClientMetadata = Awaited<
  ReturnType<typeof getCollection<"clients">>
>[number];

export const collections = { clients };
