let dataArr = [];
function getData(event) {
  event.preventDefault();

  //ambil nama project*
  const nameProject = document.getElementById("projectname").value;
  if (nameProject.length > 37) {
    alert("karakter project name terlalu panjang");
    return;
  }

  //ambil start date
  const startDateInput = document.getElementById("startDate").value;

  //ambil end date
  const endDateInput = document.getElementById("endDate").value;

  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  const startYear = startDate.getFullYear(); //ambil tahun awal (number)
  const startMonth = startDate.getMonth(); //ambil bulan awal (number)
  const endYear = endDate.getFullYear(); //ambil tahun akhir (number)
  const endMonth = endDate.getMonth(); //ambil tahun akhir (number)

  let getDurationMonth = (endYear - startYear) * 12 + (endMonth - startMonth);

  let getDuration = ""; //ambil durasi*

  //pengecekan apakah durasi masuk kategori hari atau bulan
  if (getDurationMonth == 0) {
    let getDurationDay = endDate.getTime() - startDate.getTime();
    getDuration += Math.ceil(getDurationDay / (1000 * 3600 * 24)) + " hari";
  } else if (getDurationMonth > 0) {
    getDuration += getDurationMonth + " bulan";
  }

  //ambil description*
  let description = document.getElementById('description').value 

  //ambil technologies*
  const nodeJs = document.getElementById("nodeJs").checked;
  const nextJs = document.getElementById("vueJs").checked;
  const reactJs = document.getElementById("reactJs").checked;
  const typeScript = document.getElementById("php").checked;

  let dataObj = {
    nameProject,
    getDuration,
    description,
    tech: "",
  };

  //proses filtering hanya memasukkan checkbox yang dipilih saja
  if (nodeJs === true) {
    dataObj.tech += '<i class="fa-brands fa-node"></i>';
  }
  if (nextJs === true) {
    dataObj.tech += '<i class="fa-brands fa-vuejs"></i>';
  }
  if (reactJs === true) {
    dataObj.tech += '<i class="fa-brands fa-react"></i>';
  }
  if (typeScript === true) {
    dataObj.tech += `<i class="fa-brands fa-php"></i>`;
  }

  //filter jika ada form yg kosong
  if (
    nameProject == "" ||
    startDateInput == "" ||
    endDateInput == "" ||
    description == "" ||
    dataObj.tech == ""
  ) {
    return alert("Please fill in the form");
  }

  dataArr.push(dataObj);
  renderBlog();
}
console.log(dataArr);

function renderBlog() {
  document.getElementById("card").innerHTML = "";
  for (let i = 0; i < dataArr.length; i++) {
    document.getElementById("card").innerHTML += `<div class="card">
    <div onclick="showPage()">

        <img src="assets/photo/coding.jpg" alt="">
        <p class="name-project-card">${dataArr[i].nameProject}</p>
        <small class="durasi-card">durasi : ${dataArr[i].getDuration}</small>
        <p class="description-card">${dataArr[i].description}</p>
        <p style=" margin-top: 25px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Tech
            stack : 
        </p>
        <div class="tech-stack-card">
            ${dataArr[i].tech}
        </div>
    </div>
    <div>
        <div class="wrap-card-button">
            <button>edit</button>
            <button onclick="deleteData(${i})">delete</button>
        </div>
    </div>
</div>`;
  }
}

function deleteData(i) {
  dataArr.splice(i, 1);
  renderBlog();
}

function showPage() {
  window.location.href = "myproject.html";
}
