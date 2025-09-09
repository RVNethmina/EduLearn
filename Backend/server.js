import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "ELearning",
  password: "Akila",
  port: 5432,
});
db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));

// let courseData = [
//     {title: "React for Beginners", category: "Web Development", diffcultyLvl: "Beginner", price: "Free", syllabusOutline: "Introduction to React, Components, State and Props, Lifecycle Methods, Hooks, Routing, Deployment", courceThumbnail: "react_thumbnail.jpg"},
//     {title: "Advanced Python Programming", category: "Programming", diffcultyLvl: "Advanced", price: "$49.99", syllabusOutline: "Advanced Data Structures, Algorithms, Design Patterns, Web Development with Django, Data Science with Pandas and NumPy", courceThumbnail: "python_thumbnail.jpg"},
// ]

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // folder where files are saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  }
});

const upload = multer({ storage });

// API: Get users (GET)
app.get("/api/courses", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM course");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/api/courses", upload.single("course_thumbnail"), async (req, res) => {
  try {
    const { title, category, difficulty_level, price, syllabus_outline } = req.body;
    const course_thumbnail = req.file ? req.file.filename : null; // filename of uploaded file

    const result = await db.query(
      `INSERT INTO course 
       (title, category, difficulty_level, price, syllabus_outline, course_thumbnail) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, category, difficulty_level, price, syllabus_outline, course_thumbnail]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving course:", error);
    res.status(500).json({ message: "Error saving course" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

