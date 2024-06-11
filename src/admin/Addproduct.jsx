import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

function Addproduct() {
  
    const [img, setimg] = useState()
    const [pname, setname] = useState("")
    const [price, setprice] = useState("")
    const [detail, setdetail] = useState('')
    const [id,setid] = useState()


    const postcard = async () => {
        const formdata = new FormData()
        formdata.append('file',img);
        formdata.append('pname' , pname);
        formdata.append('price',price);
        formdata.append('description',detail);
       formdata.append("id",id)
        if (!img || !pname  || !price || !detail ) {
            alert("please fill all input")
        }
        else {
            const respcard = await fetch("http://localhost:4000/addproduct", {
                method: 'POST',
                body: formdata
            })
            const update = await respcard.json()
            console.log(update)
            if (update.status === true) {
                toast.success(update.message)
            }
            else {
                toast.error(update.message)
            }
        }
    }
    return (
        <>
        <Toaster/>
           <section id="body">
           <div className="bcards main">
                
                <div className="bcard">
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                    <input required name="id" type="text" value={id} onChange={(e) => { setid(e.target.value) }} placeholder="Enter card id eg. 1,2,3....." />
                        <input required name="pname" type="text" value={pname} onChange={(e) => { setname(e.target.value) }} placeholder="Enter card name" />
                        <br />
                        <input required name="price" type="number" value={price} onChange={(e) => { setprice(e.target.value) }} placeholder="Enter price" />
                        <br />
                        <input required name="description" type="text" value={detail} onChange={(e) => { setdetail(e.target.value) }} placeholder="Enter detail" />
                        <br />
                        <input required id="file" name="file" type="file" onChange={(e) => { setimg(e.target.files[0]) }}/>
                    

                        <button type="submit" onClick={postcard}>Submit</button>
                    </form>
                </div>
            </div>
           </section>
            
        </>
    )
}
export { Addproduct }