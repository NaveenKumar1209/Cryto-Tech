// import React, { useEffect, useState } from 'react';
// import { Course } from '../setupTests';
// import { MdComputer, MdCode, MdAnalytics, MdPalette, MdBusinessCenter } from 'react-icons/md';
// import { fetchCourses } from '../services/api';
// import '../styles/CourseTable.scss';

// const CourseTable: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);

//   useEffect(() => {
//     const getCourses = async () => {
//       const data = await fetchCourses();
//       setCourses(data);
//     };
//     getCourses();
//   }, []);

//   return (
//     <div className="course-table">
//       <h2>My Courses</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Course Name</th>
//             <th>Start Date</th>
//             <th>Lesson Completed</th>
//             <th>Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.id}>
//               <td>{course.name} ({course.lessons} Lessons)</td>
//               <td>{new Date(course.startDate).toLocaleDateString()}</td>
//               <td>
//                 {course.completedLessons}/{course.lessons} ({Math.floor((course.completedLessons / course.lessons) * 100)}%)
//               </td>
//               <td>{course.duration}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CourseTable;
import React, { useEffect, useState } from 'react';
import { Course } from '../setupTests';
import { fetchCourses } from '../services/api';
import '../styles/CourseTable.scss';
import { MdComputer, MdCode, MdDataset ,MdAnalytics, MdPalette, MdBusinessCenter } from 'react-icons/md';
import dayjs from 'dayjs';

const getIcon = (courseName: string) => {
  switch (courseName) {
    case 'Basic Algorithm':
      return <MdDataset size={24} color="#7E57C2" />;
    case 'Web Development':
      return <MdCode size={24} color="#42A5F5" />;
    case 'Basic Data Science':
      return <MdAnalytics size={24} color="#FFA726" />;
    case 'UI/UX Design':
      return <MdPalette size={24} color="#66BB6A" />;
    case 'Project Management':
      return <MdBusinessCenter size={24} color="#FF7043" />;
    default:
      return <MdComputer size={24} />;
  }
};

const CourseTable: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    getCourses();
  }, []);

  return (
    <div className="course-table">
      <h2>My Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <span className="course-icon">{getIcon(course.name)}</span>
                {course.name} ({course.lessons} Lessons)
              </td>
              <td>{dayjs(course.startDate).format('DD MMM, YYYY')}</td>
              <td>
                {course.completedLessons}/{course.lessons} (
                {Math.floor((course.completedLessons / course.lessons) * 100)}%)
              </td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
