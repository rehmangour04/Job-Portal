/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPostAction } from "../../store/actions/PostActions";
import create from "./create.css";
export default function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [datetime, setDatetime] = useState("");

  const dispatch = useDispatch();

  function onCreatePost(e) {
    e.preventDefault();
    const postData = {
      title,
      description,
      company,
      salary,
      datetime,
    };

    dispatch(createPostAction(postData, props.history));
  }

  return (
    <div className="container-post">
      <div className="flex items-center justify-between my-4">
        <h2 id="create-job">Create Job</h2>
        <div class="btn-back">
          <Link to="/posts" className="bg-gray-500 text-white p-2">
            Back to Jobs
          </Link>
        </div>
      </div>

      <div>
        <form onSubmit={onCreatePost}>
          <div>
            <label>Job Title </label>
            <div>
              <input
                type="text"
                className="border border-gray-500 w-full px-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Company Name</label>
            <div>
              <input
                type="text"
                className="border border-gray-500 w-full px-1"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Salary</label>
            <div>
              <input
                type="number"
                className="border border-gray-500 w-full px-1"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Date Time</label>
            <div>
              <input
                type="datetime-local"
                className=""
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
              />
            </div>
          </div>

          <div className="my-2">
            <label>Description</label>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-500 w-full px-1 h-28"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="px-2 py-1 bg-red-500 text-white">
              Create Jobs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
