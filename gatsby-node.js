import { createPortfolioPages } from './src/gatsby/createPortfolioPages'
import { turnPortfolioCategoriesIntoPages } from './src/gatsby/turnPortfolioCategoriesIntoPages';

export { createSchemaCustomization } from './src/gatsby/createSchemaCustomization';
export { onCreateNode } from './src/gatsby/onCreateNode';

export async function createPages(params) {
  await Promise.all([createPortfolioPages(params)]);
  await Promise.all([turnPortfolioCategoriesIntoPages(params)]);
}