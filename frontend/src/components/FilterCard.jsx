import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: 'location',
        array: ['Delhi', 'Bengaluru', 'Hyderabad', 'Pune', 'Mumbai'],
    },
    {
        filterType: 'industry',
        array: ['Frontend Developer', 'Backend Developer', 'FullStack Developer','Graphic Designer','Data Scientist'],
    },
    {
        filterType: 'salary',
        array: ['0-3 LPA', '3-6 LPA', '6-10 LPA', '10-15 LPA', '15+ LPA'],
    },
];

const FilterCard = () => {
    const dispatch = useDispatch();

    const [selectedFilters, setSelectedFilters] = useState({
        location: '',
        industry: '',
        salary: '',
    });

    const changeHandler = (filterType, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));

        dispatch(setSearchedQuery({ filterType, value }));
    };

    return (
        <div className="w-full bg-white p-3 rounded-md">
            <h1 className="font-bold text-lg">Filter Jobs</h1>
            <hr className="mt-3" />
            {filterData.map((data, index) => (
                <div key={index} className="my-4">
                    <h1 className="font-bold text-lg">{data.filterType.charAt(0).toUpperCase() + data.filterType.slice(1)}</h1>
                    <RadioGroup
                        value={selectedFilters[data.filterType]} // Use the specific filter's selected value
                        onValueChange={(value) => {
                            changeHandler(data.filterType, value);
                        }}
                    >
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <div className="flex items-center space-x-2 my-2" key={idx}>
                                    <RadioGroupItem value={item} id={itemId}  className="text-blue-600 checked:bg-blue-600 checked:border-blue-600"/>
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </RadioGroup>
                </div>
            ))}
        </div>
    );
};

export default FilterCard;
