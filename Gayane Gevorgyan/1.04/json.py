#!/usr/bin/python3.5

import re
import json

with open('file', 'r') as dict_or_not:
    obj=dict_or_not.read()

if re.findall(r"\{'(.*?)': '(.*?)',?\s*\}", obj):
    print("Fine!!!\n",str(obj))
else:
    print("Bad work!!!")    
    
