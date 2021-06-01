import styled from 'styled-components/macro';
import AuthForm from '../components/forms/AuthForm';
import { AuthWrapper, AuthSectionStyled } from './styles';

export default function LoginScreen(props) {
    return (
        <div
            css={`${AuthWrapper}`}
        >
            <section
                css={`${AuthSectionStyled}`}
            >
                <h1>LOGIN</h1>
                <AuthForm type="login" />
            </section>
        </div> 
    )
}