import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.module.css';
import Link from 'next/link';

export default function detailpage1() {
  return (
    <div>
    <div className="row" style={{ backgroundColor: "#DCDCDC" }}>
     <div className="col-md-3 ms-5 " style={{ backgroundColor: "white" }}>
       <div className="mt-5"></div>
       <a
         className="nav-link-active container-fluid"
         style={{ color: "green" }}
       >
         หน้าแรก
       </a>
       <div
         className="row container-fluid"
         style={{ backgroundColor: "#DCDCDC", marginLeft: 1, marginTop: 10 }}
       >
         <div>
           <label style={{ fontFamily: "bold" }}>หนังสือของฉัน</label>
         </div>
         
         <div>
         <Link href={"/page2"}>
              <a style={{ color: "black" }}>เพิ่มหนังสือใหม่</a>
          </Link>
         </div>
         
         <div>
           <label>จัดการหนังสือ</label>
         </div>
         <div>
           <label>จัดการหนังสือเสียง</label>
         </div>
         <div>
           <label>จัดการบุฟเฟ่ต์</label>
         </div>
       </div>
       <div
         className="row mt-2  container-fluid"
         style={{ backgroundColor: "#DCDCDC", marginLeft: 1 }}
       >
         <div>
           <label style={{ fontFamily: "bold" }}>หนังสือของฉัน</label>
         </div>
         <div>
           <label>เพิ่มหนังสือใหม่</label>
         </div>
         <div>
           <label>จัดการหนังสือ</label>
         </div>
         <div>
           <label>จัดการหนังสือเสียง</label>
         </div>
         <div>
           <label>จัดการบุฟเฟ่ต์</label>
         </div>
       </div>
       <div
         className="row mt-2  container-fluid"
         style={{ backgroundColor: "#DCDCDC", marginLeft: 1 }}
       >
         <div>
           <label style={{ fontFamily: "bold" }}>หนังสือของฉัน</label>
         </div>
         <div>
           <label>เพิ่มหนังสือใหม่</label>
         </div>
         <div>
           <label>จัดการหนังสือ</label>
         </div>
         <div>
           <label>จัดการหนังสือเสียง</label>
         </div>
         <div>
           <label>จัดการบุฟเฟ่ต์</label>
         </div>
       </div>
       <div
         className="row mt-2  container-fluid"
         style={{ backgroundColor: "#DCDCDC", marginLeft: 1 }}
       >
         <div>
           <label style={{ fontFamily: "bold" }}>หนังสือของฉัน</label>
         </div>
         <div>
           <label>เพิ่มหนังสือใหม่</label>
         </div>
         <div>
           <label>จัดการหนังสือ</label>
         </div>
         <div>
           <label>จัดการหนังสือเสียง</label>
         </div>
         <div>
           <label>จัดการบุฟเฟ่ต์</label>
         </div>
       </div>
       <div
         className="row mt-2  container-fluid"
         style={{ backgroundColor: "#DCDCDC", marginLeft: 1 }}
       >
         <div>
           <label style={{ fontFamily: "bold" }}>หนังสือของฉัน</label>
         </div>
         <div>
           <label>เพิ่มหนังสือใหม่</label>
         </div>
         <div>
           <label>จัดการหนังสือ</label>
         </div>
         <div>
           <label>จัดการหนังสือเสียง</label>
         </div>
         <div>
           <label>จัดการบุฟเฟ่ต์</label>
         </div>
       </div>
       <div
         className="row mt-2  container-fluid"
         style={{ backgroundColor: "#DCDCDC", marginLeft: 1 }}
       >
         <div>
           <label style={{ fontFamily: "bold" }}>หนังสือของฉัน</label>
         </div>
         <div>
           <label>เพิ่มหนังสือใหม่</label>
         </div>
         <div>
           <label>จัดการหนังสือ</label>
         </div>
         <div>
           <label>จัดการหนังสือเสียง</label>
         </div>
         <div>
           <label>จัดการบุฟเฟ่ต์</label>
         </div>
       </div>
     </div>
     <div className="col-md-6"  >
      
       <div
         className="mt-3 ms-3 container shadow p-3 mb-5 bg-body rounded d-flex align-items-center"
         style={{
           backgroundColor: "white",
           width: "120%",
           height: 400,
           marginRight: 15,
         }}
       >
         <div className="ms-5">
           <h5>ยินดีต้อนรับนักเขียนหน้าใหม่ :) </h5>
           <label style={{ color: "" }}>
             ดีใจด้วย !! คุณผ่านการพิจารณาเป็นนักเขียนเรียบร้อยแล้ว
             ขณะนี้คุณสามารถวางขายหนังสือในรูปแบบอีบุ๊กบนระบบ meb ได้ทุกเมื่อ
             หากคุณพร้อมแล้ว มาลองเพิ่มหนังสือเล่มแรกกันเลยดีกว่าครับ...
           </label>
           <div className="text-center mt-4">
             <div
               className="border d-flex justify-content-center row "
               style={{ width: "95%", height: 200 }}
             >
               <div></div>
             </div>
           </div>
         </div>
       </div>
       <div
         className="mt-3 ms-3 container shadow p-3 mb-5 bg-body rounded d-flex align-items-center"
         style={{
           backgroundColor: "white",
           width: "120%",
           height: 400,
           marginRight: 15,
         }}
       >
         <div className="ms-5 ">
           <h5>ยินดีต้อนรับนักเขียนหน้าใหม่ :) </h5>
           <label>
             ดีใจด้วย !! คุณผ่านการพิจารณาเป็นนักเขียนเรียบร้อยแล้ว
             ขณะนี้คุณสามารถวางขายหนังสือในรูปแบบอีบุ๊กบนระบบ meb ได้ทุกเมื่อ
             หากคุณพร้อมแล้ว มาลองเพิ่มหนังสือเล่มแรกกันเลยดีกว่าครับ...
           </label>
           <div className="text-center mt-4 mb-2">
             <div
               className="border d-flex justify-content-center row "
               style={{ width: "95%", height: 200 }}
             >
               <div>
                 <img
                   className="mt-3 mb-2"
                   src=".."
                   style={{ width: 75, height: 75 }}
                 />
               </div>
               <div>
                 <button
                   type="button"
                   className="btn btn-success"
                   style={{ height: "70%", width: "20%" }}
                 >
                   ราคาขาย
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div
         className="mt-3 ms-3 container mb-5 d-flex align-items-center"
         style={{
           backgroundColor: "white",
           width: "120%",
           height: 450,
           marginRight: 15,
         }}
       >
         <div className="ms-5 ">
           <h5>แจ้งข่าวสาร </h5>
           <hr />
           <h3>Apple ประกาศปรับอัตราแลกเปลี่ยน</h3>
           <label tyle={{ color: "black" }}>
             อันเนื่องมาจาก Apple
             ได้ประกาศปรับเปลี่ยนอัตราแลกเปลี่ยนใหม่ทำให้ราคา THB
             เพิ่มขึ้นเช่น{" "}
           </label>
           <div className="ms-1 row">
             <label>0.99USD</label>
             <label>0.99USD</label>
             <label>0.99USD</label>
             <label>0.99USD</label>
             <label>...</label>
             <label style={{ color: "red" }}>
               เราได้คำนวนราคาขายที่เหมาะสมบน Apple ให้แล้ว
               คุณนักเขียนสามารถกดปุ่ม "เลือกราคาที่ meb แนะนำทุกเล่ม"
               เพื่อปรับราคาทุกเล่มได้ ทันที
               ไม่ต้องเสียเวลาเลือกปรับราคาทีละเล่มค่ะ
             </label>

             <div className="mt-3">
               <button
                 type="button"
                 className="btn btn-success"
                 style={{ height: "100%", width: "20%" }}
               >
                 ราคา
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 
  )
  
  
}
