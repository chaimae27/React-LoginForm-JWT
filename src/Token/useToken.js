import { useState } from 'react'

export default function useToken(){
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
    // You need to use the optional chaining operator—?.
    // -when accessing the token property because when 
    // you first access the application, the value of sessionStorage.
    // getItem('token') will be undefined. If you try to access a property, 
    // you will generate an error.
  }
  const [token, setToken] = useState(getToken);

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    // This method (setItem) takes a key as a first argument and a string as the second argument
    // we convert the userToken from an object to a string using the JSON.stringify function
  };

  return {
    setToken: saveToken,
    token
  }
  // Finally, return an object that contains the token and saveToken 
  // set to the setToken property name. This will give the component 
  // the same interface. You can also return the values as an array,
  // but an object will give users a chance to destructure only the values 
  // they want if you reuse this in another component.
}
