import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEditUser } from "../hooks/useUsers";
import { ErrMessage, SuccessMessage, ErrMap } from "../subComponents";

const EditUserSubComp = () => {

    const { pathname } = useLocation();
    const userId = parseInt(pathname.replace("/edit-user/", ""));

    const {
        firstname, lastname, email, phone, username, password, city, street, number, zipcode, lat, long, errorEditUser, successEditUser, userFound,
        handleFirstname, handleLastname, handleEmail, handlePhone, handleUsername, handlePassword, handleCity, handleStreet, handleNumber, handleZipcode, handleLat, handleLong, handleSubmitUser
    } = useEditUser(userId);

    return (
        <>
            {
                !userFound ?
                (
                    <div className="login-container" style={{ margin: '40px' }}>
                        <h2>Edit user - {userId}</h2>
                        <form className="forms-sample">
                            <div className="form-group">
                                <div className="mt-3">
                                    <label htmlFor="firstname">Firstname:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="firstname_add_user"
                                        placeholder="Firstname"
                                        name="firstname"
                                        onChange={handleFirstname}
                                        value={firstname}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="lastname">Lastname:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="lastname_add_user"
                                        placeholder="Lastname"
                                        name="lastname"
                                        onChange={handleLastname}
                                        value={lastname}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="email_add_user"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleEmail}
                                        value={email}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="phone_add_user"
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={handlePhone}
                                        value={phone}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mt-3">
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="username_add_user"
                                        placeholder="Username"
                                        name="username"
                                        onChange={handleUsername}
                                        value={username}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        id="password_login"
                                        placeholder="Enter password"
                                        name="password"
                                        onChange={handlePassword}
                                        value={password}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mt-3">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="city_add_user"
                                        placeholder="City"
                                        name="city"
                                        onChange={handleCity}
                                        value={city}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="street">Street:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="street_add_user"
                                        placeholder="Street"
                                        name="street"
                                        onChange={handleStreet}
                                        value={street}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mt-3">
                                    <label htmlFor="number">Number:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="number_add_user"
                                        placeholder="Number"
                                        name="number"
                                        onChange={handleNumber}
                                        value={number}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="zipcode">Zipcode:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="zipcode_add_user"
                                        placeholder="Zipcode"
                                        name="zipcode"
                                        onChange={handleZipcode}
                                        value={zipcode}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mt-3">
                                    <label htmlFor="lat">Latitude:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="lat_add_user"
                                        placeholder="Latitude"
                                        name="lat"
                                        onChange={handleLat}
                                        value={lat}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="long">Longitude:</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        id="long_add_user"
                                        placeholder="Longitude"
                                        name="long"
                                        onChange={handleLong}
                                        value={long}
                                    />
                                </div>
                            </div>

                            <ErrMessage errorMessage={errorEditUser} />
                            <SuccessMessage successMessage={successEditUser} />

                            <div className="clearfix">
                                <button type="submit" onClick={handleSubmitUser} className="btn btn-success m-3 float-end">Submit</button>
                                <Link to="/all-users"> <button type="button" className="btn btn-outline-danger m-3 float-end">Cancel</button> </Link>
                            </div>
                        </form>
                    </div>
                ) :
                (<ErrMap err={userFound} />)
            }
        </>
    )
};

export default EditUserSubComp;