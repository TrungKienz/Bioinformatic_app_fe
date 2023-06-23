import { useAccess } from 'umi';
import { currentUser1 } from "@/services/authService/api";

export const getAccessUser = (props: any) => {
    const { foo } = props;
  const access = useAccess();
 
  if (access.canAdmin) {
    // user has permission canReadFoo
  }
 
  return <div>...</div>;
};

