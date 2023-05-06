package JDBC;

import java.sql.PreparedStatement;
import java.util.Scanner;

public class PreparedDemo {
    public static void main(String[] args) {
        int id;
        String name;
        String address;
        Scanner scanner =new Scanner(System.in);

        System.out.println("Enter id name and address");

        id=scanner.nextInt();
        name=scanner.next();
        address=scanner.next();

        try{
            String str="insert into employee(id, name, address) values(?,?,?)";

            String update="update employee name=?,address=? where id=?";
//            PreparedStatement preparedStatement=Conn.getConn().preparedStatement(update);       //to update
            PreparedStatement preparedStatement=Conn.getConn().prepareStatement(str);


            preparedStatement.setInt(1,id);
            preparedStatement.setString(2,name);
            preparedStatement.setString(3,address);
             int i= preparedStatement.executeUpdate();

            System.out.println("Record Inserted Successfully"+i);
        }catch(Exception e)
        {
            throw new RuntimeException(e);
        }
    }
}
