import random

class Triangle:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def __str__(self):
        return f"Triangle: {self.a}, {self.b}, {self.c}"


def next_triangle(triangle):
    a = abs(triangle.a - triangle.b)
    b = abs(triangle.b - triangle.c)
    c = abs(triangle.c - triangle.a)
    return Triangle(a, b, c)


def randint():
    return int(random.random() * 1000)

t = Triangle(randint(), randint(), randint())


for _ in range(30):
    print(t)
    t = next_triangle(t)
