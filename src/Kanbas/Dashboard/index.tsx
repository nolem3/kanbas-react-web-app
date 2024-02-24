import React from "react";
import "./index.css";
import "font-awesome/css/font-awesome.min.css"
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (3)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none" }}>
                                        <p className="wd-card-text">{course.number} {course.name}</p>
                                        <p className="wd-mini-card-text">{course.startDate} - {course.endDate}</p>
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Assignments`}>
                                        <i className="fa fa-pencil-square-o"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;