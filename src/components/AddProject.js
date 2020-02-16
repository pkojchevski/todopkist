import React, { useState } from "react";
import { useProjectsValue } from "../context";
import { generatePushId } from "../helpers";
import { firebase } from "../firebase";

export const AddProject = ({ shouldShow = false }) => {
  const { projects, setProjects } = useProjectsValue();
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();

  const addProjectFunc = () =>
    projectName &&
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectId,
        name: projectName,
        userId: "1"
      })
      .then(() => {
        setProjects([...projects]);
        setProjectName("");
        setShow(false);
      });

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            onClick={() => addProjectFunc()}
            onKeyDown={() => addProjectFunc()}
            data-testid="add-project-submit"
          >
            AddProject
          </button>
          <span
            data-testid="hide-project-overlay"
            className="app-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};
