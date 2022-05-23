import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ToolItem from './ToolItem';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-4xl text-center my-7'>Tools/Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 py-5'>
                {
                    tools.slice(0).reverse().map(tool => <ToolItem
                        key={tool._id}
                        tool={tool}
                    ></ToolItem>)
                }
            </div>
        </div>
    );
};

export default Tools;