<%@ page import="java.sql.*" %>
<%@ page import="javax.naming.*, javax.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <head>
    <title>Database Entries</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
        }
        header {
            display: flex;
            align-items: center;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #555;
            margin: 0;
        }
        img {
            height: 50px;
            margin-right: 10px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px auto;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        th, td {
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {background-color: #f2f2f2;}
        th {
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>

<body>
	<%response.sendRedirect("puc.jsp"); %>
	<header>
		<img src="img.jpg" alt="Election Commission of India Logo">
		<h1>Election Commission of India</h1>
	</header>	
    <table>
        <tr>
            <th>Name</th>
            <th>Aadhar No</th>
            <th>Father VoteID</th>
            <th>Mother VoteID</th>
            <th>PAN No</th>
            <th>Address</th>
            <th>Constituency</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            
        </tr>
        <% 
            try {
                // Get the data source
                Connection c=null;
                Class.forName("com.mysql.jdbc.Driver");
			    c=DriverManager.getConnection("jdbc:mysql://localhost:3306/electhon","root","");
                
                // Execute the query
                Statement stmt = c.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM elct_process");
                
                // Loop through the result set
                while (rs.next()) {
                    String name = rs.getString("Name");
                    String aadharNo = rs.getString("Aadhar_No");
                    String fatherVoteID = rs.getString("Father_VoteID");
                    String motherVoteID = rs.getString("Mather_VoteID");
                    String panNo = rs.getString("PAN_No");
                    String address = rs.getString("Address");
                    String constituency = rs.getString("Assembly_Constituency");
                    String gender = rs.getString("Gender");
                    String dob = rs.getString("DOB");
                    String fatherName = rs.getString("Father_Name");
                    String motherName = rs.getString("Mother_Name");
                    //String photo = rs.getString("Photo");
        %>
        <tr>
            <td><%=name%></td>
            <td><%=aadharNo%></td>
            <td><%=fatherVoteID%></td>
            <td><%=motherVoteID%></td>
            <td><%=panNo%></td>
            <td><%=address%></td>
            <td><%=constituency%></td>
            <td><%=gender%></td>
            <td><%=dob%></td>
            <td><%=fatherName%></td>
            <td><%=motherName%></td>
            
        </tr>
        <% 
                }
                
                // Close the connection
                c.close();
                
            } catch (Exception e) {
                out.println(e.getMessage());
            }
  %>
</body>
