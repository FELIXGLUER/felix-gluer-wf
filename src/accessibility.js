console.log("accessibility.js loaded");

$(document).ready(function () {
	function updateTabIndex() {
		$('[aria-expanded]').each(function () {
			var $toggle = $(this);
			var isExpanded = $toggle.attr('aria-expanded') === 'true';
			var controlsId = $toggle.attr('aria-controls');

			if (controlsId) {
				var $controlled = $('#' + controlsId);
				var $focusableElements = $controlled.find(
					'a, button, input, select, textarea, [tabindex]'
				);
				$focusableElements.attr('tabindex', isExpanded ? '0' : '-1');
			}
		});
	}

	function closeOtherDropdowns($currentToggle) {
		$('[aria-expanded="true"]')
			.not($currentToggle)
			.attr('aria-expanded', 'false');
	}

	function setupTabTrapping() {
		$('[aria-expanded="true"]').each(function () {
			var $toggle = $(this);
			var controlsId = $toggle.attr('aria-controls');

			if (controlsId) {
				var $controlled = $('#' + controlsId);
				var $allFocusable = $controlled.find(
					'a, button, input, select, textarea'
				);
				var $focusableElements = $allFocusable.filter('[tabindex="0"]');

				$allFocusable.off('keydown.tabwrap');

				if ($focusableElements.length > 0) {
					var $lastElement = $focusableElements.last();

					$lastElement.on('keydown.tabwrap', function (e) {
						if (e.which === 9 && !e.shiftKey) {
							e.preventDefault();

							$toggle.attr('aria-expanded', 'false');

							var $allToggles = $('[aria-controls]');
							var currentIndex = $allToggles.index($toggle);
							var $nextToggle = $allToggles.eq(currentIndex + 1);

							if ($nextToggle.length === 0) {
								$nextToggle = $allToggles.first();
							}

							updateTabIndex();

							setTimeout(function () {
								$nextToggle.focus();
							}, 10);
						}
					});
				}
			}
		});
	}

	$('[aria-controls]').on('keydown', function (e) {
		if (e.which === 32) {
			e.preventDefault();
			$(this).trigger('click');
		}
	});

	$('[aria-controls]').on('click', function () {
		var $toggle = $(this);
		var isExpanded = $toggle.attr('aria-expanded') === 'true';

		closeOtherDropdowns($toggle);
		$toggle.attr('aria-expanded', !isExpanded);
		updateTabIndex();
		setupTabTrapping();
	});

	$('[aria-controls]').on('focus', function () {
		// Close ALL dropdowns, not just others
		$('[aria-expanded]').attr('aria-expanded', 'false');
		updateTabIndex();
	});

	updateTabIndex();
});

$(document).on('focusin', function() { console.log(document.activeElement); });

// Add is-active class to .skip_to_main_content on focus, remove on blur
$(document).on('focus', '.skip_to_main_content', function() {
	$(this).addClass('is-active');
});
$(document).on('blur', '.skip_to_main_content', function() {
	$(this).removeClass('is-active');
});

document.querySelectorAll('input[tabindex="-1"]').forEach(input => {
    input.removeAttribute('tabindex');
});