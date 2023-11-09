import React, { useState } from "react";
import "./Form.css";
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTranslation } from 'react-i18next';

import PropTypes from "prop-types";

export default function Form(props) {
    const { t } = useTranslation();
    
    const [type, setType] = useState("create");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState({});

    const [email_error, setEmail_error] = useState(false)

    const handleTabChange = (selectedType) => {
        setType(selectedType);
    }

    const handleFieldChange = (fieldName, value) => {
        setValidationErrors({ ...validationErrors, [fieldName]: "" });
        switch (fieldName) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                // Password validation
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
                if (!passwordRegex.test(value)) {
                    setValidationErrors({ ...validationErrors, password: "Password must have at least 8 characters, one lowercase letter, one uppercase letter, and one special character (!@#$%^&*)" });
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (!email) {
            setEmail_error(true);
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
              <label className={`tab ${type === 'create' ? 'active' : ''}`} onClick={() => handleTabChange('create')}>
                {t('create_account')}
              </label>
              <div className="vl"></div>
              <label className={`tab ${type === 'login' ? 'active' : ''}`} onClick={() => handleTabChange('login')}>
                {t('login')}
              </label>
            </div>
            {type === 'create' && (
              <div className="p-3">
                <label htmlFor="FirstName" className="form-label">
                  {t('first_name')}
                </label>
                <input type="text" className="form-control" onChange={handleFieldChange} />
                {validationErrors.firstName && <div className="error-message red-text">{t('please_enter_first_name')}</div>}
              </div>
            )}
    
            {type === 'create' && (
              <div className="p-3">
                <label htmlFor="LastName" className="form-label">
                  {t('last_name')}
                </label>
                <input type="text" className="form-control" onChange={handleFieldChange} />
                {validationErrors.lastName && <div className="error-message red-text">{t('please_enter_last_name')}</div>}
              </div>
            )}
    
            <div className="p-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                {t('email')}
              </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleFieldChange} />
              {(validationErrors.email || email_error) && <div className="error-message red-text">{t('please_enter_email')}</div>}
            </div>
            <div className="mb-3 p-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                {t('password')}
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleFieldChange} />
              {validationErrors.password && <div className="error-message red-text">{t('please_enter_password')}</div>}
            </div>
            <div className="form-check m-3">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">{t('remember_me')}</label>
            </div>
            <Button
              title={type === 'create' ? t('create_account') : t('login')}
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
