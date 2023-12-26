# Student_Enrollment_Form
Micro Project - A simple student enrollment form using JsonPowerDB

# JsonPowerDB 
### You can fork it. But before that, please give a star (It's totally free).

[Documentation Link](http://login2explore.com/jpdb/docs.html)

### About JsonPowerDB:

- JsonPowerDB is a Database Server that offers REST API services for various types of data. It is Fast, Light, Ajax Enabled, Serverless, Easy to Use, and Real-time. JsonPowerDB provides ready-made API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB features. JPDB enables and promotes the use of true serverless and pluggable API creation.

### Description
**Student Enrollment Form** is a simple web application that uses JsonPowerDB as the backend. The form asks the user to enter the *Roll-No*, which is the primary key, and disables the other input fields and buttons. Then, the system verifies if the *Roll-No* already exists in the database.

1. If the *Roll-No* is found in the database, the form enables the *Update* and *Reset* buttons and moves the cursor to the next field. The *Roll-No* field becomes disabled. The user can modify the data in the other fields and save the changes. This option allows the user to update the existing student record.
2. If the *Roll-No* is not found in the database, the form enables the *Save* and *Reset* buttons and moves the cursor to the next field. The user has to fill in the data in the other fields and save the new record. This option allows the user to create a new student entry.
*The __Reset__ button resets the form to the initial state.*
The form was developed using *HTML*, *Bootstrap3* and *JavaScript*.


### Benefits of using JsonPowerDB
* Comprehensive data storage supporting various data formats and big data.
* Utilizes Low-Code approach for easy integration via HTTP Rest API across different technologies.
* Offered as a Database as a Service (DBaaS) for seamless accessibility.
* Implements multi-layered security protocols to safeguard data integrity.
* Leverages PowerIndeX's high-speed real-time indexing engine for efficient operations.
* Enables querying across multiple databases for enhanced flexibility.
* Facilitates real-time data synchronization ensuring high availability.
* Provides Pluggable Drive and Import APIs for increased adaptability and extensibility.

### Screenshots
<img alt="DataBase" src="https://github.com/AmanKas/Student-Enrollment-Form/blob/0957a2ad35abc51ec6df41d529c165cd503b2c1a/images/JPDB_1.png">

<img alt="Adding Data" src="https://github.com/AmanKas/Student-Enrollment-Form/blob/0957a2ad35abc51ec6df41d529c165cd503b2c1a/images/JPDB_2.png">

<img alt="Getting Data" src="https://github.com/AmanKas/Student-Enrollment-Form/blob/0957a2ad35abc51ec6df41d529c165cd503b2c1a/images/JPDB_3.png">



### Release History
* Initial release V-1.0 - 27-12-2023