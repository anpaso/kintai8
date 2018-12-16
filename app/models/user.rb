class User < ApplicationRecord
  has_secure_password
  has_many :as
  has_many :bs
end
