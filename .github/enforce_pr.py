import os
import sys
import regex


pr_title = ["OVD", "FVT", "No-JIRA"]

if not regex.findall(r"(?=("+'|'.join(pr_title)+r"))", os.environ.get('PR_TITLE')):
  sys.exit("Pull Request Title MUST include OVD-####, FVT-#### or No-JIRA.") 
