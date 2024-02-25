import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

const env = import.meta.env || process?.env;

export default defineConfig({
  name: 'default',
  title: 'winesofi',

  projectId: env.SANITY_STUDIO_PROJECT_ID,
  dataset: env.SANITY_STUDIO_DATASET,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
