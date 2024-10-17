import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LayoutWrapper from "./layout/LayoutWrapper";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddPage from "./pages/AddPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import EditPage from "./pages/EditPage";

function App() {
  const addSubmit = async (newJob) => {
    await fetch("/api/jobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newJob),
    });

    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    return;
  };

  // Update Job

  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(job),
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route
          path="/edit-job/:id"
          element={<EditPage updateSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route path="/add-job" element={<AddPage addSubmit={addSubmit} />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
