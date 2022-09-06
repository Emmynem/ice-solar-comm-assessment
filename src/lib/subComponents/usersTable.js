import React from "react";
import { Link } from "react-router-dom";

export const UsersTable = (_entities) => {
    const { entities } = _entities; 

    return (
        <div className="login-container">
            <h2>Users</h2>
            <div className="card m-5">
                <div className="card-header clearfix">
                    All Users

                    <Link to="/add-user">
                        <button className='btn btn-primary float-end'>Add new</button>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="table-wrap mt-40">
                        <div className="table-responsive">
                            <table className="mb-0">
                                <thead className="thead-light text-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Zipcode</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entities.map((data, i) => (
                                        <tr key={i}>
                                            <th scope="row">{data.id}</th>
                                            <td>{data.name.firstname + " " + data.name.lastname}</td>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.address.street !== undefined ? data.address.street : "No street"}, {data.address.city !== undefined ? data.address.city : "No city"}</td>
                                            <td>{data.address.zipcode}</td>
                                            <td>
                                                <Link to={`/edit-user/${data.id}`}>
                                                    <button className='btn btn-warning'>Edit</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
};