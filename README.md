# Admin-panel-with-User-Authentication
A web-based admin panel featuring user signup, login, and management using local storage for data persistence.

Description:
This project is a web-based admin panel that includes user authentication and a user management system. It allows users to sign up, log in, and view a list of all registered users with their details. The project is built using HTML, CSS, and JavaScript, with local storage used to manage user data.

Key Features:

User Signup: New users can register by providing their name, email, and password. User data is validated and stored in local storage.
User Login: Registered users can log in with their email and password. Upon successful login, they are redirected to the admin panel.

Admin Panel:
User Greeting: The admin panel greets the logged-in user by displaying their name.
User List: Displays a list of all registered users with the following details:
Sno: Serial number of the user.
Name: The name of the user.
Email: The email address of the user.
Password: The user's password is displayed in a masked (dotted) format for security.
Logout: Users can log out of the admin panel, which clears their session and redirects them to the login page.
Data Management: All user information is stored in the browser's local storage, allowing for persistent data across sessions without a backend database.
Responsive Design: The interface is designed to be responsive, providing a consistent experience across various devices.

Technologies Used:
HTML/CSS: For structuring and styling the web pages.
JavaScript: For handling user interactions, form validations, local storage management, and dynamic content updates.
Local Storage: Used to store and retrieve user data.
EmailJS: Integrated to send confirmation emails upon successful signup (if applicable).

This project demonstrates the implementation of basic user authentication and management in a web application using frontend technologies and browser storage.
