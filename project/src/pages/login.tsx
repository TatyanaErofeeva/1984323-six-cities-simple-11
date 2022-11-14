import LogoHeader from '../components/logo-header';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { AppRoute, CitiesList } from '../const';
import { cityChange } from '../store/action';

function Login() {
  const dispatch = useAppDispatch();
  return (
    <>
      < LogoHeader/>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.Root} onClick={() => dispatch(cityChange(CitiesList[0].name))}>
              <span>{CitiesList[0].name}</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
