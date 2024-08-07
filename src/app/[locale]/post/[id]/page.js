import React from "react";
import Action from "./action";
import { Link } from "@/src/navigation";

export default async function Page({ params }) {
  const { data } = await Action.getUser({ id: params.id });

  // console.log("===================================");
  // console.log("🚀 ~ Page ~ data:", data);
  // return
  return (
    <>
      <div>
        <h4>DETAIL POST : {data.id}</h4>
        <p>AVATAR</p>
        <img src={data.avatar} alt={data.first_name} />
        <p>EMAIL : {data.email}</p>
        <p>FIRST NAME : {data.first_name}</p>
        <p>LAST NAME : {data.last_name}</p>
      </div>

      <Link href="/post">Back</Link>
    </>
  );
}
