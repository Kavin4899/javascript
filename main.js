var editIndex;
var detail = [];
function sub() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["age"].value;
    if (x == "") {
        document.getElementById("one").innerHTML = "Requierd";
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (y == "") {
        document.getElementById("two").innerHTML = "Requierd";
    }
    else {
        document.getElementById("two").innerHTML = "";
    }

    if (z == "") {
        document.getElementById("three").innerHTML = "Requierd";
        return false;
    }
    else {
        document.getElementById("three").innerHTML = "";
    }

    var customerObj = {
        name: x,
        lame: y,
        loam: z

    };


    detail.push(customerObj);
    console.log(detail);

    console.log(editIndex);
    if (editIndex != undefined) {
    detail.splice(editIndex, 1);
    }
    tip()

    document.forms["myForm"]["fname"].value = '';
    document.forms["myForm"]["lname"].value = '';
    document.forms["myForm"]["age"].value = '';



}
function tip() {
    var html = "";
    editIndex = undefined;
    for (var i = 0; i < detail.length; i++) {
        html += "<tr>";
        html += "<td>" + detail[i].name + "</td>";
        html += "<td>" + detail[i].lame + "</td>";
        html += "<td>" + detail[i].loam + "</td>";
        html += '<td><button class="btn btn-info" onclick="Edit(' + i + ')">Edit</button> <button cass="btn btn-danger"onclick="Delete(' + i + ')">Delete</button></td>';
        html += "</tr>";


    }
    document.getElementById("bodyId").innerHTML = html;
}

    
function Delete(del) {
    console.log(del);
    detail.splice(del, 1);
    tip();
};

function Edit(edi) {
    editIndex = edi;
    console.log(edi);
    console.log(detail);
    console.log(detail[edi]);
    document.forms["myForm"]["fname"].value = detail[edi].name;
    document.forms["myForm"]["lname"].value = detail[edi].lame;
    document.forms["myForm"]["age"].value = detail[edi].loam;
};
