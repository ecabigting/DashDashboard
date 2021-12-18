import "./productList.css"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productsList } from "../../dummydata"

export default function ProductList() {
    const [data,setData] = useState(productsList);

    const handleDelete = (id) => {
        setData(data.filter((i)=> i.id !==id));
    };

    const columns=[
        { field: 'id', headerName: 'ID', width: 92 },
        { field: 'name', headerName: 'Product', width: 200, renderCell : (params)=>{
            return (<div className="productListItem">
                <img src={params.row.img} alt="" className="productListImg"/>
                {params.row.name}
            </div>);
        } },
        { field: 'stock', headerName: 'Stock ', width: 112 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 130,
        },
        {
            field: 'action',
            headerName:'Action',
            width:118,
            renderCell: (params)=>{
                return (
                    <>
                        <Link to={"/product/" +params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>                        
                        <DeleteOutline className="productListDelete" onClick={()=>{handleDelete(params.row.id)}}/>
                    </>
                );
            }
        }
      ];    

    return (
        <div className="productList">
        <DataGrid 
            rows={data}
            disableSelectionOnClick={false} 
            columns={columns} pageSize={10} 
            checkboxSelection >
        </DataGrid>;
        </div>
    )
}
