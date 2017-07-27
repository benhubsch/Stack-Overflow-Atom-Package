# Stack Overflow Help

An Atom package that allows users to search for answers on Stack Overflow from within their text editor.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Project Overview

I had the idea for this project after running out of screen real estate one day while developing, given that I was switching between Atom, Terminal, and Stack Overflow constantly. I've also been wanting to write a package for Atom for a little while, and this seemed like the perfect opportunity to hack a bit.

I used a module that allows users to make Google searches and scrape urls, the Urlbox API to take screenshots of webpages at a given url, and the Cheerio npm package to search for elements on Stack Overflow's webpage. Naturally, there were some async function calls and promises thrown in with that bunch. My project was structured according to the standard Atom package convention, which meant that I had to learn about activate, deactivate, serialize, and toggle.

Unfortunately, I found the Atom docs to be a bit sparse and unhelpful, so I did most of my learning through other people's packages. I would download a project, understand what it did first, and then view the source code and tinker with it until I knew what everything did and where it was coming from.


## Installation



## Usage



## Support

[Open an issue](https://github.com/benhubsch/Stack-Overflow-Atom-Package/issues/new) for support.

## Contributing

I would love to have anyone pitch in if they wanted to. I think the next order of business would be to add pagination to the modal and support for viewing more than one Stack Overflow page per query. Create a branch, add commits, and [open a pull request](https://github.com/benhubsch/Stack-Overflow-Atom-Package/compare/).