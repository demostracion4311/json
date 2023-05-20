console.log("hello")
fetch("./json/dataone.json")
.then(response =>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("error en la solicitud")
    }
})
.then(data=>{
    let id  = data.img;
    console.log(id)
    let da = true;
    // const img = document.getElementById("img").innerHTML=`<img src="${data.img}"/>`;
    // const name = document.getElementById("name").innerText=data.name;
    // const preci = document.getElementById("preci").innerText= data.preci+" bs";
    // const description = document.getElementById("description").innerHTML=data.description;
    // const inventory = document.getElementById("inventory").innerHTML=`${data.inventory? "DISPONIBLE": "AGOTADO"}`;
    let root ="";
    for(let i =0; i<data.length; i++){
        console.log(i);
        
        root += `<div class="container">
        <div class="product"id="img"><img src="${data[i].img}"/></div>
        <h3  class="product"id="name">${data[i].name}</h3>
        <p   class="product"id="preci">${data[i].preci}</p>
        <p   class="product"id="description">${data[i].description}</p>
        <button class="btn-buy">Comprar</button>
        </div>`
    }
    document.getElementById("root").innerHTML=root;



})
.catch(error=>{
    console.log("errorrr", error)
})
