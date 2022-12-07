import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../hooks';
import { AppRoute} from '../const';
import {redirectToAnotherRoute } from '../store/action';
import { AuthorizationStatus } from '../const';
import { loginAction } from '../store/api-actions/api-actions';
import { FormEvent, ChangeEvent, useEffect } from 'react';
import { getAuthorizationStatus } from '../store/selectors';
import { cityChange } from '../store/app-process/app-process';
import { getRandomCity } from '../utils/mocks';

function Login() {
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if(authorisationStatus === AuthorizationStatus.Auth){
      dispatch(redirectToAnotherRoute(AppRoute.Root));
    }
  }, [dispatch, authorisationStatus]);

  const city = getRandomCity();

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

  const isValid = passwordField.match(/^(?=.*\d)(?=.*[a-zA-Z]).{2,20}$/);

  return (

    <div className="page page--gray page--login">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to ={ AppRoute.Root} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
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
                disabled = {!isValid}
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => dispatch(cityChange(city))}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
