import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import clientConfig from './sanity-client';
import { languageFilter } from '@sanity/language-filter';
import { documentInternationalization } from '@sanity/document-internationalization';

export default defineConfig({
  name: 'default',
  title: 'winesofi',
  plugins: [
    structureTool(),
    languageFilter({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'hu', title: 'Magyar' },
      ],
      defaultLanguages: ['hu'],
      documentTypes: ['page', 'post'],
      filterField: (enclosingType, member, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(member.name),
    }),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'hu', title: 'Magyar' },
      ],
      schemaTypes: ['page', 'post'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  ...clientConfig
});
