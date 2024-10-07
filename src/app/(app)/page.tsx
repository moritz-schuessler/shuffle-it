import { auth } from '@/auth';

const App = async () => {
  const session = await auth();

  if (session?.error === 'RefreshAccessTokenError') {
    throw new Error('RefreshAccessTokenError');
  }
};

export default App;
