package FileHandeling;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterReaderDemo {
    public static void main(String[] args) {

        //character stream

        FileWriter fileWriter=null;
        try{
            fileWriter=new FileWriter("C:\\Users\\HP\\IdeaProjects\\Marchh\\Sample.txt");
            fileWriter.write("Throw Throws Demo Program text");

            System.out.println("File writing successful");
        }catch (IOException e)
        {
            throw new RuntimeException(e);
        }finally {
            try{
                fileWriter.close();
            }
            catch(IOException e)
            {
                throw new RuntimeException(e);
            }
        }
        FileReader fileReader=null;
        try{
            fileReader=new FileReader("C:\\Users\\HP\\IdeaProjects\\Marchh\\Sample.txt");
            int i= fileReader.read();

            while(i!=-1)
            {
                System.out.print((char)i);
                i=fileReader.read();
            }
        }
        catch (IOException e)
        {
            throw new RuntimeException(e);
        }
        finally {
            try
            {
                fileReader.close();
            }
            catch(IOException e){
                throw new RuntimeException(e);
            }

        }

    }
}
