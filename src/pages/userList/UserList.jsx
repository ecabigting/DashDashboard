import "./userList.css"
import { userList } from "../../dummydata.js"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
        const [data,setData] = useState(userList);
        const handleDelete = (id)=>{
            setData(data.filter(i => i.id !== id))
        }
        const columns=[
        { field: 'id', headerName: 'ID', width: 92 },
        { field: 'user', headerName: 'User', width: 200, renderCell : (params)=>{
            return (<div className="userListUser">
                <img src={params.row.avatar} alt="" className="tableAvatar"/>
                {params.row.username}
            </div>);
        } },
        { field: 'email', headerName: 'Email ', width: 280 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 130,
        },
        {
            field: 'action',
            headerName:'Action',
            width:110,
            renderCell: (params)=>{
                return (
                    <>
                        <Link to={"/user/" +params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>                        
                        <DeleteOutline className="userListDelete" onClick={()=>{handleDelete(params.row.id)}}/>
                    </>
                );
            }
        }
      ];      
    return (
        <div className="userList">
            <DataGrid rows={data}
            disableSelectionOnClick={false} columns={columns} pageSize={10} checkboxSelection ></DataGrid>;
        </div>
    )
}
