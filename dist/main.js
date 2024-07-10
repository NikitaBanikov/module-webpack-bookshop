(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{p:()=>l});const t=["../images/png/blackFriday.png","../images/png/cozyBooks.png","../images/png/top10.png"],n=document.querySelector(".slider-images"),a=document.querySelector(".slider-dots");let i=0;async function s(e,t){t?i+=6:i=0;try{const t=await fetch(`\n            https://www.googleapis.com/books/v1/volumes?q="subject:${e}"&key=AIzaSyCdqmPUn-aR5mTXRW-zlUmyyGlWdibKHGk&printType=books&startIndex=${i}&maxResults=6&langRestrict=en\n        `);if(!t.ok)throw new Error("Network response was not ok");return(await t.json()).items}catch(e){return console.error("Error fetching data:",e),null}}const c=JSON.parse(localStorage.getItem("cards")??"[]");function o(e){e.forEach((e=>{const t=e.volumeInfo,n=t.imageLinks?t.imageLinks.thumbnail:"../images/png/placeholder-21.png",a=t.authors?t.authors.join(", "):"Unknown Author",i=t.title?t.title:"Unknown Title",s=t.averageRating?t.averageRating:"",o=t.ratingsCount?t.ratingsCount:"0",r=t.description?t.description:"No description available",d=e.saleInfo&&e.saleInfo.retailPrice?e.saleInfo.retailPrice.amount:"";let u=e.saleInfo&&e.saleInfo.retailPrice?e.saleInfo.retailPrice.currencyCode:"";"EUR"===u&&(u="€");const g=`\n            <div class="card">\n                <img src="${n}" alt="Book cover" class="card__img">\n                <div class="card__info">\n                    <div class="card__info-wrapper">\n                        <span class="card__info-author">${a}</span>\n                        <p class="card__info-booktitle">${i}</p>\n                        ${"0"!==o?`\n                            <div class="card__info-ratingblock">\n                                <div class="rating" data-total-value="${s}">\n                                    <div class="rating__item" data-item-value="5">★</div>\n                                    <div class="rating__item" data-item-value="4">★</div>\n                                    <div class="rating__item" data-item-value="3">★</div>\n                                    <div class="rating__item" data-item-value="2">★</div>\n                                    <div class="rating__item" data-item-value="1">★</div>\n                                </div>\n                                <span class="card__info-rating">${o}M review</span>\n                            </div>\n                            `:""}\n                        <p class="card__info-book-description">${r}</p>\n                        <p class="card__info-price">${u+d}</p>\n                        <button type="button" class="card__info-button ${c.includes(e.id)?"in-cart":""}" data-index="${e.id}">${c.includes(e.id)?"IN THE CART":"BUY NOW"}</button>\n                    </div>\n                </div>\n            </div>\n        `;l.innerHTML+=g}))}const r=document.querySelectorAll(".category"),l=document.querySelector(".cards-wrapper");!function(){function e(e){n.querySelector(".active-slide").classList.remove("active-slide"),n.querySelector(".n"+e).classList.add("active-slide"),a.querySelector(".active").classList.remove("active"),a.querySelector(".n"+e).classList.add("active")}n.innerHTML="",t.forEach(((e,a)=>{let i=`<div class="slider-images__item n${a} ${0===a?"active-slide":""}" style="background-image:url(${t[a]});" data-index="${a}"></div>`;n.innerHTML+=i})),a.innerHTML="",t.forEach(((e,t)=>{let n=`<div class="slider-dots__item n${t} ${0===t?"active":""}" data-index="${t}"></div>`;a.innerHTML+=n})),a.querySelectorAll(".slider-dots__item").forEach((t=>{t.addEventListener("click",(function(){e(this.dataset.index)}))})),setInterval((()=>{let a=+n.querySelector(".active-slide").dataset.index;e(a===t.length-1?0:a+1)}),5e3)}(),function(){const e=document.querySelectorAll(".header-nav__item");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>{e!==this&&e.classList.remove("active-link")})),this.classList.add("active-link")}))}))}(),document.addEventListener("DOMContentLoaded",(async function(){const e=document.querySelector(".chosen").textContent,t=await s(e);t&&o(t)})),document.addEventListener("click",(async function(e){if(e.target.classList.contains("category__text")){const t=e.target.textContent,n=e.target.closest(".category").querySelector(".category__img");r.forEach((e=>{e.querySelector(".category__text").classList.remove("chosen");const t=e.querySelector(".category__img");t&&(t.removeAttribute("src"),t.style.paddingRight="")})),e.target.classList.add("chosen"),n.setAttribute("src","../images/svg/кружок.svg");const a=await s(t);a&&(console.log(a),l.innerHTML="",o(a))}})),function(){const e=document.querySelector(".beigik"),t=document.querySelector(".beigik-tekst");document.querySelector(".load-more-button").addEventListener("click",(async function(){const e=document.querySelector(".chosen").textContent,t=await s(e,!0);t&&o(t)})),document.addEventListener("click",(function(n){if(n.target.classList.contains("card__info-button")||n.target.classList.contains("in-cart")){const a=n.target.getAttribute("data-index");c.includes(a)?c.splice(c.indexOf(a),1):c.push(a),localStorage.setItem("cards",JSON.stringify(c));const i="BUY NOW"===n.target.innerHTML;n.target.classList.toggle("card__info-button",!i),n.target.classList.toggle("in-cart",i),n.target.innerHTML=i?"IN THE CART":"BUY NOW",t.textContent=c.length,0===c.length?(e.style.display="none",t.style.display="none"):(e.style.display="block",t.style.display="block")}}))}()})();