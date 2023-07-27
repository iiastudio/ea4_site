
// var jsondata
var res;
fetch("assets/data.json")
.then(response => response.json())
.then(data => {
    res = data.data
    input_advisors(res.advisors)
    input_supporters(res.supporters)
    input_events(res.events)
    input_approaches(res.approaches)
    // update_info(res.info,"en")
    // update_events(res.events,"en")
    // update_advisors(res.advisors,"en")
    // update_supporters(res.supporters,"en")

})
.catch(error => {
    console.error("error_alert:", error);
});

// const sketch = (p)=>{
//     p.preload = ()=>{
        
        
//     }
//     p.setup = ()=>{
//         // p.loadJSON("https://rawcdn.githack.com/mediaplusarchi/json/a1652cb6317a598ee1f8d8ebf0571996e8da59c7/data.json",input_advisors)
        
//         // 
//         // fetch("../data.json")
//         // .then(response => response.json())
//         // .then(data => {
//         //     console.log(data)
//         //     //jsondata=p.loadJSON(data)
//         // })
//         // .catch(error => {
//         //     console.error("error_alert:", error);
//         // });
        
//         // 
//     }
// }
// new p5(sketch);
function update_info(data,lng){
    if (lng==="en"){
        data.menu.forEach((v,i)=>{
            $(".mobile-menu__link")[i].classList.remove("twFont");
            $(".mobile-menu__link")[i].textContent=v
            $(".menu__link")[i].classList.remove("twFont");
            $(".menu__link")[i].textContent=v
        })
        // supporters 
        $("#supporters .section-title")[0].classList.remove("twBold");
        $("#supporters .section-title")[0].innerHTML = data.sections[0].title
        $("#supporters .section-subtitle")[0].classList.remove("twLight");
        $("#supporters .section-subtitle")[0].innerHTML = data.sections[0].subtitle
        // abouts 1
        $("#about .section-title")[0].classList.remove("twBold");
        $("#about .section-title")[0].innerHTML = data.sections[1].title
        $("#about .section-subtitle")[0].classList.remove("twLight");
        $("#about .section-subtitle")[0].innerHTML = data.sections[1].subtitle
            // about 1 accordion
            $("#about .accordion__title")[0].classList.remove("twBold");
            $("#about .accordion__title")[0].innerHTML = data.sections[1].content_a[0]
            $("#about .accordion__content")[0].classList.remove("twLight");
            $("#about .accordion__content")[0].innerHTML = data.sections[1].content_a[1]

            $("#about .accordion__title")[1].classList.remove("twBold");
            $("#about .accordion__title")[1].innerHTML = data.sections[1].content_b[0]
            $("#about .accordion__content")[1].classList.remove("twLight");
            $("#about .accordion__content")[1].innerHTML = data.sections[1].content_b[1]

            $("#about .accordion__title")[2].classList.remove("twBold");
            $("#about .accordion__title")[2].innerHTML = data.sections[1].content_c[0]
            $("#about .accordion__content")[2].classList.remove("twLight");
            $("#about .accordion__content")[2].innerHTML = data.sections[1].content_c[1]
        // abouts 2
        $("#about .section-title")[1].classList.remove("twBold");
        $("#about .section-title")[1].innerHTML = data.sections[1].title_2
        $("#about .section-subtitle")[1].classList.remove("twLight");
        $("#about .section-subtitle")[1].innerHTML = data.sections[1].subtitle_2

        let ali = $("#about .list__item")
        for(let i=0;i<ali.length;i+=1){
            ali[i].classList.remove("twLight");
            ali[i].innerHTML = data.sections[1].content_2[i]
        }
        // approaches
        $("#approaches .section-title")[0].classList.remove("twBold");
        $("#approaches .section-title")[0].innerHTML = data.sections[2].title
        $("#approaches .section-subtitle")[0].classList.remove("twLight");
        $("#approaches .section-subtitle")[0].innerHTML = data.sections[2].subtitle
        // studio
        $("#studio .section-title")[0].classList.remove("twBold");
        $("#studio .section-title")[0].innerHTML = data.sections[3].title
        $("#studio .section-subtitle")[0].classList.remove("twLight");
        $("#studio .section-subtitle")[0].innerHTML = data.sections[3].subtitle
        // gallery
        $("#gallery .section-title")[0].classList.remove("twBold");
        $("#gallery .section-title")[0].innerHTML = data.sections[4].title
        $("#gallery .section-subtitle")[0].classList.remove("twLight");
        $("#gallery .section-subtitle")[0].innerHTML = data.sections[4].subtitle
        // subscribe
        $("#subscribe .section-title")[0].classList.remove("twBold");
        $("#subscribe .section-title")[0].innerHTML = data.sections[5].title
        $("#subscribe .section-subtitle")[0].classList.remove("twLight");
        $("#subscribe .section-subtitle")[0].innerHTML = data.sections[5].subtitle
    }else{
        data.menu_tw.forEach((v,i)=>{
            $(".mobile-menu__link")[i].classList.add("twFont");
            $(".mobile-menu__link")[i].textContent=v
            $(".menu__link")[i].classList.add("twFont");
            $(".menu__link")[i].textContent=v
        })
        // supporters 
        $("#supporters .section-title")[0].classList.add("twBold");
        $("#supporters .section-title")[0].innerHTML = data.sections[0].title_tw
        $("#supporters .section-subtitle")[0].classList.add("twLight");
        $("#supporters .section-subtitle")[0].innerHTML = data.sections[0].subtitle_tw
        // abouts 1
        $("#about .section-title")[0].classList.add("twBold");
        $("#about .section-title")[0].innerHTML = data.sections[1].title_tw
        $("#about .section-subtitle")[0].classList.add("twLight");
        $("#about .section-subtitle")[0].innerHTML = data.sections[1].subtitle_tw
            // about 1 accordion
            $("#about .accordion__title")[0].classList.add("twBold");
            $("#about .accordion__title")[0].innerHTML = data.sections[1].content_a_tw[0]
            $("#about .accordion__content")[0].classList.add("twLight");
            $("#about .accordion__content")[0].innerHTML = data.sections[1].content_a_tw[1]

            $("#about .accordion__title")[1].classList.add("twBold");
            $("#about .accordion__title")[1].innerHTML = data.sections[1].content_b_tw[0]
            $("#about .accordion__content")[1].classList.add("twLight");
            $("#about .accordion__content")[1].innerHTML = data.sections[1].content_b_tw[1]

            $("#about .accordion__title")[2].classList.add("twBold");
            $("#about .accordion__title")[2].innerHTML = data.sections[1].content_c_tw[0]
            $("#about .accordion__content")[2].classList.add("twLight");
            $("#about .accordion__content")[2].innerHTML = data.sections[1].content_c_tw[1]
        // abouts 2
        $("#about .section-title")[1].classList.add("twBold");
        $("#about .section-title")[1].innerHTML = data.sections[1].title_2_tw
        $("#about .section-subtitle")[1].classList.add("twLight");
        $("#about .section-subtitle")[1].innerHTML = data.sections[1].subtitle_2_tw

        let ali = $("#about .list__item")
        for(let i=0;i<ali.length;i+=1){
            ali[i].classList.add("twLight");
            ali[i].innerHTML = data.sections[1].content_2_tw[i]
        }
        // approaches
        $("#approaches .section-title")[0].classList.add("twBold");
        $("#approaches .section-title")[0].innerHTML = data.sections[2].title_tw
        $("#approaches .section-subtitle")[0].classList.add("twLight");
        $("#approaches .section-subtitle")[0].innerHTML = data.sections[2].subtitle_tw
        // studio
        $("#studio .section-title")[0].classList.add("twBold");
        $("#studio .section-title")[0].innerHTML = data.sections[3].title_tw
        $("#studio .section-subtitle")[0].classList.add("twLight");
        $("#studio .section-subtitle")[0].innerHTML = data.sections[3].subtitle_tw
        // gallery
        $("#gallery .section-title")[0].classList.add("twBold");
        $("#gallery .section-title")[0].innerHTML = data.sections[4].title_tw
        $("#gallery .section-subtitle")[0].classList.add("twLight");
        $("#gallery .section-subtitle")[0].innerHTML = data.sections[4].subtitle_tw
        // subscribe
        $("#subscribe .section-title")[0].classList.add("twBold");
        $("#subscribe .section-title")[0].innerHTML = data.sections[5].title_tw
        $("#subscribe .section-subtitle")[0].classList.add("twLight");
        $("#subscribe .section-subtitle")[0].innerHTML = data.sections[5].subtitle_tw      
        
    }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 置入資料到 approach 中
function input_approaches(data){
    data.forEach((d)=>{
        d.tags.forEach((t)=>{
            let ci = $("#"+t+" .tabs__izometric")
            let ni= document.createElement("div")
            ni.classList.add("col-md-8","col-sm-12", "col-xs-24","member")
            ni.innerHTML = `<div class="member__photo-wrapper">
                                <img src="`+d.img_path+`" class="member__photo" alt="Advisor Photo">
                                <div class="member__cover">
                                    <div class="member__quote `+d.name.split(',')[0]+`">
                                        </br>
                                        <h4>`+d.name+`</h4></br>
                                        <h3>`+d.title+`</h3></br>
                                        `+d.descript+`
                                        </br></br>
                                        <p> [advisor] `+d.advisor+` </p>
                                    </div>
                                </div>
                            </div>` 
            ci.append(ni)

            let cr = $("#"+t+" .tabs__regular > .row")
            ne= document.createElement("div")
            ne.classList.add("col-md-8","col-sm-12", "col-xs-24","member")
            ne.innerHTML = `<div class="member__photo-wrapper">
                                <img src="`+d.img_path+`" class="member__photo" alt="Advisor Photo">
                                <div class="member__cover">
                                    <div class="member__quote `+d.name.split(',')[0]+`">
                                        </br>
                                        <h4>`+d.name+`</h4></br>
                                        <h3>`+d.title+`</h3></br>
                                        `+d.descript+`
                                        </br></br>
                                        <p> [advisor] `+d.advisor+` </p>
                                    </div>
                                </div>
                            </div>`                        
            cr.append(ne)
        })
    })  
}
function update_approaches(data,lng){
    if (lng==="en"){
        data.forEach((d)=>{
            let doms = $("."+d.name.split(',')[0])
            for(let i=0;i<doms.length;i+=1){
                doms[i].classList.remove("twLight");
                doms[i].innerHTML =`</br>
                                    <h4>`+d.name+`</h4></br>
                                    <h3>`+d.title+`</h3></br>
                                    `+d.descript+`
                                    </br></br>
                                    <p> [advisor] `+d.advisor+` </p>`
            }
        })
    }else{
        // 針對 owlcs active 的 元件比對 name
        data.forEach((d)=>{
            let doms = $("."+d.name.split(',')[0])
            for(let i=0;i<doms.length;i+=1){
                doms[i].classList.add("twLight");
                doms[i].innerHTML =`</br>
                                    <h4 class="twFont">`+d.name_tw+`</h4></br>
                                    <h3 class="twBold">`+d.title_tw+`</h3></br>
                                    `+d.descript+`
                                    </br></br>
                                    <p class="twFont"> [指導教授] `+d.advisor_tw+` </p>`
            }
        })
    }
    
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 置入資料到 carousel 中
function input_events(data){
    let cc = $("#events")
    cc.owlCarousel({
        items: data.length,
        loop: true,
        margin: 10
      });

    data.forEach((d)=>{
        let newItem=
        `<div class="carousel__slide">
            <img src="`+d.img_path+`" class="carousel__image" alt="Carousel Slide Image">
		    <h3 class="carousel__title"><span class='section-title__highlight'>`+d.name+`</span></h3>
        </div>
        ` 
        cc.trigger('add.owl.carousel', [$(newItem)]);
    })
    cc.trigger('refresh.owl.carousel');
}
function update_events(data,lng){
    let owlcs = $("#events .active .carousel__title")

    if (lng==="en"){
        // 針對 owlcs active 的 元件name_tw
        for (let i =0; i<owlcs.length;i+=1 ){
            data.forEach((v)=>{
                if (owlcs[i].textContent == v.name_tw){
                    owlcs[i].innerHTML = `<span class='section-title__highlight'>`+v.name+`</span>`
                    return false
                }
            })
        }
    }else{
        // 針對 owlcs active 的 元件比對 name
        for (let i =0; i<owlcs.length;i+=1 ){
            data.forEach((v)=>{
                if (owlcs[i].textContent == v.name){
                    owlcs[i].innerHTML = `<span class='section-title__highlight twFont'>`+v.name_tw+`</span>`
                    return false
                }
            })
        }
    }
    $("#events").trigger('refresh.owl.carousel');
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 置入資料到 老師群 中
function input_advisors(data){
    let cc = document.getElementById("studio_advisors")
    data.forEach((d)=>{
        let ne = document.createElement("div")
        // image size = 540X540
        ne.classList.add("col-md-12","col-sm-12","col-lg-6")
        ne.innerHTML=
        `
        <div class="member  ">
            <div class="member__photo-wrapper">
                <img src="`+d.img_path+`" class="member__photo" alt="Advisor Photo">
                <div class="member__cover">
                    <blockquote class="member__quote">`+d.descript+`</blockquote>
                </div>
            </div>
            <h3 class="member__name">`+d.name+`</h3>
            <p class="member__position">`+d.studio_title+`</p>
        </div>
        `
        cc.appendChild(ne)
    })   
}
function update_advisors(data,lng){
    if (lng==="en"){
        data.forEach((v,i)=>{
            $("#studio_advisors .member__name")[i].classList.remove("twBold");
            $("#studio_advisors .member__name")[i].textContent=v.name
            $("#studio_advisors .member__position")[i].classList.remove("twFont");
            $("#studio_advisors .member__position")[i].textContent=v.studio_title
            $("#studio_advisors .member__quote")[i].classList.remove("twLight");
            $("#studio_advisors .member__quote")[i].textContent=v.descript
        })
    }else{
        data.forEach((v,i)=>{
            $("#studio_advisors .member__name")[i].classList.add("twBold");
            $("#studio_advisors .member__name")[i].textContent=v.name_tw
            $("#studio_advisors .member__position")[i].classList.add("twFont");
            $("#studio_advisors .member__position")[i].textContent=v.studio_title_tw
            $("#studio_advisors .member__quote")[i].classList.add("twLight");
            $("#studio_advisors .member__quote")[i].textContent=v.descript_tw
        })
    }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 置入資料到 協助單位 中
function input_supporters(data){
    let cc = document.getElementById("supporters")
    data.forEach((d)=>{
        let ne = document.createElement("div")
        // image size = 80x80
        ne.classList.add("col-lg-6","col-md-8","col-lg-offset-2")
        ne.innerHTML=
        `
            <a class="download-button  " href="#">
                <img src="`+d.img_path+`" class="download-button__icon" alt="Platform Icon">
                <span class="download-button__platform">`+d.type+`</span>
                <span class="download-button__store">`+d.name+`</span>
            </a>
        `
        cc.appendChild(ne)
    })   
}
function update_supporters(data,lng){
    if (lng==="en"){
        data.forEach((v,i)=>{
            $("#supporters .download-button__platform")[i].classList.remove("twLight");
            $("#supporters .download-button__platform")[i].textContent=v.type
            $("#supporters .download-button__store")[i].classList.remove("twBold");
            $("#supporters .download-button__store")[i].textContent=v.name
        })
    }else{
        data.forEach((v,i)=>{
            $("#supporters .download-button__platform")[i].classList.add("twLight");
            $("#supporters .download-button__platform")[i].textContent=v.type_tw
            $("#supporters .download-button__store")[i].classList.add("twBold");
            $("#supporters .download-button__store")[i].textContent=v.name_tw
        })
    }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 置入資料到 協助單位 中
function lngclick(elt){
    // console.log(elt.checked)
    // checked == true > 英文 : false > 中文
    if (elt.checked) {lng="en"}
    else {lng="tw"}

    update_info(res.info,lng)
    update_events(res.events,lng)
    update_advisors(res.advisors,lng)
    update_supporters(res.supporters,lng)
    update_approaches(res.approaches,lng)
}
// `
// <img src="http://placehold.it/432x768" class="carousel__image" alt="Carousel Slide Image">
// 							<h3 class="carousel__title"><span class='section-title__highlight'>Event 1</span></h3>
// `



// <div class="col-lg-6 col-md-8 col-lg-offset-2">
//     <!-- Download Button -->
//     <a class="download-button  " href="#">
//         <img src="http://placehold.it/80x80" class="download-button__icon" alt="Platform Icon">
//         <span class="download-button__platform">IOS app on</span>
//         <span class="download-button__store">App Store</span>
//     </a>
//     <!-- End of Download Button -->
// </div>

		
// <div class="col-md-12 col-sm-12 col-lg-6" >
// <!-- Member -->
// <div class="member  ">
//     <div class="member__photo-wrapper">
//         <img src="http://placehold.it/540x540" class="member__photo" alt="Member Photo">
//         <div class="member__cover">
//             <blockquote class="member__quote">Eum rerum, animi facilis perspiciatis iste molestiae, minima exercitationem quod amet! Natus dolor animi quasi, cupiditate harum.</blockquote>
//         </div>
//     </div>
//     <h3 class="member__name">Matt Walden</h3>
//     <p class="member__position">web designer</p>
//     <ul class="member__socials">
//         <li class="member__social">
//             <a href="#" class="member__link">
//                 <i class="fontello-facebook"></i>
//             </a>
//         </li>
//         <li class="member__social">
//             <a href="#" class="member__link">
//                 <i class="fontello-twitter-bird"></i>
//             </a>
//         </li>
//         <li class="member__social">
//             <a href="#" class="member__link">
//                 <i class="fontello-linkedin"></i>
//             </a>
//         </li>
//     </ul>
// </div>
// <!-- End of Member -->
// </div>