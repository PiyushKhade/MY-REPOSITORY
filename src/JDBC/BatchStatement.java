package JDBC;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class BatchStatement {

    public static void main(String[] args) throws SQLException {

        String str="insert into customers (id, name, city) values(?,?,?)" ;
        PreparedStatement preparedStatement=Conn.getConn().prepareStatement(str);

        for(int i=1; i<=20; i++){
            Scanner scanner=new Scanner(System.in);

            System.out.println("Enter id name and city");

            preparedStatement.setInt(1,scanner.nextInt());
            preparedStatement.setString(2,scanner.next());
            preparedStatement.setString(3, scanner.next());
            preparedStatement.addBatch();
        }
    preparedStatement.executeBatch();
        System.out.println("Record inserted successfully");
    }
}




