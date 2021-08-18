import Layout from './Components/Layout';
import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

import './App.scss';

const App = () => {
  return (
    <Layout>
      <div className="box">
        <h1 className="title">Phonebook of non-existent people</h1>
        <Form />
      </div>

      <div className="box">
        <h2 className="contact">Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </Layout>
  );
};

export default App;
