Fibonacci series
```
#include <stdio.h>

int fibonacci_loop(int n)
{
    int i;
    int prev;
    int prev_prev;
    int result;

    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    }

    prev = 1;
    prev_prev = 0;
    result = 0;

    printf("0\n");
    printf("1\n");

    for (i = 2; i < n; i++) {
        result = prev + prev_prev;
        prev_prev = prev;
        prev = result;

        printf("%d\n", result);
    }

    return result;
}

int fibonacci_recursive(int n)
{
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    }

    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

int main(void)
{
    /* fibonacci_loop(10); */
    printf("%d\n", fibonacci_recursive(12));

    return 0;
}
```
