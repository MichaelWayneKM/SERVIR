import { CardContent } from "@mui/material";
import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { getAuth, signInWithPopup, GoogleAuthProvider, browserLocalPersistence, setPersistence } from "firebase/auth";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const signinWithGoogleAction = async (dispatch: Dispatch<any>) => {

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  setPersistence(auth, browserLocalPersistence).then(() => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (credential) {
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        
        
        dispatch(auth);
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  })
  
};

function Signin() {

    const dispatch = useDispatch()

    useEffect(() => {
        const auth = getAuth();
        console.log("User: Firebase Authent")
        console.log(auth.currentUser)
    }, [])


  return (
    <Container>
      <Card>
        <div className="section-title">Login to Continue</div>
        <div>
          <hr />
          <GoogleButton
            style={{ marginTop: 50 }}
            onClick={() => signinWithGoogleAction(dispatch)}
          />
        </div>
      </Card>
    </Container>
  );
}

export default Signin;

const Container = styled.div`
  height: 500px;
  background: url("https://cdn.unenvironment.org/2021-05/3310567.jpg");
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 30px;
  background-color: #ffffff40;
  backdrop-filter: blur(2px);
  box-shadow: 1px 1px 5px #1a1a1a50;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;
