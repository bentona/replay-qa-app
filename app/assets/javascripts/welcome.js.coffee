browser_info = {
 java_enabled: true
 language: "en-US"
 encoding: "UTF-8"
 title: "Example Title"
 URL: "example_url.com"
 viewport_size: "13x7"
 screen_resolution: "1440x900"
 screen_color_depth: "24-bit"
 flash_description: "Shockwave Flash 14.0 r0"
}

testEvent = {
 event_name: "Signed Up"
 distinct_id: "replay_test_id_345"
 client_id: "1234"
 session_id: "1234"
 tracking_id: "1234"
 properties:
   urid: "test_urid"
   email: "example_email@gmail.com"
   amount: 3
   event_category: "general"
   ip: "203.0.113.9"
   page_url: "example_url.com"
   past_event: "0"
   properties:  stuff: "123"
 browser_info: browser_info
}

testTrait = {
 distinct_id: "replay_test_id_345"
 properties:
   address:
     city: "example city"
     country: "example country"
   age: undefined
   avatar: undefined
   created_at: "1401733308000"
   description: undefined
   email: "example_email@gmail.com"
   employees: undefined
   first_name: "bob"
   gender: "male"
   industry: undefined
   ip: "203.0.113.9"
   last_name: "joe"
   name: "bob joe"
   past_event: "0"
   phone: "7195552742"
   page_url: "example_url.com"
   traits:  my_trait: "stuff"
   timestamp: "1401733308000"
   title: "Vice President"
 browser_info: browser_info
}

$(()->
  $('#clear-button').click(()->
    $('#sample-input').val("")
  )

  $('#event').click(()->
    ReplayIo.event(testEvent)
  )

  $('#trait').click(()->
    ReplayIo.trait(testTrait)
  )
)
