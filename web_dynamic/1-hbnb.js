$(document).ready(function() {
// initializse an empty array to store the ids of the checked amenties
    var checkedAmenities = [];

//listen for changes on each input checkbox tag 
$('input[type="checkbox"]').change(function() {
//get ammenity id from the datat-id attribute
    var amenityId = $(this).data('id');

//check if the checkebox is checked 
if ($(this).is(':checked')) {
//if checked , add the amenity ID to the list
    checkedAmenities.push(amenityId);
} else {
// if unchecked, remove the amenity ID from the list
    var index = checkedAmenities.indexOf(amenityId);
    if (index !== -1) {
        checkedAmenities .splice(index, 1);
    }
}

//update the content of the h4  tag 
$('#Amenities h4').text('Amenities: '+ checkedAmenities.join(', ')); 
