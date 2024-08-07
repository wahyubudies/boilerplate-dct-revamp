import DummyPost from "@/dummy/dummy-post";
import Common from "@/utilities/common";
import RequestHelper from "@/utilities/request-helper";

// const BASE_API = process.env.REACT_APP_BASE_API_DEVELOPMENT;
const BASE_API = Common.baseApi();

const getListUser = async ({ page }) => {
  // const url = BASE_API + `/api/users?page=${page}`;
  // const res = await RequestHelper({ URL: url, METHOD: "GET" });
  const res = DummyPost.post;
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
