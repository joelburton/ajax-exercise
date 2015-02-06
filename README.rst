AJAX Exercise
=============

**Goals:**

- practice basic AJAX patterns using $.load(), $(selector).get(), and $(selector).post()


In this exercise, you'll be working with a small Flask application. It has three features:

- providing a random fortune

- provide a weather forecast for a zipcode

- handle ordering melons

Throughout this application, you'll find the documentation for jQuery super helpful!


**To start:**

1. Create a virtual environment and install Flask into it

2. Run the server and take a look at the index page.



Part 1: Random Fortune
----------------------

We want the user to get a random fortune when the click the "Get Fortune" button.
This fortune should appear in the #fortune-text div. This should not be a full HTML
page, but be done using an AJAX-style call.

There is already a route in the Flask server for this, at `/fortune`.

Fill in the function in the Javascript file to load the text returned by this route
and put it into the #fortune-text div.



Part 2: Weather (Harder)
------------------------

We want the user to be able to type in a zipcode and get a forecast back for that
zipcode.

There is already a route in the Flask server, `/weather`, that returns a JSON object
like ``{temp: TEMP, forecast: FORECAST}``. We don't want to actually show the temperature
on the page, though, just the forecast (this is a common pattern: APIs tend to return
a lot of data, and we only want to show some.)

Fill in the missing parts of the function in the Javascript file. You'll need to
decide which kind of AJAX call to make, and how to extract the forecast from the
JSON object you get back.



Part 3: Ordering Melons (Hardest)
---------------------------------

We want the users to be able to order melons using an AJAX-style form.

There is already a route in the Flask server, `/order-melons`, to handle the
processing of the data. It returns a JSON object with a status code and a
text message.

Fill in the missing parts of the Javascript file. You'll need to post to
that route, using the data from the form, and then take the returned result
object, and extract the result code and the message (not sure how to do this?
Play with the Javascript console using things like `console.dir`)

Show the result text in the #order-status div.

If the order status is ERROR (if they ordered an inappropriate number of melons),
we want it to appear in red. Look in the CSS file and you'll see we have a
CSS class intended for this. Write the JS code that will add this class so
that error messages appear in red.






