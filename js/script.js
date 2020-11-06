// event pada saat link di klik
$('.page-scroll').on('click', function(e){
// console.log('isi bebas')
	
	//  ambil isi href
	 var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	 var elemenTujuan = $(tujuan); 

	 // pindahkan scroll
	 $('html, body').animate({
	 	scrollTop: elemenTujuan.offset().top-50}, 1250, 'easeInOutExpo');
	 	
	 e.preventDefault();


});


// $(document).ready(function(){
//   $(".page-scroll").on('click', function(event) {
//     if (this.hash !== "") {  
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 50
//       }, 1500, function(){   
//         window.location.hash = hash;
//       });
//     } 
//   });
// });