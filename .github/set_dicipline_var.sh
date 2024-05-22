#!/bin/bash

DISCIPLINES=( "circuit-marginality" "customer-platform" "design-for-debug" "functional" "power" "performance" )

GET_DICIPLINE_CHANGES=$(git diff --name-only origin/main..$GITHUB_SHA | xargs dirname | sort | uniq)

for i in "${DISCIPLINES[@]}"
do
    if echo "$i" | grep -q "$GET_DICIPLINE_CHANGES"; then
        # CURRENT_DISCIPLINE=$i
        echo "$CURRENT_DISCIPLINE"
    else
        echo "N/A"
    fi
done
