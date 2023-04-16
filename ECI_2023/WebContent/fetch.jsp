<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import ="java.io.IOException"%>

<%@ page import ="java.io.PrintWriter" %>
<%@ page import ="java.sql.*"%>
<%@ page import ="javax.servlet.ServletException"%>
<%@ page import ="javax.servlet.annotation.WebServlet"%>
<%@ page import ="javax.servlet.http.HttpServlet"%>
<%@ page import ="javax.servlet.http.HttpServletRequest"%>
<%@ page import ="javax.servlet.http.HttpServletResponse"%>
<%@ page import ="java.io.PrintWriter"%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>User Details</title>
	<style>
		body {
			background-color: #f2f2f2;
			font-family: Arial, sans-serif;
		}

		h1 {
			color: #333333;
			font-size: 32px;
			text-align: center;
			margin-top: 30px;
		}
		
		header {
			background-color: #fff;
			padding: 20px;
			box-shadow: 0 2px 5px rgba(0,0,0,.1);
		}
		header img {
			height: 50px;
			vertical-align: middle;
		}
		header h1 {
			display: inline-block;
			margin: 0;
			font-size: 28px;
			font-weight: 700;
			vertical-align: middle;
			margin-left: 10px;
		}

		p {
			color: #666666;
			font-size: 18px;
			margin: 10px 0;
		}

		#userDetails {
			background-color: #ffffff;
			border-radius: 10px;
			box-shadow: 0 2px 6px rgba(0,0,0,0.1);
			padding: 30px;
			margin: 50px auto;
			max-width: 600px;
		}

        input[type="submit"] {
			background-color: #4CAF50;
			color: #fff;
			padding: 10px 20px;
			border: none;
			border-radius: 3px;
			cursor: pointer;
		}
		form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}

	</style>
</head>
<body>


	<%
        try {

			Connection c = null;
			response.setContentType("text/html");
			String name=request.getParameter("name");
			String aadhar=request.getParameter("aadhar");
			
			
			String varName = aadhar;
			session.setAttribute("variableName", varName);
			

			String panNo=request.getParameter("pan");
			String fatherVoterID=request.getParameter("father_vid");
			//String motherVoterID=request.getParameter("mother_vid");
			
		
			Class.forName("com.mysql.jdbc.Driver");
			c=DriverManager.getConnection("jdbc:mysql://localhost:3306/electhon","root","");
			Statement st =c.createStatement();
			PreparedStatement ps=c.prepareStatement("SELECT * FROM elct_process WHERE Name = ? AND Aadhar_No = ?AND PAN_No = ? AND (Father_VoteID = ? OR Mother_VoteID = ?) ");

			ps.setString(1, name);
			ps.setString(2, aadhar);
			ps.setString(3, panNo);
			ps.setString(4, fatherVoterID);
			ps.setString(5, fatherVoterID);
			
						
			ResultSet rs=ps.executeQuery();
			
			if (!rs.next()) {
			    response.sendRedirect("index.jsp?message=Invalid");
			} else {
			      out.println("<header><img src='Logo.jpg' alt='Election Commission of India Logo'><h1>Election Commission of India</h1></header>");

			    
			    
			    do {
			    	out.println("<div id='userDetails'>");
			       
			    	out.println("<h1>"+"Registered Details"+"</h1>");
			    	out.println("<p>Name :"+rs.getString(1)+"</p>");
			    	out.println("<p>Aadhar No :"+rs.getString(2)+"</p>");
			    	out.println("<p>Father VoteID :"+rs.getString(3)+"</p>");
			    	out.println("<p>Mother VoteID :"+rs.getString(4)+"</p>");
			    	out.println("<p>PAN No :"+rs.getString(5)+"</p>");
			    	out.println("<p>Address :"+rs.getString(6)+"</p>");
			    	out.println("<p>Assembly Constituency :"+rs.getString(7)+"</p>");
			    	out.println("<p>Gender :"+rs.getString(8)+"</p>");
			    	out.println("<p>DOB :"+rs.getString(9)+"</p>");
			    	out.println("<p>Father_Name :"+rs.getString(10)+"</p>");
			    	out.println("<p>Mother_Name :"+rs.getString(11)+"</p>");
			    	//out.println("<p>"+rs.getString(12)+"</p>");
			    	out.println("<p>Mobile_no :"+rs.getString(13)+"</p>");
			    	out.println("</div>");
			        
			    } while(rs.next());
			    out.println("<form action='voterid.jsp'>");
			    out.println("<center><input type='submit' value='View Template'></center>");
			    out.println("</form>");
			    out.println("<br>");
			    out.println("<form action='index.jsp'>");
			    out.println("<center><input type='submit' value='edit' onclick='return alert(\"Your Data Will Be Reprocessed Soon\")'></center>");
			    out.println("</form>");

			  

			}
			
		} catch(Exception E) {
			E.printStackTrace();
		}
		
	

%>
	
   

    
</body>
</html>
