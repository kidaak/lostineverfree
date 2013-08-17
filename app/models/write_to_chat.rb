class WriteToChat
  def self.push_message(content)
    debugger
    uri = URI.parse("http://localhost:3000/faye")
    data = {:content => content}
    message = {:channel => "/messages", :data => data}
    Net::HTTP.post_form(uri, :message => message.to_json)
  end
end