#!/bin/bash

DISCIPLINES=( "src" "circuit-marginality" "customer-platform" "design-for-debug" "functional" "power" "performance" )
GET_DICIPLINE_CHANGES=$(git diff --name-only origin/main..$GITHUB_SHA | xargs dirname | sort | uniq | tr -d '\n')
CURRENT_DISCIPLINE="N/A"

for i in "${DISCIPLINES[@]}"
do
    if echo "$i" | grep -q "$GET_DICIPLINE_CHANGES"; then
        echo $i
        $CURRENT_DISCIPLINE=$i
        break
    fi
done

echo "$CURRENT_DISCIPLINE"
