import os
import sys
import re


pr_title = ["OVD", "FVT", "No-JIRA"]

if not re.match(r"(?=("+'|'.join(pr_title)+r"))", os.environ.get('PR_TITLE')):
  sys.exit("Pull Request Title MUST include OVD-####, FVT-#### or No-JIRA.") 
