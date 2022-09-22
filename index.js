 



var services=document.getElementById('Services');

var Original_content= `<div>
<div class="icon-box">
  <i class="ri-store-line"></i>
  <h3><a href="">TITLE</a></h3>
</div>
</div>`


fetch('https://localhost:3000/services')
  .then(response => response.json())
  .then(json =>{
    json.Services.forEach(element => {
        var content = Original_content;
        content=content.replace('TITLE',element.A)

        
        var service = document.createElement('div')
        service.className='col-xl-2 col-md-4';
        service.innerHTML = content;
        services.appendChild(service)
    });
  } )




