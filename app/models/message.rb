class Message < ActiveRecord::Base
  attr_accessible :content, :outgoing, :heroine

  def self.create_from_text(params)
    body_array = params["Body"].split(":")
    message = self.new
    heroine = body_array[0]
    content = body_array[1]
    chat = Message.where :heroine => heroine
    debugger
    if body_array.count < 2 || !Pony.names.include?(heroine)
      Texter.correction
      message.assign_values("typo", body_array[1], false)
      message
    elsif chat.last && chat.last.outgoing
      message.heroine = body_array[0]
      message.content = body_array[1]
      message.outgoing = false
      message.save()
      Texter.update(message)
      message
    else
      Texter.send_better_luck(params["From"])
      message.heroine = "late"
      message.content = body_array[1]
      message.outgoing = false
      message.save()
      message
    end
  end

  def assign_values(heroine, content, outgoing)
    self.heroine = heroine
    self.content = content
    self.outgoing = outgoing
    self.save
  end
end
