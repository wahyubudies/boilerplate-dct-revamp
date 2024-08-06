import React from "react";
import { Table, Filter } from "@/components/post";

async function getData() {
  const res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });
  console.log(res);

  return res.json();
}

export default async function Page() {
  const { data } = await getData();
  console.log(data);

  return (
    <div>
      <div>POST</div>
      <Filter />
      <Table data={data} />
    </div>
  );
}
