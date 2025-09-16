import { useState } from "react"
import styled from "styled-components"
import { InputandLabel } from "../../components/form-components/InputandLabel"
import { fontStack } from "../../styles/fontStack"
import { SubmitBtn } from "../../components/form-components/SubmitBtn"
import { Link, useNavigate, useLocation } from "react-router-dom"
import service from "../../service/service"
import { login } from "../../features/authSlice"
import { useDispatch} from "react-redux"
import ChangePageTitle  from "../../hooks/ChangePageTitle"

const FormLoginContainer = styled.div`
  background: #22C1C3;
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`
const FormLogin = styled.form` 
  width: 290px;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-family: ${fontStack.titles};
  font-size: 3rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`
const Para = styled.p`
  font-family: ${fontStack.text};
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 700;
  color: #FFF;
`
const StyledLink = styled(Link)`
  color: #FFF;
`
const ErrorBanner = styled.p`
  background: #bd2222ff;
  color: #FFF;
  color: font-family: ${fontStack.text};
  font-size: 1rem;
  line-height: 1.25px;
  font-weight: 700;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`

export const Login = () => {
  const [loginData, setLoginData] = useState({username:null, password:null});
  const [hasErrorAtLogin, sethasErrorAtLogin] = useState(false)
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (name: string | null, value: string | null) => {
    if (name) {
      setLoginData(prev => ({ ...prev, [name]: value?.trim() }));
    }
  };
  ChangePageTitle({pageTitle: 'Login - SmallShop'});

  const formData = async (e:SubmitEvent) => {
    e.preventDefault();
    const user = await service('http://localhost:7575/api/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(loginData)
    });
    if (user) {
      const from = location.state?.from?.pathname || '/user'; // Default to /user-dashboard
      localStorage.setItem('user', user);
      dispatch(login({isLogged: true, userName: loginData.username }));
      sethasErrorAtLogin(false);
      navigate(from, { replace: true });
    } else {
      sethasErrorAtLogin(true);
      dispatch(login(false))
    }
  }
 
  
  return (
    <FormLoginContainer>
      <Heading>Login</Heading>      
      <FormLogin onSubmit={formData}  action="">
        {hasErrorAtLogin ? <ErrorBanner aria-live="polite">UserName or Password is wrong</ErrorBanner> : null}
        <InputandLabel label={"UserName or Email"} inputType={"text"} name={"username"} fn={handleInputChange} isRequired={true} />
        <InputandLabel label={"Password"} inputType={"password"} name={"password"} fn={handleInputChange} isRequired={true} />
        <SubmitBtn text={"Login"} />
        <Para><StyledLink to="/create-user">Create User</StyledLink></Para>
      </FormLogin>
    </FormLoginContainer>
  )
}
