const env = import.meta.env || process?.env;

export default {
  projectId: env.SANITY_STUDIO_PROJECT_ID,
  dataset: env.SANITY_STUDIO_DATASET
};
