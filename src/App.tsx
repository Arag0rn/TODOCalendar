import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { GlobalStyle } from './components/GlobalStyle.styled'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './components/RestrictedRoute';
import { SignInPage } from './pages/SignInPage';
import { CalendarWrapper, Wrapper } from './components/Container/Container.styled';
import { SignUpPage } from './pages/SignUpPage';
import { refreshUser } from './Redux/Auth/operations';
import { Dispatch } from './Redux/store';
import { CalendarPage } from './pages/Calendar.page';
import { FilterTodo } from './pages/FilterTodo';
import { PrivateRoute } from './components/PrivateRoute';

export const App =()=>{
  const dispatch: Dispatch  = useDispatch();
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

      <Route path="/filter-todo" element={
              <Wrapper>
              <PrivateRoute redirectTo="/signin" element={<FilterTodo />} />
              </Wrapper>
            }/> 
       <Route path="/" element={
             <CalendarWrapper>
              <PrivateRoute redirectTo="/signin" element={<CalendarPage />} />
              </CalendarWrapper>
            }/> 

      </Route>
      <Route
            path="/signin"
            index element={
              <Wrapper>
              <RestrictedRoute redirectTo="/" element={<SignInPage />} />
              </Wrapper>
            }
          />
        <Route
            path="/signup"
            element={
               <Wrapper>
              <RestrictedRoute redirectTo="/" element={<SignUpPage />} />
              </Wrapper>
            }
          />
    </Routes> 
     <GlobalStyle />
     </>
  );

}