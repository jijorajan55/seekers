import React, { useState, useEffect } from 'react';
import JobListings from '../components/JobListings';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch job data from an API or use mock data
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('https://api.example.com/jobs');
      const data = await response.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <JobListings jobs={jobs} />
    </div>
  );
};

export default Jobs;
