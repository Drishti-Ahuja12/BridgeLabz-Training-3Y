import java.util.Scanner;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class LibraryFineCalculator {
    
    public static int calculateFine(String dueDateStr, String returnDateStr, String category) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate dueDate = LocalDate.parse(dueDateStr, formatter);
        LocalDate returnDate = LocalDate.parse(returnDateStr, formatter);

        long delayDays = ChronoUnit.DAYS.between(dueDate, returnDate);

        if (delayDays <= 0) {
            return 0; // No fine
        }

        int fine = 0;

        switch (category.toLowerCase()) {
            case "regular":
                if (delayDays <= 5) {
                    fine = (int) (delayDays * 1);
                } else if (delayDays <= 10) {
                    fine = (5 * 1) + (int) ((delayDays - 5) * 2);
                } else {
                    fine = (5 * 1) + (5 * 2) + (int) ((delayDays - 10) * 5);
                }
                break;

            case "reference":
                fine = (int) (delayDays * 10);
                break;

            case "magazine":
                fine = (int) (delayDays * 2);
                break;

            default:
                System.out.println("Invalid category!");
                fine = 0;
                break;
        }

        return fine;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter book category (regular / reference / magazine): ");
        String category = sc.nextLine();

        System.out.print("Enter due date (DD-MM-YYYY): ");
        String dueDate = sc.nextLine();

        System.out.print("Enter return date (DD-MM-YYYY): ");
        String returnDate = sc.nextLine();

        int fineAmount = calculateFine(dueDate, returnDate, category);

        System.out.println("Library fine: ₹" + fineAmount);
        sc.close();
    }
}