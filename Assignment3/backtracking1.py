def permutations(lyst) -> list:
  answers = []
  solution = []

  def backtrack(solution):
    if len(solution) == len(lyst):
      answers.append(solution[:])
      return None

    for element in lyst:
      if element not in solution:
        solution.append(element)
        backtrack(solution)
        solution.pop()

  backtrack(solution)
  return answers


s = ['R', 'B', 'Y', 'G']

solution = permutations(s)

for sol in solution:
  print(sol)