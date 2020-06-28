<?php
include 'work/processing.php';
if(isset($_POST['user'])){
// Fetching variables of the form which travels in URL
$user = $_POST['user'];
$pass = $_POST['pass'];
$check="0";
$nameID="test";
$command='CALL `BidSource`.`BSUserCheck`( "'.$user.'" , "'.$pass.'");';
echo "ugh";
$result = SQLSend($command);
while($row = mysqli_fetch_array($result)){
   if($user==$row[0] && ("3"==$row[2] || "4"==$row[2])){
   $check='1';
   $nameID=$row[3];
   //var_dump($row);
   }else {
       //var_dump($row);
       echo "\n";
}

}



if($check== "1")
{
//  To redirect form on a particular page
session_start();// start the session 

header("Location:directory.html");// go to correct website
setcookie("uer", $user, time() + 40000);// set their session to expire in twelve hours
setcookie("unu", $nameID, time() + 40000);// set their session to expire in twelve hours
$command='INSERT INTO `BidSource`.`worklog`(`workstring`,`elapsedtime`,`pendingid`,`userid`,`type`,`date`) VALUES("'.$user ." logged in.".'",0,0,'.$nameID.',"log in", now());';
SQLSend($command);
}
else{
    ?><span><?php echo "Incorrect Login, go back and try again.";?></span> <?php
    }
}


?>