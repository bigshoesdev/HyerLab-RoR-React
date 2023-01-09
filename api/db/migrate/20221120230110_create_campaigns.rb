class CreateCampaigns < ActiveRecord::Migration[7.0]
  def change
    create_table :campaigns do |t|
      t.string 'name'
      t.string 'headline'
      t.string 'body'
      t.string 'display_url'
      t.string 'cta_url'
      t.string 'cta_text'
      t.string 'advertiser'
      t.string 'bid_type'
      t.integer 'default_bid_cents', default: 0, null: false
      t.string 'default_bid_currency', default: 'USD', null: false
      t.string 'asset'
      t.string 'icon'
      t.boolean 'active', default: false
      t.timestamps
    end
  end
end
