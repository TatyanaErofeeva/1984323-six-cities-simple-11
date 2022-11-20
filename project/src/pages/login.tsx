import React from 'react';
import LogoHeader from '../components/logo-header';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../hooks';
import { AppRoute, CitiesList} from '../const';
import { cityChange, redirectToAnotherRoute } from '../store/action';
import { AuthorizationStatus } from '../const';
import { loginAction } from '../store/api-actions';
import { FormEvent, ChangeEvent } from 'react';

function Login() {
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector((state) => state.authorizationStatus);

  if(authorisationStatus === AuthorizationStatus.Auth){
    dispatch(redirectToAnotherRoute(AppRoute.Root));
  }

  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({email: emailField, password:passwordField}));
  };

  const handleEmailFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmailField(evt.target.value);
  };

  const handlePasswordFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPasswordField(evt.target.value);
  };


  return (
    <>
      < LogoHeader/>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit = {handleSubmit} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                onChange = {handleEmailFieldChange}
                value = {emailField}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                onChange = {handlePasswordFieldChange}
                value = {passwordField}
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.Root}
              onClick={() => dispatch(cityChange(CitiesList[0].name))}
            >
              <span>{CitiesList[0].name}</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
