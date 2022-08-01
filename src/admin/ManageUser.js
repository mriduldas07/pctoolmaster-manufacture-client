import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const ManageUser = () => {
    const { data: users, isLoading, refetch } = useQuery("user", () => fetch('https://dry-ridge-79622.herokuapp.com/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>All users: {users.length}</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Make admin</th>
                            <th>Remove admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => (
                                <UserRow
                                    index={index}
                                    user={user}
                                    refetch={refetch}
                                ></UserRow>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;