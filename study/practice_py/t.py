def checksum(employee_number):
    EN_list = []
    even = 0
    odd = 0
    for i in str(employee_number):
        EN_list.append(i)
    EN_list.reverse()
    print(EN_list)
    for i in range(len(EN_list)):
        if(i % 2 == 0):
            # 짝수자리
            even = even+int(EN_list[i])
        elif(i % 2 == 1):
            # 홀수자리
            odd = odd+int(EN_list[i])
    result = ((even*3)+odd) % 10
    print(even, odd, result)
    return result


def main():
    employee_number = 501234567890
    print(f'the checksum of {employee_number} is {checksum(employee_number)}')
    employee_number = 892836107376
    print(f'the checksum of {employee_number} is {checksum(employee_number)}')


main()
