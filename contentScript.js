console.info('Google Shopping Redirect Launched!');
const interval = setInterval(function()
{
	// Search the search bar parameters.
	const searchBarParameters = document.querySelector('div.crJ18e');
	if (searchBarParameters)
	{
		// Search the <a> inside the searchBarParameters with udm=3 inside href as parameters.
		const links = searchBarParameters.querySelectorAll('a');
		links.forEach(link =>
		{
			
			// Handling relative or incomplete URLs.
			let url;
			try
			{
				// to be sure if the URL is complete.
				url = new URL(link.href, window.location.origin);
			} catch (error)
			{
				console.error('ERROR: URL is not valid for the link:', link.href);
				// Ignores if error
				return;
			}
			// Verifies if it's Google anf if a search was launched
			if (url.hostname === 'www.google.com' && url.pathname === '/search')
			{
				// Tries to found the "Shopping" Button
				if (url.searchParams.get('udm') === '3')
				{
					console.info('Link Founded :', link.href);
					
					// Grabs the "q" parameter on queryParam
					const queryParam = url.searchParams.get('q'); 
					if (queryParam)
					{
                        console.info('Founded q parameter :', queryParam);
						console.info('SUCCESS : Shopping button changed!');
						
						// Modifies the "Shop" button style and redirection
						link.style.borderRadius = '16px';
						link.href = '/search?q=' + queryParam + '&tbm=shop';
						
						link.style.transitionDuration = '0.5s';
						
						link.style.backgroundColor = "#80808030";	
						link.title = "Google Shopping Redirect";
						
                    }
				}
			}
		});
		// If founded and modified, stop.
		clearInterval(interval);
	}
}, 500);  // Verify every 0.5s

// Got bored to everytime type "Google shopping" and then write what i want again
// so, just a simple redirection integrated on the basic "Shopping" button which (for me) is CLEARLY missing choices