import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import reactLogo from './assets/react.svg';
import './App.css';
import db from './firebase';

async function getCourses() {
  const coursesCol = collection(db, 'courses');
  const courseSnapshot = await getDocs(coursesCol);
  const coursesList = courseSnapshot.docs.map((doc) => doc.data());
  return coursesList;
}

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCourses();
      setCourses(res);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
}

export default App;
