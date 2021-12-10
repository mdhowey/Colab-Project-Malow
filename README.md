# PikCh

## Description

This is a basic instagram-esque social media application that was created to show proficiency working with the MEN stack. 	

### The tech stack: 
  We used Express in the front end, Node.js for building the back, and MongoDB in conjunction with Mongoose for the database.

## Usage

Users are able to create accounts --> email and password is used for login.

Users are able to: 
  1) Users are able to create an account with email and password. 
  2) Users are able to upload photos with URLs, comment on those photos and like those photos. 
  3) A user is also able to delete, edit and view their photos. 
  4) Comments can be deleted. User accounts can also be deleted.

At this time (10-12-21), users are not able to friend each other and see other user's profiles.** 

**See Roadmap below for more information on the future of the project.

## Support

For any questions regarding this project, please email me directly at dev.howey@gmail.com

## Roadmap

Auth was a challenging portion of this project. We would still like to develop a more intuitive navbar, one which 
changes functionality in accordance with the user session. For example, if there no user signed in, the navbar
should be fairly empty. When a user is signed in, the navbar should allow that user certain functionality, but
not administrative options. A user shouldn't be able to delete another user's account. 

In addition to the more intuitive navbar, we would have also like to have made the like button a bit more intuitive.
We were given the idea to store the session.currentUser in an array, allowing it to be easier to keep track of 
which users had liked a certain photo. 

It would also be great if users were able to friend one another. We are still working on that.

## Contributing

Anyone interested in contributing is welcome to do so. Simply submit a pull request, and it will be reviewed promptly.

Please submit a pull request, and I'll be sure to review it ASAP. I am on GitHub daily.

## Authors and acknowledgment

A sincere thank you to Anthony Malary for being a great partner to have on this project.

## License

Apache License, Version 2.0 **

**To review the licensing, please visit https://www.apache.org/licenses/LICENSE-2.0.txt 
