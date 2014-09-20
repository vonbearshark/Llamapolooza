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

==================================================
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

==================================================
Saturday September 20th 2:00 pm

I like to think I have a good Git workflow, but, as with anything else, I am always open to feedback. So let me know if I do something nutty (but be gentle).

So right now I am simply initializing the repository on my local, and creating a repo on Github. I'm going to add a Python .gitignore generated by Github because its simple and it has yet to fail me, I can add more later if this is going to get uppity. 










