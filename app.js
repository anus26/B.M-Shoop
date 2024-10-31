const productContainer=document.getElementById('productcontainer')
array=[]
const product =()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json) 
                array.push(...json)
                
                for (let i = 0; i < array.length; i++) {
                  const item=array[i]
            
                   productContainer.innerHTML+=`    <div class="card" style="width: 18rem;">
                  <img src="${item.image}"  class="card-img-top" alt="..." style="width:100%; height:300px; object-fit:cover;">
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary" style="justify-content: end; padding:10px; margin:20px;">Items</a>
                    </div>
        </div>`
        
                }

            })
            .catch(error=>
                console.error('Error fetching products',error)
            )
        
                    
            
}

product()

