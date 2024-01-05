import { getServerSession } from 'next-auth';

import authOptions from '@/lib/auth/auth-options';

const auth = async () => {
  return await getServerSession(authOptions);
};

export default auth;
