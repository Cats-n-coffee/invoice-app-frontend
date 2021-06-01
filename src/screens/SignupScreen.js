import styled from 'styled-components/macro';
import AuthForm from '../components/forms/AuthForm';
import { AuthWrapper, AuthSectionStyled } from './styles';

export default function SignupScreen(props) {
    return (
        <div
            css={`${ AuthWrapper }`}
        >
            <section
                css={`${ AuthSectionStyled }`}
            >
                <h1>SIGN UP</h1>
                <AuthForm type="signup" />
            </section>
        </div>
        
    )
}