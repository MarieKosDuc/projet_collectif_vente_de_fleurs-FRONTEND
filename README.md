
# Wonder Flower - an e-commerce website

By Anastasia Korotkova, Angela Duton, Angelina Liborom, Audrey Doyen, Hélène Veber, Iris Gaudin, Marie Koscianski-Ducharlet, Morgane Lépine Utter and Rouhullah Karimi during a two-week sprint at [Ada Tech School](https://adatechschool.fr/)

## Project overview

This project spans two repositories: this one for the front-end, [here](https://github.com/MarieKosDuc/projet_collectif_vente_de_fleurs-BACKEND) for the back-end.

Our guidelines were:
- to create a e-commerce website using the technical stack of our choice
- to implement user and admin functionalities
- to split our 9-member team into two groups: one in charge of the front-end, the other of the back-end
- to exchange roles after the first week, so that the initial front-end team would take charge of the back-end code, and vice-versa 

We chose the MERN (MongoDB, Express.js, ReactJS, Node.js) stack and started by defining all together the website and database architecture, including the main structure of React components, the database structure and the API routes that would be necessary to link back-end and front-end parts. We also decided to host our DB and API online for better usability by the whole group.

My team designed the React structure of the website during the first week, then participated to the API HTTP requests design and finalization of the back-end on the second week. 
I was particularly in charge of the signup page and form treatment, and of the creation of a webtoken authentification module using the Jsonwebtoken library.

## Challenges

Not all of us had prior notions in both ReactJS and Express.js, so we split the teams in order to equally spread the competencies in both groups. 

We were careful to design all together the front-end and back-end architecture, which took us two whole days, leaving only 5 more working days to complete our code. Even though we documented thouroughly both front and back-end structures (using gigantic paper-board sheets pinned on our working-room walls!), we still discovered discrepancies and features that needed adjustement when we switched groups.

In the end, we didn't have time to implement the "create order" request to the API, even though the route existed in the server and was functionnal towards the database, nor the "update/delete product" on the admin page. But the form to create a new product inside the database is functionnal!

In terms of cybersecurity, we used SHA256, salt and pepper for storing the users and admins passwords in the database; yet, it would have been great to implement a SSL certificate on the website to secure the HTTP requests content back and forth, and thus send encrypted ID/passwords to the API.

For my part, I lacked the time to figure a proper, secure way to store the webtoken inside the React app. I resorted to sessionStorage knowing it would have been way better to implement a secure authentification handler.



## Screenshot

![Screenshot](https://github.com/MarieKosDuc/projet_collectif_vente_de_fleurs-FRONTEND/blob/main/Homepage.png?raw=true)

## Demo

Homepage:

[![Watch the video](https://cdn.loom.com/sessions/thumbnails/ab7ec04b5312406a91c96061b48a8636-with-play.gif)](https://www.loom.com/embed/ab7ec04b5312406a91c96061b48a8636)

Sign-up, sign-in, cart:

[![Watch the video](https://cdn.loom.com/sessions/thumbnails/9f2d3dae70f64874bcbbaa518c5d2c77-with-play.gif)](https://www.loom.com/embed/9f2d3dae70f64874bcbbaa518c5d2c77)

Admin page:

[![Watch the video](https://cdn.loom.com/sessions/thumbnails/ef4083b8059641abb9f323fa6e80a287-with-play.gif)](https://www.loom.com/embed/ef4083b8059641abb9f323fa6e80a287)
