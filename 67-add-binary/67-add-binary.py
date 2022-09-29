class Solution:
    def addBinary(self, a: str, b: str) -> str:
        self.a = a
        self.b = b
        self.c = eval(f"{self.a} + {self.b}")
        self.c = str(self.c)
        self.c = list(self.c)

        for i in range(len(self.c)+1):
            reverseIndex = (len(self.c)-1) - i
            if(self.c[reverseIndex] == "2"):
                if(reverseIndex == 0 ):
                    self.c[reverseIndex] = "0"
                    self.c.insert(0 , "1")
                else:
                    self.c[reverseIndex] = "0"
                    self.c[reverseIndex - 1] = str(eval(f"{self.c[reverseIndex - 1]} + 1"))

            if(self.c[reverseIndex] == "3"):
                if(reverseIndex == 0 ):
                    self.c[reverseIndex] = "1"
                    self.c.insert(0 , "1")
                else:
                    self.c[reverseIndex] = "1"
                    self.c[reverseIndex - 1] = str(eval(f"{self.c[reverseIndex - 1]} + 1"))

        string = "".join(self.c)
        return string