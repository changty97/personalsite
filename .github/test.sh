#!/bin/bash

echo "RETRIEVED_SECRET=$secret" >> $GITHUB_OUTPUT
echo "We retrieved our masked secret: $RETRIEVED_SECRET"
