import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import { useTranslation } from 'react-i18next';

import './i18n'

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('english');

  const changeLanguage = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <div className='lang-select'>
        <div className='d-flex mt-3 align-items-center'>
          <i className="fa-solid fa-globe fs-2 me-3"></i>
          <select
            className="form-select w-100 me-3"
            aria-label="Default select example"
            onChange={changeLanguage}
            value={lang}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>

      {/* <Button
        title="hi"
        backgroundColor="red"
        borderRadius={11}
        size="lg"
      />

      <Header
        imgWidth={1.8}
        dropTitle={"Drop Down"}
        size="lg"
      />

      <Cards
        title="Card Title"
        desc="Some quick example text to build on the card title and make up the bulk of the card's content."
        btndes="Go Somewhere"
        width={3}
        number={2}
      /> */}

      <Form size={100} t={t} />
    </div>
  );
}

export default App;
