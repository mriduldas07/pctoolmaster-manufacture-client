import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ToolItem from '../Pages/Home/ToolItem';

const AllTools = () => {
    const [allTool, setAllTool] = useState([]);

    useEffect(() => {
        fetch('https://dry-ridge-79622.herokuapp.com/allTools')
            .then(res => res.json())
            .then(data => setAllTool(data))
    }, [allTool]);
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-7'>All Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5'>
                {
                    allTool?.map(tool => <ToolItem
                        key={tool._id}
                        tool={tool}
                    ></ToolItem>)
                }
            </div>
        </div>
    );
};

export default AllTools;