import { useEffect, useState } from "react";
import { addCategory, getCategories, deleteCategory } from "../services/categoryService";
import "./Categories.css";

function Categories() {

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bgColor, setBgColor] = useState("#3b82f6");
  const [image, setImage] = useState(null);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const loadCategories = async () => {
  try {
    setLoading(true);

    const data = await getCategories();

    setCategories(data);
    setFilteredCategories(data);

  } catch (error) {
    console.error("Error loading categories:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("bgColor", bgColor);
    formData.append("file", image);

    await addCategory(formData);

    setName("");
    setDescription("");
    setImage(null);

    loadCategories();
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadCategories();
  };

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = categories.filter((cat) =>
      cat.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCategories(filtered);
  };

  return (
    <div className="categories-page">

      <h1 className="page-title">Category Management</h1>

      {/* CONTROLS */}
      <div className="controls">

        <input
          className="search-input"
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />

        {/* ADD CATEGORY FORM */}
        <form className="category-form" onSubmit={handleSubmit}>

          <div className="form-left">

          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          </div>

          <button type="submit">
            Add Category
          </button>

        </form>
        

      </div>

      {/* LOADING */}
      {loading && <div className="spinner"></div>}

      {/* CATEGORY GRID */}
      <div className="category-grid">

        {filteredCategories.map((cat) => (

          <div
            className="category-card"
            key={cat.categoryId}
            style={{ backgroundColor: cat.bgColor }}
          >

            <img
              className="category-image"
              src={cat.imgUrl}
              alt={cat.name}
            />

            <h3>{cat.name}</h3>

            <p className="category-description">
              {cat.description}
            </p>

            <div className="card-buttons">

              <button className="edit-btn">
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(cat.categoryId)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

  }
export default Categories; 
