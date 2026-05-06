# Lab 5 - Starter

Team 24 
Nishant Sharma


Links:
https://sharmanishant11.github.io/Lab5_Starter/expose.html
https://sharmanishant11.github.io/Lab5_Starter/explore.html

1) No, I wouldn't use a unit test for the "message" feature. Sending a message involves too many moving parts working together like the user typing, the app sending it over the network,etc. Unit tests are meant for small specific pieces not for this we can use end to end testing though.
   
2) Yes, I would use a unit test for the "max message length" feature because the rule is either the message is over 80 characters or it isn't. There's no network, users or any dependencies and you can just test the function directly by passing in strings of different lengths and checking if it blocks or allows them. 