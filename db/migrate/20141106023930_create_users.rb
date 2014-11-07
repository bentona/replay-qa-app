class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :timezone
      t.string :locale
      t.string :locale_id
      t.string :organizationID
      t.string :role
      t.string :customRoleId
      t.string :phone
      t.string :verified

      t.timestamps
    end
  end
end
