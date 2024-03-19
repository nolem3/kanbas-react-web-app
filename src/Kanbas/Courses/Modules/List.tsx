import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams<string>();
    //const modulesList = modules.filter((module) => module.course === courseId);
    const modulesList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <div className="flex-fill">
            <div className="wd-modules-button-group">
                <button type="button">Collapse All</button>
                <button type="button">View Progress</button>
                <select id="select-one-publish-mode">
                    <option value="PUBLISHALL">Publish All</option>
                </select>
                <button type="button" style={{ color: "white", backgroundColor: "red" }}>+ Module</button>
                <button type="button">
                    <FaEllipsisV style={{ fontSize: "small" }} />
                </button>
            </div>
            <hr />
            <div className="wd-modules-button-group"
                style={{ paddingTop: "5px", paddingBottom: "10px", display: "flex", flexDirection: "row" }}>
                <button style={{ backgroundColor: "red", color: "white", height: 40 }}
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add
                </button>
                <button style={{ height: 40 }} onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <input style={{ height: 40 }} value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
            </div>
            <ul className="list-group wd-modules">
                {modulesList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>

                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button style={{ color: "black", backgroundColor: "white" }}
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any, index: any) => (
                                        <li className="list-group-item wd-sublist-item" key={index}>
                                            <div>
                                                <FaEllipsisV className="me-2" />
                                                {lesson.name}
                                                <span className="float-end">
                                                    <FaCheckCircle className="text-success" />
                                                    <FaEllipsisV className="ms-2" />
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default ModuleList;