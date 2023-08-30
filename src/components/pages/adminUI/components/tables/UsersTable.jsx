import React from 'react';
import UserService from "../../../service/UserService";
import PaginationComponent from "../../../../include/pagination/PaginationComponent";

const UsersTable = () => {
    const page = 1;
    const number = 10;
    const users = UserService.getAllUsers(page, number);

    return (
        <div>

            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        <td>
                            <label className={'none-label'}>None</label>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <PaginationComponent/>
        </div>
    );
};

export default UsersTable;