<?php
header("Access-Control-Allow-Methods:OPTIONS, GET, HEAD, POST");
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json');
# Start of Data aquisition

$version = $_POST['version'];// grabs the version to see what function to go into
//$version="results";



if($version == "directory"){
    $htmlText="<div class='jumbotron text-center' style='margin-top: 10px; max-width: 700px;'><h1>New Pending Work</h1></div> ";
    $result = SQLSend('call BidSource.BSgetDirectory();');
    while($row = mysqli_fetch_array($result)){
    $htmlText.='<div class="row" style="margin-left: 10px;"><div class="col-sm-10 alert alert-primary"><b>'.$row[2]."</b> | ".$row[4].' <span class="badge badge-secondary">'.$row[1].'</span></div>';
    $htmlText.='<div class=""><button type="button" class="btn btn-lg btn-success" onclick="openSite('.$row[0].')">Open</button></div></div>';
    }
    $arr = array('Done' => 'yes', 'errors' => "",'fileName'=>"test", 'Data' =>$htmlText);// sends back data to display 
    echo json_encode($arr);// sends the response with correct json
}




if($version== "work"){
    $websiteID=$_POST['websiteID'];
    $requestType=$_POST['type'];
    //$websiteID="279";
    $frameIT="no";
    if($requestType == "1"){
        $command="SELECT * FROM BidSource.BSProcessPending where bswebsitemapid = ".$websiteID. " and (Status = 1 or Status =2);";
    }else{
            $command="SELECT * FROM BidSource.BSProcessPending where bswebsitemapid = ".$websiteID. " and (Status = 1 or Status =2 or Status =3);";
        }
    
    
    $htmlStatus="1";
    $htmlPending="";
    $htmlContent="";
    $FirstLine="";
    $htmlText='<h3 class="text-center">Files<a href="javascript:void(0)" class="closebtn text-dark" onclick="closeNav()">&times;</a></h3>    <div class="form-check text-center">    <input type="checkbox" class="form-check-input" id="requestType" onclick="changeRequest();">    <label class="form-check-label" for="requestType">Show Approved</label></div>';
    $result = SQLSend($command);
    while($row = mysqli_fetch_array($result)){
        if($row[5]==1){
        
        if($htmlContent==""){
            $htmlContent=$row[2];
            $htmlPending=$row[0];
            $htmlText.='<a class="btn btn-primary " name="'.$row[2].'" onclick="closeNav(); linkClick(\''.$row[2].'\'); ">'.$row[2].'</a>';
        }else{
            $htmlText.='<a class="btn btn-danger " name="'.$row[2].'"  onclick="closeNav();  linkClick(\''.$row[2].'\'); ">'.$row[2].'</a>';
        }
    }else if($row[5]==2){
            $htmlText.='<a class="btn btn-warning " name="'.$row[2].'"  onclick="closeNav(); linkClick(\''.$row[2].'\'); ">'.$row[2].'</a>';
        }else{
            $htmlText.='<a class="btn btn-success " name="'.$row[2].'"  onclick="closeNav(); linkClick(\''.$row[2].'\'); ">'.$row[2].'</a>';
        }
    }
    $nameFile=$htmlContent;
    if(strpos($htmlContent, '.') == false){
        $filename="/media/bidsource/pending/".$websiteID."/".$htmlContent;
        //$filename="/media/bidsource/pending/279/b3b25d414c2d46549c5cc8aeec6a403c";
        $htmlContent = file_get_contents($filename);
        $FirstLine = trim(fgets(fopen($filename, 'r')));
    }else{
     $frameIT="yes";// if it has a file extension then it needs to be framed   
     $initial="/media/bidsource/pending/".$websiteID."/".$htmlContent;
     copy($initial, "/var/www/html/darwin/temp/".$htmlContent);
     $htmlContent= "darwin/temp/".$htmlContent;
    }
    //echo $htmlContent;
    $command='UPDATE `BidSource`.`BSProcessPending`SET `Status` = 2, `processstartdatetime` = now() WHERE `PendingID` = '.$htmlPending.' ;';
    SQLSend($command);
    $arr = array('Done' => 'yes', 'errors' => "",'fileName'=>"test", 'Data' =>$htmlText, 'Content' =>$htmlContent, 'status' =>$htmlStatus, 'frame' =>$frameIT, 'pending' =>$htmlPending, 'filename' =>$nameFile, 'firstLine' =>$FirstLine);// sends back data to display 
    echo json_encode($arr);// sends the response with correct json



}

if($version == "results"){
    
    $htmlSearch="";
    $htmlKeyword="";
    $htmlLanguage="";
    $html="";
    if($htmlKeyword=="" && $htmlLanguage =="" && $htmlSearch ==""){
    $command3='SELECT * FROM codestorage.codefiles;';
    }else{
        $command3='SELECT * FROM codestorage.codefiles where ( codeName  like "%ext%"  or  keywords  like "%ext%" or language  like "%ext%" or example  like "%ext%"or exampleFile  like "%ext%" ) and (language like "Python") and (keywords like "%test%")';

    }
    //grabs all the keywords in the DB to compile a list to display on the search page
    $result = SQLSend($command3);
    // the header html
    $html.='<!-- Results header --> <div class="" id="resultsTab">      <div class="text-left mt-0 font-weight-bold">Results Found: '.mysqli_num_rows($result).' </div>      <div class="text-right m-0">          <button onclick="viewList()">              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>             </svg>           </button>          <button onclick="viewDetail()">               <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-view-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">                  <path fill-rule="evenodd" d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>                </svg>          </button>          <button onclick="viewCards()">             <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-collection" fill="currentColor" xmlns="http://www.w3.org/2000/svg">                 <path fill-rule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>                 </svg>           </button>       </div>  </div>  <!-- Start of results cards list --> <div class="cardList  ">';
    while($row = mysqli_fetch_array($result)){
        // the rows for the results

        $html.='<div class="card ">  <div class="card-list"><b><h4 class="card-header"><a class="text-primary" onclick="openTab('.$row[0].')">'.$row[1].'</a></h4></b> </div>';
        $html.='<div class="card-detail d-none"><b><h4 class="card-header"><a class="text-primary" onclick="openTab('.$row[0].')">'.$row[1].'</a></h4></b><div class="card-body "> <p class="card-text">'.$row[4].'</p>   </div>  </div><div class="card-card d-none">';
        $html.='<div class="card" style="width: 100%;"> <div class="card-body"><b><h4 class="card-title"><a class="text-primary" onclick="openTab('.$row[0].')">'.$row[1].'</a></h4></b><p class="card-text">'.$row[4].'</p></div> <ul class="list-group list-group-flush"><li class="list-group-item"><b>Keywords: </b>'.$row[3].'</li><li class="list-group-item"><b>Related: </b>'.$row[5].'</li><li class="list-group-item"><b>Language: </b>'.$row[6].'</li><li class="list-group-item"><b>Version: </b>'.$row[7].'</li> </ul></div> </div> </div>';
       
        }
        $html.="</div>";// the end closing bracket
       
            $arr = array('Done' => 'yes', 'Data' =>$html);// sends back data to display 
    echo json_encode($arr);// sends the response with correct json
}

if($version == "search"){
    $htmlSearch="";
    $htmlKeyword="";
    $htmlLanguage="";
        //grabs all the keywords in the DB to compile a list to display on the search page
    $result = SQLSend('SELECT languageID, languageName FROM codestorage.languages;');
    while($row = mysqli_fetch_array($result)){
        $htmlLanguage.='<button class="btn  btn-outline-primary p-1 m-1" onclick="toggleButton(this)">'.$row[1].'</button>';
        #var_dump($row[1]);
        }
        //grabs all the languages in the DB to compile a list to display on the search page
    $result = SQLSend(' SELECT keywordID, keywordName  FROM codestorage.keywords;');
    while($row = mysqli_fetch_array($result)){
        $htmlKeyword.='<button class="btn  btn-outline-primary p-1 m-1" onclick="toggleButton(this)">'.$row[1].'</button>';
        #var_dump($row[1]);
            }
    
            $arr = array('Done' => 'yes', 'languages' =>$htmlLanguage, 'keywords' =>$htmlKeyword);// sends back data to display 
    echo json_encode($arr);// sends the response with correct json
}

if($version== "insert"){
    $codeName= $_POST['codeName'];
    $codeDescription= $_POST['codeDescription'];
    $codeKeywords= $_POST['codeKeywords'];
    $codeRelated= $_POST['codeRelated'];
    $codeLanguage= $_POST['codeLanguage'];
    $codeVersion= $_POST['codeVersion'];
    $codeCode= $_POST['codeCode'];
    $codeFile= $_POST['codeFile'];
    $codeLocation= $_POST['codeLocation'];
    $command='INSERT INTO `codestorage`.`codefiles`(`codeName`,`keywords`,`description`,`relatedTopics`,`language`,`version`,`active`,`example`,`exampleFile`,`exampleLocation`)
    VALUES("'.$codeName.'","'.$codeKeywords.'","'.$codeDescription.'","'.$codeRelated.'","'.$codeLanguage.'","'.$codeVersion.'",1,"'.$codeCode.'","'.$codeFile.'","'.$codeLocation.'");';
    SQLSend($command);
    $arr = array('Done' => 'yes');// sends back data to display 
    echo json_encode($arr);// sends the response with correct json
    

}

if($version== "junk"){
    $pending= $_POST['pending'];
    $status1= $_POST['status'];
    $command='UPDATE `BidSource`.`BSProcessPending`SET `Status` = '.$status1.', `processstartdatetime` = null WHERE `PendingID` = '.$pending.' ;';
    SQLSend($command);

}

if($version== "test"){
  
    $command='SELECT * FROM codestorage.codefiles;';
    $result=SQLSend($command);
    while($row = mysqli_fetch_array($result)){
        var_dump($row);    
    }
    
}



function SQLSend($query){
    
    $dbhost = "127.0.0.1:3306";
    $dbuser = "darwin";
    $dbpass = "Db12345678";
    $dbname = "codestorage";
    $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    /* check connection */
    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }
    /* Select queries return a resultset */
    $result = $mysqli->query($query);
    $mysqli->close();
    return $result;
    }

?>


