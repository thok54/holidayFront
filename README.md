To execute this application you might be required to create a sql database using pgadmin4. For something else, you might tweak the pom.xml and application.properties from ejemplo01. 

Execute the back-end part of the project(holidayBack repository) as a spring-boot aplication to access the postgre-sql database. Run ng serve to execute application, which will appear at http://localhost:4200

To login, write an email (from the cap_user table in the database) with a password (from the same user). Added initial values in the labels as an example for easy use. If you add more users, you can logout and then login using its email and password. You can remove the default credentials at login.component.ts (Find the comment)

TODO: 
    -Encryption
    -Restricted Navigation (Rol specific permissions)
    -Holiday request tool (Checking a petition is possible based on Project Skill requirements and absent employees);
