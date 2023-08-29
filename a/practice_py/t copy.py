def checksum(employee_number):
    even = 0
    odd = 0
    result = 0
    strnum = str(employee_number)[::-1]
    for i in range(0, len(strnum)):
        if(i % 2 == 0):
            # 짝수자리
            even = even+int(strnum[i])
        elif(i % 2 == 1):
            # 홀수자리
            odd = odd+int(strnum[i])
    result = ((even*3)+odd) % 10
    return result


def main():
    employee_number = 501234567890
    print(f'the checksum of {employee_number} is {checksum(employee_number)}')
    employee_number = 892836107376
    print(f'the checksum of {employee_number} is {checksum(employee_number)}')


main()
