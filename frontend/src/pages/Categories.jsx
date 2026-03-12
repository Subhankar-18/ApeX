import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import { FiUploadCloud } from "react-icons/fi";

import {
  addCategory,
  getCategories,
  deleteCategory
} from "../services/categoryService";

import "../styles/categories.css";

function Categories() {

const [categories,setCategories] = useState([]);
const [search,setSearch] = useState("");

const [form,setForm] = useState({
name:"",
description:"",
color:"#8b5cf6",
image:null
});

useEffect(()=>{
loadCategories();
},[]);

const loadCategories = async ()=>{
const data = await getCategories();
console.log(data); 
setCategories(data);
};

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleFile=(e)=>{
setForm({...form,image:e.target.files[0]});
};

const handleSubmit=async(e)=>{
e.preventDefault();

const data=new FormData();
data.append("name", form.name);
data.append("description", form.description);
data.append("bgColor", form.color);
data.append("file", form.image);

await addCategory(data);

setForm({
name:"",
description:"",
color:"#8b5cf6",
image:null
});

loadCategories();
};

const handleDelete = async (id) => {
  await deleteCategory(id);
  loadCategories();
};

const filtered = categories.filter((c) => {

const text = search.trim().toLowerCase();

if (!text) return true;

return (
(c.name || "").toLowerCase().includes(text) ||
(c.description || "").toLowerCase().includes(text)
);

});

return(

<div className="layout">

<Sidebar/>

<div className="main">

<Navbar/>

<div className="content">

<h1 className="page-title">Manage Categories</h1>
<p className="page-sub">Add, edit, or remove product categories</p>

<input
className="search-bar"
placeholder="Search categories"
value={search}
onChange={(e)=>setSearch(e.target.value.trimStart())}
/>

{/* FORM CARD */}

<div className="form-card">

<h2>Add New Category</h2>

<form onSubmit={handleSubmit}>

<div className="form-row">

<div className="form-group">
<label>Category Name</label>
<input
name="name"
placeholder="Enter category name"
value={form.name}
onChange={handleChange}
/>
</div>

<div className="form-group">
<label>Background Color</label>

<div className="color-row">

<input
type="color"
name="color"
value={form.color}
onChange={handleChange}
/>

<input
name="color"
value={form.color}
onChange={handleChange}
/>

</div>

</div>

</div>

<div className="form-group">
<label>Description</label>
<textarea
name="description"
placeholder="Enter category description"
value={form.description}
onChange={handleChange}
/>
</div>

<div className="upload-box">

<label htmlFor="imageUpload" className="upload-label">

<FiUploadCloud className="upload-icon"/>

<p>Click to upload or drag and drop</p>
<span>SVG, PNG, JPG or GIF (max. 800x400px)</span>

</label>

<input
id="imageUpload"
type="file"
onChange={handleFile}
/>

</div>

<button className="submit-btn">
Add Category
</button>

</form>

</div>

{/* CATEGORY GRID */}

<h2 className="category-title">
All Categories ({filtered.length})
</h2>

<div className="category-grid">

{filtered.map(cat=>(
<CategoryCard
key={cat.categoryId}
category={cat}
onDelete={handleDelete}
/>
))}

</div>

</div>

</div>

</div>

);

}

export default Categories;