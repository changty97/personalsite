import os
import sys
import regex


pr_title = ["OVD", "FVT", "No-JIRA"]

print(regex.findall(r"(?=("+'|'.join(pr_title)+r"))", os.environ.get('PR_TITLE')))

if not regex.findall(r"(?=("+'|'.join(pr_title)+r"))", os.environ.get('PR_TITLE')):
#   print(os.environ.get('PR_TITLE'))
# else:
  sys.exit("Pull Request Title MUST include OVD-####, FVT-#### or No-JIRA.") 
