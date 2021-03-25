import { createProjectPages } from './src/gatsby/createProjectPages'

export { createSchemaCustomization } from './src/gatsby/createSchemaCustomization';
export { onCreateNode } from './src/gatsby/onCreateNode';

export async function createPages(params) {
  await Promise.all([createProjectPages(params)]);

}