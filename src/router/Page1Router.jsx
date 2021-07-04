import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

//page1の画面遷移の設定
export const Page1Router = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];