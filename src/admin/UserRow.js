import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const [newEmail, setNewEmail] = useState([user.email]);
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://dry-ridge-79622.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${email} has selected for an admin`);
                    refetch();
                }
            })
    }
    const removeAdmin = () => {
        fetch(`https://dry-ridge-79622.herokuapp.com/user/removeAdmin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.warning("Remove User Admin");
                refetch();
            })
    }
    return (
        <tr key={index}>
            <td>{index = index + 1}</td>
            <td>{user.email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className='btn btn-success btn-outline btn-sm'>
                        Make admin
                    </button>
                }
                {
                    role === 'admin' && <button onClick={makeAdmin} className='btn btn-sm' disabled>
                        Already admin
                    </button>
                }
            </td>
            <td>
                {
                    role === 'admin' && <button className='btn btn-error btn-outline btn-sm' onClick={removeAdmin} disabled={newEmail.includes("mriduldas0325@gmail.com")}>
                        Remove admin
                    </button>
                }
                {
                    role !== 'admin' && <button className='btn btn-sm' onClick={removeAdmin} disabled>
                        Remove admin
                    </button>
                }
            </td>
        </tr>
    );
};

export default UserRow;