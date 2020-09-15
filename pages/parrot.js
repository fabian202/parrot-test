import React from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import ParrotForm from '../components/ParrotForm';
import useAxios from 'axios-hooks';
import styles from '../styles/parrot.module.css';

const Parrot = () => {
  const [parrot, setParrot] = usePersistedState('parrot', {
    name: '',
    description: '',
    country: '',
  });

  const [
    { data: dataParrot, loading: loadingParrot, error: errorParrot },
    executeParrot,
  ] = useAxios({ url: `/api/parrot`, method: 'POST' }, { manual: true });

  const handleSubmit = (state) => {
    const { name } = state;
    //Get the first and last name
    const [firstName, lastName] = name.split(' ');
    const theParrot = { ...state, firstName, lastName };
    setParrot(theParrot);
    //Make the request to the API
    executeParrot({ data: theParrot });
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(parrot)}</pre> */}
      {parrot && (
        <ParrotForm
          onSubmit={handleSubmit}
          parrot={parrot}
          loading={loadingParrot}
        />
      )}
      {errorParrot && (
        <div className={styles.error}>
          Ooops looks like something went wrong, please try again later
        </div>
      )}
      {dataParrot && <code>{'//Response from the API'} <br />{JSON.stringify(dataParrot)}</code>}
    </div>
  );
};

export default Parrot;
