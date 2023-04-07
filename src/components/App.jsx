
import ContactList from "./ContactList";
import Form from "./Form";
import Filter from "./Filter";


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading, getContacts } from "redux/selectors";

export function App() {


 const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts)



  useEffect(() => {dispatch(fetchContacts());
  }, [dispatch]);



  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 30,
        backgroundColor: 'powderblue',
           
      }}
    >

     
      <h1>Phonebook</h1>

 {isLoading && <p>Loading contacts...</p>}
      
      {error && <p>{error}</p>}
          <Form />

          <h2>Contacts</h2>
      {contacts.length > 0 && 
        (<>
        < Filter />
        <ContactList />
        </>)
       
      }
    </div>
  );
  
}

