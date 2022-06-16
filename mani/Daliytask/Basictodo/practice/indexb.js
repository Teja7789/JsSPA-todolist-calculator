/* * 
var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["projectcode"] = document.getElementById("projectcode").value;
    formData["projectdate"] = document.getElementById("projectdate").value;
      
    return formData;
}


//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.projectcode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.projectdate;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('projectcode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('projectdate').value = selectedRow.cells[1].innerHTML;
   
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.projectcode;
    selectedRow.cells[1].innerHTML = formData.projectdate;
    
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}


//Reset the data
function resetForm(){
    document.getElementById('projectcode').value = '';
    document.getElementById('projectdate').value = '';
    
}




<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap -->
    
	<link rel="stylesheet" href=
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity=
    "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous">
            <!-- fontawesome -->
            <script src="https://kit.fontawesome.com/9fd2837ec2.js" crossorigin="anonymous"></script>
             <!-- stylesheet -->
    <link rel="stylesheet" href="./index.css">
    <title>ToDo List</title>
</head>
<header class="bg-primary text-white p-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <font face="Comic sans MS"
                    size="11" color="white">
                    <strong><i class="fa fa-free-code-camp" aria-hidden="true"></i> ToDo List</strong>
                </font>
                
            </div>
        </div>
    </div>
</header>
<body>
    <table>
        <tr>
            <td>
                <form autocomplete="off" onsubmit="onFormSubmit()">
                    <div>
                         <label for="projectcode">
                            <i class="fa fa-envelope" aria-hidden="true"></i>Email
                        </label>
                        <br/>
                        <input type="text"
                        class="form-control"
                        name="projectcode" id="projectcode">
                    </div>
                   
                    <div>
                        <label for="status"><i class="fa fa-eye-slash" aria-hidden="true"></i>
                            Password</label>
                        <input type="password"
                         
                        class="form-control"
                        name="status" id="projectdate">
                    </div>
                   <br/>
                   

                    <div class="form_action--button">
                        <div class="col-lg-5 col-md-5 col-sm-5">
                        <input type="submit" class="btn btn-primary" value="Submit">
                    </div>
                    <br/>
               <div class="col-lg-5 col-md-5 col-sm-5">
                        <input type="reset" class="btn btn-danger" value="Reset">
                    </div>
                    </div>
                </form>

                <td>
                    <table class="list" id="storeList">
                        <thead>
                            <tr>
                                <th>Email </th>
                               
                                <th>Password</th>
                               
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </td>
            </td>
        </tr>
    </table>
    <script type="text/javascript" src="./index.js"></script>
</body>
</html>











*/