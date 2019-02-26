function lazyBG(element) {	
	//store out Bgs
	var lazyBackgrounds = [].slice.call(document.querySelectorAll(element));

	if (
		"IntersectionObserver" in window &&
		"IntersectionObserverEntry" in window &&
		"intersectionRatio" in window.IntersectionObserverEntry.prototype
	) {
		//add a background of none
		for (var i = 0; i < lazyBackgrounds.length; i++) {
			lazyBackgrounds[i].style.background = "none";
		}

		//check out whats in our scope
		let lazyBackgroundObserver = new IntersectionObserver(function(
			entries,
			observer
		) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.removeAttribute("style");
					lazyBackgroundObserver.unobserve(entry.target);
				}
			});
		});

		lazyBackgrounds.forEach(function(lazyBackground) {
			lazyBackgroundObserver.observe(lazyBackground);
		});
	}
  
  console.log(element);
}

export default lazyBG;
