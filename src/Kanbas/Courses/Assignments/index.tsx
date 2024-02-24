import React from "react";
import "../Modules/index.css"
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css"
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="wd-modules-button-group">
                <input placeholder="Search for Assignments" style={{marginRight: 10}} />
                <button type="button">+ Group</button>
                <button type="button" style={{backgroundColor: "red", color: "white" }}>+ Assignment</button>
                <button type="button">
                    <FaEllipsisV style={{ fontSize: "small" }} />
                </button>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <div>
                                    <FaEllipsisV className="me-2" />
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        style={{ textDecoration: "none", color: "black" }}>
                                        <i className="fa fa-pencil-square-o" style={{ marginRight: 10, color: "green" }}></i>
                                        {assignment.title}
                                    </Link>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                    </span>
                                </div>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;