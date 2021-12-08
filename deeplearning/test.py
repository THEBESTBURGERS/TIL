length_wordcount = dict()

print(length_wordcount)

if not 8 in length_wordcount:
  length_wordcount[8] = 1
  print("if")
else:
  length_wordcount[8] += 1
  print("else")
  
print(length_wordcount)
