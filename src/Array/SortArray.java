package Array;

public class SortArray {
    public static void main(String[] args) {
        int a;
        int[]arr={1,34,54,24,7};
        for(int i=0; i<arr.length;i++){
            for (int j=i+1;j>arr.length;j++)
            {
                if(arr[i]>arr[j]){
                    a=arr[i];
                    arr[i]=arr[j];
                    arr[j]=a;
                }
            }
            System.out.println(arr[i]);
        }
    }
}
