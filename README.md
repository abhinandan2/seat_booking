# Seat Booking

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Generously customizable Seat Booking component
  - Set your own seat map
  - Different types of seat with different prices
  - Mobile First design



### Tech

Seat Booking Component uses a number of open source projects to work properly:

* [jQuery]
* [jQuery Seat Charts](https://github.com/mateuszmarkowski/jQuery-Seat-Charts) 

### Usage
---
Seat Booking can take necessary information from a Json which can be customised by client as per usage.
JSON will consist of following elements:

##### Map
 Json.map : [Array of String]
    Consist of an array of strings which represents succeeding rows.
    Take a look at an example:
```
//Seat Booking Map
  map: [
    'fff_fff',
    'fff_fff',
    'eee_eee',
    '_______',
    'Bee_eee',
    'Bee_eee',
    'Bee_eee',
    ],
```
Each single character represents a different type of seat and you have a freedom of choosing anyone but underscore _ and **B**. Underscore is used to indicate that there shouldn't be any seat at a certain place. *B* is used to indicate that this seat is already booked. In the example, the seats in front are First Class seats represented with letter **f**, while rest are Economy Seats shown by letter **e**. Some of the seats are already booked and are represented with letter **B**. There is also a gap of row represented by underscores. Keep in mind that the number of character in each row must be the same.

##### Seats
Your chosen characters can carry a hash of data which is a great way to pass crucial seat details such as price or a description that you want to show or use. Take a look at the example:
```
    seats: {
      f:  {
            price   : 300, //Number
            category: 'First Class',
            description: 'This is the First class seat!'
          },
      e:  {
            price   : 200,
            category: 'Economy Class'
          }
    }
```

Each letter defines the properties of letter used in the Json.**map**
You can put any number of properties but `price` and `category` are required.

##### Columns:
Columns define the colume name to be given for each column. It should be equal to the number of column defined in Map. 

    columns: ['A', 'B', 'C', ' ', 'D', 'E', 'F'],



##### Legend
Show the information for each seat type.
```
    legend : [
      [ 'f', 'available',   'First Class (300 Rs)' ],
      [ 'e', 'available',   'Economy Class (200 Rs)'],
      [ 'f', 'unavailable', 'Already Booked']
    ],
```
The first and second column defines which color box to show. For example, in the above example, the legend will show color box of letter f when f is available with third column as description.

##### Max Seats
Maximum seats allowed to book.

#### Example:
```
var seatJson = {
  map: [
    'fff_fff',
    'fff_fff',
    'ebe_eee',
    'ee___ee',
    'Bee_eee',
    'Bee_eee',
    'Bee_eee',
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
      [ 'f', 'unavailable', 'Already Booked']
    ],
    maxseats: 3,
}

```

will produce: 

![Screenshot](https://raw.githubusercontent.com/abhinandan2/seat_booking/master/public/abhi/Screenshot%20from%202018-09-27%2011-43-15.png)


That's it folks..

***Abhinandan* (C) Phonon Communications Pvt Ltd**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
 
