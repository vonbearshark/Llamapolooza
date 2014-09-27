Saturday September 20th 12:30 pm

Heya!

I must say, I am excited to get working on this project (llamas 4 ever; llamas 4 life). I think this is a great way to showcase my talents, and allow me to try a few new tricks.

So, a few quick technical notes before I get started. First, I have decided to build the site on Python's Flask. It's such a simple framework, and I won't be needed any extensive backend (no user log-in, no database, etc.), so I can just focus on the frontend. Again, as there is no database or heavy backend functionality, I won't be needing the whole MVC...Just the V, actually. I should also mention that I will be working with Python's Jinja2 template engine to render the html. Again, nothing crazy, but I would like to play around with variables a bit. Also, I might like to try out the SCSS pre-renderer. All CSS/CSS3 is valid SCSS, but SCSS allows for variable-control of the CSS (less redeundancy). This project is small so I may not need it, we will see.

When the project is all-done, I will be deploying to Heroku. For small projects like this, Heroku is awesome. There's a little delay after downtime (Heroku's free platform shuts down the server in a lull, and it has to reboot); but once the user renders the page, it's smooth sailing until the next lull. Again, for this purpose, that is A-O-K. I already have a Heroku, account, so I can just add another box on.

I will be using this README file as a sort-of blog documentation of my process. That is, with each commit, I will be adding to this file with a (relatively accurate/hardcoded) timestamp. I really like Github's Issues, too, and I will be using those extensively. So, feel free to reference closed Issues for anything that I miss (or to checkout any awful ideas that I scrapped). Likewise, I will try to keep my commits as clean and concise as possible (I have a tendancy to get carried away in commits...), and I'll make sure to provide detailed commit messages.

I am a big fan of functionality-before-frill. With that in mind, I am going to make sure this contraption works first before moving on to the next project. That may mean that commits will be fairly boring or horrid. That's fine for my purposes, as long as it builds to a polished product before release.

Also, I will not be messing with backwards-compatitbility or legacy broswers (sorry, Nana). In fact, at least for now, I will be working only with desktop browsers (sorry, mobile, tablets); in fact in fact, I will be troubleshooting mostly on Google Chrome, so as it stands now, that is the only platform I can downright guarantee (I know, I know, I'm sorry!), but Firefox will be the first thing I will troubleshoot post-mortem.

("Guarantee" reminds me: excuse my spelling and grammar for this little blog.

I may be an English major, but frankly, my dear, I don't give a damn.)

Finally, here is the kicker: I am only giving myself until the end of the weekend (two days) to have the core site (no frill) finished. After that, I am only giving myself until Wednesday (the 24th) to have a fully-functioning, deployed site. My commits, etc. should reflect this.

So, Sunday night is L-Day (Llama Day), and Wednesday night is V-L Day (Victory over Llama Day).

Alright! Onward!

================================================
Saturday September 20th 1:15 pm

Sooooo. Llamas. Here's what I am thinking: I'd like to create a single-page application that hosts a series of fake and increasingly alarming facts about llamas. Essentially, imagine a world wherein llamas have taken over the human population (an immanent world, I'd say); this website would be a sort-of Public Service Announcement given by the PR division of our newest overlords. That is, the site should appear aesthetically pleasing and inviting, but the content would reflect the grim reality humanity now finds itself in. (Just typing all of that out is making me excited.)

With that in mind, here is the preliminary list of functionality (I will be creating these as issues when I initialize the repo on Github):

--The site will be built on Flask and deployed to Heroku. I've already mentioned that, and this is not a backend projects, so I'll leave that there.

--The site will feature a base template with a header and footer, and a navigation bar that will cycle through the fact-pages

--I'm going to make a llama favicon, and it's going to be kickass.

--I'll need to write out the scripts for each page. This will include both the "facts" at the top of the page, as well as the speech bubbles.

--There will be five fact pages, each will be partial-templates, which extend the base template, and fill the content block. In order to have the site working with JS disabled (maybe the only compatibility issue I will be troubleshooting right now), I'll be routing this in Flask, but this leads me to my next point...

The more-tricky stuff:

--I'd like to use Backbone to create a real-time single-page app. Some people would suggest Angular, and I like Angular, but for this small job Backbone is definitely more lightweight and pliable.

--Probably the most crazy element of the whole project: I want to create everything purely in CSS. (The only thing in my static folder should be the favicon.) This means that all of the creative content--all of the pictures, etc.--needs to be done completely in CSS3. I really hope someone is reading this because I have never done this before and it will be super tricky to work with (and I am not an artist). Really, if this works out, I'd be impressed with myself, and I'm not afraid to admit that. If it doesn't, I won't have my Hallmark moment, but I will fallback on using static images all the same.

--To spice up the site (and to demonstrate my breadth of JS ability) I'd like to use jQuery to animate the CSS3 pictures, and maybe provide some kind of interactive-clicking elements. People like to hate on jQuery, maybe someone can tell me why one day.

--After the dust is settled, I'd like to go back and add some frill, to be determined later. The old razzle dazzle...

So, it is 1:45 now. I am going to eat really quick and then jump in to it!

First up: initializing the repository.

================================================
Saturday September 20th 2:00 pm

I like to think I have a good Git workflow, but, as with anything else, I am always open to feedback. So let me know if I do something nutty (but be gentle).

So right now I am simply initializing the repository on my local, and creating a repo on Github. I'm going to add a Python .gitignore generated by Github because its simple and it has yet to fail me, I can add more later if this is going to get uppity. 

================================================
Saturday September 20th 2:00 pm

First pull out of the way and we've got rubber to the pavement!

I forgot to mention: I will be merging all of my own pull requests. This might seem unnecessary, but I like to keep the habit of submitting pulls to be checked by others.

I'll be adding issues now.

Alrighty, so I'm now going to branch and populate the local folder with some general files I'm going to need.

For Flask, I am going to need to create a virtual environment, and use Pip to install Flask, etc. inside. I'd also like to get the basic folder structure, the generic app.py file and the other necessary files for Heroku deployment cooking. Then, I'm going to test the local server on port 5000.

I'll be grabbing some of this from my previous projects, but nothing major, but this includes the requirements.txt, the run.py file, and the Procfile for deploying on Heroku with Python later.

(Sidebar: some people insist that the Gunicorn application is pronounced "G-Unicorn", because it is built from Green Unicorn framework...However, I think this is missing the point that "gun-icorn" is like some badass Death Proof unicorn, and I think that wins out.)

Alright, done and done. Basic framework is there and its running on localhost: 5000.

================================================
Saturday September 20, 2014 2:50 pm

Okay, so maybe I am getting ahead of myself, but I think what I want to do is have the index as a sort-of entrance to the site itself. I mean, the index should give a rundown of what is going on with this llama-pocalypse world, and prompt users to enter the full site.

I'm going to make the base html and index to fit this. I'll add some test copy to the index, just to make sure everything is running smoothly.

Okay, so I have broken up this index-entrance page to include two partials: entranceCopy (for the backstory copy), and entraceImage (for the llama image).

================================================
Saturday September 20, 2014 4:00 pm

Editing the Main Header, the Main Nav, and the footer--all partials. Also I know I said I was going to make a favicon, but I may have found a better idea.

This just in: Okay, wow. So the real world just came by and I had to step out for the day. That is now taken care of, but I'm afraid it may have set me back a day. I'm considering pushin back L-Day to this Tuesday, instead of Monday. I'll just keep trucking and see where I stand.

Anyway, I have uploaded all of the above, and made some edits. The animated rainbow llama favicon does not work in Chrome, only Firefox. Shame. Oh well.

================================================
Saturday September 20, 2014 11:15 pm

Alright, now that most of the gang is here, let's add the style. I will be using Flask-SCSS. This is relatively new to me, so fingers crossed. Downloading now. It threw an exception telling me the C extension could not be compiled; fine by me!

Well 20 minutes later, and I think that SCSS really isn't worth the shoehorn you have to pull with Flask. It's just not meant to be I guess. Moving on.

Added a slew of basic stylization. Just enough to get us in a position to test out the CSS pictures.

================================================
Saturday September 20, 2014 12:30 pm

Time for the moment of truth. I'm going to start making the llama in pure CSS. Not only will I make the outline, but I want to add layers in different colors, to be manipulated by the jQuery.

Wish me luck.

Wow. Okay well that was disappointing. There's no way this will work. I need to switch gears, and fast. I'll just create the images with GIMP. That's alright.

(I am still going to make some things in pure CSS, such as the speech bubble(s).)

Ha! So I have been up most of the night and in to the morning working with GIMP, creating the llama images. I have to admit, it has been a blast. I couldn't be happier with this switch.

As I mentioned, I believe in total transparency, so I am going to leave my terrible ideas up for everyone to see; maybe someone can learn something from my mistakes.

Anyway, I am now going to upload all of these llama images, and even animate them with jQuery.

I am now wondering if this new image style makes Backbone Irrelevent. In fact, I'll bet I can just manipulate the canvas element without actually neededing more than one page! That's it: I'm making this a full-fledged single-page application from the canvas functionality!

So right now I have gotten rid of that "entrance" idea; everything is coming off of the base template.

I made a stand-in for the footer, the main nav, and the main header. And now the index includes what I just mentioned, as well as two canvases (the "guiding" llama, and the "slides"), and a separate page for copy.

My idea with this is that I will create a page of "slides" (_llamaCanvas) and a page of copy (_copy); then, the user can move the dr. llama back and forth and a collision with a certain point would trigger the next "slide" and corresponding copy to render to the canvas.

(I like to think that this changes show less my inability to plan [cut me some slack--I only had a day!], and more my ability to adjust with diversity!)

I'm going to set this up with the javascript and test it out.

================================================
Tuesday September 22, 2014 4:30 pm

Yiiikes. What year is it? So, I got a little carried away in my ideation (as I am want to do). I am well-past my self-esablished deadline, but, then again, I thought that might happen if I ended up passing the dealine at all (I have a few tests and quizes this week); and it was a rather radical shift in production with this canvas idea.

Speaking of which! I am proud to announce the current status of the application, and the framework that I think will really work going forward.

So here's where we are at: 

I have created a collection of separate JavaScript files, and I'll explain the project based on each of their functionality.

-In the main file (main.js), I have declard the universals--that is all of the constants I'm going to need in the project--including the canvas elements. There will be two canvasses: the first is the "slides" canvas: this is where the scenes from the presentation of our lovely llama guide (who I have been calling Dr. Llama Guide) will render. I'll talk more about this later, but think of this as his powerpoint presenation.
There is also the Dr. Llama canvas. this will be the moving Guide. The user can use the D-Pad (or A and D keys) to move him back and forth between slides.

Every image is a standard height and width, and all are rendered at Y=0. Of course, I wouldn't be a challenge to mix all of this up; but for my purposes, it is much simplier this way.

-The Dr. Llama slide file (drLlamaGuide.js) contains all the information about our guide. First, it creates the guide from a constructor I will get to in a sec, and draws him to the screen. It also sets a listener for key pressing to the window (I prefer this over an active element for my purposes, because the entire site operates under this functionality). 
Then there is the boundry box and collision detection. I hope the code is self-explanatory, but while a key is pressed, I move the dr Llama 10 paces in the appriate direction, then clear (a sort-of buffer, I guess) the canvas, and reprint him in his new spot.
I am set the left boundry to the X-axis value of the element, and the right boundry to an image-width's right from the X axis coordinate. I also set up collision detection on both sides of the canvas element, and I record collision directions based on these overlap. If it hits, it triggers the collision detecting function, collider switch; if it hits right, it renders the next slide to the right, if left, left. 
I have also included a navigation functionality I am fairly proud of, in which the user can click on a slide-nav element and render the appropriate slide. Also, the nav element is "highleted according to the slide the user is currently on."

================================================
Tuesday September 22, 2014 8:30 pm

Still here? Moving on.

So, I have come up with a slide-creation system I am  pretty proud of. In llamaAttributes.js, I create instances of the llama attributes constructor, which is just a source of the apprpriate file, so that I can use the shorthand name later. These attributes contain the base llama (which will be the body for all of our llama overlords, in my attempt toward some dystopian-PR humor), as well as all sorts of clothes and accessories I have spent more time on than I will be admitting to here.

Using these attributes, we can create an individual llama (like some sort of llama-god). Every llama gets the same body. Then, accessories (clothes, etc.) are passed in as arguments, and each is added to the body and printed to the canvas in the x-coordinate that was passed in to the builder. (I also included a little move'n and shake'n for dr. llama that I mentioned earlier, as well as a few getters.)

-Finally, we can make the individual slides by copying in the text-copy in HTML form (if there was more, or if theses were more extensive I would have a more organized system, like the Attributes), as well as each individual llama. The slides are then added to an array to be used in navigation!

This way the system is super-reusable: the possibilities of Llama slide and copy combinations is as endless as your imagination! 

In fact, with more time (or as needed), I could probably rig up a way that slides were randomly generated within certain parameters... Maybe some other time.

================================================
Tuesday September 22, 2014 10:30 pm

Really, the hardest part was getting each Attribute-image in the for-loop to wait until the previous is loaded. (The for loop would execute too quickly and it would only display the last accessory.) I tried everything: timeout delays, a recursive function, everything I could think of. Finally, I found this article solved my biggest hiccups: http://www.jaypan.com/tutorial/javascript-passing-arguments-anonymous-functions-without-firing-function (though my solution, I think, is even more elegant than his) (ref: line 42, llamaBuilder.js.

I am almost done with this JavaScript functionality, and I will be commiting it soon. 

I apologize for my lack of correpsondence in this development, but I have been a little short on time with classes. Likewise, I won't be able to work on this again until Thursday night. See you then!

================================================
Thursday September 25, 2014 6:15 p.m.

I'm back! And I'm on a mission. I have just updated the Github Issues to reflect my project's new direction and directives. I'm going to need to restyle the aesthetics, and make the actual slides from the builders, mostly.

Again, normally, my commits would not be so extensive, but given my schedule this week, the huge overhaul the project has undergone, the casual nature of this project, and the notes I have taken here, I'm breaking from my usual practices. With that said, I am commiting now.

================================================
Thursday September 22, 2014 10:30 p.m.

 Great, no conflicts. So now it is time to stylize this mortherllama. Google Fonts seems to make everything look better, so I'll probably start there. Since I know the JavaScript functionality works, I'm going to sub in the some Lorem Ipsum in to mimmic paragraph size. (Here's an awesome site I found to generate this lovely gibberish; http://www.lipsum.com/!)

I also am making sure that the application is condensed to a standard size to fit equally across most desktop browsers.

And I'd like to create one of those pure-CSS images I mentioned: I was thinking a text-bubble surround the text?

I've also added a 'Next Slide' and 'Previous Slide' footer in the footer, in case the user forgot how progression works. I hope its alright that this footer does not respond to being in the state of the first or last stage--it's just static, and I'm pretty alright with that.

================================================
Friday September 26, 2014 9:30 a.m.

Wooo-eeee. She's lookin' mighty purty.

I've edited the Nav layout, and I've justified and designed copy of the slides. I really like the way it turned out.

So, when looking though some of the fonts, I had this cool idea that I could stimulate a psuedo-command line/typewriter environment. I think it works well with the scence, but it was crazy hard to get right, and, at the risk of it being underappreciated, I'll delve into the contraption a little bit (slides.js, line 40 onward):

-First, and easily enough, I knew I needed a recursive function to take the individual character of the text, and print them on a delay. No sweat.
-My biggest issue was ignoring tags as they came in; the canvas would flicker the p tags with the rest of the text for a second. Luckily, I found this awesome Stack Overflow snippet: http://jsfiddle.net/creed88/VG8MJ/1/.
-I also had to figure a way to start and stop the animation when the user followed linked between slides. This just meant another tracking variable that stopped all animations when the user moved around. I guess it's kind of buggy that the text simply picks up where it left off if the user interrupts the text and comes back, but I kind of like it.
-I also touched up the typewriter animation with a delay between paragraphs in keeping with the oldschool command line style.

In other news, I fixed flickering with the Dr. Llama movement by drawing both before and after the clearing of the canvas. It still happens here or there, but its much better than before. I also doubled the movement speed to 10 so there will be less opportunity for flickering.

Finally, I have my pure-CSS image! The text bubble around the slides' copy! First, I had to make a bubbled-border around the text, and then overlay a triangle to the right; looks awesome and I am happy with it.

================================================
Friday September 26, 2014 1:30 p.m.

After all of this coding, it's time to bring this world to life with the slides' test and images. I am super excited to create this presentation. I won't say much about it here (nothing technical to report), maybe just a few notes on the content for clarification. (I would prefer you got to experience it firsthand.)

Wow, that was a blast. Going to be honest, it really toed the line with some of the darker content there. I hope that doesn't come across the wrong way. I am a totally normal human being, cross my heart.

I've also added the functionality that sets the scene canvas invisible on the first and last page.

And I made a contact page, in keeping with the theme. To exit the contact page, click on either the logo or the intro slide link.

================================================
Friday September 26, 2014 11:30 p.m.

Time to deploy to Heroku. Fingers crossed, but I don't forsee any problems; this project is so small.

================================================
Saturday September 26, 2014 12:30 p.m.

It has been a long journey, but I think this project is finally ready for release! Looking back on this wall of text brings a tear to my eye. All hail our llama overlords!