import DevEmployer from "../components/DevEmployer";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <DevEmployer />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
