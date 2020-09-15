import React from 'react';
import Loader from 'react-loader-spinner';
import { usePersistedState } from '../hooks/usePersistedState';

const ParrotForm = ({ onSubmit, loading }) => {
  const [parrot, setParrot] = usePersistedState('parrot', {
    name: '',
    description: '',
    country: '',
  });

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setParrot({ ...parrot, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = parrot;
    //Get the first and last name
    const [firstName, lastName] = name.split(' ');
    onSubmit({ ...parrot, firstName, lastName });
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
          value={parrot?.name || ''}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Long Description"
          onChange={handleChange}
          value={parrot?.description || ''}
        ></textarea>
        <label>Country</label>
        <select
          name="country"
          onChange={handleChange}
          value={parrot?.country || ''}
          required
        >
          <option value=""></option>
          <option value="col">Colombia</option>
          <option value="ca">Canada</option>
          <option value="usa">USA</option>
        </select>
        <button type="submit">Save Parrot</button>
        {loading && <Loader type="Oval" height={30} />}
      </fieldset>
    </form>
  );
};

export default ParrotForm;
