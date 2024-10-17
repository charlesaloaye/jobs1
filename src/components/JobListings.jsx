import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobListing from "./JobListing";
const JobListings = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs/";
        const res = await fetch(apiUrl);
        const data = await res.json();

        setJobs(data);
      } catch (err) {
        console.log("Error: unable to fetch data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => {
              return (
                <>
                  <JobListing key={job.id} job={job} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
