import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import clientConfig from './sanity-client';

export default defineConfig({
  name: 'default',
  title: 'winesofi',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  ...clientConfig
});
