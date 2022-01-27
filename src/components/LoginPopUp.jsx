import styled from "styled-components";
import GoogleLogin from 'react-google-login'
import githubIcon from '../assets/images/githubIcon.png';
import googleIcon from '../assets/images/googleIcon.png';
import { IoIosClose } from 'react-icons/io';

const PopUpBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 400px;
  background: white;  
  border-radius: 0.7rem;
  position: relative;

  .icon {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div``;

const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0 2rem;
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
    <PopUpBackground>
      <PopUpWrapper>
        <IoIosClose 
          className="icon" 
          size="40" 
          onClick={()=>{setIsLoginPopUp(false)}}
        />
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
                  cursor: 'pointer'
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
      </PopUpWrapper>
    </PopUpBackground>
   
  );
}

export default LoginPopUp;