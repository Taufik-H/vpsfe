const { atom } = require("recoil");

export const userLoginState = atom({
  key: "userLoginState",
  default: {
    id: "",
    name: "",
    email: "",
    roleId: "",
    address: "",
    isLogedin: false,
  },
});
