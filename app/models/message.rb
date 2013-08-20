class Message < ActiveRecord::Base
  attr_accessible :content

  def self.create_from_text(params)
    body_array = params["Body"].split(":")
    message = self.new
    message.heroine = body_array[0]
    message.content = body_array[1]
    message.outgoing = false
    message.save()
    message
  end

end
