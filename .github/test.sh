#!/bin/bash

RETRIEVED_SECRET="${{ needs.github-secrets.outputs.read-secret }}"
echo "::add-mask::$RETRIEVED_SECRET"
echo "secret=$RETRIEVED_SECRET" >> $GITHUB_OUTPUT
echo "We retrieved our masked secret: $RETRIEVED_SECRET"
