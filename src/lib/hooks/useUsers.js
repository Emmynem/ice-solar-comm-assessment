import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, getUser } from "../api/";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

const useGetUsers = () => {

    const [users, setUsers] = useState([]);
    const [errorUsers, setErrorUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const usersRes = getUsers();

    useEffect(() => {
        usersRes.then(res => {
            setLoading(false);
            setUsers(res);
        }).catch(err => {
            const error = `${err.message}`;
            setErrorUsers(error);
            setLoading(false);
        })
        
    }, []);
    
    return { users, loading, errorUsers };
};

const useAddUser = () => {

    const baseValidationText = config.baseValidationText;

    // declaring and initializing (to null) values
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    // error & success prompts
    const [errorAddUser, setErrorAddUser] = useState(null);
    const [successAddUser, setSuccessAddUser] = useState(null);

    // validating values that need precision
    const validName = new RegExp(config.NAME_REGEX);
    const validEmail = new RegExp(config.EMAIL_REGEX);  
    const validPhone = new RegExp(config.PHONE_REGEX);
    const validPassword = new RegExp(config.PASSWORD_REGEX);
    const validLat = new RegExp(config.LAT_REGEX);
    const validLong = new RegExp(config.LONG_REGEX);

    const navigate = useNavigate();

    // handling all onChange states
    const handleFirstname = (e) => { e.preventDefault(); setFirstname(e.target.value) };
    const handleLastname = (e) => { e.preventDefault(); setLastname(e.target.value) };
    const handleEmail = (e) => { e.preventDefault(); setEmail(e.target.value) };
    const handlePhone = (e) => { e.preventDefault(); setPhone(e.target.value) };
    const handleUsername = (e) => { e.preventDefault(); setUsername(e.target.value) };
    const handlePassword = (e) => { e.preventDefault(); setPassword(e.target.value) };
    const handleCity = (e) => { e.preventDefault(); setCity(e.target.value) };
    const handleStreet = (e) => { e.preventDefault(); setStreet(e.target.value) };
    const handleNumber = (e) => { e.preventDefault(); setNumber(e.target.value) };
    const handleZipcode = (e) => { e.preventDefault(); setZipcode(e.target.value) };
    const handleLat = (e) => { e.preventDefault(); setLat(e.target.value) };
    const handleLong = (e) => { e.preventDefault(); setLong(e.target.value) };

    // handle form submit
    const handleSubmitUser = (e) => {
        e.preventDefault();

        // Form field validation
        if(firstname.length === 0){
            setErrorAddUser(baseValidationText + "Firstname is required");
        } else if (!validName.test(firstname)) {
            setErrorAddUser(baseValidationText + "Invalid Firstname");
        } else if (lastname.length === 0) {
            setErrorAddUser(baseValidationText + "Lastname is required");
        } else if (!validName.test(lastname)) {
            setErrorAddUser(baseValidationText + "Invalid Lastname");
        } else if (email.length === 0) {
            setErrorAddUser(baseValidationText + "Email is required");
        } else if (!validEmail.test(email)) {
            setErrorAddUser(baseValidationText + "Invalid email");
        } else if (phone.length === 0) {
            setErrorAddUser(baseValidationText + "Phone is required");
        } else if (!validPhone.test(phone)) {
            setErrorAddUser(baseValidationText + "Invalid phone");
        } else if (username.length === 0) {
            setErrorAddUser(baseValidationText + "Username is required");
        } else if (username.length < 3) {
            setErrorAddUser(baseValidationText + "Invalid username (min:3 characters)");
        } else if (username.length > 30) {
            setErrorAddUser(baseValidationText + "Invalid username (max: 30 characters)");
        } else if (password.length === 0) {
            setErrorAddUser(baseValidationText + "Password is required");
        } else if (!validPassword.test(password)) {
            setErrorAddUser(baseValidationText + "Invalid password (at least 1 uppercase, lowercase and digit)");
        } else if (city.length === 0) {
            setErrorAddUser(baseValidationText + "City is required");
        } else if (street.length === 0) {
            setErrorAddUser(baseValidationText + "Street is required");
        } else if (number.length === 0) {
            setErrorAddUser(baseValidationText + "Number is required");
        } else if (zipcode.length === 0) {
            setErrorAddUser(baseValidationText + "Zipcode is Required");
        } else if (lat.length !== 0 && !validLat.test(lat)) {
            setErrorAddUser(baseValidationText + "Invalid Latitude");
        } else if (long.length !== 0 && !validLong.test(long)) {
            setErrorAddUser(baseValidationText + "Invalid Longitude");
        } else {
            setErrorAddUser(null);

            const addUserRes = addUser({
                email,
                username,
                password,
                name: {
                    firstname,
                    lastname
                },
                address: {
                    city,
                    street,
                    number,
                    zipcode,
                    geolocation: {
                        lat,
                        long
                    }
                },
                phone
            })

            addUserRes.then(res => {
                setErrorAddUser(null);
                setSuccessAddUser("User Added successfully ...");

                setTimeout(function () {
                    navigate("/all-users");
                }, 5000)
            }).catch(err => {
                const error = `${err.response.data}`;
                setErrorAddUser(error);
                setTimeout(function () {
                    setErrorAddUser(null);
                }, 3000)
            })
        }

    };

    return {
        firstname, lastname, email, phone, username, password, city, street, number, zipcode, lat, long, errorAddUser, successAddUser,
        handleFirstname, handleLastname, handleEmail, handlePhone, handleUsername, handlePassword, handleCity, handleStreet, handleNumber, handleZipcode, handleLat, handleLong, handleSubmitUser 
    };

};

const useEditUser = (userId) => {

    const baseValidationText = config.baseValidationText;

    const [userFound, setUserFound] = useState(null);

    // declaring and initializing (to null) values
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    const findUser = getUser(userId);

    useEffect(() => {
        findUser.then(res => {
            const user = res;
    
            // declaring and initializing (to null) values
            setFirstname(user.name.firstname);
            setLastname(user.name.lastname);
            setEmail(user.email);
            setPhone(user.phone);
            setUsername(user.username);
            setPassword(user.password);
            setCity(user.address.city);
            setStreet(user.address.street);
            setNumber(user.address.number);
            setZipcode(user.address.zipcode);
            setLat(user.address.geolocation.lat);
            setLong(user.address.geolocation.long);
            
        }).catch(err => {
            setUserFound("Error Occured");
        })
    }, []);

    // error & success prompts
    const [errorEditUser, setErrorEditUser] = useState(null);
    const [successEditUser, setSuccessEditUser] = useState(null);

    // validating values that need precision
    const validName = new RegExp(config.NAME_REGEX);
    const validEmail = new RegExp(config.EMAIL_REGEX);
    const validPhone = new RegExp(config.PHONE_REGEX);
    const validPassword = new RegExp(config.PASSWORD_REGEX);
    const validLat = new RegExp(config.LAT_REGEX);
    const validLong = new RegExp(config.LONG_REGEX);

    const navigate = useNavigate();

    // handling all onChange states
    const handleFirstname = (e) => { e.preventDefault(); setFirstname(e.target.value) };
    const handleLastname = (e) => { e.preventDefault(); setLastname(e.target.value) };
    const handleEmail = (e) => { e.preventDefault(); setEmail(e.target.value) };
    const handlePhone = (e) => { e.preventDefault(); setPhone(e.target.value) };
    const handleUsername = (e) => { e.preventDefault(); setUsername(e.target.value) };
    const handlePassword = (e) => { e.preventDefault(); setPassword(e.target.value) };
    const handleCity = (e) => { e.preventDefault(); setCity(e.target.value) };
    const handleStreet = (e) => { e.preventDefault(); setStreet(e.target.value) };
    const handleNumber = (e) => { e.preventDefault(); setNumber(e.target.value) };
    const handleZipcode = (e) => { e.preventDefault(); setZipcode(e.target.value) };
    const handleLat = (e) => { e.preventDefault(); setLat(e.target.value) };
    const handleLong = (e) => { e.preventDefault(); setLong(e.target.value) };

    // handle form submit
    const handleSubmitUser = (e) => {
        e.preventDefault();

        // Form field validation
        if (firstname.length === 0) {
            setErrorEditUser(baseValidationText + "Firstname is required");
        } else if (!validName.test(firstname)) {
            setErrorEditUser(baseValidationText + "Invalid Firstname");
        } else if (lastname.length === 0) {
            setErrorEditUser(baseValidationText + "Lastname is required");
        } else if (!validName.test(lastname)) {
            setErrorEditUser(baseValidationText + "Invalid Lastname");
        } else if (email.length === 0) {
            setErrorEditUser(baseValidationText + "Email is required");
        } else if (!validEmail.test(email)) {
            setErrorEditUser(baseValidationText + "Invalid email");
        } else if (phone.length === 0) {
            setErrorEditUser(baseValidationText + "Phone is required");
        } else if (!validPhone.test(phone)) {
            setErrorEditUser(baseValidationText + "Invalid phone");
        } else if (username.length === 0) {
            setErrorEditUser(baseValidationText + "Username is required");
        } else if (username.length < 3) {
            setErrorEditUser(baseValidationText + "Invalid username (min:3 characters)");
        } else if (username.length > 30) {
            setErrorEditUser(baseValidationText + "Invalid username (max: 30 characters)");
        } else if (password.length === 0) {
            setErrorEditUser(baseValidationText + "Password is required");
        } else if (!validPassword.test(password)) {
            setErrorEditUser(baseValidationText + "Invalid password (at least 1 uppercase, lowercase and digit)");
        } else if (city.length === 0) {
            setErrorEditUser(baseValidationText + "City is required");
        } else if (street.length === 0) {
            setErrorEditUser(baseValidationText + "Street is required");
        } else if (number.length === 0) {
            setErrorEditUser(baseValidationText + "Number is required");
        } else if (zipcode.length === 0) {
            setErrorEditUser(baseValidationText + "Zipcode is Required");
        } else if (lat.length !== 0 && !validLat.test(lat)) {
            setErrorEditUser(baseValidationText + "Invalid Latitude");
        } else if (long.length !== 0 && !validLong.test(long)) {
            setErrorEditUser(baseValidationText + "Invalid Longitude");
        } else {
            setErrorEditUser(null);

            const updateUserRes = updateUser(userId, {
                email,
                username,
                password,
                name: {
                    firstname,
                    lastname
                },
                address: {
                    city,
                    street,
                    number,
                    zipcode,
                    geolocation: {
                        lat,
                        long
                    }
                },
                phone
            })

            updateUserRes.then(res => {
                setErrorEditUser(null);
                setSuccessEditUser("User Edited successfully ...");

                setTimeout(function () {
                    navigate("/all-users");
                }, 2000)
            }).catch(err => {
                const error = `${err.response.data}`;
                setErrorEditUser(error);
                setTimeout(function () {
                    setErrorEditUser(null);
                }, 3000)
            })
        }

    };

    return {
        firstname, lastname, email, phone, username, password, city, street, number, zipcode, lat, long, errorEditUser, successEditUser, userFound,
        handleFirstname, handleLastname, handleEmail, handlePhone, handleUsername, handlePassword, handleCity, handleStreet, handleNumber, handleZipcode, handleLat, handleLong, handleSubmitUser
    };
};

export { useGetUsers, useAddUser, useEditUser };