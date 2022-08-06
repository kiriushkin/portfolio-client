import { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from 'baseui/button';
import AdminContext from './AdminContext.js';

const Auth = () => {
  const { authUrl, user, getToken, getUser, isAllowed } =
    useContext(AdminContext);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get('code');
    if (!code) return;

    (async () => {
      const token = await getToken(code);

      if (token) await getUser(token);

      navigate('/admin');
    })();
  }, [params]);

  return (
    <div className="auth auth__container">
      {!user.id ? (
        <>
          <p>You need to authorize to see this page.</p>
          <a href={authUrl}>
            <Button startEnhancer={<i className="fa-brands fa-github"></i>}>
              Auth
            </Button>
          </a>
        </>
      ) : !isAllowed ? (
        <p>You have no rights to see this page.</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Auth;
