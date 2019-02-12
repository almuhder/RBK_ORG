<?php header("Content-type: text/html; charset=utf-8"); ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <!-- important meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Title -->
    <title>RBK ReBootKamp</title>

    <!-- Basic SEO -->
    <meta name="description" content="BECOME A SOFTWARE ENGINEER IN 16 WEEKS">
    <meta name="keywords" content="HTML5, CSS3, JQuery, Bootstrap, Web Design, Web Development, Responsive Website,
    Creative Website, RBK, ReBootKamp, Code Bootcamp, Codeing Bootcamp, Software Engineer, Learn to Code, Become a Software Engineer,
    JavaScript, Github, Data Structures, Complexity Analysis, Algorithms, Function Binding, Inheritance Patterns,
    HTML/CSS, D3, Ajax, Backbone, ES6, ES6/ES7, APIs, React, AngularJS, Servers, NodeJS, Server-side techniques, DBs, MongoDB, Structured Data,
    SQL, noSQL, ORMs, Authentication, Deployment, Full Stack, Front End, Back End, Full Stack Development, MERN, MEAN, Angular, Amman, Jordan, Coding,
    Code, Bootcamp, School, Training">

    <!-- Favicon -->
    <link rel="shortcut icon" href="img/favicon/fav.png">

    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
</head>
<body>
    <div class="container">
<?php
$to = 'info@rbk.org';
$fullname = $_REQUEST['name'];
$email = $_REQUEST['email'];
$mobile = $_REQUEST['phone'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];
$msg = 'From: '. $email ;
$msg .= '\n Name: '.$name;
$msg .= '\n Subject: '. $subject;
$msg .= '\n Message: '.$message;


// LOCAL SERVER
// define("SERVER", "localhost");
// define("DB_USERNAME", "root");
// define("DB_PASSWORD", "root");
// define("DB_NAME", "rbk15109_mentorship");


// RBK SERVER
define("SERVER", "localhost");
define("DB_USERNAME", "rbk15109_mentor");
define("DB_PASSWORD", "5XzA4P*.7_E7");
define("DB_NAME", "rbk15109_mentorship");
//mysql_query("SET NAMES 'utf8'");
//mysql_query('SET CHARACTER SET utf8');

$conn = mysqli_connect(SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
//     // Check connection
if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}
mysqli_set_charset($conn, "utf8");

$sql = "INSERT INTO contacts (fullname, email, mobile, subject, message) VALUES ( '"
    .$fullname."','"
    .$email."','"
    .$mobile."','"
    .$subject."', '"
    .$message."')";
 



if (mysqli_query($conn, $sql)) {
    $last_id = mysqli_insert_id($conn);
    echo '<div class="container">
        <div class="alert alert-success text-center">
                <strong>Thank you!</strong> Your message has been sent successfully! We will contact you soon.
        </div>
        <p class="text-center" style="margin-top:-5px;"><a href="https://rbk.org">Click Here</a> to go back to the website.</p>';
        echo '<script>
        setInterval(function(){
            window.location.href = "https://rbk.org/";
        }, 3000);
        
        </script>';
        

} else {
    echo "Error: Contact the administrator, please! " . $sql . "<br>" . mysqli_error($conn);
    echo '<div class="alert alert-danger text-center">
            <strong>Sorry!</strong> Something went wrong!.
        </div>';
}


        

$headers = 'MIME-Version: 1.0' . '\r\n';
$headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
$headers .= 'From: webmaster@rbk.org';
$flag = true;
mail($to,$subject, $msg, $headers);
?> 
</div>
</body>
</html>