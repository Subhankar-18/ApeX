import "../styles/categoryCard.css";

function CategoryCard({ category, onDelete }) {

return (

<div className="category-card">

{/* Header with color + image */}
<div
className="category-header"
style={{ background: category.bgColor }}
>
<img src={category.imgUrl} alt={category.name} />
</div>

{/* Content */}
<div className="category-body">

<h3 className="category-name">{category.name}</h3>

<p className="category-desc">
{category.description}
</p>

<button
className="delete-btn"
onClick={() => onDelete(category.categoryId)}
>
Delete
</button>

</div>

</div>

);

}

export default CategoryCard;