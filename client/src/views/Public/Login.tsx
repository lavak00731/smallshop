import { useState } from "react"
import styled from "styled-components"
import { InputandLabel } from "../../components/form-components/InputandLabel"
import { fontStack } from "../../styles/fontStack"
import { SubmitBtn } from "../../components/form-components/SubmitBtn"
import { Link, useNavigate, useLocation } from "react-router"
import service from "../../service/service"
//import { useDispatch, useSelector } from "react-redux"

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

export const Login = () => {
  const [loginData, setLoginData] = useState({username:null, password:null})
  //const dispatch = useDispatch();
 // const isLogged = useSelector(store => store.auth.isLogged);
  //console.log(isLogged)
  // dispatch + action
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (name: string | null, value: string | null) => {
    if (name) {
      setLoginData(prev => ({ ...prev, [name]: value?.trim() }));
    }
  };

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
    console.log(user);
    if (user) {
      const from = location.state?.from?.pathname || '/user'; // Default to /user-dashboard
      localStorage.setItem('user', JSON.stringify(user));
      navigate(from, { replace: true });
    }
  }
  return (
    <FormLoginContainer>
      <Heading>Login</Heading>
      <FormLogin onSubmit={formData}  action="">
        <InputandLabel label={"UserName or Email"} inputType={"text"} name={"username"} fn={handleInputChange} isRequired={true} />
        <InputandLabel label={"Password"} inputType={"password"} name={"password"} fn={handleInputChange} isRequired={true} />
        <SubmitBtn text={"Submit"} />
        <Para><StyledLink to="/create-user">Create User</StyledLink></Para>
      </FormLogin>
    </FormLoginContainer>
  )
}
