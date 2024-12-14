const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwtich = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });


      modeSwtich.addEventListener("click", () =>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
          modeText.innerText = "Light mode"
        }else{f
          modeText.innerText = "Dark mode"
        }
      });
      
// function luuThongTin() {
//   const ten = document.getElementById("ten").value;
//   const matkhau = document.getElementById("matkhau").value;
//   const nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
//   const ngaysinh = document.getElementById("ngaysinh").value;
//   const sdt = document.getElementById("sdt").value;
  
//   if (ten && matkhau && nhaplaimatkhau && ngaysinh && sdt) {
//     const Thongtin = {
//       ten : ten,
//       matkhau: matkhau,
//       nhaplaimatkhau: nhaplaimatkhau,
//       ngaysinh: ngaysinh,
//       sdt: sdt,
//     };
//     localStorage.setItem("hoSoCaNhan",JSON.stringify(hoso));
//     alert("Đã đăng kí thành công!");
//     window.location.href = "";
//   } else {
//     alert("Vui lòng điền đầy đủ thông tin")
//   }
  
// }