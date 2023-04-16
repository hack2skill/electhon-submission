<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="java.io.IOException"%>

<%@ page import ="java.io.PrintWriter" %>
<%@ page import ="java.sql.*"%>
<%@ page import ="javax.servlet.ServletException"%>
<%@ page import ="javax.servlet.annotation.WebServlet"%>
<%@ page import ="javax.servlet.http.HttpServlet"%>
<%@ page import ="javax.servlet.http.HttpServletRequest"%>
<%@ page import ="javax.servlet.http.HttpServletResponse"%>
<%@ page import ="java.io.PrintWriter"%>
<%@ page import="java.io.ByteArrayInputStream" %>
<%@ page import="java.awt.Graphics" %>
<%@ page import="java.awt.Image" %>
<%@ page import="java.awt.image.BufferedImage" %>
<%@ page import="javax.imageio.ImageIO" %>
<%@ page import ="java.io.IOException"%>
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
    <title>Voter ID Card</title>
    <style>
      /* CSS to style the voter ID card */
      body {
        background-color: #f7f7f7;
        font-family: Arial, sans-serif;
      }
      .card {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        margin: 50px auto;
        max-width: 290px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        
      }
      .header {
        display: flex;
       
      }
      h1 {
        margin: 0 0 10px;
        font-size: 19px;
        font-weight: bold;
        padding-left : 30px;
        padding-top : 9px;
      }
      img {
        height: 40px;
        width : 30px;
      }
      h2 {
        font-size: 20px;
        margin: 20px 0 10px;
      }
      p {
        font-size: 16px;
        margin: 10px 0;
      }
     .photo {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.photo img {
  height: 150px;
  width: 120px;
  
}
form input[type="submit"] {
			padding: 10px 20px;
			background-color: #4CAF50;
			color: white;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-size: 16px;
		}

    </style>
  </head>
  <body>
    <div class="card">
  <div class="header">
    <img src="emblom.png" alt="Election Logo">
    <h1>Election Comission India</h1>
  </div>
  <hr>
  <div class="photo">
    <img src="a.png" alt="Your Photo">
  </div>
  <h2>Voter ID: ABC1234567</h2>
      <%
try{
	String varName = (String)session.getAttribute("variableName");
	out.println("");
Connection c = null;
response.setContentType("text/html");
Class.forName("com.mysql.jdbc.Driver");
c=DriverManager.getConnection("jdbc:mysql://localhost:3306/electhon","root","");
Statement st =c.createStatement();
PreparedStatement ps=c.prepareStatement("SELECT * FROM elct_process WHERE Aadhar_No = ? ");
ps.setString(1, varName);
ResultSet rs=ps.executeQuery();
String aadhar = varName;
session.setAttribute("a", aadhar);
while(rs.next()){

	out.println("<p>Name :"+rs.getString(1)+"</p>");
	out.println("<p>Aadhar No :"+rs.getString(2)+"</p>");
	out.println("<p>Gender :"+rs.getString(8)+"</p>");
	out.println("<p>DOB :"+rs.getString(9)+"</p>");
	out.println("<p>Address :"+rs.getString(6)+"</p>");
	out.println("<p>Assembly Constituency :"+rs.getString(7)+"</p>");
	
}

}
catch(Exception E) {
	E.printStackTrace();
}
      
     

%>
     
    </div>
      <form action='voterdatabse.jsp'>
	    <center><input type='submit' value='Verify'></center>
	  </form>
	
  </body>
</html>
