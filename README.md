# Wine&Sofi

## Resources

Figma: https://www.figma.com/file/LE2wLWska9Go06pDvnGP4y/Wine%26Sofi 

## Architecture

The site is built with Gatsby and uses Sanity.io as a data store and Sanity Studio for content editing.  
Hosting and deployment is in AWS Amplify.

### Workflow

Users must be created in Sanity.io  
Content schema is defined in `./sanity_studio/schemas` and the graphql API can be deployed with `npm run deploy-graphql` in `./sanity_studio` (see `./sanity_studio/package.json`).  
A new graphql API deployment is needed after every content schema change.

The Sanity Studio CMS can be started in dev mode (`npm run dev` in `./sanity_studio`, see `./sanity_studio/package.json`).
The production CMS build is triggered by the Gatsby build process (see the `prebuild` step in `./package.json`). During the production build the Sanity Studio frontend becomes part of the Gatsby site by building the CMS files to the `./static/admin` folder.

Gatsby uses the `gatsby-source-sanity` plugin to source data from Sanity.io  

Content changes in the CMS can trigger a webhook in Sanity.io that triggers a rebuild and deployment in AWS.

# Installation

Create a `.env` file in the `sanity_studio` folder with the right Sanity.io instance keys. An example is provided for the staging instance as `.env.staging`. You can copy the file as `.env`.  
