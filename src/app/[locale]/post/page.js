import { Table, Filter } from "@/components/post";
import Action from "./action";

export default async function Page() {
  const data = await Action.getlist();
  return (
    <div>
      <h4>POST</h4>
      <Filter />
      <Table data={data} />
    </div>
  );
}
