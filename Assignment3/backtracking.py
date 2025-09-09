from copy import copy
def sum_of_subset(lyst, target):
  answer, solution_candidate = [], []

  def backtrack(s):
    if sum(solution_candidate) == target:
      answer.append(solution_candidate.copy())
      print(f"solution found {solution_candidate}"
            )  #not needed. only for instructional purposes.

    print(f"s = {s}")  #not needed. only for instructional purposes.

    for index, element in enumerate(s):
      if sum(solution_candidate) + element <= target:
        solution_candidate.append(element)
        backtrack(s[index + 1:])
        solution_candidate.pop()

  backtrack(lyst)
  return answer

s = [2, 3, 4, 5]
print(sum_of_subset(s, 7))

#s = [5,6,9,11,3,7]
#print(sum_of_subset(s, 13))
