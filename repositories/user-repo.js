import DummyUser from "@/dummy/dummy-user";
import Common from "@/utilities/common";
import RequestHelper from "@/utilities/request-helper";

const BASE_API = Common.baseApi();

const getListUser = async ({ page }) => {
  // const url = BASE_API + `/api/users?page=${page}`;
  // const res = await RequestHelper({ URL: url, METHOD: "GET" });
  const res = DummyUser.user;
  return res;
};

const getUser = async ({ id }) => {
  const url = BASE_API + `/api/users/${id}`;
  const res = await RequestHelper({ URL: url, METHOD: "GET" });
  return res;
};

const UserRepo = {
  getListUser,
  getUser,
};

export default UserRepo;
