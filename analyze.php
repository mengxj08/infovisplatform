<?php

// Process your information here

if (!empty($_POST)) {
    $subject_id = $_POST['subject_id'];
    //echo "hello";
} else {
    header("Location: index.php");
    /* Make sure that code below does not get executed when we redirect. */
    exit;
}

// save $user as cookie as a carry on data for the next pages
setcookie("subject_id", $subject_id, time()+(3600*3)); // time of expiration is 3 hours

?>

<html>
<head>
    <title>Experiment Run Template 1</title>
</head>
<body>
<div align="center">
		<a href=""><img src="image/yourlogo.png"></a>
		<hr/>	
	</div>
	<div align="center">
		<font size="+2" color="#FF0033" face="Georgia, Times New Roman, Times, serif"> Welcome to the XXX vs YYY experiment! </font>
		<br /><br />
		<br /><br />
		<br /><br />
</div>	
<div style="font-size: 16pt">
    <p>
	This part of the interface makes you choose which Interface do you want to do first. You can also modify the arrangement to whatever you want.
    </p>
    <p>
        In the framework, You have two choices: </br>
        1. Automaic: the arrangement is dependeing on the participant ID</br>
        2. Manual: you can choose any arrangement you want for the current participant</br>
    </p>
    <p>
</div>
<div style="font-size: 16pt">
    <p>Which type of arrangements should participant <?php echo $user; ?> do?</p>
<form action="page6.php" method="post">

    <span>Interface</span><br/>
    <input type="radio" name="arrangement" value="Automatic" style="font-size:20px">Automatic<br/>
    <input type="radio" name="arrangement" value="Manual" style="font-size:20px">Manual<br/>
    <br/><br/>
    <input id="submit" type="submit" style="width:100px; height:30px; font-weight:bold; font-size:20px" value="submit">
</form>
</div>

</body>
</html>