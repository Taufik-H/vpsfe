"use client";

const { RecoilRoot } = require("recoil");

export const Provider = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
