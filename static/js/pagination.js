function ajaxPagination() {
  $('#pagination a.page-link').each((index, el) => {
    $(el).click((e) => {
      e.preventDefault()
      let page_url = $(el).attr('href')
      console.log( page_url )

      $.ajax({
        url: page_url,
        type: 'GET',
        success: (data) => {
          $('#table-posts').empty();
          $('#table-posts').append($(data).find('#table-posts').html());

          $('#pagination').empty();
          $('#pagination').append($(data).find('#pagination').html())
        }
      })
    })
  })
}

$(document).ready(function () {
  ajaxPagination()
})

$(document).ajaxStop(function () {
  ajaxPagination()
})