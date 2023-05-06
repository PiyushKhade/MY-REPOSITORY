package FileHandeling;

import java.io.BufferedOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class BUfferdemo2 {

    public static void main(String[] args) {
        try {
            FileOutputStream fileOutputStream=new FileOutputStream("C:\\Users\\HP\\IdeaProjects\\Marchh\\New Sample.txt");
            BufferedOutputStream bufferedOutputStream=new BufferedOutputStream(fileOutputStream);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}









//file function
//How to write two files simultaneouly
