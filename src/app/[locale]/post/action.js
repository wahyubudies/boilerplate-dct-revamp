import UserRepo from "@/repositories/user-repo";

const getlist = async () => {
  const [res1, res2] = await Promise.all([
    UserRepo.getListUser({ page: 1 }),
    UserRepo.getListUser({ page: 2 }),
  ]);

  return [...res1.data, ...res2.data];
};

const Action = {
  getlist,
};

export default Action;
