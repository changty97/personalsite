#!/bin/bash
echo SECRET_VALUE="my_secret_token" >> $GITHUB_ENV
exit 1
echo "::add-mask::$SECRET_VALUE"
echo $SECRET_VALUE
