#!/bin/bash

DISCIPLINES=( "src" "circuit-marginality" "customer-platform" "design-for-debug" "functional" "power" "performance" )
GET_DICIPLINE_CHANGES=$(git diff --name-only origin/main..$GITHUB_SHA | xargs dirname | sort | uniq | tr '\n' ' ' )
CURRENT_DISCIPLINE="N/A"

for i in "${DISCIPLINES[@]}"
do
    if echo "$GET_DICIPLINE_CHANGES" | grep -q "$i"; then
        $CURRENT_DISCIPLINE=$i
        break
    fi
done

echo "$CURRENT_DISCIPLINE"
