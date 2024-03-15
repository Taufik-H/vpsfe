const { atom } = require("recoil");

export const userLoginState = atom({
  key: "userLoginState",
  default: {
    id: "",
    name: "",
    email: "",
    roleId: "",
    address: "",
    balance: 0,
    isLogedin: false,
  },
});
