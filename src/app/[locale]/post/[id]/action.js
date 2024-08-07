import UserRepo from "@/repositories/user-repo";

const getUser = async ({ id }) => {
  const res = await UserRepo.getUser({ id: id });
  return res;
};

const Action = {
  getUser,
};

export default Action;
