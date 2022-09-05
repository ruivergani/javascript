/* The script is placed inside an immediately invoked function expression which helps protect the scope of variables */

(function () {
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create a hotel object using object literal syntax
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // Write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
})