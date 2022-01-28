//import { useContext } from "react";
import styled from "styled-components";
import GoogleLogin from 'react-google-login'
//import UserContext from '../context/user'
import githubIcon from '../assets/images/githubIcon.png';
import googleIcon from '../assets/images/googleIcon.png';
import PopUp from './PopUp';

const LoginText = styled.h1`
  margin-bottom: 2.5rem;
`;

const IconWrapper = styled.div``;

const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0 1.5rem;
  border-radius: 1px solid gray;
  cursor: pointer;
`;

const GithubLink = styled.a``;

const GithubIcon = styled(Icon).attrs({
  src: `${githubIcon}`
})``;



const onSuccess = async(res) => {
  console.log(res);
}

const onFailure = (err) => {
  console.log(err);
}

const LoginPopUp = ({ isVisible, setIsLoginPopUp }) => {
  if (!isVisible) return null;
  
  return (
    //<UserContext.Consumer>
      //{(value) => {
        <PopUp
          isVisible={isVisible}
          setIsLoginPopUp={setIsLoginPopUp}
          width='25rem'
          height='15rem'
        >
          <LoginText>Social Login</LoginText>
          <IconWrapper>
            <GoogleLogin
              render={ renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  style={{
                    background: 'none',
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    margin: '0 1.5rem'
                  }}
                >
                  <img
                    src={googleIcon}
                    alt="google login icon"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "50%",
                    }}
                  />
                </button>
                )}
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
            <GithubLink
              href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=https://localhost:3000`}
            >
              <GithubIcon />
            </GithubLink>  
          </IconWrapper>
        </PopUp>
      //}}
    //</UserContext.Consumer>
  );
}

export default LoginPopUp;