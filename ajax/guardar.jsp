<%@page import="java.util.*,java.sql.*,org.json.*"%>
<%@ include file="conexion.jsp" %>

<%
	String nombre = request.getParameter("nombre");
	JSONObject dataReturn = new JSONObject();
	PreparedStatement preStmt=null;
	dataReturn.put("hola","mundo");
	dataReturn.put("variable",nombre);
	try{
		preStmt=conn.prepareStatement("INSERT INTO IGDIG_PFM.IP_CAT_ESTATUS(ESTATUS_ID,NOMBRE) VALUES(3,'"+nombre+"')");
		preStmt.executeUpdate();
		dataReturn.put("hizo","exito");
		preStmt.close();
	}catch(SQLException ex){
		dataReturn.put("hizo",ex.toString());
	}
	

	conn.close();
	response.setContentType("application/json");
    response.getWriter().print(dataReturn);

%>