import { getServerSession } from 'next-auth';

import authOptions from '@/lib/auth/authOptions';

const auth = async () => {
  return await getServerSession(authOptions);
};

export default auth;
