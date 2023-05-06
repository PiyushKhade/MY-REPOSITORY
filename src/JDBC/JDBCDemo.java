package JDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


//  Driver Registration
//  connection establishment
//  statement establishment
//  statement execution


public class JDBCDemo {
    public static void main(String[] args) {
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/piyushdb","root","Piyush@2001");
//here piyushdb is database name, root is username and Piyush@2001 is password
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select * from customers");
            String inert = "insert into customers(id,name,address) values(2,'Prajyot','Satara')";
            while(rs.next())
                System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
            con.close();
        }catch(Exception e)
        {
            System.out.println(e);
        }
    }

}




//Difference between SQL and MYSQL is, that SQL is a Language whereas mySQL is a Database.
//DDL stands for Data Defination Language.
//DML stands for Data Manipulation Language.



