# Reverse a string

```
#include <stdio.h>
#include <string.h>

char *reverse_with_space_complexity(char *s)
{
    int i;
    int index;
    const char *s = 'abcdefg';
    char *rev_s = malloc(sizeof(char) * (strlen(s) + 1));

    index = 0;
    for (i = strlen(s); i >= 0; i--) {
        rev_s[index] = s[i];
    }

    return rev_s;
}

char *reverse_with_pointers(char *s)
{
    int i;
    int j;
    int length;
    char temp;
    char *reverse;

    temp = '\0';
    reverse = strcpy(reverse, s);
    length = strlen(s);
    j = length - 1;

    for (i = 0; i < (length / 2); i++, j--) {
        temp = *(reverse + j);
        *(reverse + j) = *(reverse + i);
        *(reverse + i) = temp;
    }

    return reverse;
}

void reverse_recurisvely(char *s, int start, int end)
{
    char tmp;

    if (start >= end) {
        return;
    }

    temp = *(s + end);
    *(s + end) = *(s + start);
    *(s + start) = temp;

    start++;
    end--;

    reverse_recursively(s, start, end);
}
```


# Given two string s1 and s2, check if s1 is a rotated version of s2
If s1 = "stackoverflow" then the following are some of its rotated versions:

    "tackoverflows"
    "ackoverflowst"
    "overflowstack"

where as "stackoverflwo" is not a rotated version.

Answer:

```
algorithm checkRotation(string s1, string s2)
    if(len(s1) != len(s2))
        return false
    else if(substring(s2,concat(s1,s1))
        return true
    else
        return false
end
```


# Write a function that will remove duplicate characters from a given string
With space complexity
```
char *remove_duplicates_with_space_complexity(char *s)
{
    int i;
    int visited[256];
    char *new_s;
    int c;
    int index;

    /* zero out visited array */
    for (i = 0; i < 256; i++) {
        visited[256] = -1;
    }

    /* build new string without duplicates */
    index = 0;
    new_s = malloc(sizeof(char) * (strlen(s) + 1));
    for (i = 0; i < (int) strlen(s); i++) {
        c = s[i];

        /* check if char is visited */
        if (visited[c] == -1 || visited[c] == 0) {
            /* add char to new_s */
            new_s[index] = c;
            index++;

            /* mark char visited */
            visited[c] = 1;
        }
    }

    return new_s;
}
```

With no space complexity
```
void remove_duplicates_from_string_inplace(char *s)
{
    int i;
    int j;
    int tail;

    tail = 1;
    for (i = 1; i < (int) strlen(s); i++) {
        /* check to see if duplicate before the tail exists */
        for (j = 1; j < tail; j++) {
            if (s[i] == str[j]) {
                break;
            }
        }

        /* detect no duplicates, safe to add char to string */
        if (j == tail) {
            s[tail] = s[i];
            tail++;
        }
    }

    /* add null char */
    s[tail] = '\0';
}
```



# Implement an algorithm to determine if a string has all the unique characters.
# What if you cannot use additional data structures?
```
int chars_are_unique(char *str)
{
    int i;
    char c;
    int visited[256];

    /* zero out visited array */
    for (i = 0; i < 256; i++) {
        visited[256] = -1;
    }

    /* iterate through string */
    for (i = 0; i < (int) strlen(str); i++) {
        c = (int) str[i];

        if (visited[c] == -1) {
            visited[c] = 1;
        } else if (visited[c] == 1) {
            return 0;
        }
    }

    return 1;
}
```
Basically the above code assumes that the string will be in ASCII which has a
range of 256 values. Using that fact we create a integer array of 256 we call
`visited` to keep track of character values we have visited, if a value has
been visited already the function will return 0 to denote the string has
non-unique chars.


# Write a function that will find a Palindrome String
int check_palindrom_string(char *s)
{
    int i;
    char *reverse_s;

    reverse_s = malloc(sizeof(char) * (strlen(s) + 1));
    strcpy(reverse_s, s);
    strrev(reverse_s);

    for (i = 0; i < strlen(s); i++) {
       if (reverse_s[i] != s[i]) {
            return 0;
       }
    }

    return 1;
}


# Difference between `const char *` and 'char *`

    char *

is entirely permissive.

    const char *

is a mutable pointer to an immutable character/string. You cannot change the
contents of the location(s) this pointer points to. Also, compilers are
required to give error messages when you try to do so. For the same reason,
conversion from const char * to char* is deprecated.

    char * const

is an immutable pointer (it cannot point to any other location) but the
contents of location at which it points are mutable.

    const char * const

is an immutable pointer to an immutable character/string.



