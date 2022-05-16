from multiprocessing.managers import ValueProxy
#https://www.hackerrank.com/challenges/nested-list/problem?isFullScreen=true
python_student = []

# marksheet = [[input(), float(input())] for _ in range(int(input()))]
# second_highest = sorted(list(set([marks for name, marks in marksheet])))[1]
# print('\n'.join([a for a,b in sorted(marksheet) if b == second_highest]))
n = int(input())
for _ in range(n):
        name = input()
        score = float(input())
        python_student.append([name,score])
second_highest = sorted(list(set([marks for name, marks in python_student])))[1]
            
        # python_student = python_student.append(name)
        # name_score_dict = {key:ValueProxy for (key,value) in zip(name,score) }
        # name_score_list = [[n , s] for n in name  for s in score ]
       
# print(name_score_dict)
print(second_highest)
print('\n'.join([a for a,b in sorted(python_student) if b == second_highest]))