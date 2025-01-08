// JobListings.js
import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // This is where you'd fetch jobs from an API
    const fetchJobs = async () => {
      // For now, let's mock the job listings data
      const mockJobs = [
        { title: 'Software Developer', company: 'ABC Corp' },
        { title: 'Marketing Manager', company: 'XYZ Ltd' },
        { title: 'HR Specialist', company: 'PQR Enterprises' },
      ];
      setJobs(mockJobs);
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-listings">
      <h2>Latest Job Listings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
