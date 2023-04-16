package Fetch;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/fetch")
public class fetch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	Connection c=null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			response.setContentType("text/html");
			PrintWriter out=response.getWriter();
			
			String aadhar=request.getParameter("aadhar");
			Class.forName("com.mysql.jdbc.Driver");
			c=DriverManager.getConnection("jdbc:mysql://localhost:3306/electhon","root","");
			Statement st =c.createStatement();
			PreparedStatement ps=c.prepareStatement("select * from aadhar where Aadhar_no=?");
			ps.setString(1, aadhar);
				
			ResultSet rs=ps.executeQuery();
			//ResultSet rs1 = ps.executeQuery();
			
			if (!rs.next()) {
			    response.sendRedirect("index.jsp?message=Invalid");
			} else {
			    out.println("<html><head><style>" +
			        "html, body {\r\n"
			        + "    height: 100%;\r\n"
			        + "    margin: 0;\r\n"
			        + "    padding: 0;\r\n"
			        + "}\r\n"
			        + "header {\r\n"
			        + "    background-color: #fff;\r\n"
			        + "    padding: 20px;\r\n"
			        + "    box-shadow: 0 2px 5px rgba(0,0,0,.1);\r\n"
			        + "}" 
			        + "header img {\r\n"
			        + "    height: 50px;\r\n"
			        + "    vertical-align: middle;\r\n"
			        + "}\r\n"
			        + "header h1 {\r\n"
			        + "    display: inline-block;\r\n"
			        + "    margin: 0;\r\n"
			        + "    font-size: 28px;\r\n"
			        + "    font-weight: 700;\r\n"
			        + "    vertical-align: middle;\r\n"
			        + "    margin-left: 10px;\r\n"
			        + "}\r\n"
			        + ".container {\r\n"
			        + "    display: grid;\r\n"
			        + "    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n"
			        + "    grid-gap: 8px;\r\n"
			        + "    padding: 16px;\r\n"
			        + "    box-sizing: border-box;\r\n"
			        + "    height: calc(100% - 90px);\r\n"
			        + "    overflow-y: scroll;\r\n"
			        + "}\r\n"
			        + ".container div {\r\n"
			        + "    border: 1px solid #ccc;\r\n"
			        + "    padding: 8px;\r\n"
			        + "    box-sizing: border-box;\r\n"
			        + "}" 
			        + "table {\r\n"
			        + "    width: 100%;\r\n"
			        + "}\r\n"
			        + "td {\r\n"
			        + "    padding: 8px;\r\n"
			        + "}" 
			        + "</style></head><body>");

			    out.println("<header><img src='Logo.jpg' alt='Election Commission of India Logo'><h1>Election Commission of India</h1></header>");

			    out.println("<div class='container'>");
			    
			    do {
			        out.println("<table class=\"table\">");
			        out.println("<tr><td class=\"label\">AADHAR_NO</td><td>"+rs.getString(1)+"</td></tr>");
			        out.println("<tr><td class=\"label\">NAME</td><td>"+rs.getString(2)+"</td></tr>");
			        out.println("<tr><td class=\"label\">GENDER</td><td>"+rs.getString(3)+"</td></tr>");
			        out.println("<tr><td class=\"label\">DOB</td><td>"+rs.getString(4)+"</td></tr>");
			        out.println("<tr><td class=\"label\">ADDRESS</td><td>"+rs.getString(5)+"</td></tr>");
			        out.println("<tr><td class=\"label\">MOB_NO</td><td>"+rs.getString(6)+"</td></tr>");
			        out.println("<tr><td class=\"label\">fatherno</td><td>"+rs.getString(7)+"</td></tr>");
			        out.println("<tr><td class=\"label\">MOtherno</td><td>"+rs.getString(9)+"</td></tr>");
			        out.println("<tr><td class=\"label\">fatherid</td><td>"+rs.getString(10)+"</td></tr>");
			        out.println("<tr><td class=\"label\">MOtherid</td><td>"+rs.getString(11)+"</td></tr>");
			        out.println("<tr><td class=\"label\">aader</td><td>"+rs.getString(12)+"</td></tr>");
			    } while(rs.next());

			    out.println("</table>");

			}
			
		} catch(Exception E) {
			E.printStackTrace();
		}
	} 
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
