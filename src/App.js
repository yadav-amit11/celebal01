import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './index.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNo, setPhoneNo] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [panNo, setPanNo] = useState('');
    const [aadharNo, setAadharNo] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const countries = [
        'India',
        'USA',
        'Canada',
        'Australia',
        'UK',
    ];

    const cities = {
        India: ['Delhi', 'Mumbai', 'Bangalore'],
        USA: ['New York', 'Los Angeles', 'Chicago'],
        Canada: ['Toronto', 'Vancouver', 'Montreal'],
        Australia: ['Sydney', 'Melbourne', 'Perth'],
        UK: ['London', 'Manchester', 'Birmingham'],
    };

    const validate = () => {
        let errors = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            phoneNo: '',
            country: '',
            city: '',
            panNo: '',
            aadharNo: '',
        };

        if (!firstName) {
            errors.firstName = 'First Name is required';
        }

        if (!lastName) {
            errors.lastName = 'Last Name is required';
        }

        if (!username) {
            errors.username = 'Username is required';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errors.email = 'Invalid Email';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (!phoneNo) {
            errors.phoneNo = 'Phone Number is required';
        } else if (!/^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phoneNo)) {
            errors.phoneNo = 'Invalid Phone Number';
        }

        if (!country) {
            errors.country = 'Country is required';
        }

        if (!city) {
            errors.city = 'City is required';
        }

        if (!panNo) {
            errors.panNo = 'PAN Number is required';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panNo)) {
            errors.panNo = 'Invalid PAN Number';
        }

        if (!aadharNo) {
            errors.aadharNo = 'Aadhar Number is required';
        } else if (!/^\d{12}$/.test(aadharNo)) {
            errors.aadharNo = 'Invalid Aadhar Number';
        }

        setErrors(errors);

        return Object.keys(errors).every((key) => errors[key] === '');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            setIsSubmitted(true);
            navigate('/success');
        }
    };

    return (
        <Routes>
            <Route path="/" element={
                <form onSubmit={handleSubmit}>
                    <h1>Registration Form</h1>

                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}

                    <br />

                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}

                    <br />

                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}

                    <br />

                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

                    <br />

                    <label>Password:</label>
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="checkbox" onClick={() => setShowPassword(!showPassword)} /> Show Password
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

                    <br />

                    <label>Phone Number:</label>
                    <input type="tel" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    {errors.phoneNo && <div style={{ color: 'red' }}>{errors.phoneNo}</div>}

                    <br />

                    <label>Country:</label>
                    <select value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}

                    <br />

                    <label>City:</label>
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">Select City</option>
                        {cities[country] &&
                            cities[country].map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                    </select>
                    {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}

                    <br />

                    <label>PAN Number:</label>
                    <input type="text" value={panNo} onChange={(e) => setPanNo(e.target.value)} />
                    {errors.panNo && <div style={{ color: 'red' }}>{errors.panNo}</div>}

                    <br />

                    <label>Aadhar Number:</label>
                    <input type="text" value={aadharNo} onChange={(e) => setAadharNo(e.target.value)} />
                    {errors.aadharNo && <div style={{ color: 'red' }}>{errors.aadharNo}</div>}

                    <br />

                    <button type="submit">Submit</button>
                </form>
            } />

            <Route path="/success" element={
                <div>
                    <h1>Registration Successful!</h1>
                    <p>
                        First Name: {firstName}
                        <br />
                        Last Name: {lastName}
                        <br />
                        Username: {username}
                        <br />
                        Email: {email}
                        <br />
                        Password: {password}
                        <br />
                        Phone Number: {phoneNo}
                        <br />
                        Country: {country}
                        <br />
                        City: {city}
                        <br />
                        PAN Number: {panNo}
                        <br />
                        Aadhar Number: {aadharNo}
                    </p>
                    <Link to="/">Back to Form</Link>
                </div>
            } />
        </Routes>
    );
}

export default App;
