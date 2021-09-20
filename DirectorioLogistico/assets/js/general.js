$(document).ready(function() {
    $('.controlSelect2').select2({
		tags: "true",
  placeholder: "Seleccione una opción"
	});
	$('.select2-selection__arrow').html('<i class="fas fa-angle-down icon-select">');
	//$('.select2-container--focus select2-container--open').find('i').html('<i class="fas fa-angle-down icon-select">');
});

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
  });