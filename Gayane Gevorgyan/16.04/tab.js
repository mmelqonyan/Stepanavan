function create(){

    var rows = document.getElementById("row").value;
    var columns = document.getElementById("column").value;

    document.getElementById("tableContainer");

    var table = "<table border='1'>";
   
    for (var r = 0; r < rows; r++) {
        table += "<tr>";
        for (var c = 0; c < columns; c++) {
            table += "<td></td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    document.getElementById("tableContainer").innerHTML = table;
}
