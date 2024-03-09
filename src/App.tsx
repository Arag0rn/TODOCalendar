import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { GlobalStyle } from './components/GlobalStyle.styled'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './components/RestrictedRoute';
import { SignInPage } from './pages/SignInPage';
import { Wrapper } from './components/Container/Container.styled';
import { SignUpPage } from './pages/SignUpPage';
import { refreshUser } from './Redux/Auth/operations';
import { ToastContainer } from 'react-toastify';

export const App =()=>{
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



    return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <>
      <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
      <Route
            path="/signin"
            element={
              <Wrapper>
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
              </Wrapper>
            }
          />
        <Route
            path="/signup"
            element={
               <Wrapper>
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
              </Wrapper>
            }
          />
    </Routes> 
     <GlobalStyle />
     </>
  );

}