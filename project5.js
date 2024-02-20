var product=[
        {name:"Mouse", headline:"sexy as your Ass",price:"600", Image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D"},
        {name:"Laptop", headline:"Slim as Durex",price:"58000", Image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"},
        {name:"Bike", headline:"Fast as Fuck",price:"1200000", Image: "https://images.unsplash.com/photo-1599401677465-9af5ab3d5487?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdG9yJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D"},
        {name:"Robot", headline:"Gandu",price:"400", Image: "https://images.unsplash.com/photo-1546776230-bb86256870ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXxlbnwwfHwwfHx8MA%3D%3D"},
       {name:"Car", headline:"Plastic",price:"200", Image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXxlbnwwfHwwfHx8MA%3D%3D"},
       {name:"Wheel", headline:"Round",price:"3000", Image: "https://images.unsplash.com/photo-1706883376007-95963191784e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
       {name:"Camera", headline:"Full HD",price:"24000", Image: "https://images.unsplash.com/photo-1708367141188-237043ed1278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"}
       ];

       var popular=[
        {name:"Samsung S24+",heading:"Ai Included",price:"140000",Image:"https://images.unsplash.com/photo-1706300896423-7d08346e8dbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZyUyMHMyNHxlbnwwfHwwfHx8MA%3D%3D"},
        {name:"BMW M4",heading:"Yeahh",price:"340000020",Image:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"},
        {name:"Private Jet",heading:"Fly Away",price:"96697202234",Image:"https://plus.unsplash.com/premium_photo-1679758630312-a3d601c411d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbmV8ZW58MHx8MHx8fDA%3D"},
        {name:"Hot Ballons",heading:"Whoo",price:"100020",Image:"https://images.unsplash.com/photo-1708149421696-d9fa65123f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjl8fHxlbnwwfHx8fHw%3D"},
        {name:"Shoe",heading:"Walk lite",price:"2420",Image:"https://images.unsplash.com/photo-1706550631013-22740cac2b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOTh8fHxlbnwwfHx8fHw%3D"},
        
       ];

      


       var clt="";
      function pplr(){
        popular.forEach(function(pop){
                clt+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[30%] flex-shrink-0">
                <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="${pop.Image}"
                        alt="">
                </div>
                <div class="data py-2 w-full">
                    <h1 class="leading-none font-semibold">${pop.name}</h1>
                    <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${pop.heading}</h4>
                    <h4 class="mt-3 font-semibold text-zinc-500">&#8377 ${pop.price}</h4>
                </div>
            </div>`;
        
               })
               document.querySelector(".populars").innerHTML=clt;
      }
       var clutter="";
      function addProducts(){
        product.forEach(function(prd,index){
                clutter +=`<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img class="w-full h-full object-cover " src="${prd.Image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${prd.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${prd.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377 ${ prd.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
        
               })
               document.querySelector(".products").innerHTML=clutter;
      }
      var cart=[];

      function addtocart(){
       document.querySelector(".products")
       .addEventListener("click",function(details){
           if(details.target.classList.contains('add')){
               cart.push(product[details.target.dataset.index])
               console.log(cart)
           }
       });
      }

      function showcart(){
        document.querySelector(".carticon").addEventListener("click", function(){

            document.querySelector(".cartexpnd").style.display = "block";
    
            var clu="";
            cart.forEach(function(prod, index){
                clu +=` <div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                <img class="w-full h-full object-cover" src="${prod.Image} " />
                </div>
                <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                </div>
    
                </div>`;
            })
            document.querySelector(".cartexpnd").innerHTML=clu;


        });}

        showcart();
      addtocart();
      
      pplr();
      
      addProducts();
    
