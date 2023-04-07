/* export const getContacts = state => state.items;
export const getFilter = state => state.filters; */


export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filters;


export const getVisibleContacts = state => {
    const contacts = getContacts(state);
    const filters = getFilter(state);
    const normalizedFilter = filters.toLowerCase();
  return contacts.filter(contact =>
    
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}