class CreateMposts < ActiveRecord::Migration
  def change
    create_table :mposts do |t|

      t.string :title
      t.string :content
      t.string :cafename
      t.string :opent
      t.string :closet
      t.string :drink
      t.string :studyroom
      t.string :contactnumber
      

      t.timestamps null: false
    end
  end
end
