# cookies
- cookie is a client side storage
- It stores data in the format `key:value` pairs. These pair should be of type String.
- Server sends these cookies to the client
- On the client side these cookies are stored and mapped to the server that has send the cookies.
- For next request--> client will automatically share this cookie with the server.
## Identification vs Authentication vs Authorization
**Identification** : Identification is the process of stating or claiming who are you . It's the initial step where a user asserts an identity, but it doesn't validate the authenticity of the claim.
* User preferences are solved.

**Authentication**: is the process of verifying whether the claimed identity is valid and accurate. It ensures that the user's identity is genuine before granting access to protected resources or functionalities.

**Authorization** : is the process of determining what actions or resources a verified and authenticated user is permitted to access within a system or application.
