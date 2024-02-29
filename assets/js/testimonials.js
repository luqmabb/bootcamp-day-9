function showAll() {
  //tampilkan semua data
  async function getData() {
    try {
      const response = await fetch("https://api.npoint.io/1465052a4f4453fb4ba3");
      const datas = await response.json();
      let allData = datas.data

      body.innerHTML = ""
      allData.forEach((element) => {
        const body = document.getElementById("body")
        body.innerHTML += `
        <div class="wrap">
            <img id="img" class="img" src="${element.image}" alt="">
            <i id="quote">"${element.comment}"</i>
            <h4 id="by" class="h4">-${element.author}</h4>
            <div class="star">
                <div style="display: inline;">
                    <p style="display: inline; font-weight: bolder; font-size: larger;">${element.rate}</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    `;
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  getData();
}

function showRateByStar(index) {
    //tampilkan data berdasarkan jumlah star
  async function getDataByStar() {
    try {
    const response = await fetch("https://api.npoint.io/1465052a4f4453fb4ba3");
    const datas = await response.json();
    let allData = datas.data

  newArr = []

  allData.filter((element) => {
    if(element.rate === index) {
      newArr.push(element)
    }
  })

  body.innerHTML = ""

  if(!newArr.length) {
    // alert('ok')
    body.innerHTML +=`<h3 style="margin-top:100px;">tidak ada list dengan rate ${index}</h3>`
  } else {

  newArr.forEach((element) => {
    const body = document.getElementById("body")
    body.innerHTML += `
        <div class="wrap">
            <img id="img" class="img" src="${element.image}" alt="">
            <i id="quote">"${element.comment}"</i>
            <h4 id="by" class="h4">-${element.author}</h4>
            <div class="star">
                <div style="display: inline;">
                    <p style="display: inline; font-weight: bolder; font-size: larger;">${element.rate}</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        `;
  });
}

  } catch (err) {
    console.log(err.message)
  }
  
}
getDataByStar()
}
