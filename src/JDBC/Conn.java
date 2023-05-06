package JDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conn {
    public static Connection getConn(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/piyushdb", "root", "Piyush@2001");
            return connection;
        }catch (ClassNotFoundException | SQLException e){
            throw new RuntimeException();
        }
    }
}
