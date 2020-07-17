# Reviews-Service

## System Design / Web Scale Metrics

  ## get a list of reviews by product

    GET /reviews/:product_id/list
      Baseline Response Time --> 147.4ms
      Optimized Time ----------> 
  ## get a list of meta data by product

    GET /reviews/:product_id/meta

  ## get a list of product info by product

    GET /products/:product_id

  ## add a review

    POST /reviews/:product_id

  ## reported

    PUT /reviews/report/:review_id

  ## helpfulness

    PUT /reviews/helpful/:review_id
