import React, {useState} from 'react';
import axios from "axios";
import CourseCreationNav from '../components/CourseCreationNavBar';
import Footer from '../components/Footer';

function CourseCreationPage() {
    const [form, setForm] = useState({
        title: "",
        category: "",
        difficulty_level: "",
        price: "",
        syllabus_outline: "",
        course_thumbnail: null
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
        ...form,
        [name]: files ? files[0] : value   // if it's a file input → store file, otherwise store value
    });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            console.log("Validation failed ❌");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", form.title);
            formData.append("category", form.category);
            formData.append("difficulty_level", form.difficulty_level);
            formData.append("price", form.price);
            formData.append("syllabus_outline", form.syllabus_outline);

            if (form.course_thumbnail) {
            formData.append("course_thumbnail", form.course_thumbnail); // File object
            }

            const res = await axios.post("http://localhost:3000/api/courses", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });

            console.log("Inserted:", res.data);

            // Reset form after success
            setForm({
                title: "",
                category: "",
                difficulty_level: "",
                price: "",
                syllabus_outline: "",
                course_thumbnail: null, 
            });
            setErrors({});
        } catch (err) {
            console.error(err);
        }
        };


    const validate = () => {
        let newErrors = {};

        if (!form.title.trim()) newErrors.title = "Title is required";
        if (!form.category.trim()) newErrors.category = "Category is required";
        if (!form.difficulty_level.trim()) newErrors.difficulty_level = "Difficulty level is required";

        if (!form.price || isNaN(form.price)) {
            newErrors.price = "Price must be a number";
        }

        if (!form.syllabus_outline.trim()) newErrors.syllabus_outline = "Syllabus outline is required";

        // ✅ Check if course_thumbnail is a File object
        if (!form.course_thumbnail) {
            newErrors.course_thumbnail = "Course thumbnail is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
        };

  return (
    <section className='course_creation-page'>
      <CourseCreationNav/> 
      <div className='course-creation-form'>
        <form className = 'form-container' onSubmit = {handleSubmit}>
            <h1>Create a New Course</h1>

            <div className='input-field'>
                <label htmlFor="">Course Title</label>
                <input type="text" name= "title" value ={form.title} onChange ={handleChange}  placeholder='Enter Course title name' />
                {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
            </div>

            <div className='input-field'>
                <label htmlFor="">Category</label>
                <textarea name="category" value={form.category} onChange = {handleChange} placeholder='Enter the catagory'></textarea>
                {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
            </div>

            <div className='input-field'>
                <label htmlFor="">Difficulty Level</label>
                <input type="text"  value = {form.difficulty_level} onChange ={handleChange} name="difficulty_level" />
                {errors.difficulty_level && <p style={{ color: "red" }}>{errors.difficulty_level}</p>}
            </div>

            <div className='input-field'>
                <label htmlFor="">Price (Optional)</label>
                <input type="text" value = {form.price} onChange ={handleChange} name="price" />
                {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
            </div>

            <div className='input-field'>
                <h3>Syllabus Outline</h3>
                <textarea  name="syllabus_outline" value={form.syllabus_outline} onChange ={handleChange} placeholder='Enter the catagory'></textarea>
                {errors.syllabus_outline && <p style={{ color: "red" }}>{errors.syllabus_outline}</p>}
            </div>

            <div className='input-field'>
                    <label htmlFor="course_thumbnail">Course Thumbnail</label>
                    <input 
                        type="file" 
                        style = {{display: "flex", justifyContent: "center", alignItems: "center", padding: "10px"   }}
                        name="course_thumbnail" 
                        accept="image/*"
                        onChange={(e) => setForm({ ...form, course_thumbnail: e.target.files[0] })}
                    />
                    {errors.course_thumbnail && <p style={{ color: "red" }}>{errors.course_thumbnail}</p>}
            </div>

            <div className='button-group'>
                <button className='create-preview'>Preview</button>
                <button type="submit" className='publish-btn'>Publish Course</button>
            </div>
        </form>
      </div>
    </section>
  )
}

export default CourseCreationPage