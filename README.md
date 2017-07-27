# Stack Overflow Help

An Atom package that allows users to search for answers on Stack Overflow from within their text editor.

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

Interestingly, there's a heavy reliance on the use of the `this` when hacking with Atom. You really have to keep track of all your contexts to be sure they don't get scrambled, particularly when you have async functions lurking around. That definitely bit me a time or two and I had some TypeErrors about calling functions on undefined, until I decided to just write arrow functions so that I wouldn't have to worry about the unwieldiness of binding constantly.


## Installation

There are a couple of optiosn for you.

1. Go to Atom -> Settings -> Install and search for "stack-overflow-help".

2. Open up a command line and run `apm install stack-overflow-help`.

## Usage



## Support

[Open an issue](https://github.com/benhubsch/Stack-Overflow-Atom-Package/issues/new) for support.

## Contributing

I would love to have anyone pitch in if they wanted to. I think the next order of business would be to add pagination to the modal and support for viewing more than one Stack Overflow page per query. Create a branch, add commits, and [open a pull request](https://github.com/benhubsch/Stack-Overflow-Atom-Package/compare/).