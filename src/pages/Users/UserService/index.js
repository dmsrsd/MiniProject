import {REQUEST_HEADER} from '../../../constants';

const listUser = async () => {
  const resp = await fetch('https://simple-contact-crud.herokuapp.com/contact');
  return await resp.json();
};

const createUser = async payload => {
  const resp = await fetch('https://gorest.co.in/public-api/users', {
    method: 'POST',
    headers: REQUEST_HEADER,
    body: JSON.stringify(payload),
  });
  return await resp.json();
};

const editUser = async payload => {
  const resp = await fetch(
    `https://gorest.co.in/public-api/users/${payload.id}`,
    {
      method: 'PATCH',
      headers: REQUEST_HEADER,
      body: JSON.stringify(payload),
    },
  );
  return await resp.json();
};

const removeUser = async id => {
  const resp = await fetch(
    `https://simple-contact-crud.herokuapp.com/contact/${id}`,
    {
      method: 'DELETE',
    },
  );
  return await resp.json();
};

export {listUser, createUser, editUser, removeUser};

// const listUser = async () => {
//   try {
//     const response = await fetch(
//       'https://simple-contact-crud.herokuapp.com/contact',
//     );

//     const json = await response.json();
//     console.log('CEK GET DATA', json.data);
//     return json.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
