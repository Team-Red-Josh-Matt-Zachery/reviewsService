# Reviews-Service
> Online apparel shopping website

## Related Projects
- https://github.com/sidecountry-shop/productDetails
- https://github.com/sidecountry-shop/QnA

## System Design / Web Scale Metrics

  ## get a list of reviews by product

    GET /reviews/:product_id/list
      Baseline Response Time --> 892.75ms
      Optimized Time ----------> 45.6ms

  ## get a list of product info by product

    GET /products/:product_id
      Baseline Response Time --> 788.14ms
      Optimized Time ----------> 40.85ms
  ## add a review

    POST /reviews/:product_id
      Baseline Response Time --> 58.16667ms
      Optimized Time ----------> 23.2ms
  ## helpfulness

    PUT /reviews/helpful/:review_id
      Baseline Response Time --> 34.71429ms
      Optimized Time ----------> 10.2ms

# Business Requirements Image
![](public/media/business-req.png)

# Current Progress Image
![](public/media/current-prog.png)
