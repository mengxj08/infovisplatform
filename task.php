<?php
if (!empty($_POST)) {
    $taskNum= $_POST["taskNum"];
    setcookie("taskNum",$taskNum,time()+(3600*3));
    //echo "hello";
} else {
	$taskNum = $_COOKIE["taskNum"];
}
if (!isset($_COOKIE["user"])){
    $message = "Please use a participant ID";
    header("Location: index.php?message=".$message);
    exit;
}
$user = $_COOKIE["user"];

if (!isset($_COOKIE["block"])){
    $message = "No block in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$block = $_COOKIE["block"];

if (!isset($_COOKIE["max_blocks"])){
    $message = "No max_blocks in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$max_blocks = $_COOKIE["max_blocks"];

if (!isset($_COOKIE["trial"])){
    $message = "No trial in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$trial = $_COOKIE["trial"];

if (!isset($_COOKIE["max_trials"])){
    $message = "No max_trials in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$max_trials = $_COOKIE["max_trials"];

if (!isset($_COOKIE["condition"])){
    $message = "No condition in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$condition = $_COOKIE["condition"];

if (!isset($_COOKIE["max_conditions"])){
    $message = "No max_conditions in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$max_conditions = $_COOKIE["max_conditions"];

if (!isset($_COOKIE["CurrentTrial"])){
    $message = "No CurrentTrial in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$CurrentTrial = $_COOKIE["CurrentTrial"];

if (!isset($_COOKIE["TrialsperBlock"])){
    $message = "No TrialsperBlock in the cookie";
    header("Location: index.php?message=".$message);
    exit;
}
$TrialsperBlock = $_COOKIE["TrialsperBlock"];
/*
Retrieve the data name 
*/

$json = json_decode(file_get_contents("design/test.json"), true);
$Autojson = $json["children"][$taskNum]["children"][0]["children"][$condition]["name"];
//$Autojson = preg_replace('/[\s]+/', ' ', $Autojson);

$pieces = explode(",", $Autojson);
$ID1 = explode("(", $pieces[0])[1];
$ID2 = $pieces[1];
$ID3 = explode(")", $pieces[2])[0];

$data_name = "data_" . trim($ID1) . "_" . trim($ID3) . "_" . trim($ID2) . "_" . $trial . ".js";
//echo $data_name;
?>

<html>
<title>Experiment Run Template</title>


<script type="text/javascript" src="js/protovis.js"></script>
<script type="text/javascript" src="data/<?php echo $data_name ?>"></script>
<script type="text/javaScript" src="variables/count_time.js"></script>
<script type="text/javaScript" src="variables/draw_picture.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
	function jump(next_page)
	{
		location.href = next_page;
	}
//monitor the space key press event, and stop the timer;
	$(document).ready(function(){
		var subject_file = <?php echo $user ?>;
		subject_file = "subject_" + subject_file.toString() + "_data";
		$(window).keypress(function(e){
			if(e.which == 32)
			{
				//stop_timer();
				//write the target tuple to the log file
			
				//write the spent time on this page	to the log file
				 
				//jump to the mask page	  
				jump("mask.php");
			}
		});
	});
</script>			
</head>
<body> <left>
	<table>
		<b>Subject ID: </b> 
			  <?php echo $user ?>
		&nbsp; Trial: <?php echo $CurrentTrial ?>/<?php echo $TrialsperBlock ?>
		&nbsp;
		&nbsp; Block: <?php echo ($block + 1) ?>/<?php echo $max_blocks ?>
		&nbsp;
		<b>Timer. <script language="JavaScript">run()</script> </b> 
		<hr />	
		<p>With the highlighted X1 value (<b style="color:red">red cross</b>), what's the corresponding X<?php echo trim(substr($ID2,0,2)) ?> value?</p>
	</table>
	
	<div id = "show_diagram" style="margin-top:20">
	<script>document.body.style.cursor = "none";</script>
	<script type="text/javascript+protovis">
	<?php if($ID1 == "SCP")
			echo "draw_SCP_standard()";
		  else if($ID1 == "PCP")
		  	echo "draw_PCP()";
		  else
		  	{
		  		$message = "The PCP or SCP is not defined correctly!";
    			header("Location: index.php?message=".$message);
    			exit;
    		}
	?>
	</script>
	</div>
  
</body>
</html>

