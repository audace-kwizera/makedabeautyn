import React from 'react'
import Header from './header'
import Cookies from 'js-cookie';
import { getCurrentUser } from '@/actions/users';

const PrivateLayout = ({ children } : { children: React.ReactNode }) => {
  const [user = null, setUser]= React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchUser = async () => {
    try {
      const token: any = Cookies.get("token")
      const response = await getCurrentUser(token);
      if (response.success) {
        setUser(response.data);
      } else {
        setError(response.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  }

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className='flex items-center justify-center h-screen'>Chargement ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
        <Header user = {user} />
        <div className="p-5">{children}</div>
    </div>
  )
}

export default PrivateLayout