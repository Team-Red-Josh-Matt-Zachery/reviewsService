# Reviews-Service
> Online apparel shopping website

## Related Projects
- https://github.com/sidecountry-shop/productDetails
- https://github.com/sidecountry-shop/QnA

## System Design / Web Scale Metrics

  ## get a list of reviews by product

    GET /reviews/:product_id/list
      Baseline Response Time --> 38.28(seconds)
      Optimized Time ----------> 45.6(ms)

  ## get a list of product info by product

    GET /products/:product_id
      Baseline Response Time --> 788.14(ms)
      Optimized Time ----------> 40.85(ms)
  ## add a review

    POST /reviews/:product_id
      Baseline Response Time --> 58.16667(ms)
      Optimized Time ----------> 23.2(ms)
  ## helpfulness

    PUT /reviews/helpful/:review_id
      Baseline Response Time --> 34.71429(ms)
      Optimized Time ----------> 10.2(ms)

# Business Requirements Image
![](public/media/project-img.png)

# Current Progress Image
![](public/media/current-progress.png)
