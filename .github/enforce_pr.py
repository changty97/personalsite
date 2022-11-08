import os
# import regex


pr_title = ["OVD", "FVT", "No-JIRA"]

if regex.findall(r"(?=("+'|'.join(pr_title)+r"))", os.environ.get('PR_TITLE')):
  print(os.environ.get('PR_TITLE'))
else:
  sys.exit("Pull Request Title MUST include OVD-####, FVT-#### or No-JIRA.") 
