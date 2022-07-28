function popularProducts() {
  //  alert("hello"); = new XMLHttpRequest();
      request.open(urlSet.popularProductsApi.method, urlSet.popularProductsApi.url, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader("authtoken", authtoken);
      request.send();
      request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
       debugger;
        if (data['popularproduct'].length != 0) {
          document.getElementById('popular_products_section').innerHTML = `<div class="popular_products mt-2">
                    <div class="popular_products_section">
                       <div>
                          <h2>Top Deals For Daily Needs</h2>
                       </div>
                    </div>
                 </div>`
          var popular_products_carousel = document.getElementById('popular_products');
          for (v = 0; v < data['popularproduct'].length; v++) {
  
            var product_offer_left_half = document.createElement("div");
            product_offer_left_half.setAttribute("class", "col-5 col-sm-6");
  
            var product_offer = document.createElement("h6");
            product_offer.setAttribute('class', 'mb-0')
  
            if (data['popularproduct'][v]["discount"] > 0) {
              product_offer.append(
                data['popularproduct'][v]["discount"] + "% OFF"
              );
            }
  
            var product_offer_right_half = document.createElement("div");
            product_offer_right_half.setAttribute("class", "col-7 col-sm-6 pa-0");
            product_offer_right_half.append(product_offer);
  
            var product_offer_div = document.createElement("div");
            product_offer_div.setAttribute("class", "row");
            product_offer_div.setAttribute('style', 'height: 25px');
            product_offer_div.append(product_offer_left_half);
            product_offer_div.append(product_offer_right_half);
  
            var product_image = document.createElement("img");
            product_image.setAttribute(
              "src",
              data['popularproduct'][v]["logo"]
            );
  
            var product_image_div = document.createElement("div");
            product_image_div.setAttribute("class", "img");
            product_image_div.append(product_image);
  
            var product_name = document.createElement("h3");
            product_name.append(data['popularproduct'][v]["name"]);
  
            var product_brand = document.createElement("h5");
            product_brand.append(data['popularproduct'][v]["product_type"]);
  
            var product_info = document.createElement("div");
            product_info.setAttribute("class", "info");
            product_info.append(product_name);
            // product_info.append(product_price);
            product_info.append(product_brand);
  
            var product_div_link = document.createElement("a");
            product_div_link.setAttribute(
              "href",
              "PutatoeProducts.html?id=" +
              data['popularproduct'][v]["service_id"] +
              "_" +
              data['popularproduct'][v]["sub_service_id"]
            );
            product_div_link.append(product_offer_div);
            product_div_link.append(product_image_div);
            product_div_link.append(product_info);
  
            var product_div = document.createElement("div");
            product_div.setAttribute("class", "owl-item-inner border-remove");
            product_div.append(product_div_link);
  
            popular_products_carousel.append(product_div);
          }
  
      
  
          $("#popular_products").owlCarousel({
            items: 7,
            dots: false,
            loop: false,
            center: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 4,
              },
              525: {
                items: 2.5,
              },
              768: {
                items: 3,
              },
              1024: {
                items: 3.5,
              },
              1100: {
                items: 4,
              },
              1200: {
                items: 7,
              },
            },
          });
          document.getElementById('serviceAvailable').style.display = "block";
        //   stopLoader();
        } else {
        //   getSmallBanners();
        //   popularSellers();
          document.getElementById('serviceAvailable').style.display = "block";
        //   stopLoader();
        }
      }
 
  }