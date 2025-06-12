$(document).ready(function() {
    // Language modal accessibility
    var lastFocusedElement = null;
    var modalSelector = ".navbar_lang_modal";
    var modalClass = "show-lang-modal";
    var $modal = $(modalSelector);
    var $focusable = $();

    function getFocusableElements($container) {
        return $container.find(
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]'
        ).filter(':visible');
    }

    function getAllPotentialFocusable($container) {
        // For Webflow: get all possible focusable elements, even those with tabindex="-1"
        return $container.find(
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'
        ).filter(':visible');
    }

    function trapFocus(e) {
        var $focusable = getFocusableElements($modal);
        if ($focusable.length === 0) return;
        var first = $focusable[0];
        var last = $focusable[$focusable.length - 1];
        if (e.key === "Tab" || e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === first || document.activeElement === $modal[0]) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        } else if (e.key === "Escape" || e.keyCode === 27) {
            // Optional: ESC closes modal
            closeModal();
        }
    }

    function enforceFocus(e) {
        if (!$modal.hasClass(modalClass)) return;
        if (!$modal[0].contains(e.target)) {
            var $focusable = getFocusableElements($modal);
            if ($focusable.length) {
                $focusable[0].focus();
            } else {
                $modal.focus();
            }
        }
    }

    function openModal() {
        lastFocusedElement = document.activeElement;
        $modal.addClass(modalClass);
        $modal.attr({
            'role': 'dialog',
            'aria-modal': 'true',
            'tabindex': '-1'
        });
        // Make all potential focusable elements tabbable
        $focusable = getAllPotentialFocusable($modal);
        $focusable.each(function() {
            var $el = $(this);
            // Store original tabindex in data attribute
            $el.data('original-tabindex', $el.attr('tabindex'));
            $el.attr('tabindex', '0');
        });
        setTimeout(function() {
            var $focusableNow = getFocusableElements($modal);
            if ($focusableNow.length) {
                $focusableNow[0].focus();
            } else {
                $modal.focus();
            }
        }, 10);
        $(document).on('keydown.modal-trap', trapFocus);
        $(document).on('focusin.modal-trap', enforceFocus);
    }

    function closeModal() {
        $modal.removeClass(modalClass);
        $modal.removeAttr('role aria-modal tabindex');
        // Restore original tabindex
        $focusable.each(function() {
            var $el = $(this);
            var orig = $el.data('original-tabindex');
            if (orig !== undefined) {
                $el.attr('tabindex', orig);
            } else {
                $el.removeAttr('tabindex');
            }
        });
        $(document).off('keydown.modal-trap', trapFocus);
        $(document).off('focusin.modal-trap', enforceFocus);
        if (lastFocusedElement) {
            setTimeout(function() {
                $(lastFocusedElement).focus();
            }, 10);
        }
    }

    // Open modal
    $(".navbar_lang_trigger").on("click", function (e) {
        e.preventDefault();
        openModal();
    });

    // Close modal via close button
    $(".navbar_lang_close").on("click", function (e) {
        e.preventDefault();
        closeModal();
    });

    // Also close modal if language is switched to the current one
    // (language-switch.js removes the modal class in this case)
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class' &&
                !$modal.hasClass(modalClass)
            ) {
                closeModal();
            }
        });
    });
    observer.observe($modal[0], { attributes: true });
});
  