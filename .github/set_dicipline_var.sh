#!/bin/bash

DISCIPLINES=( "src" "circuit-marginality" "customer-platform" "design-for-debug" "functional" "power" "performance" )

GET_DICIPLINE_CHANGES=$(git diff --name-only origin/main..$GITHUB_SHA | xargs dirname | sort | uniq)
echo $GET_DICIPLINE_CHANGES

for i in "${DISCIPLINES[@]}"
do
  echo "$i"
  if [[ "$i" =~ .*"$GET_DICIPLINE_CHANGES".* ]]; then
    CURRENT_DISCIPLINE = $i
    echo "$CURRENT_DISCIPLINE"
  fi
done
