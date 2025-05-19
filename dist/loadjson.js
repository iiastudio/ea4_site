
// var jsondata
var res;
var lng = $('#lngcheck_mob').checked
const dateNow = new Date();
// var lng = $('#lngcheck_mob').checked
fetch("assets/data.json")
.then(response => response.json())
.then(data => {
    res = data.data
    input_advisors(res.advisors)
    input_supporters(res.supporters)
    input_events(res.events)
    input_approaches(res.approaches)
    input_gallery(res.gallery)
    // update_info(res.info,"en")
    // update_events(res.events,"en")
    // update_advisors(res.advisors,"en")
    // update_supporters(res.supporters,"en")

})
.catch(error => {
    console.error("error_alert:", error);
});

// modal
$(document).ready(()=>{
    update_carousel();

    $(".modal__close").click((e)=>{
        // close_btn ^ header ^ content ^ modal
        let domModal = e.target.parentElement.parentElement.parentElement;
        domModal.style.display="none";
        let necc = $("#modalCarousel")
        let necclen=necc.find('.item').length
        for (let i=0; i<necclen; i++) {
            necc.trigger('remove.owl.carousel', [i])
                .trigger('refresh.owl.carousel');
            }
    });


});

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
        // about 1
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
        // about 2
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
        // footer
        data.footerlog.forEach((v,i)=>{
            $("#footerlog .link-list__link")[i].classList.remove("twFont");
            $("#footerlog .link-list__link")[i].textContent=v
        })
        $("#footerlog .footer__message")[0].classList.remove("twBold");
        $("#footerlog .footer__message")[0].innerHTML = data.footerMessage[0]
        $("#footerlog .footer__message")[1].classList.remove("twBold");
        $("#footerlog .footer__message")[1].innerHTML = data.footerMessage[1]
        $("#footerlog .footer__message")[2].classList.remove("twBold");
        $("#footerlog .footer__message")[2].innerHTML = data.footerMessage[2]
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
        // footer
        data.footerlog_tw.forEach((v,i)=>{
            $("#footerlog .link-list__link")[i].classList.remove("twFont");
            $("#footerlog .link-list__link")[i].textContent=v
        })
        $("#footerlog .footer__message")[0].classList.remove("twBold");
        $("#footerlog .footer__message")[0].innerHTML = data.footerMessage_tw[0]
        $("#footerlog .footer__message")[1].classList.remove("twBold");
        $("#footerlog .footer__message")[1].innerHTML = data.footerMessage_tw[1]
        $("#footerlog .footer__message")[2].classList.remove("twBold");
        $("#footerlog .footer__message")[2].innerHTML = data.footerMessage_tw[2]
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
                                        <h6>`+d.descript+`</h6></br>
                                        </br></br>
                                        <h5> [advisor] `+d.advisor+` </h5>
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
                                        <h6>`+d.descript+`</h6></br>
                                        </br></br>
                                        <h5> [advisor] `+d.advisor+` </h5>
                                    </div>
                                </div>
                            </div>`                        
            cr.append(ne)
        })
    })  
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 置入資料到 gallery 中
function input_gallery(data){
    
    // let cc = document.getElementById("studio_advisors")
    // cc.setAttribute('data-micromodal-trigger', 'modal-1'); // add modal 

    // data.forEach((d)=>{

        
    //     let ne = document.createElement("div")
    //     // image size = 540X540
    //     ne.classList.add("col-md-12","col-sm-12","col-lg-6")
        
        
    //     let state='<img src="assets/img/common/note/inactive_60x60.png" class="column" style="float: left; height:1.2em;">'
        
    //     if (d.type == 3){
    //         state='<img src="assets/img/common/note/active_60x60.png" class="column" style="float: left; height:1.2em;">'
    //     }else{
    //         if (d.type==1 && (dateNow.getMonth()>=7 || dateNow.getMonth()<1)){
    //             state='<img src="assets/img/common/note/active_60x60.png" class="column" style="float: left; height:1.2em;">'
    //         }else if (d.type==2 && (dateNow.getMonth()<7 && dateNow.getMonth()>=1)){
    //             state='<img src="assets/img/common/note/active_60x60.png" class="column" style="float: left; height:1.2em;">'
    //         }
    //     }

    //     ne.innerHTML=
    //     `
    //     <div class="member  ">
    //         <div class="member__photo-wrapper" >
    //             <img src="`+d.img_path+`" class="member__photo" alt="Advisor Photo" >
    //             <div class="member__cover">
    //                 <blockquote class="member__quote" >`+d.studio_title+`</blockquote>
    //             </div>
    //         </div>
    //         <div class="row" style="margin-top:-0.5em; margin-bottom:1em;text-align: center;">
    //             `+state+`
    //             <h2 class="member__name column" style="float: left;">`+d.name+`</h3>
    //         </div>
    //     </div>
    //     `
    //     ne.setAttribute('data-modal-trigger', 'modalAdvisor');
    //     ne.setAttribute('data-custom-data', JSON.stringify(d));

    //     ne.addEventListener('click',(e)=>{
    //             // window.location.reload();
    //         // $(window).on('load',()=>{
    //             let tmodal = ne.getAttribute('data-modal-trigger');
    //             $('#'+tmodal).css("display","block");
    //             let tdata = JSON.parse(ne.getAttribute('data-custom-data'));
    
    //             $("#modalCarousel .owl-stage").css("display:flex !important; height: 300px !important")
                
    //             let necc = $("#modalCarousel");

    //             // necc.trigger("destroy.owl.carousel");

                
    //             // console.log('a')
    //             // $(window).on('load',()=>{
                

                
    //             tdata.img_paths.forEach((d)=>{
    //                 let newItem=
    //                 `<div class="item">
    //                     <img src="`+d+`" class="member__photo" alt="Carousel Slide Image" style="height: 300px !important">
    //                 </div>
    //                 ` 
    //                 necc.trigger('add.owl.carousel', [$(newItem)]);
    //             })
    //             // console.log(necc.find(".owl-item"))
                
    //             necc.owlCarousel({
    //                 autoWidth: true,
    //                 margin: 10, 
    //                 nav:false,
    //             });

    //             necc.trigger('refresh.owl.carousel');     
    
    //             // en
    //             if (lng==="en"){
    //                 console.log('acen')
    //                 $('#'+tmodal+' .modal__title')[0].innerHTML=state+tdata.name
    //                 $('#'+tmodal+' .modal__studio_title')[0].textContent = tdata.studio_title;
    //                 $('#'+tmodal+' .modal__content .desc').html('<p>'+tdata.descript.replace(/\r\n?/g, '<br />')+'</p>');
    //                 // console.log($('#'+tmodal+' .modal__content .desc').innerHTML)
    //                 // $('#'+tmodal+' .modal__content .desc').innerHTML = tdata.descript;
    //             }else{
    //                 console.log('ac')
    //                 $('#'+tmodal+' .modal__title')[0].innerHTML=state+tdata.name_tw
    //                 $('#'+tmodal+' .modal__studio_title')[0].textContent = tdata.studio_title_tw;
    //                 $('#'+tmodal+' .modal__content .desc').html('<p>'+tdata.descript_tw.replace(/\r\n?/g, '<br />')+'</p>');
    
    //                 // console.log($('#'+tmodal+' .modal__content p'))
    //                 // $('#'+tmodal+' .modal__content .desc').innerHTML = tdata.descript_tw;
    //             }
                
                


    //         // })
    //     })
        
    //     // cc.appendChild(ne)
    // })  


    let cc = $("#gallery_carousel")
    cc.owlCarousel({
        items: data.length,
        loop: true,
        margin: 10
      });

    data.forEach((d)=>{
        // let newItem=
        // `<div class="carousel__slide">
        //     <img src="`+d.img_path+d.imgs_data[0].filename+`" class="carousel__image" alt="Carousel Slide Image" >
		//     <h3 class="carousel__title"><span class='section-title__highlight'>`+d.name+`</span></h3>
        // </div>
        // ` 

        let ne = document.createElement("div")

        ne.innerHTML=
        `
        <div class="carousel__slide">
             <img src="`+d.img_path+`00.png" class="carousel__image" alt="Carousel Slide Image" >
		     <h3 class="carousel__title"><span class='section-title__highlight'>`+d.name+`</span></h3>
        </div>
        `
        ne.setAttribute('data-modal-trigger', 'modalGallery');
        ne.setAttribute('data-custom-data', JSON.stringify(d));

        ne.addEventListener('click',(e)=>{
                // window.location.reload();
            // $(window).on('load',()=>{
                let tmodal = ne.getAttribute('data-modal-trigger');
                $('#'+tmodal).css("display","block");
                let tdata = JSON.parse(ne.getAttribute('data-custom-data'));
    
                $("#modalCarousel .owl-stage").css("display:flex !important; height: 300px !important")
                
                let necc = $("#modalCarousel_gallery");

                // necc.trigger("destroy.owl.carousel");

                
                // console.log('a')
                // $(window).on('load',()=>{
                

                
                for (let k =0;k<tdata.imgs_num;k+=1 ){
                    let ff= tdata.img_path
                    if (k<10){
                        ff+='0'+k+'.png'
                    }else{
                        ff+=k+'.png'
                    }
                    let newItem=
                    `<div class="item">
                        <img src="`+ ff + `" class="member__photo" alt="Carousel Slide Image" style="height: 300px !important">
                    </div>
                    ` 
                    necc.trigger('add.owl.carousel', [$(newItem)]);
                }
                // console.log(necc.find(".owl-item"))
                
                necc.owlCarousel({
                    autoWidth: true,
                    margin: 10, 
                    nav:false,
                });

                necc.trigger('refresh.owl.carousel');     
    
                // en
                if (lng==="en"){
                    // console.log('acen')
                    $('#'+tmodal+' .modal__title')[0].innerHTML=tdata.gallery_title
                    $('#'+tmodal+' .modal__studio_title')[0].textContent = tdata.gallery_sub;
                    // $('#'+tmodal+' .modal__content .desc').html('<p>'+tdata.descript.replace(/\r\n?/g, '<br />')+'</p>');
                    // console.log($('#'+tmodal+' .modal__content .desc').innerHTML)
                    // $('#'+tmodal+' .modal__content .desc').innerHTML = tdata.descript;
                }else{
                    // console.log('ac')
                    $('#'+tmodal+' .modal__title')[0].innerHTML=tdata.gallery_title_tw
                    $('#'+tmodal+' .modal__studio_title')[0].textContent = tdata.gallery_sub_tw;
                    // $('#'+tmodal+' .modal__content .desc').html('<p>'+tdata.descript_tw.replace(/\r\n?/g, '<br />')+'</p>');
    
                    // console.log($('#'+tmodal+' .modal__content p'))
                    // $('#'+tmodal+' .modal__content .desc').innerHTML = tdata.descript_tw;
                }
                
                


            // })
        })





        cc.trigger('add.owl.carousel', [ne]);
    })
    cc.trigger('refresh.owl.carousel');









    // let cc = $("#gallery_carousel")
    // cc.owlCarousel({
    //     items: data.length,
    //     loop: true,
    //     margin: 10
    //   });

    // data.forEach((d)=>{
    //     let newItem=
    //     `<div class="carousel__slide">
    //         <img src="`+d.img_path+d.imgs_data[0].filename+`" class="carousel__image" alt="Carousel Slide Image" >
	// 	    <h3 class="carousel__title"><span class='section-title__highlight'>`+d.name+`</span></h3>
    //     </div>
    //     ` 
    //     cc.trigger('add.owl.carousel', [$(newItem)]);
    // })
    // cc.trigger('refresh.owl.carousel');
}

function update_gallery(data,lng){
    let owlcs = $("#gallery_carousel .active .carousel__title")

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
    $("#gallery_carousel").trigger('refresh.owl.carousel');
}

function update_approaches(data,lng){
    if (lng==="en"){
        data.forEach((v,i)=>{

            $("#approaches .member__quote h4")[i].classList.remove("twLight");
            $("#approaches .member__quote h4")[i].textContent=v.name
            $("#approaches .member__quote h3")[i].classList.remove("twLight");
            $("#approaches .member__quote h3")[i].textContent=v.title
            $("#approaches .member__quote h6")[i].classList.remove("twLight");
            $("#approaches .member__quote h6")[i].textContent=v.descript
            $("#approaches .member__quote h5")[i].classList.remove("twLight");
            $("#approaches .member__quote h5")[i].textContent=` [ADVISOR] `+v.advisor
        })
    }else{
        data.forEach((v,i)=>{
            $("#approaches .member__quote h4")[i].classList.add("twLight");
            $("#approaches .member__quote h4")[i].textContent=v.name_tw
            $("#approaches .member__quote h3")[i].classList.add("twLight");
            $("#approaches .member__quote h3")[i].textContent=v.title_tw
            $("#approaches .member__quote h6")[i].classList.add("twLight");
            $("#approaches .member__quote h6")[i].textContent=v.descript_tw
            $("#approaches .member__quote h5")[i].classList.add("twLight");
            $("#approaches .member__quote h5")[i].textContent=` [指導教授] `+v.advisor_tw
        })
    }
    
    // if (lng==="en"){
    //     data.forEach((d)=>{
    //         let doms = $("."+d.name.split(',')[0])
    //         for(let i=0;i<doms.length;i+=1){
    //             doms[i].classList.remove("twLight");
    //             doms[i].innerHTML =`</br>
    //                                 <h4>`+d.name+`</h4></br>
    //                                 <h3>`+d.title+`</h3></br>
    //                                 `+d.descript+`
    //                                 </br></br>
    //                                 <p> [advisor] `+d.advisor+` </p>`
    //         }
    //     })
    // }else{
        
    //     // 針對 owlcs active 的 元件比對 name
    //     data.forEach((d)=>{
    //         let doms = $("."+d.name.split(',')[0])
    //         for(let i=0;i<doms.length;i+=1){
    //             doms[i].classList.add("twLight");
    //             doms[i].innerHTML =`</br>
    //                                 <h4 class="twFont">`+d.name_tw+`</h4></br>
    //                                 <h3 class="twBold">`+d.title_tw+`</h3></br>
    //                                 `+d.descript_tw+`
    //                                 </br></br>
    //                                 <p class="twFont"> [指導教授] `+d.advisor_tw+` </p>`
    //         }
    //     })
    // }
    
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
            <a href="#gallery" class="js-scroll-to">
                <img src="`+d.img_path+`" class="carousel__image" alt="Carousel Slide Image">
                <h3 class="carousel__title"><span class='section-title__highlight'>`+d.name+`</span></h3>
            </a>
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
    // cc.setAttribute('data-micromodal-trigger', 'modal-1'); // add modal 

    data.forEach((d)=>{
        let ne = document.createElement("div")
        // image size = 540X540
        ne.classList.add("col-md-12","col-sm-12","col-lg-6")
        
        
        let state='<img src="assets/img/common/note/inactive_60x60.png" class="column" style="float: left; height:1.2em;">'
        
        if (d.type == 3){
            state='<img src="assets/img/common/note/active_60x60.png" class="column" style="float: left; height:1.2em;">'
        }else{
            if (d.type==1 && (dateNow.getMonth()>=7 || dateNow.getMonth()<1)){
                state='<img src="assets/img/common/note/active_60x60.png" class="column" style="float: left; height:1.2em;">'
            }else if (d.type==2 && (dateNow.getMonth()<7 && dateNow.getMonth()>=1)){
                state='<img src="assets/img/common/note/active_60x60.png" class="column" style="float: left; height:1.2em;">'
            }
        }

        ne.innerHTML=
        `
        <div class="member  ">
            <div class="member__photo-wrapper" >
                <img src="`+d.img_path+`" class="member__photo" alt="Advisor Photo" >
                <div class="member__cover">
                    <blockquote class="member__quote" >`+d.studio_title+`</blockquote>
                </div>
            </div>
            <div class="row" style="margin-top:-0.5em; margin-bottom:1em;text-align: center;">
                `+state+`
                <h2 class="member__name column" style="float: left;">`+d.name+`</h3>
            </div>
        </div>
        `
        ne.setAttribute('data-modal-trigger', 'modalAdvisor');
        ne.setAttribute('data-custom-data', JSON.stringify(d));

        ne.addEventListener('click',(e)=>{
                // window.location.reload();
            // $(window).on('load',()=>{
                let tmodal = ne.getAttribute('data-modal-trigger');
                $('#'+tmodal).css("display","block");
                let tdata = JSON.parse(ne.getAttribute('data-custom-data'));
    
                $("#modalCarousel .owl-stage").css("display:flex !important; height: 300px !important")
                
                let necc = $("#modalCarousel");

                // necc.trigger("destroy.owl.carousel");

                
                // console.log('a')
                // $(window).on('load',()=>{
                

                
                tdata.img_paths.forEach((d)=>{
                    let newItem=
                    `<div class="item">
                        <img src="`+d+`" class="member__photo" alt="Carousel Slide Image" style="height: 300px !important">
                    </div>
                    ` 
                    necc.trigger('add.owl.carousel', [$(newItem)]);
                })
                // console.log(necc.find(".owl-item"))
                
                necc.owlCarousel({
                    autoWidth: true,
                    margin: 10, 
                    nav:false,
                });

                necc.trigger('refresh.owl.carousel');     
    
                // en
                if (lng==="en"){
                    console.log('acen')
                    $('#'+tmodal+' .modal__title')[0].innerHTML=state+tdata.name
                    $('#'+tmodal+' .modal__studio_title')[0].textContent = tdata.studio_title;
                    $('#'+tmodal+' .modal__content .desc').html('<p>'+tdata.descript.replace(/\r\n?/g, '<br />')+'</p>');
                    // console.log($('#'+tmodal+' .modal__content .desc').innerHTML)
                    // $('#'+tmodal+' .modal__content .desc').innerHTML = tdata.descript;
                }else{
                    console.log('ac')
                    $('#'+tmodal+' .modal__title')[0].innerHTML=state+tdata.name_tw
                    $('#'+tmodal+' .modal__studio_title')[0].textContent = tdata.studio_title_tw;
                    $('#'+tmodal+' .modal__content .desc').html('<p>'+tdata.descript_tw.replace(/\r\n?/g, '<br />')+'</p>');
    
                    // console.log($('#'+tmodal+' .modal__content p'))
                    // $('#'+tmodal+' .modal__content .desc').innerHTML = tdata.descript_tw;
                }
                
                


            // })
        })
        
        cc.appendChild(ne)
    })   
}
function update_advisors(data,lng){
    if (lng==="en"){
        data.forEach((v,i)=>{
            // $("#studio_advisors .member__quote")[i].setAttribute('data-micromodal-trigger', 'modal-1');
            $("#studio_advisors .member__name")[i].classList.remove("twBold");
            $("#studio_advisors .member__name")[i].textContent=v.name
            // $("#studio_advisors .member__position")[i].classList.remove("twFont");
            // $("#studio_advisors .member__position")[i].textContent=v.studio_title
            $("#studio_advisors .member__quote")[i].classList.remove("twLight");
            $("#studio_advisors .member__quote")[i].textContent=v.studio_title
        })
    }else{
        data.forEach((v,i)=>{
            // $("#studio_advisors .member__quote")[i].setAttribute('data-micromodal-trigger', 'modal-1');
            $("#studio_advisors .member__name")[i].classList.add("twBold");
            $("#studio_advisors .member__name")[i].textContent=v.name_tw
            // $("#studio_advisors .member__position")[i].classList.add("twFont");
            // $("#studio_advisors .member__position")[i].textContent=v.studio_title_tw
            $("#studio_advisors .member__quote")[i].classList.add("twLight");
            $("#studio_advisors .member__quote")[i].textContent=v.studio_title_tw
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
            <a class="download-button  " href="`+d.url+`" target="_blank">
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
    
    // console.log(lng)
    // checked == true > 英文 : false > 中文
    if (elt.checked) {
        lng="en"
        $('#lngcheck_mob').checked =true
        $('#lngcheck').checked =true
     }
    else {
        lng="tw"
        $('#lngcheck_mob').checked =false
        $('#lngcheck').checked =false
    }

    update_info(res.info,lng)
    update_events(res.events,lng)
    update_advisors(res.advisors,lng)
    update_supporters(res.supporters,lng)
    update_approaches(res.approaches,lng)
    update_gallery(res.gallery,lng)
}

function update_carousel() {
    const $modal = $('#modalAdvisor');
    const $carousel = $('#modalCarousel');
    const fixedImageHeight = 540; // 設定固定的圖片高度

    // 在 modal 顯示前先添加 loading 元素
    $modal.on('show.bs.modal', function () {
        // 添加 loading 元素到 modal 內
        if ($modal.find('.carousel-loading').length === 0) {
            const $loading = $('<div class="carousel-loading" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.8); display: flex; justify-content: center; align-items: center; z-index: 10;"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>');
            $carousel.css('position', 'relative').append($loading);
        }
        // 隱藏所有圖片，等待加載完成後再顯示
        $carousel.find('img').css('opacity', '0');
    });

    $modal.on('shown.bs.modal', function () {
        // 先設定最小高度，避免容器塌陷
        $carousel.css('min-height', fixedImageHeight + 'px');

        const $images = $carousel.find('img');
        let loadedImages = 0;
        const totalImages = $images.length;

        if (totalImages === 0) {
            initOwlCarousel();
            removeLoading();
            return;
        }

        $images.each(function() {
            const img = this;
            if (img.complete) {
                handleImageLoad();
            } else {
                $(img).on('load', handleImageLoad).on('error', handleImageLoad);
            }
        });

        function handleImageLoad() {
            loadedImages++;
            if (loadedImages === totalImages) {
                initOwlCarousel();
                removeLoading();
            }
        }

        // 設置超時，以防某些圖片加載時間過長
        setTimeout(function() {
            if (!$carousel.hasClass('owl-loaded')) {
                console.log('Some images may not have loaded, initializing carousel anyway');
                initOwlCarousel();
                removeLoading();
            }
        }, 3000);

        function initOwlCarousel() {
            if (!$carousel.hasClass('owl-loaded')) {
                $carousel.owlCarousel({
                    autoWidth: true,
                    autoHeight: false, // 由於設定了固定高度，這裡保持 false
                    items: 5,
                    margin: 20,
                    responsiveClass: true,
                    loop: false,
                    nav: false,
                    responsive: {
                        0: {
                            items: 1
                        }
                    },
                    onInitialized: function() {
                        // 初始化後確保最小高度 (雖然 HTML 已設定，但這裡再次確保)
                        $carousel.css('min-height', fixedImageHeight + 'px');
                        // 當 Carousel 初始化完成後，顯示所有圖片
                        $carousel.find('img').animate({opacity: 1}, 300);
                    }
                });
            } else {
                $carousel.trigger('refresh.owl.carousel');
                // 刷新後顯示所有圖片
                $carousel.find('img').animate({opacity: 1}, 300);
            }
        }

        function removeLoading() {
            $carousel.find('.carousel-loading').fadeOut(300, function() {
                $(this).remove();
            });
        }
    });

    // 當 modal 關閉時，重置 carousel
    $modal.on('hidden.bs.modal', function () {
        if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel');
        }
        // 確保在關閉時移除 loading 元素
        $carousel.find('.carousel-loading').remove();
    });
}