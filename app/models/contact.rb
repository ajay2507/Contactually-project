class Contact < ActiveRecord::Base
  has_attached_file :csv
  validates_attachment :csv, content_type: { content_type: "text/csv" }
end
