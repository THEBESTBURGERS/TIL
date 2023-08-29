import { useEffect } from 'react';
import qs from 'qs';

const Callback = ({ history, location }) => {
  const authUri = ``;

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const res = await fetch(`${authUri}?code=${code}`);
        const data = await res.json();

        localStorage.setItem('token', data.jwt);
        localStorage.setItem('ProfileURL', data.avatar_url);

        history.push('/');
      } catch (error) {}
    };

    getToken();
  }, [location, history, authUri]);

};

export default Callback;