# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Team 24 
Nishant Sharma

1) No, I wouldn't use a unit test for the "message" feature. Sending a message involves too many moving parts working together — the user typing, the app sending it over the network, and another user actually receiving it. Unit tests are meant for small isolated pieces of logic, not something that depends on so many components interacting. You'd want an integration or end-to-end test for this instead.
   
2) Yes, I would use a unit test for the "max message length" feature. It's a simple, self-contained rule — either the message is over 80 characters or it isn't. There's no network, no other users, no dependencies. You can just test the function directly by passing in strings of different lengths and checking if it blocks or allows them. That's exactly the kind of thing unit tests are great for.