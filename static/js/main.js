    function myFunction() {
      var input, filter, table, tr, td, i, txtValue, column;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      choice_column = document.querySelector('#id_choice');
      column_value = choice_column.value;
      criterion = document.querySelector('#id_criterion');
      criterion_value = criterion.value
      console.log(criterion);
      tr = table.getElementsByTagName("tr");
      if (criterion_value == '+=') {
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[column_value];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else if (filter == '') {
                  tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
      }
      else if (criterion_value == '=') {
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[value];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase() == filter) {
                tr[i].style.display = "";
              } else if (filter == '') {
                  tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
      }
      else if (criterion_value == '>' && (value != 1)) {
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[value];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase() > filter) {
                tr[i].style.display = "";
              } else if (filter == '') {
                  tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
      }
      else if (criterion_value == '<' && (value != 1)) {
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[value];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase() < filter) {
                tr[i].style.display = "";
              } else if (filter == '') {
                  tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
      }

    }