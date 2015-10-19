export function selectCategory(categories, currentCategoryFilter) {
  if (currentCategoryFilter) {
    return categories.find(category => category.id === currentCategoryFilter);
  }
}

export function selectSubCategories(currentCategory, currentSubCategoryFilter) {
  if (!currentCategory) {
    return [];
  }

  return currentCategory.subCategories
    .map(category => {
      return Object.assign({}, category, {
        active: currentSubCategoryFilter.indexOf(category.id) !== -1
      });
    });
}

export function selectActiveSubCategories(currentCategory, currentSubCategoryFilter) {
  return selectSubCategories(currentCategory, currentSubCategoryFilter)
    .filter(category => category.active);
}