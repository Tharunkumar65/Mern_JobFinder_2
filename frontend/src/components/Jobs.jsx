import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector,useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { motion } from 'framer-motion';
import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector((store) => store.job);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams({
        text: searchedQuery.text || '',
        location: searchedQuery.location || '',
        industry: searchedQuery.industry || '',
        salary: searchedQuery.salary || ''
    }).toString();
    

    useEffect(()=>{
      const fetchAllJobs = async () => {
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/get?${queryParams}`);
              if(res.data.success){
                  dispatch(setAllJobs(res.data.jobs));
              }
          } catch (error) {
              console.log(error);
          }
      }
      fetchAllJobs();
      dispatch(setSearchedQuery({ filterType: 'text', value: '' }));
      dispatch(setSearchedQuery({ filterType: 'location', value: '' }));
      dispatch(setSearchedQuery({ filterType: 'industry', value: '' }));
      dispatch(setSearchedQuery({ filterType: 'salary', value: '' }));
  },[dispatch])


    useEffect(() => {
        const { text, location, industry, salary } = searchedQuery;

        const filtered = allJobs.filter((job) => {
            // Text search: Matches title or description
            const textMatch =
                (!text || job.title.toLowerCase().includes(text.toLowerCase()) ||
                 job.description.toLowerCase().includes(text.toLowerCase()));

            // Location search
            const locationMatch = (!location || job.location.toLowerCase() === location.toLowerCase());

            // Industry search: Matches title or requirements (assuming industry == job title)
            const industryMatch = (!industry || job.title.toLowerCase() === industry.toLowerCase());

            // Salary search: Matches salary ranges (assuming salary is in LPA)
            const salaryMatch = (!salary || matchSalaryRange(job.salary, salary));

            return  locationMatch && industryMatch && salaryMatch;
        });

        setFilteredJobs(filtered);
        
    }, [allJobs,searchedQuery]);

    // Helper function to match salary range
    const matchSalaryRange = (jobSalary, salaryRange) => {
        if (!salaryRange || !jobSalary) return true;

        const [minSalary, maxSalary] = salaryRange.includes('-')
            ? salaryRange.split('-').map(s => parseFloat(s.trim()))
            : [parseFloat(salaryRange), Infinity];

        return jobSalary >= minSalary && jobSalary <= maxSalary;
    };

    return (
      <div className="h-screen overflow-y-auto">
    <Navbar />
    <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
            <div className="w-1/5"> {/* Change to 'w-1/5' for percentage-based width */}
                <FilterCard />
            </div>
            {filteredJobs.length <= 0 ? (
                <span>Job not found</span>
            ) : (
                <div className="flex-1 pb-5">
                    <div className="grid grid-cols-3 gap-4">
                        {filteredJobs.map((job) => (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                key={job._id} // Ensure _id is unique and defined
                            >
                                <Job job={job} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
</div>

    );
};

export default Jobs;
