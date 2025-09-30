import ctypes

class DynamicArray:
    def __init__(self) -> None:
        self.capacity = 1
        self.element_count = 0
        self.array = self.make_array(self.capacity)

    def double_array(self):
        """
        Double the size of the array WITHOUT deleting any
        of the current elements.
        """
        doubledCapacity = self.capacity * 2
        doubledArray = self.make_array(doubledCapacity)

        for i in range(self.element_count):
            doubledArray[i] = self.array[i]

        self.array = doubledArray
        self.capacity = doubledCapacity 
    def append(self, element):
        """
        Add element to end of the array.
        """
        if self.element_count == self.capacity:
            self.double_array()

        self.array[self.element_count] = element
        self.element_count += 1

    def make_array(self, new_capacity):
        """
        Returns a new array with new_capacity capacity.
        """
        return (new_capacity * ctypes.py_object)()

    def __str__(self) -> str:
        """
        Returns the string representation of an object.
        """
        msg = "["
        for index in range(self.element_count):
            if index == self.element_count - 1:   # fix off-by-one
                msg += str(self.array[index])
            else:
                msg += str(self.array[index]) + ", "
        msg += "]"
        return msg

    def get_capacity(self):
        return self.capacity

    def get_element_count(self):
        return self.element_count


# ---------- Testing ----------
array = DynamicArray()

array.append("Hello")
array.append("World")

if array.get_capacity() != 2 or array.get_element_count() != 2:
    print("Your code has a bug")
else:
    array.append("a")
    array.append("b")
    array.append("c")

    if array.get_capacity() != 8 or array.get_element_count() != 5:
        print("Your code has a bug")
    else:
        print("Your code is working correctly!!!")
        print(array)  # [Hello, World, a, b, c]
