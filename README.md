# Sidecountry Shop
> Sidecountry is an online apparel shopping website styled to be mobile-first. This repo is the Reviews Service element of the site.

![Intro Image](public/media/current-progress.png)

The app provides stats and commentary from previous customers as well as the ability to contribute additional reviews.

## My Contribution to this Project
I was given this legacy code base and tasked with:
  - Generate a simulated dataset of 10 million realistic records
  - Build an API to support CRUD operations that conform to REST standards
  - Optimize (locally in development and while deployed in production) the performance of:
    * Query Response Time (Latency)
    * Throughput
    * Error Rate
  - Scale the app

## Related Projects
- https://github.com/sidecountry-shop/productDetails
- https://github.com/sidecountry-shop/QnA

# System Design / Web Scale Metrics

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
