import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useAuth } from '../../contexts/authProvider';
import { userLogin, userSignup } from '../../utils/apiRoutes';
import { AuthFormStyled } from './styles';

// The prop "type" determines which form to render: login has email/password,
// signup has username/email/password

export default function AuthForm(props) {
    const { setUser } = useAuth();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (props.type === "login") {
            userLogin({ email, password })
            .then(data => {
                if (data.isAxiosError || data.error) {
                    throw new Error(data.message || 'Could not log in')
                }
                setUser(data)
            })
            .catch(err => {
                setError(err.message)
            })
        }
        else if (props.type === "signup") {
            userSignup({ username, email, password })
            .then(data => {
                if (data.isAxiosError || data.error) {
                    throw new Error(data.message || 'Could not sign up')
                }
                setUser(data)
            })
            .catch(err => {
                setError(err.message)
            })
        }

        setUsername('');
        setEmail('');
        setPassword('');
        setError('');
    }

    React.useEffect(() => {
        let timer = setTimeout(() => {
            setError('');
        }, 3000)
        return () => clearTimeout(timer)
    }, [error])

    return (
        <form onSubmit={ handleSubmit }
            css={`${AuthFormStyled}`}
        >
            { props.type === "signup" ? 
                <div className="auth-form-div">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        id="username"
                        value={ username } 
                        onChange={ (e) => setUsername(e.target.value) }
                        required
                        />
                </div>
                : null
            }
            <div className="auth-form-div">
                <label htmlFor="email">Email</label>
                <input type="text" 
                    id="email" 
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    required
                    />
            </div>
            <div className="auth-form-div">
                <label htmlFor="password">Password</label>
                <input type="password" 
                    id="password" 
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    required
                    />
            </div>
            { error ? <div className="error">{ error }</div> : null }
            <button type="submit">{ props.type }</button>
            { props.type === "login" ? 
                <p>Don't have an account? <Link to="/signup">Signup!</Link></p>
                : <p>Already have an account? <Link to="/login">Login!</Link></p>
            }
        </form>
    )
}