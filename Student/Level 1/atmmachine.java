import java.util.*;
public class atmmachine{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        int [] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        int balance=0;
        for(int i=0;i<arr.length;i++){
            balance+=arr[i];
        }
        if(balance<0){
            System.out.print("overdraft");
        } 
        else{
            System.out.println("final balance"+balance);
        }
        sc.close();
    }
}