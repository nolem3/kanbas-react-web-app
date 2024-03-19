import React, { useState } from "react";
import "./index.css";
import "font-awesome/css/font-awesome.min.css"
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <div className="wd-sub-header">
                <h2>Published Courses ({courses.length})</h2>
                <div className="wd-make-course">
                    <h5>Course</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div><input value={course.name} className="form-control"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} /></div>
                        <div><input value={course.number} className="form-control"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} /></div>
                        <div><input value={course.startDate} className="form-control" type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} /></div>
                        <div><input value={course.endDate} className="form-control" type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /></div>
                    </div>
                    <div>
                        <button className="wd-reg-button" onClick={updateCourse} >
                            Update
                        </button>
                        <button type="button" className="wd-red-button" onClick={addNewCourse} >
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold", display: "flex", flexDirection: "row" }}>
                                        {course.name}
                                        <div style={{ flexGrow: 1, display: "flex", flexDirection: "row-reverse" }}>
                                            <button className="wd-red-button" onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                                Delete
                                            </button>
                                            <button className="wd-reg-button" onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                                Edit
                                            </button>
                                        </div>
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