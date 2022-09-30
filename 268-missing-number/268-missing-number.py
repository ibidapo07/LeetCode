class Solution:
    def array_diff(a, b):
        c = a 
        d = []

        if a == [] or b == [] :
            return a
        else:
            for i in c:
                if i in a and i in b:
                    continue
                else:
                    d.append(i)
        return d

    def missingNumber(self, nums) -> int:
        self.nums = nums
        nums.sort()
        self.test = [x for x in range(0, len(self.nums) + 1)]
        self.result = Solution.array_diff(self.test,self.nums)
        
        if len(self.result) == 1 :
            return self.result[0]
        
        return self.result
        