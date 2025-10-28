#!/bin/bash
echo SECRET_VALUE="my_secret_token" >> $GITHUB_ENV
echo "::add-mask::$SECRET_VALUE"
echo $SECRET_VALUE

echo SECRET_VALUE2="my_secret_token2" >> $GITHUB_ENV
echo "::add-mask::$SECRET_VALUE2"
echo $SECRET_VALUE2

if [[ -z "${SECRET_VALUE}" ]]; then
  exit 1
else
  exit 2
fi
