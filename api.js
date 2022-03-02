const alldevices = () =>{
    const searchValue =document.getElementById('search-box').value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    console.log(searchValue);
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    console.log(data.data)
    showDeviceDetails (data.data);    
});
  };
const showDeviceDetails = (devices) =>{
      const divparent = document.getElementById('container');
      console.log(divparent)
  for(const device of devices){
    
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-60  w-60">
            <img class=w-25 src="${device.image}" class="card-img-top" alt="...">
            <div class="card-body bg-secondary">
              <h2>${device.brand}</h2>
              <h5 class="card-title"></h5>
              <p class="card-text">it's a amousing brand.anybody can be choice this phone.chipper this and steelless golden plate it made.</p>
            </div>
            <div>
              <button id="slug" type="button" class="btn btn-danger">Details</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-60  w-60">
            <img class=w-25 src="${device.image}" class="card-img-top" alt="...">
            <div class="card-body bg-secondary">
              <h2>${device.brand}</h2>
              <h5 class="card-title"></h5>
              <p class="card-text">
                it's a amousing brand.anybody can be choice this phone.chipper this and steelless golden plate it made.
              </p>
            </div>
            <div>
              <button id="slug" type="button" class="btn btn-success">Details</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-60  w-60">
            <img class= w-25 src="${device.image}" class="card-img-top" alt="...">
            <div class="card-body bg-secondary">
              <h2>${device.brand}</h2>
              <h5 class="card-title"></h5>
              <p class="card-text">it's a amousing brand.anybody can be choice this phone.chipper this and steelless golden plate it made.</p>
            </div>
            <div>
              <button id="slug" type="button" class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div> `;
      divparent.appendChild(div) ; 
    }
  };