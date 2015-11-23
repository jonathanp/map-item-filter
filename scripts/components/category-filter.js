import React, { PropTypes } from 'react';
import CategoryFilterItem from '../components/category-filter-item';

const CategoryFilter = props => {
  return (
    <ul className="category-filter">
      {props.categories.map(category =>
        <li className="category-filter__item" key={category.id}>
          <CategoryFilterItem
            label={category.label}
            id={category.id}
            selected={category.id === props.currentCategory.id}
            onClick={props.onClick}
          />
        </li>
      )}
    </ul>
  );
};

const categoryShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
});

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(categoryShape).isRequired,
  currentCategory: categoryShape.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CategoryFilter;
