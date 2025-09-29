
import ctypes

class CircularQueue:

  def __init__(self) -> None:
    self.__first = 0
    self.__capacity = 1
    self.__element_count = 0
    self._array = self.make_array(self.__capacity)

  def enqueue(self, element) -> None:
    if self.__element_count == self.__capacity:
      self.double_size()

    index = (self.__first + self.__element_count) % self.__capacity
    self._array[index] = element
    self.__element_count += 1

  def dequeue(self):
    if self.is_empty():
      raise Exception("Queue is empty")

    removedElement = self._array[self.__first]
    self._array[self.__first] = None  # overwrite with None for clarity
    self.__first = (self.__first + 1) % self.__capacity
    self.__element_count -= 1
    return removedElement

  def double_size(self):
    new_arry = self.make_array(2 * self.__capacity)

    for index in range(self.__element_count):
        new_arry[index] = self._array[(self.__first + index) % self.__capacity ]

    self.__first = 0
    self._array = new_arry
    self.__capacity *= 2

  def make_array(self, new_capacity):
    """
    Returns a new array with new_capacity capacity
    """
    var = (new_capacity * ctypes.py_object)()
    for index in range(new_capacity):
      var[index] = None
    return var

  def first(self):
    if self.is_empty():
      raise Exception("Queue is empty")
    return self._array[self.__first]

  def is_empty(self) -> bool:
    return self.__element_count == 0

  def len(self) -> int:
    return self.__element_count

  def show_queue_details(self) -> str:
    msg = '['
    for index in range(0, self.__capacity):
      if self._array[index] == None:
        msg += 'None'
      else:
        msg += str(self._array[index])
      if index < self.__capacity -1:
        msg += ', '
    msg += ']'
    return msg

  def __str__(self) -> str:
    msg = '['
    for index in range(self.__first, self.__capacity):
      if self._array[index] != None:
        msg += str(self._array[index])
        if index != ((self.__first + self.__element_count - 1) % self.__capacity):
          msg += ', '
    for index in range(self.__first):
      if self._array[index] != None:
        msg += str(self._array[index])
        if index != ((self.__first + self.__element_count - 1) % self.__capacity):
          msg += ', '    
    
    msg += ']'
    return msg    


#Hint: if your having troubles, replace print(q) with print(q.show_queue_details())
q = CircularQueue()

q.enqueue('Hello')
print(q)

q.enqueue('World')
print(q)

q.dequeue()
print(q)

q.enqueue('apple')
print(q)

q.dequeue()
print(q)

q.enqueue('banna')
print(q)

q.enqueue('Red')
print(q)

q.enqueue('Green')
q.dequeue()
q.dequeue()
q.enqueue('One')
q.enqueue('Seven')
print(q)

print('---')
print(q.show_queue_details())
q.enqueue('Yellow')
print(q.show_queue_details())
