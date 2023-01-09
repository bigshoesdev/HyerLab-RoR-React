# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

campaigns = [
  {
    name: 'Ledger Affiliate Program',
    headline: 'Store your crypto safely',
    body:
      'Secure your crypto assets such as Bitcoin, Ethereum, XRP, Monero and more. Give yourself peace of mind by knowing that your cryptocurrencies are safe.',
    display_url: 'ledger.com',
    cta_url: 'https://shop.ledger.com/?r=5fca79201d56&tracker=dripdripdrip',
    cta_text: 'Shop now',
    advertiser: 'Ledger',
    bid_type: 'CPM',
    default_bid_cents: 2000,
    active: true,
    asset: 'https://d1q98dzwj6s2rb.cloudfront.net/up/asset/a61703075a/b83188c4f0.mp4',
    icon: 'https://d1q98dzwj6s2rb.cloudfront.net/up/asset/cd7f4397e5/b83188c4f0.png',
  },
  {
    name: 'Bebop Waitlist Campaign',
    headline: 'Trade multiple tokens in one swap',
    body:
      'Bebop is a crypto platform that makes trading in DeFi both easy and efficient. Trade one-to-many and many-to-one, all in one transaction.',
    display_url: 'bebop.xyz',
    cta_url: 'https://bebop.xyz',
    cta_text: 'Join the waitlist',
    advertiser: 'Bebop',
    bid_type: 'CPM',
    default_bid_cents: 2000,
    active: true,
    asset: 'https://d1q98dzwj6s2rb.cloudfront.net/up/asset/834c600697/b83188c4f0.mp4',
    icon: 'https://d1q98dzwj6s2rb.cloudfront.net/up/asset/508d0fde12/b83188c4f0.png',
  },
]

campaigns.each { |properties| Campaign.create(properties) }
