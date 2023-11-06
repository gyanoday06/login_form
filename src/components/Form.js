import React, { useState } from "react";
import "./Form.css";
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import PropTypes from "prop-types";

export default function Form(props) {
    const [type, setType] = useState("create");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState({});

    const handleTabChange = (selectedType) => {
        setType(selectedType);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setValidationErrors({ ...validationErrors, firstName: "" });
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        setValidationErrors({ ...validationErrors, lastName: "" });
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setValidationErrors({ ...validationErrors, email: "" });
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setValidationErrors({ ...validationErrors, password: "" });

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

        if (!passwordRegex.test(newPassword)) {
            setValidationErrors({ ...validationErrors, password: "Password must have at least 8 characters, one lowercase letter, one uppercase letter, and one special character (!@#$%^&*)" });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (!email) {
            errors.email = "Please enter your email address";
        }

        if (!password) {
            errors.password = "Please enter your password";
        }

        if (type === "create") {
            if (!firstName) {
                errors.firstName = "Please enter your first name";
            }
            if (!lastName) {
                errors.lastName = "Please enter your last name";
            }
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        window.location.reload();
    }

    let size = props.size;

    return (
        <>
            <form className={`container form p-0 pb-3 mb-3 mt-5 w-${size}`} onSubmit={handleSubmit}>
                <div className="tab-container d-flex mb-4">
                    <label className={`tab ${type === "create" ? "active" : ""}`} onClick={() => handleTabChange("create")}>Create Account</label>
                    <div class="vl"></div>
                    <label className={`tab ${type === "login" ? "active" : ""}`} onClick={() => handleTabChange("login")}>Login</label>
                </div>
                {type === "create" &&
                    <div className="p-3">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" onChange={handleFirstNameChange} />
                        {validationErrors.firstName && <div className="error-message red-text">{validationErrors.firstName}</div>}
                    </div>
                }

                {type === "create" &&
                    <div className="p-3">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" onChange={handleLastNameChange} />
                        {validationErrors.lastName && <div className="error-message red-text">{validationErrors.lastName}</div>}
                    </div>
                }

                <div className="p-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange} />
                    {validationErrors.email && <div className="error-message red-text">{validationErrors.email}</div>}
                </div>
                <div className="mb-3 p-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} />
                    {validationErrors.password && <div className="error-message red-text">{validationErrors.password}</div>}
                </div>
                <div className="form-check m-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <Button
                    title={type === "create" ? "Create Account" : "Login"}
                    backgroundColor="lightblue"
                    borderRadius={11}
                    size="md"
                    type="submit"
                />
            </form>
        </>
    );
}

Form.propTypes = {
    size: PropTypes.number,
}
