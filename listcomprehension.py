# # with open('file1.txt') as file1:
# #   file_data1 = file1.readlines()


# # with open('file2.txt') as file2:
# #   file_data2 = file2.readlines()


# #   result = [int(num) for num in file_data1 if num in file_data2]

# #   print(result)

# from unittest import result


# sentence = "What is the Airspeed Velocity of an Unladen Swallow?"

# result = { word:len(word) for word in sentence.split()}
# print(result)

#https://www.hackerrank.com/challenges/list-comprehensions/problem?isFullScreen=true

x = 1
y = 1
z = 1
n = 2
    
    

    #my_list = [[x, y, z] for x in range(n) for y in range(n) for z in range(n) if sum([x, y, z]) != len(n)]
    # test = [[x,y,z] for x in range(n) if sum([x,y,z]) != n ]
    # print(test)
    #print(my_list)
print ([[a,b,c] for a in range(0,x+1) for b in range(0,y+1) for c in range(0,z+1) if a + b + c != n ])



