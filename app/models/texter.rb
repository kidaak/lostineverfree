class Texter
  def self.send_with_twilio(speaker, content)
    body = speaker + ": " + content
    Twilio::SMS.create :to => ENV["ME"], 
    :from => ENV["TWILIO_NUMBER"],
    :body => body
  end

  def self.send_better_luck(sender)
    Twilio::SMS.create :to => sender, 
    :from => ENV["TWILIO_NUMBER"],
    :body => "Faster thumbs next time..."
  end

  def self.update(message)
    Twilio::SMS.create :to => ENV["ME"],
    :from => ENV["TWILIO_NUMBER"],
    :body => "a mysterious pony responds: #{message.content}"
  end

  def self.correction
    Twilio::SMS.create :to => ENV["ME"],
    :from => ENV["TWILIO_NUMBER"],
    :body => "The proper format is 
    'PONY_NAME: YOUR_MESSAGE'. 
    PONY_NAME should match the name on the last message you received from everfree."
  end

end