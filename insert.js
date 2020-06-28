function startPopulate() {
    /* user = getCookie("uer");
    if (user == "") {
        alert("Please Log in first.");
        location.replace("http://172.18.76.150/darwin/BidSource/beta3/dashboard/login.html");
    } // if not logged in then go back */

    // this will populate the site with any new jobs 
    version = 'directory'
    inputText = 'nothing'
    total = "version=".concat(version, "& param=", inputText); // This will hold the data to send
    makeCalls(total); // makes a sql call and gets the data returned
}

function submit() {
    var codeName = document.getElementById('codeName').value;
    var codeDescription = document.getElementById('codeDescription').value;
    var codeKeywords = document.getElementById('codeKeywords').value;
    var codeRelated = document.getElementById('codeRelated').value;
    var codeLanguage = document.getElementById('codeLanguage').value;
    var codeVersion = document.getElementById('codeVersion').value;
    var codeCode = document.getElementById('codeCode').value;
    var codeFile = document.getElementById('codeFile').value;
    var codeLocation = document.getElementById('codeLocation').value;
    total = "version=".concat("insert", "& codeName=", codeName, "& codeDescription=", codeDescription, "& codeKeywords=", codeKeywords, "& codeRelated=", codeRelated, "& codeLanguage=", codeLanguage, "& codeVersion=", codeVersion, "& codeCode=", codeCode, "& codeFile=", codeFile, "& codeLocation=", codeLocation); // This will hold the data to send
    makeCalls(total);
    alert("Entry was Sent ");
    location.reload();
}

async function makeCalls(total) {
    //console.log(total);
    let responsive = await fetch("processing.php", {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: total
    });
    let data = await responsive.json();
    //console.log(responsive.ok);
    if (responsive.ok == false || responsive.status !== 200) {
        alert("Request Failed ");
        console.log('Network response was not ok.');
        //makeCalls(total);
        return;
    }
    if (data.Done == "yes") {
        alert("Entry was succesfully added.");
        location.reload();
        return;
    } else {
        alert("Entry was not able to be added.");
        return;
    }
}


async function makeSQL(total) {
    let responsive = await fetch("processing.php", {
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; "
        },
        body: total
    });
    let data = await responsive;
    if (responsive.ok == false || responsive.status !== 200) {
        alert("Request Failed ");
        console.log('Network response was not ok.');
        return;
    }

    return ("Yes");
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}