class Texter
  def self.send_with_twilio(speaker, content)
    body = speaker + ": " + content
    Twilio::SMS.create :to => "+12069725447", 
    :from => ENV["TWILIO_NUMBER"],
    :body => body
  end
end