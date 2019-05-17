## Hackathon Review

# Hackathon
Get all hackathons
* Link - https://hackathoncomplains.herokuapp.com/hackathon
* Request - GET

Add a hackathon
* Link - https://hackathoncomplains.herokuapp.com/hackathon
* Request - POST
* Body - name

# Post
Get all posts from that hackathon
* Link - https://hackathoncomplains.herokuapp.com/hackathon/:hackathonId/post
* Request - GET
* Params - Replace ':hackathonId' with an id of a hackathon

Create a post
* Link - https://hackathoncomplains.herokuapp.com/hackathon/:hackathonId/post
* Request - POST
* Params - Replace ':hackathonId' with an id of a hackathon
* Body - text