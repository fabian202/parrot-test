import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

const ParrotForm = ({onSubmit, parrot, loading}) => {
  const [state, setState] = useState(parrot);
  console.log(parrot)

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <legend>Parrot</legend>
        <label>Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter Full Name"
          onChange={handleChange}
          value={state?.name || ''}
        />
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Long Description"
          onChange={handleChange}
          value={state?.description || ''}
        ></textarea>
        <label>Country</label>
        <select
          name="country"
          onChange={handleChange}
          value={state?.country || ''}
        >
          <option value="usa">USA</option>
          <option value="col">Colombia</option>
          <option value="ca">Canada</option>
        </select>
        <button type="submit">Save Parrot</button>
        {loading && <Loader type="Oval" height={30} />}
      </fieldset>
    </form>
  );
};

export default ParrotForm;
