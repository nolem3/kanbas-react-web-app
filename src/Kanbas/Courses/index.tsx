import { courses } from "../../Kanbas/Database";
import "./index.css"
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { FaGreaterThan } from "react-icons/fa";
function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Assignments", "Grades", "Announcements", "Syllabus", "Discussions", "Files"];
    const course = courses.find((course) => course._id === courseId);
    return (
        <>
            <div className="d-none d-sm-flex wd-course-header">
                <HiMiniBars3 className="wd-bars" />
                <h3>{course?.number} {course?.name}</h3>
                <FaGreaterThan className="wd-subheader-text" />
                <h3 className="wd-subheader-text">{links.filter(link => pathname.includes(link))}</h3>
            </div>
            <hr className="d-none d-sm-block" style={{ marginLeft: 20, marginRight: 20 }} />
            <div className="d-flex d-block d-sm-none wd-home-secondary-header">
                <a href="/Kanbas/Navigation/index.html"><i className="fa fa-bars"></i></a>
                <h6 className="flex-fill">CS1234 Modules</h6>
                <a href="/Kanbas/Courses/Navigation/index.html"><i className="fa fa-chevron-down"></i></a>
            </div>
            <div className="wd-course-body d-flex">
                <CourseNavigation />
                <div className="flex-fill">
                    <div style={{marginLeft: "50px", marginTop: "10px"}}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                            <Route path="Grades" element={<h1>Grades</h1>} />
                            <Route path="Announcements" element={<h1>Announcements</h1>} />
                            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                            <Route path="Discussions" element={<h1>Discussions</h1>} />
                            <Route path="Files" element={<h1>Files</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Courses;