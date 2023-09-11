import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'GovPro AI',

  projectId: '07rgm0vd',
  dataset: 'production',

  plugins: [deskTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
