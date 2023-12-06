import Table from "./Page Components/tableComponent";
import Departments from "./Page Components/department";
import Logout from "./Page Components/logout";
import data from './department.json'
const Page = ()=>{
return<div className="page">
  <Table/>
  < Departments data={data} />
  <Logout />
</div>
}

export default Page