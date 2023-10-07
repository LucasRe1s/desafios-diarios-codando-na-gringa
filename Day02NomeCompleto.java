import java.util.Scanner;

/*1. Receba o nome do usuário como entrada
2. Imprima o nome do usuário com todas as letras em maiúsculo

=> Por favor, digite seu nome:
=> "josé da silva"

Deve imprimir:
=> "JOSÉ DA SILVA"
 */

public class Day02NomeCompleto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Por favor, digite seu nome:");
        String nomeCompleto = scanner.nextLine().toUpperCase();

        System.out.println("Seja bem vindo, " + nomeCompleto);
        scanner.close();

    }
}
