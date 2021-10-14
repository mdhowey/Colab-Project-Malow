# Colab-Project-Malow
## PikChu

wireframe: 
https://whimsical.com/project-1-AuUUV5sGDmq32S86H4Yu27 

ERD 
https://lucid.app/lucidchart/252bed58-9751-46e9-985b-df991028d609/edit?viewport_loc=180%2C59%2C1878%2C851%2C0_0&invitationId=inv_067ed9f7-ec44-46d2-9a3b-4d4286097c65  

This is a basic instagram-esque social media application that was created to show proficiency working with the MEN stack. 

Users are able to create an account with email and password. 

Users are able to upload photos with URLs, comment on those photos and like those photos. 

A user is also able to delete, edit and view their photos. 

Comments can be deleted. User accounts can also be deleted.

This application uses auth via express-sessions which allows the user to sign out of their account. 

Frontend: Express
Backend: Node.js
Database: MongoDB

We started out with a wireframe that broke down the views and the user funcitonality that would be needed.
After server was set up, we proceed to build one model at a time, handle routes and dependencies as they were needed.
Connecting the models together proved to be somewhat difficult. There were some issues initially with naming conventions.

Auth was a challenging portion of this project. We would still like to develop a more intuitive navbar, one which 
changes functionality in accordance with the user session. For example, if there no user signed in, the navbar
should be fairly empty. When a user is signed in, the navbar should allow that user certain functionality, but
not administrative options. A user shouldn't be able to delete another user's account. 

In addition to the more intuitive navbar, we would have also like to have made the like button a bit more intuitive.
We were given the idea to store the session.currentUser in an array, allowing it to be easier to keep track of 
which users had liked a certain photo. 

To be continued... 
