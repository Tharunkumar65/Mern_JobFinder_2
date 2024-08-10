import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/shared/Navbar';
import Job from './Job';
import useGetAllJobs from '@/hooks/useGetAllJobs'; // Adjust import according to your file structure

const Browse = () => {
    const dispatch = useDispatch();
    const { allJobs, searchedQuery } = useSelector((store) => store.job);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [otherJobs, setOtherJobs] = useState([]);

    useGetAllJobs(); // Assuming this hook fetches all jobs and updates the state

    useEffect(() => {
        // Filter jobs based on the searched title
        const { text } = searchedQuery;
        

        // Filter jobs where title matches the search text
        const filtered = allJobs.filter((job) =>
            !text || job.title.toLowerCase().includes(text.toLowerCase())
        );

        // Set filtered jobs and other jobs
        const other = allJobs.filter(job => !filtered.includes(job));
        setFilteredJobs(filtered);
        setOtherJobs(other);

        // Clean up search query on unmount
        // return () => {
        //     dispatch(setSearchedQuery({ filterType: 'text', value: '' }));
        // };
    }, [allJobs, searchedQuery, dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>
                    Search Results ({filteredJobs.length + otherJobs.length})
                </h1>
                <div className='grid grid-cols-3 gap-4'>
                    {filteredJobs.map((job) => (
                        <Job key={job._id} job={job} />
                    ))}
                    {otherJobs.map((job) => (
                        <Job key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
