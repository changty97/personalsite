#!/bin/bash

echo $secret
echo "RETRIEVED_SECRET=$( echo $secret | base64 --decode)" >> $GITHUB_OUTPUT
echo "We retrieved our masked secret: $RETRIEVED_SECRET"
