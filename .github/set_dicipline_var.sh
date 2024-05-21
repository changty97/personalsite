#!/bin/bash

DISCIPLINES=( "circuit-marginality" "customer-platform" "design-for-debug" "functional" "power" "performance" )

GET_DICIPLINE_CHANGES=$(git diff --name-only origin/main..$GITHUB_SHA | xargs dirname | sort | uniq)

for i in "${DISCIPLINES[@]}"
do
  if [ $i =~ .*"$GET_DICIPLINE_CHANGES".* ]; then
    echo "$i"
    CURRENT_DISCIPLINE = $i
  fi
done
