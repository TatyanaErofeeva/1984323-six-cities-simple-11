import {useAppSelector} from '../hooks/index';
import {AuthorizationStatus, AppRoute } from '../const';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/index';
import { logoutAction } from '../store/api-actions';
import { getAuthorizationStatus } from '../store/selectors';

function MainHeader(){
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuthed = (authStatus === AuthorizationStatus.Auth);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuthed ?
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                  :
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
              {isAuthed
               &&
               <li className="header__nav-item">
                 <Link
                   className="header__nav-link"
                   to={AppRoute.Root}
                   onClick = {() => {
                     dispatch(logoutAction());
                   }}
                 >
                   <span className="header__signout">Sign out</span>
                 </Link>
               </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default MainHeader;
