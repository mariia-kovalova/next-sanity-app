import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-13';

const config = defineConfig({
  title: 'Next Sanity App CMS',
  projectId,
  dataset,
  apiVersion,
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
