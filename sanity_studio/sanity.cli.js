import dotenv from 'dotenv';
import { defineCliConfig } from 'sanity/cli'

dotenv.config();
import clientConfig from './sanity-client';

export default defineCliConfig({
  project: {
    basePath: '/admin'
  },
  api: clientConfig
});
