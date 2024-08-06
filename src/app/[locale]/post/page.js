import React from "react";
import { Table, Filter } from "@/components/post";

const getPage2 = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });
  return res.json();
};

const getPage1 = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1", {
    method: "GET",
  });
  return res.json();
};

async function getData() {
  const [res1, res2] = await Promise.all([getPage1(), getPage2()]);

  return [
    ...res1.data,
    ...res2.data,
  ];
}

export default async function Page() {
  const data = await getData();
  
  // console.log("===================================");
  // console.log("🚀 ~ Page ~ data:", data);
  // return null;

  return (
    <div>
      <div>POST</div>
      <Filter />
      <Table data={data} />
    </div>
  );
}
