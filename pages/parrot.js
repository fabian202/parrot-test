import React from 'react';
import ParrotForm from '../components/ParrotForm';
import useAxios from 'axios-hooks';
import styles from '../styles/parrot.module.css';

const Parrot = () => {
  const [
    { data: dataParrot, loading: loadingParrot, error: errorParrot },
    executeParrot,
  ] = useAxios({ url: `/api/parrot`, method: 'POST' }, { manual: true });

  const handleSubmit = (values) => {

    //Make the request to the API
    executeParrot({ data: values });
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(parrot)}</pre> */}
        <ParrotForm
          onSubmit={handleSubmit}
          loading={loadingParrot}
        />

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
