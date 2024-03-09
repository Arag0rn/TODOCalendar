import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { GlobalStyle } from './components/GlobalStyle.styled'
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './components/RestrictedRoute';
import { SignInPage } from './pages/SignInPage';
import { Wrapper } from './components/Container/Container.styled';

export const App =()=>{
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);



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
    </Routes> 
     <GlobalStyle />
     </>
  );

}