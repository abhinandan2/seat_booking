function seatBookingCallback(){
  window.top.seatBookingCallback(total);
}

var seatJson = {
  map: [
    'fff_fff',
    'fff_fff',
    'ebe_eee',
    'ee___ee',
    'Bee_eee',
    'Bee_eee',
    'Bee_eee',
    'eee_eee',
    'eee_eeB',
    'eee_Bee',
    'eee_eeB',
    'eee_eee',
    'eee_eee',
    'eee_eee',
    'eee_eee',
    'eee_eee',
    'eee_eee',
    ],
    seats: {
      f:  {
            price   : 300,
            classes : 'first-class', //your custom CSS class
            category: 'First Class'
          },
      e:  {
            price   : 200,
            classes : 'economy-class', //your custom CSS class
            category: 'Economy Class'
          }
    },
    columns: ['A', 'B', 'C', ' ', 'D', 'E', 'F'],
    legend : [
      [ 'f', 'available',   'First Class (300 Rs)' ],
      [ 'e', 'available',   'Economy Class (200 Rs)'],
      [ 'e', 'available',   'Economy Class (200 Rs)'],
      [ 'e', 'available',   'Economy Class (200 Rs)'],
      [ 'f', 'unavailable', 'Already Booked']
    ],
    maxseats: 3,
}


var firstSeatLabel = 1;
  var counter = 0;
  var total = 0;
  var $maxseats = 3;

  $(document).ready(function() {
    console.log(seatJson)
    // $.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo =>
    // console.log(addrInfo)
    // );
    var $cart = $('#selected-seats');
    $counter = $('#counter');
    $total = $('#total');
    sc = $('#seat-map').seatCharts({
      map: seatJson.map,
      seats: seatJson.seats,
      naming : {
        columns: seatJson.columns,
          getLabel : function (character, row, column) {
            var labelName = row + column;
            return labelName;
          },
      },
      legend : {
          node : $('#legend'),
          items : seatJson.legend,  
      },
      click: function () {
            if (this.status() == 'available') {
              if (counter+1>$maxseats) {
                return('available');
              };
              //let's create a new <li> which we'll add to the cart items
              $(`<li><span class='cart-item__class'>` + this.data().category + `<span class='cart-item__seat'> Seat # ` + this.settings.label + 
                `:</span></span> <span><b>Rs. ` + this.data().price + `</b> <a href="#" class="cancel-cart-item">X</a></span></li>`)
                .attr(`id`, `cart-item-`+this.settings.id)
                .addClass('cart-item')
                .data(`seatId`, this.settings.id)
                .appendTo($cart);
                counter++;
                $counter.text(counter);
                total = recalculateTotal(sc)+this.data().price;
                $total.text(total);
                return 'selected';
              } else if (this.status() == 'selected') {
              //update the counter
              counter--;
              $counter.text(counter);
              //and total
              total = recalculateTotal(sc)-this.data().price;
              $total.text(total);

              //remove the item from our cart
              $('#cart-item-'+this.settings.id).remove();

              //seat has been vacated
              return 'available';
            } else if (this.status() == 'unavailable') {
              //seat has been already booked
              return 'unavailable';
            } else {
              return this.style();
            }
          }
        });

        $('#selected-seats').on('click', '.cancel-cart-item', function () {
          //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
          sc.get($(this).parents('li:first').data('seatId')).click();
        });
        sc.find('B.available').status('unavailable');
        // let's pretend some seats have already been booked
        // sc.get(['1_A', '4_1', '7_1', '7_2']).status('unavailable');

      });

      function recalculateTotal(sc) {
        var total = 0;

      //basically find every selected seat and sum its price
      sc.find('selected').each(function () {
        total += this.data().price;
      });
      
      return total;
    }
    