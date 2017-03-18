<%-- 
    Document   : conexion
    Created on : 14/10/2014, 10:06:22 AM
    Author     : pedro.fragoso
--%>

<%@page import="javax.naming.NamingException"%>
<%@page import="javax.naming.InitialContext"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.*"%>
<%@page import="javax.naming.Context"%>
<%@page import="javax.sql.DataSource"%>
<%
    Connection conn=null;

        try {

            InitialContext initCtx = new InitialContext();
            DataSource ds = (DataSource) initCtx.lookup("java:comp/env/jdbc/PoolSIG");
            conn = ds.getConnection();
        }catch(NamingException e) {
            e.printStackTrace();
        }catch(Exception e) {
            e.printStackTrace();
        }
        

%>