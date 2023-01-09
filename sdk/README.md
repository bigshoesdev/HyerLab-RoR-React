# HypeLab SDK

This repo contains the skeleton of the HypeLab Publisher SDK written in Typescript JS. Publishers are HypeLab customers who want to monetize their web traffic by showing HypeLab ads. This SDK should be able to fetch and render ads from the HypeLab API.

There are two methods in `Client.ts` for you to complete: `load` and `show`. The `load` method should use the `axios` gem to pull an ad from the HypeLab API. The `show` method should take in an DOM ID of a `div` element and render an ad. You are free to design the ad according to your preferences.

## Package the SDK

To package the sdk, run `npm run pack`. This will create a `hypelab-light-sdk-1.0.0.tgz` package that you can then link to from your `publisher-app` via `npm link ../sdk`.
