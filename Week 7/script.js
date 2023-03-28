//onload function
$(function() {
  
    $("#anime-search").click(function() {
      let searchTerm = $("#anime").val()
      $("#fail").text('')
      $("#publications").html('')
      // make sure the searchTerm isn't empty
      if (searchTerm !== '') {
        // here we pass the API the topic as our "query"
  
        $.getJSON(`https://api.jikan.moe/v4/anime?q=${searchTerm}&order_by=title&sort=asc&limit=10`, function(data) {
          //but, depending on what we search, we could get thousands of things or nothing
          //so we should account for the first case
  
          // let booksData;
          $('#by').text('Your result for ' + searchTerm + ':')
  
          $.getJSON(`https://api.jikan.moe/v4/anime`, function(worksData) {
            let animeData = worksData['entries'];
  
            if (animeData.length <= 0) {
              $('#fail').text("No anime with that name.")
          } else {
            for (let i = 0; i < 10; i++) {
              let work = animeData[i]
              $('#publications').append('<li>' + work.title + '</li>');
            }
          }
          }).fail(function() {
            console.log("FAILED");
          })
  
          // this could return
      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        $('#fail').text("No authors with that name.")
        console.log("Try a different author.")
        })
      }
      //reset the input
      $('#author').val('')
  
      $('#search').text('Search for another anime')
    })
  
  
  })
  