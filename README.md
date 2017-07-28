# Stack Overflow Help

An Atom package that allows users to search for answers on Stack Overflow from within their text editor. If you're reading this on atom.io, I recommend checking out my [Github page](https://github.com/benhubsch/Stack-Overflow-Atom-Package), where the images will be able to render.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Project Overview

I had the idea for this project after running out of screen real estate one day while developing, given that I was switching between Atom, Terminal, and Stack Overflow constantly. I've also been wanting to write a package for Atom for a little while, and this seemed like the perfect opportunity to hack a little.

I used a module that allows users to make Google searches and scrape urls, the Urlbox API to take screenshots of webpages at a given url, and the Cheerio npm package to search for elements on Stack Overflow's webpage. Naturally, there were some async function calls and promises thrown in with that bunch. My project was structured according to the standard Atom package convention, which meant that I had to learn about activate, deactivate, serialize, and toggle.

Unfortunately, I found the Atom docs to be a bit sparse and unhelpful, so I did most of my learning by combing through other people's packages. I would install a package, understand what it did, and then view the source code and tinker with it until I knew the purpose of different functions and what effect each part of the code had. I think one of the hardest parts about this project was the lack of really solid information that was available online in forums, so I was much more dependent on previous code than I might have been with a different project. It was definitely good for me, and I came across a lot of really well-written and well-structured code.

Interestingly, there's a heavy reliance on the use of the `this` when hacking with Atom. You really have to keep track of all your contexts to be sure they don't get scrambled, particularly when you have async functions lurking around. That definitely got me a time or two and I had some TypeErrors about calling functions on undefined until I decided to write arrow functions so that I wouldn't have to worry about the unwieldiness of binding constantly.


## Installation

There are a couple of options for install.

1. Go to Atom -> Settings -> Install and search for "stack-overflow-help".

2. Open up a command line and run `apm install stack-overflow-help`. You should have apm installed if you have Atom but you can poke around [here](https://github.com/atom/apm) if you're having trouble.

## Usage

Let's say I'm writing some basic HTML, and I'm not familiar with how to do inline styling. I can make a query on a new line with what I want to be searched, like so:
![alt text](https://github.com/benhubsch/Stack-Overflow-Atom-Package/blob/master/pics/query.png "Making a query")
At this point, I can trigger the package in a number of ways. The first is to go to Packages -> Stack Overflow Help -> Toggle. The second is to right-click and select "Toggle Stack Overflow". The last option, which is probably the most straightforward, is simply to hit `alt-o`. Please be sure to have your cursor on the same line as your query, as this is how the package knows what you'd like to search.

Once I've triggered the package, it will clean up my editor for me by deleting the line on which I made the query. It will find a Stack Overflow page that matches my search and render an image of that page in a modal within Atom:
![alt text](https://github.com/benhubsch/Stack-Overflow-Atom-Package/blob/master/pics/modal.png "Viewing a modal")
I can scroll up and down within the modal to view the entirety of the page and read what I would like to read.

When I'm done, I simply click anywhere on the screen to dismiss the modal, at which point I can return to my code and continue working!

## Support

[Open an issue](https://github.com/benhubsch/Stack-Overflow-Atom-Package/issues/new) for support.

## Contributing

I would love to have anyone pitch in if they wanted to. I think the next order of business would be to add pagination to the modal and support for viewing more than one Stack Overflow page per query. Create a branch, add commits, and [open a pull request](https://github.com/benhubsch/Stack-Overflow-Atom-Package/compare/).