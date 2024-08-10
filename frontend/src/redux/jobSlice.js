import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByText: "",
        allAppliedJobs: [],
        searchedQuery: {
            text: '',
            location: '',
            industry: '',
            salary: '',
        },
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery: (state, action) => {
            const { filterType, value } = action.payload;
        
            // Ensure `searchedQuery` is an object before assigning properties
            if (typeof state.searchedQuery !== 'object' || state.searchedQuery === null) {
                state.searchedQuery = {}; // Reinitialize as an object if necessary
            }
        
            const validFilterTypes = ["text", "location", "industry", "salary"];
            if (!validFilterTypes.includes(filterType)) {
                console.error(`Invalid filterType: ${filterType}`);
                return;
            }
        
            state.searchedQuery[filterType] = value;
        },
        
        
    }
});

// Use this directly in your components
export const {
    setAllJobs,
    setSingleJob,
    setAllAdminJobs,
    setSearchJobByText,
    setAllAppliedJobs,
    setSearchedQuery, // Already defined action
} = jobSlice.actions;

export default jobSlice.reducer;
