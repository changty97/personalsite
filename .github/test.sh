#!/bin/bash

echo export "RETRIEVED_SECRET=$( echo ${{ needs.github-secrets.outputs.read-secret }} | base64 --decode)"
# echo "RETRIEVED_SECRET=$( echo $secret | base64 --decode)" >> $GITHUB_OUTPUT
# echo "We retrieved our masked secret: $RETRIEVED_SECRET"
