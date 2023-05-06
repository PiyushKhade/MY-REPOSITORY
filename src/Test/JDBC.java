package Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBC {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection= DriverManager.getConnection("jdbc:mysql://localhost:3306/trialdb","root","Piyush@2001");
            Statement statement= connection.createStatement();
            ResultSet rs=statement.executeQuery("select * from student");
            String insert="insert into student(rollnumber,name,address)values(5,'Anurag','Pune')";
            while(rs.next())
                System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
            connection.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}