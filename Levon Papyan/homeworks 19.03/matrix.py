import random

matrix = [[random.randint(-10, 10) for num in range(10)] for j in range(10)]

firstAngleSum = 0
secondAngleSum = 0

for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        if i == j:
            firstAngleSum += matrix[i][j]
        if i == len(matrix[i]) - j - 1:
            secondAngleSum += matrix[i][j]

print(str("max is " + ("First" if firstAngleSum > secondAngleSum else "Second") + " diagonal ").center(100, "\\"))

for row in matrix:
    print(str(row).center(100, "/"))

