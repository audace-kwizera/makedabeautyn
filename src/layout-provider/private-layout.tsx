import React from 'react'
import Header from './header'
import Cookies from 'js-cookie';
import { getCurrentUser } from '@/actions/users';
import { Loader } from 'lucide-react';
import ErrorMessage from '@/components/ui/error-message';
import usersGlobalStore, { IUsersGlobalStore } from '@/store/users-global-store';
import Footer from './footer';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = usersGlobalStore() as IUsersGlobalStore;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const router = useRouter();
  const fetchUser = async () => {
    try {
      setLoading(true);
      const token: any = Cookies.get("token");
      const response = await getCurrentUser(token);
      if (response.success) {
        setUser(response.data);
      } else {
        setError(response.message);
      }
    } catch (error: any) {
      Cookies.remove("token");
      toast.error(error.message);
      router.push("/login");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div><ErrorMessage error={error} /></div>;
  }

  return (
    <div>
      <Header />
        <div>{children}</div>
    
    </div>
  )
}

export default PrivateLayout