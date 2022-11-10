import os
import sys
import re

JIRA = ["OVD", "FVT", "NO-JIRA"]

# Check for any of the matching JIRA tags above in the PR Title environment variable
# Regex List will be (OVD-(\d+): )|(FVT-(\d+): )|(NO-JIRA: )
if not re.match(r"(" + r"-(\d+): )|(".join(JIRA) + ": )", os.environ.get('PR_TITLE')):
    sys.exit(
        "Pull Request Title MUST contain OVD or FVT with a dash and the Jira number, "
        "or specify No-JIRA, then a colon and space."
    )
